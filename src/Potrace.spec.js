import assert from 'assert'
import fs from 'fs'
import util from 'util'
import Potrace from './Potrace'

const unlink = util.promisify(fs.unlink)
const testImagePath = './tests/img.png'
let newFiles = []

const deleteFileBmp = './tests/DELETE_THIS.bmp'
const deleteFileSvg = './tests/DELETE_THIS.bmp.svg'
newFiles.push(deleteFileBmp, deleteFileSvg)

describe('Potrace', function() {
  after('clean up created files', async function() {
    await Promise.all(newFiles.map(async img => await unlink(img)))
  })

  describe('#getFileName', function() {
    it('creates a new filename with timestamp appended before the extension', function() {
      const origFilename  = 'test.bmp'
      const newFilename   = Potrace.getFileName(origFilename)
      assert.equal(true, /^test_\d+\.bmp$/.test(newFilename))
    })
  })

  describe('#makeBitmapFromOtherType', function() {
    it('should create an output image and store it where the source is', async function() {
      const newFile = await Potrace.makeBitmapFromOtherType(testImagePath)
      const isTrue = await Potrace.doesPathExist(newFile)

      assert.equal(true, isTrue)
      assert.equal(typeof newFile, 'string')
      assert.equal(true, /.*\.bmp/.test(newFile))
      newFiles.push(newFile)
    })
  })

  describe('#mkbitmap', async function() {
    it('should create an optimized bitmap from an already created bitmap', async function() {
      const newFile = await Potrace.mkbitmap(newFiles[2])
      const isTrue = await Potrace.doesPathExist(newFile)

      assert.equal(true, isTrue)
      assert.equal(typeof newFile, 'string')
      assert.equal(true, /.*\.bmp/.test(newFile))
      newFiles.push(newFile)
    })

    it('should fail to create optimized bitmap since image is not bitmap', async function() {
      try {
        await Potrace.mkbitmap(testImagePath, 2, deleteFileBmp)
        assert.fail()
      } catch(err) {}
    })
  })

  describe('#potrace', async function() {
    it('should create a vectorized image (svg) both the unoptimized and optimized images from above', async function() {
      const svg1 = await Potrace.potrace(newFiles[2])
      const svg2 = await Potrace.potrace(newFiles[3])
      const isTrue1 = await Potrace.doesPathExist(svg1)
      const isTrue2 = await Potrace.doesPathExist(svg2)

      assert.equal(true, isTrue1)
      assert.equal(true, isTrue2)
      assert.equal(typeof svg1, 'string')
      assert.equal(typeof svg2, 'string')
      assert.equal(true, /.*\.svg/.test(svg1))
      assert.equal(true, /.*\.svg/.test(svg2))
      newFiles.push(svg1, svg2)
    })

    it('should fail to create vector since image is not bitmap', async function() {
      try {
        await Potrace.potrace(testImagePath, deleteFileSvg)
        assert.fail()
      } catch(err) {}
    })
  })
})
