import {browserslistToTargets} from 'lightningcss';
import handlebars from 'vite-plugin-handlebars';

export default {
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  },
  build: {
    cssMinify: 'lightningcss'
  },
  plugins: [handlebars({
    context: {
        title: 'Hello, world',
    }
  })],
};