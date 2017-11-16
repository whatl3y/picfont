import assert from 'assert'
import PicturesToFont from './PicturesToFont'

const testImagePath = './tests/img.jpg'

describe('PicturesToFont', function() {
  describe('default export function', function() {
    it('creates new fonts from an imput image', async function() {
      const newFontObj = await PicturesToFont(testImagePath)
      assert.equal(true, newFontObj.hasOwnProperty('svg'))
      assert.equal(true, newFontObj.hasOwnProperty('woff'))
      assert.equal(true, newFontObj.hasOwnProperty('woff2'))
      assert.equal(true, newFontObj.hasOwnProperty('ttf'))
    })
  })
})
