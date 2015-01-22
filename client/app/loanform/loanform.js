'use strict';

angular.module('myYeomanProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/loanform', {
        templateUrl: 'app/loanform/loanform.html',
        controller: 'LoanformCtrl'
      });
  });
