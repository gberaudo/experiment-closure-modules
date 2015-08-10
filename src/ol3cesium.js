goog.provide('olcs.OLImageryProvider');



/**
 * @constructor
 * @extends {Cesium.ImageryProvider}
 */
olcs.OLImageryProvider = function() {
  console.log('olcs.OLImageryProvider Before base');
  goog.base(this);
  console.log('olcs.OLImageryProvider After base');
};

goog.inherits(olcs.OLImageryProvider, Cesium.ImageryProvider);


olcs.OLImageryProvider.prototype.doSomething = function() {
  console.log('olcs.OLImageryProvider.prototype.doSomething');
};
