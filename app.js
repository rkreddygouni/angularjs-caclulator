(function(){
    'use strict';

    angular.module('ng-calc', ['ngSanitize'])
        .controller('CalculatorController', function($scope){
			$scope.result = 0;
			$scope.presv = '';
			$scope.prevv = '';
            $scope.preva = [];
			$scope.presa = [];
			$scope.opt ='';
			$scope.flag = false;
			$scope.cClick = function($n){
					console.log($n);
					if($scope.flag){
						angular.copy($scope.presa,$scope.preva);
						$scope.prevv = $scope.preva.join("");
						$scope.prevv.$apply;
						$scope.presa.length =0;
						$scope.flag =false;
					}
					$scope.presa.push($n);
					console.log($scope.presa);
					console.log($scope.preva);
					$scope.presv = $scope.presa.join("");
					$scope.result = $scope.presv;
					$scope.result.$apply;
			};
			
			$scope.optf = function($opt){
				$scope.opt = $opt;
				$scope.opt.apply;
				$scope.flag = true;
			}
			$scope.rest = function(){
				
				switch($scope.opt){
					case '+':
						$scope.result = parseInt($scope.presv)+parseInt($scope.prevv);
						$scope.result.$apply;
						break;
					case '-':
						$scope.result = parseInt($scope.prevv)-parseInt($scope.presv);
						$scope.result.$apply;
						break;
					case '*':
					$scope.result = parseInt($scope.presv)*parseInt($scope.prevv);
						$scope.result.$apply;
						break;
					case '/':
					$scope.result = parseInt($scope.presv)/parseInt($scope.prevv);
						$scope.result.$apply;
						break;
					default:;
			}
			};
			
           
        })
       
})();
