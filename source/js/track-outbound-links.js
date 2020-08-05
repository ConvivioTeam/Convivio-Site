// Track external file downloads, file downloads and external links in
// Google Analytics.
//
// Based on:
// http://www.axllent.org/docs/view/track-outbound-links-with-analytics-js/
//
// Blog post:
// https://labs.kollegorna.se/blog/2015/04/google-analytics-track-external-links-downloads/

function _gaLt(event){
  var el = event.srcElement || event.target;

  // Loop up the tree through parent elements if clicked element is not a link
  // (eg: an image inside a link).
  while (el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href)) {
    el = el.parentNode;
  }

  if (el && el.href) {
    var filetypes = /\.(zip|rar|tar|gz|exe|dmg|pdf|doc.*|xls.*|ppt.*|pps.*|vcf|txt|csv|rtf|odt|pages|mp3|wav|wma|mov|avi|wmv|mpg|mp4|flv|png|jpg|jpeg|gif|tif|tiff|bmp|svg|eps|ai|psd)$/i;
    var referrer = document.location.pathname + document.location.search;
    var open_link = false;
    var blog_url = 'blog.weareconvivio.com'

    if (el.href.match(filetypes)) { // File download
      if (el.href.indexOf(location.host) == -1) { // External file
        ga('send', 'event', 'Download external file', el.href, referrer);
      }
      else { // Internal file
        ga('send', 'event', 'Download file', el.pathname, referrer);
      }
    }
    else if (
      // Does not contain the domain
      (el.href.indexOf(location.host) == -1)
      // Does not start with /
      && (el.href.indexOf('/') == 0)) {
      ga('send', 'event', 'External link', el.href, referrer);
    }
  }
}

// Attach the event to all clicks in the document after page has loaded.
if (window.addEventListener) {
  window.addEventListener('load', function() {
    document.body.addEventListener('click', _gaLt, false);
  }, false);
}
else {
  window.attachEvent && window.attachEvent('onload', function() {
    document.body.attachEvent('onclick', _gaLt);
  });
}
