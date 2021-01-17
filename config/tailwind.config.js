/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  corePlugins: {
    // Disable transform property due to invalid w3c validator:
    // Error: CSS: “transform”: too few values for the property “transform”
    transform: false,
    translate: false,
  },
  // TODO: Remove future when tailwindcss 2.X is used
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  },
  theme: {
    fontFamily: {
      display: ['Roboto', 'Open Sans', 'sans-serif'],
    },
  },
  variants: {
    backgroundColor: ['hover', 'odd'],
    margin: ['responsive', 'last', 'first'],
  },
};
