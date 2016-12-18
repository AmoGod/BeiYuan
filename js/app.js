/**
 * Created by 火星时代 on 2016/12/14.
 */

//声明一个主模块,引入依赖
var myApp = angular.module('myApp',['ngRoute']);
//各页面之间的路由
myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{templateUrl:'views/beiYuan.html'})
        .when('/entertainment',{templateUrl:'views/entertainment/entertainment.html'})
        .when('/therma',{templateUrl:'views/entertainment/therma.html',controller:'myCtrl'})
        .when('/fitness',{templateUrl:'views/entertainment/fitness.html',controller:'myCtrl'})
        .when('/banquet',{templateUrl:'views/entertainment/banquet.html'})
        .when('/exhibition',{templateUrl:'views/exhibition/exhibition.html'})
        .when('/pgm',{templateUrl:'views/exhibition/PGM.html'})
        .when('/report',{templateUrl:'views/exhibition/report.html'})
        .when('/restaurant',{templateUrl:'views/restaurant/restaurant.html'})
        .when('/allSeasons',{templateUrl:'views/restaurant/allSeasons.html'})
        .when('/buffet',{templateUrl:'views/restaurant/buffet.html'})
        .when('/ConferenceBuffet',{templateUrl:'views/restaurant/ConferenceBuffet.html'})
        .when('/TeaBreak',{templateUrl:'views/restaurant/TeaBreak.html'})
        .when('/Lobbybar',{templateUrl:'views/restaurant/Lobbybar.html'})
        .when('/graceNote',{templateUrl:'views/restaurant/graceNote.html'})
        .when('/GuestRoom',{templateUrl:'views/GuestRoom/GuestRoom.html'})
        .when('/guestRoom1',{templateUrl:'views/GuestRoom/guestRoom1.html'})
        .when('/orderForm',{templateUrl:'views/GuestRoom/orderForm.html'})
        .when('/wedding',{templateUrl:'views/wedding/wedding.html'})
        .when('/office',{templateUrl:'views/office/office.html'})
        .otherwise({templateUrl:'views/beiYuan.html'});
});

//控制器
myApp.controller('myCtrl', function($scope) {
    //菜单按钮调出
    $scope.menu=function(){
        $('.menu').click(function(){
           $('.sideMenu').addClass('show').removeClass('hide');
        });
        $('.sideMenu a').click(function(){
            $('.sideMenu').addClass('hide').removeClass('show');
        })
    };

    //轮播图
    ($scope.banner=function(){
        $('.banner').find('a').tap(function(){
            console.log(1);
        });

    })()

});





