/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
        {
            'name': 'Nexus S1111111111',
            'snippet': 'Fast just got faster with Nexus S.'
        },
        {
            'name': 'Moto1111rola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.'
        },
        {
            'name': 'MOTOR1111111OLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.'
        }
    ];
});

function test1($scope) {
    $scope.books = [
        {
            'name': 'a',
            'price': '10',
            'age': 55
        },
        {
            'name': 'c',
            'price': '5',
            'age': 23
        }
    ];
    $scope.orderProp = 'age';
}

var test3=angular.module('app_test3',[]);
test3.controller('test3',function($scope,$timeout,$http ){
    $scope.header="this is a header";
    $scope.names=["tom","lucy","anni"];
    $timeout(function () {
        $scope.header="oh!this is not a header."
    },2000);
    $http.get("http://localhost:63342/test/Customers_JSON.php").success(function(data){
        $scope.datas = data.records;
    });
});

test3.directive('ff',function(){
    return {
        restrict:'E',
        template:'<div>UOU<span>呵呵哒</span>' +
        '<select><option>1</option><option>2</option></select></div>',
        replace:true
    };
});


