'use strict';

/**
 * @ngdoc directive
 * @name clase1App.directive:wordfinder
 * @description
 * # wordfinder
 */
angular.module('clase1App')
  .directive('wordfinder', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the wordfinder directive');
      }
    };
  });
