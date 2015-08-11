#!/bin/sh

echo Pre
java -jar node_modules/google-closure-compiler/compiler.jar --module ol3:1: --js src/ol3.js --module app3d:2:ol3 --js src/ol3cesium.js --js src/app3d.js --externs src/CesiumExterns.js --formatting PRETTY_PRINT --module_output_path_prefix pre
cat src/cesium.js preapp3d.js > modsolcs2.js

echo Final
java -jar node_modules/google-closure-compiler/compiler.jar --js preol3.js --js src/app.js --formatting PRETTY_PRINT --js_output_file modsapp.js  --externs externs/ol.js --externs externs/ol3-cesium.js --externs externs/app3d.js
