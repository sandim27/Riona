//Includes common styles
import 'font-awesome/css/font-awesome.min.css';
import './styles/animate.css';
import './styles/form-elements.css';
import './styles/magnific-popup.css';
import './styles/media-queries.css';
import './styles/base.css';

//Includes all components
import * as modules from './components';

//Includes bootstrap components
import 'bootstrap-webpack!../node_modules/bootstrap-webpack/bootstrap.config.js';

for (var key in modules) {
  modules[key]();
};
