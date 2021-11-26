require('./static/assets/css/preloader.css');

export const onInitialClientRender = () => {
  let checkLoad = 0;
  const hide = () => {
    checkLoad += 1;
    if (checkLoad === 2) {
      document.body.classList.add('loaded_hiding');
      document.body.classList.remove('not-loaded');
      setTimeout(() => {
        document.body.classList.remove('loaded_hiding');
        document.getElementById('___loader').remove();
      }, 500);
    }
  };
  const checkFontName = arr =>
    arr.find(
      font => font.family.replace(/[^a-zA-Z]+/g, '') === 'HelveticaNeueCyr', // some browsers pass values /"HelveticaNeueCyr/" then we delete unnecessary
    );
  document.fonts.onloadingdone = function(fontFaceSetEvent) {
    if (checkFontName(fontFaceSetEvent.fontfaces)) {
      hide();
    }
  };
  document.fonts.ready.then(function() {
    hide();
  });
};
