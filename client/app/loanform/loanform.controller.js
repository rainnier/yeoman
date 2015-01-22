'use strict';

angular.module('myYeomanProjectApp')
  .controller('LoanformCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.renewal = 'renewal';
    $scope.loantype = 'mpl';
    $scope.date = new Date();
  });
