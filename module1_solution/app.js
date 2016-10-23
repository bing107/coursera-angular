( function () {
  'use strict';

  angular.module( 'LunchCheck', [] )
  .controller( 'LunchCheckController', LunchCheckController );

  LunchCheckController.$inject = [ '$scope' ];

  function LunchCheckController( $scope ) {


    $scope.checkFood = function () {
      if ( ! $scope.foodList ) {
        $scope.error = true;
        $scope.verdict = "Please enter data first!";
      } else {
        $scope.error = false;
        var foodArray = $scope.foodList.split(',');
        var filteredList = foodArray.filter( function ( item ) {
          return !!item;
        } );
        if ( filteredList.length < 4 ) {
          $scope.verdict = "Enjoy!";
        } else {
          $scope.verdict = "Too much!";
        }
      }
    };
  }

} )();
