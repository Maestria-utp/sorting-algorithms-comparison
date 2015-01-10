'use strict';

(function( resultsManager, undefined ) {

  resultsManager.results = [];

  resultsManager.addResult = function(result) {
    resultsManager.results.push(result);
  };

  resultsManager.removeResultAt = function(index) {
    resultsManager.splice(index, 1);
  };

}( window.resultsManager = window.resultsManager || {} ));
