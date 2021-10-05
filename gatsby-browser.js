// custom typefaces
require('./static/assets/css/preloader.css');
const loader = require('./src/utils/loader');

exports.onClientEntry = () => {
  loader.showLoader();
};
