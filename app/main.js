/**
 * 
 */

require.config({
    baseUlr: "app",
    
    paths: {
        "underscore":           "../vendor/underscore/underscore",
        "template":             "../vendor/lodash-template-loader/loader",
        "jquery":               "../vendor/jquery/dist/jquery",
        "backbone":             "../vendor/backbone/backbone",
        "backbone.marionette":  "../vendor/marionette/lib/backbone.marionette",
        "bootstrap":            "../vendor/bootstrap/dist/js/bootstrap"
    },
    
    map: {
        '*': {
            'lodash': 'underscore'
        }
    },
    
    config: {
        app: {
            'locale': 'en',
            'root': "/"
        }
    },
    
    shim: {
        'bootstrap': ['jquery']
    }
});


// kick off the application
require(['app'], function(app) {
    'use strict';
    
    app.start();
});