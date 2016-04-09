var app = angular.module('clinicApp')
var clinicWS = "http://localhost:8080/SSK/";

app.controller('visitsCtrl', ['$scope', '$http', 'session', 'errorService',
    function($scope, $http, session, errorService) {

        $scope.schowVisits = function() {
            $scope.test="dupa";
            $http.get(clinicWS + 'user/getVisits/' + session.user.id).then(onGetVisit, onGetVisitError);
        }

        var onGetVisit = function(response) {
            $scope.visits = response.data;
            console.log($scope.visits);
        }

        var onGetVisitError = function() {
            errorService.logError("getting visits error");
        }

    }]);    
