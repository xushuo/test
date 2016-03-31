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



