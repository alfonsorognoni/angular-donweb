'use strict';

describe('Controller: AyudaCtrl', function () {

  // load the controller's module
  beforeEach(module('clase1App'));

  var AyudaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AyudaCtrl = $controller('AyudaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AyudaCtrl.awesomeThings.length).toBe(3);
  });
});
