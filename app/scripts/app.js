'use strict';

// setup of gogle charts
google.load('visualization', '1.0', {'packages':['corechart']});
window.loadingScreen = window.pleaseWait({
  logo: "images/logo.png",
  backgroundColor: '#5bc0de',
  loadingHtml: '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div><p class="white"><b>Cargando...</b> Por favor espere.</p>'
});
google.setOnLoadCallback(function() {
  window.loadingScreen.finish();
});

/**
 * @ngdoc overview
 * @name sortinAlgorithmsComparisonApp
 * @description
 * # sortinAlgorithmsComparisonApp
 *
 * Main module of the application.
 */
var app = angular
  .module('sortinAlgorithmsComparisonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.directive('onReadFile', function ($parse) {
   return {
      restrict: 'A',
      scope: false,
      link: function(scope, element, attrs) {
         var fn = $parse(attrs.onReadFile);

         element.on('change', function(onChangeEvent) {
            var reader = new FileReader();

            reader.onload = function(onLoadEvent) {
               scope.$apply(function() {
                  fn(scope, {$fileContent:onLoadEvent.target.result});
               });
            };

            reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
         });
      }
   };
});
