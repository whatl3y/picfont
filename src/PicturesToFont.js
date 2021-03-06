import path from 'path'
import fs from 'fs'
import util from 'util'
import FontGenerator from './FontGenerator'
import Potrace from './Potrace'

const writeFile = util.promisify(fs.writeFile)

export default async function PicturesToFont(images, fontOptions={}) {
  const vectorImgs  = await createSvgImages(images)
  const fontObject  = await FontGenerator.generate(vectorImgs, fontOptions)

  await Potrace.deleteTmpDir()

  return fontObject
}

export async function createSvgImages(images) {
  const bitmapImages  = await getInitBitmaps(images)
  const optimizedBmps = await getOptimizedBitmaps(bitmapImages)
  const vectorImgs    = await getVectorImages(optimizedBmps)
  return vectorImgs
}

export async function getInitBitmaps(images) {
  images = (images instanceof Array) ? images : [ images ]
  const tmpDir = await Potrace.tmpDir()
  return await Promise.all(
    images.map(async img => {
      if (img instanceof Buffer) {
        const fileName = path.join(tmpDir, Potrace.getFileName('temp.img'))
        await writeFile(fileName, img)
        return await Potrace.makeBitmapFromOtherType(fileName)
      }

      if (/.*\.bmp$/.test(img))
        return img

      return await Potrace.makeBitmapFromOtherType(img, path.join(tmpDir, `${path.basename(img)}.bmp`))
    })
  )
}

export async function getOptimizedBitmaps(bitmapImages) {
  return await Promise.all( bitmapImages.map(async img => await Potrace.mkbitmap(img)) )
}

export async function getVectorImages(bitmapImages) {
  return await Promise.all( bitmapImages.map(async bmp => await Potrace.potrace(bmp)) )
}
