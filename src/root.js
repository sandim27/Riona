//Includes bootstrap components
import 'bootstrap-webpack!../node_modules/bootstrap-webpack/bootstrap.config.js';

//Includes all components
import getLoader from './Components/Loader';
import getNav from './Components/Nav';
import getTopContent from './Components/TopContent';
import getListDo from './Components/WhatWeDo';
import getProcess from './Components/OurProcess';
import getMotto from './Components/OurMotto';
import getClients from './Components/Clients';
import getCounters from './Components/Counters';
import getPortfolio from './Components/Portfolio';
import getTestimonials from './Components/Testimonials';
import getTeam from './Components/Team';
import getContact from './Components/ContactUs';
import getScroll from './Components/ScrollToTop';
import getFooter from './Components/Footer';

//Includes common styles
import 'font-awesome/css/font-awesome.min.css';
import './styles/base.css';
import './styles/animate.css';
import './styles/form-elements.css';
import './styles/magnific-popup.css';
import './styles/media-queries.css';

getFooter();
getScroll();
getContact();
getTeam();
getTestimonials();
getPortfolio();
getCounters();
getClients();
getMotto();
getProcess();
getListDo();
getTopContent();
getNav();
getLoader();
