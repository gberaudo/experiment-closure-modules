var app = {}

var map = new ol.Map();

var viewer;

setTimeout(function() {
    console.log('Loading 3D');
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "modsolcs2.js";
    console.log('loading');

    s.onload = function() {
      console.log('loaded');

      viewer = new app.Viewer3D(map);
      viewer.do3D();
    };

    document.body.appendChild(s);
}, 2000);
