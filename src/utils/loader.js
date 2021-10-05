const showLoader = () => {
  document.body.innerHTML +=
    '<div id="loadingElement" class="loading">Loading</div>';
};
const hideLoader = () => {
  let checkLoad = 0;
  const hide = () => {
    checkLoad += 1;
    if (checkLoad === 2) {
      setTimeout(() => {
        document.getElementById('loadingElement').remove();
        document.getElementById('___gatsby').hidden = false;
      }, 300);
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

module.exports.showLoader = showLoader;
module.exports.hideLoader = hideLoader;
