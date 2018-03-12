/*
* @Author: Administrator
* @Date:   2018-01-20 23:38:22
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-12 10:46:37
*/
	var module=angular.module('moviecat.Ctrl',[
		'ngRoute'
		] 
	);

	module.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/:cate',{
			templateUrl:'views/inhot.html',
			controller:'hotController'
		});
	}]);


	 

	module.controller('hotController',[
		'$scope',
		'$http',
		'$route',
		'$routeParams',
		function($scope,$http,$route,$routeParams){
		// var nav=$routeParams.cate;
		// console.log(nav);
		
		$scope.loading=true;
		
		$http({
			method:'GET',
			url:'datas/'+$routeParams.cate+'.json'
		}).success(function(movies){
			$scope.title=movies.title;
			$scope.subjects=movies.subjects;
			$scope.totalCount=movies.total;
			$scope.loading=false;
			// $scope.$apply();
		},function(err){

		});

	}]);

	
