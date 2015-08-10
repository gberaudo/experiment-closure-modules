#!/bin/sh
java -jar node_modules/google-closure-compiler/compiler.jar --module olcs:2: --js src/ol3cesium.js --js src/app3d.js --module app:1:olcs: --js src/app.js --externs src/CesiumExterns.js --formatting PRETTY_PRINT --module_output_path_prefix mods
cat src/cesium.js modsolcs.js > modsolcs2.js
