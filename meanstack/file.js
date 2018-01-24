{
    "name": "ems-mean1",
    "version": "1.0.0",
    "description": "simple mean apps",
    "main": "server.js",
    "scripts": {
      "testcases": "mocha./test/**/*.test.js",
      "test:coverage": "nyc --reporter=html --reporter=text mocha ./test/*.test.js",
      "start": "node server.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "body-parser": "^1.17.1",
      "cors": "^2.8.3",
      "dotenv": "^4.0.0",
      "express": "^4.15.2",
      "mongoose": "^4.10.8"
    },
    "devDependencies": {
      "chai": "^4.1.2",
      "mocha": "^5.0.0",
      "request": "^2.83.0",
      "nock": "^9.1.6",
      "nyc": "^11.4.1"
    }
  }
  