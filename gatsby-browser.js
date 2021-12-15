require('./static/assets/css/preloader.css');

export const onInitialClientRender = () => {
  setTimeout(() => {
    document.body.classList.add('loaded_hiding');
    document.body.classList.remove('not-loaded');
  }, 700);
  setTimeout(() => {
    document.body.classList.remove('loaded_hiding');
    document.getElementById('___loader').remove();
  }, 1000);
};
