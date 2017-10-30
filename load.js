function tihh_backRedirect(url) {

  history.pushState({}, "", location.href);
  history.pushState({}, "", location.href);

  window.onpopstate = function () {
    setTimeout(function () {
      location.href = url;
    }, 1);
  };

}