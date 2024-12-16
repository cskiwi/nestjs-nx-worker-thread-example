// it will import the compiled js file from dist directory

import path = require('path');

const libraryDistFolder = path.resolve(process.cwd(), 'dist/libs/worker/src/lib/worker/worker.js');

export const workerThreadFilePath = libraryDistFolder
