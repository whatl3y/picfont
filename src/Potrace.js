import fs from 'fs'
import child_process from 'child_process'
import util from 'util'
import Rimraf from 'rimraf'
import Jimp from 'jimp'

const access  = util.promisify(fs.access)
const mkdir   = util.promisify(fs.mkdir)
const rimraf  = util.promisify(Rimraf)
const exec    = util.promisify(child_process.exec)

export default {
  // whether we created a temporary directory
  tmpdir: 'PICFONT_TMP',
  tmpdirCreated: false,

  // see: http://potrace.sourceforge.net/README
  async potrace(sourceBitmap, outputSvg=null, outputType='svg') {
    outputSvg = outputSvg || `${sourceBitmap.replace('.', '_')}.svg`
    const returnedBuffers = await exec(`potrace -b ${outputType} -o ${outputSvg} ${sourceBitmap}`)
    if (returnedBuffers.stderr)
      throw returnedBuffers.stderr
    return outputSvg
  },

  // Takes an input bitmap and optimizes it for vectorization
  // by potrace. This is technically an optional step, but recommended
  // in most cases
  // see: http://potrace.sourceforge.net/mkbitmap.html
  async mkbitmap(sourceBitmap, pixelRadius=2, outputBitmap=null) {
    outputBitmap = outputBitmap || this.getFileName(sourceBitmap)
    const returnedBuffers = await exec(`mkbitmap -f ${pixelRadius} -s 2 -t 0.48 -o ${outputBitmap} ${sourceBitmap}`)
    if (returnedBuffers.stderr)
      throw returnedBuffers.stderr
    return outputBitmap
  },

  async makeBitmapFromOtherType(sourceImage, outputImage=null) {
    outputImage = outputImage || this.getFileName(`${sourceImage}.bmp`)
    const jimpImage = await Jimp.read(sourceImage)
    await jimpImage.write(outputImage)
    return outputImage
  },

  async tmpDir() {
    const defaultTmp = process.env.TMPDIR || process.env.TMP
    if (defaultTmp)
      return defaultTmp

    if (!(await this.doesPathExist(this.tmpdir)))
      await mkdir(this.tmpdir)

    this.tmpdirCreated = true
    return this.tmpdir
  },

  async deleteTmpDir() {
    if (this.tmpdirCreated)
      await rimraf(this.tmpdir)
  },

  async doesPathExist(filePath) {
    try {
      await access(filePath)
      return true
    } catch(e) {
      return false
    }
  },

  getFileName(fileName, extraText=Date.now()) {
    const lastPeriod = fileName.lastIndexOf(".")
    return `${fileName.substring(0, lastPeriod).replace('.', '_')}_${extraText}${fileName.substring(lastPeriod)}`
  }
}
