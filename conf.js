// conf.js
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    allScriptsTimeout: 60000,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'firefox',
      'moz:firefoxOptions': {
            args: ['--verbose'],
            binary: 'C:/Program Files/Mozilla Firefox/firefox.exe' //Provide binary location to avoid potential binary not found errors 
       //Need to start cmd via admin mode to avoid permission error
        }
   },  
    specs: ['spec.js'],
    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/Reports/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
              baseDirectory: 'Reports/screenshots'
           }).getJasmine2Reporter());
        }
  }