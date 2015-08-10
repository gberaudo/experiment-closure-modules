goog.require('olcs.OLImageryProvider');
goog.provide('app.Viewer3D');

var my3dProvider = new olcs.OLImageryProvider();
my3dProvider.doSomething();



/**
 * @constructor
 */
app.Viewer3D = function() {
};


/**
 */
app.Viewer3D.prototype.do3D = function() {
  console.log('do3d');
};
