goog.provide('olcs.OLImageryProvider');



/**
 * @constructor
 * @extends {Cesium.ImageryProvider}
 */
olcs.OLImageryProvider = function() {
  goog.base(this);
};

goog.inherits(olcs.OLImageryProvider, Cesium.ImageryProvider);


olcs.OLImageryProvider.prototype.doSomething = function() {
  console.log('olcs.OLImageryProvider.prototype.doSomething');
};
