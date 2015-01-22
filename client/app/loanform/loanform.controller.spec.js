'use strict';

describe('Controller: LoanformCtrl', function () {

  // load the controller's module
  beforeEach(module('myYeomanProjectApp'));

  var LoanformCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoanformCtrl = $controller('LoanformCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
