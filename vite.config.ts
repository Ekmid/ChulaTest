import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
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
      title: 'Tele2',
      description: `Tele2 – телекоммуникационная компания международного уровня. 
      Предоставляет абонентам услуги сотовой связи. Основано предприятие в Швеции. 
      Стокгольм – город, где располагается центральный офис. В России функционирует с 2001 года. 
      За это период данная связь получила широкое распространение среди абонентов.`,
    },
    partialDirectory: resolve(__dirname, 'src/partials'),
  })],
});
