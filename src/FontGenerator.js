import util from 'util'
import WebfontsGenerator from 'webfonts-generator'

const webfontsGenerator = util.promisify(WebfontsGenerator)

export default {
  // if options.writeFiles is falsy (which is the default), the returned
  // object has the following keys unless font types are removed or added
  // generateCss is a function that creates CSS
  // [ 'svg', 'ttf', 'eot', 'woff', 'woff2', 'generateCss' ]
  async generate(svgFiles, options={}) {
    svgFiles = (svgFiles instanceof Array) ? svgFiles : [ svgFiles ]

    const destination = options.dest || 'files/'
    const writeFiles  = options.writeFiles || false

    options = Object.assign(options, { dest: destination }, { files: svgFiles }, { writeFiles })
    return await webfontsGenerator(options)
  }
}
