#!/bin/sh
java -jar node_modules/google-closure-compiler/compiler.jar --js ol3cesium.js --js app.js --js app3d.js --externs CesiumExterns.js --js_output_file out.js --formatting PRETTY_PRINT
