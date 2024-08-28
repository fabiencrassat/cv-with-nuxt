/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

export default {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  corePlugins: {
    // Disable transform property due to invalid w3c validator:
    // Error: CSS: “transform”: too few values for the property “transform”
    transform: false,
    translate: false,
  },
  // INFO: Remove future when tailwindcss 2.X is used
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
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
