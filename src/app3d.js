goog.provide('app.Viewer3D');

goog.require('ol.Map');
goog.require('olcs.OLImageryProvider');




/**
 * @constructor
 * @param {ol.Map} map
 */
app.Viewer3D = function(map) {
  console.log('Creating viewer 3d');
  var my3dProvider = new olcs.OLImageryProvider();
  my3dProvider.doSomething();
};


/**
 */
app.Viewer3D.prototype.do3D = function() {
  console.log('do3d');
};
