/// <reference path="typings/angularjs/angular.d.ts" />
var HelloSPONGEAdelaideApp;
(function (HelloSPONGEAdelaideApp) {
    HelloSPONGEAdelaideApp.app = angular.module('HelloSPONGEAdelaideApp', [
        'HelloSPONGEAdelaideApp.controllers',
        'HelloSPONGEAdelaideApp.services',
        'ngRoute',
        'ui.bootstrap',
        'ui.bootstrap.tooltip'
    ]);
    HelloSPONGEAdelaideApp.app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when("/", { templateUrl: "src/views/Hello.html", controller: "HelloController", controllerAs: "helloController" }).
                when("/hello/:name", { templateUrl: "src/views/Hello.html", controller: "HelloController", controllerAs: "helloController" }).
                otherwise({ redirectTo: '/' });
        }]);
    angular.module('HelloSPONGEAdelaideApp.controllers', []);
    angular.module('HelloSPONGEAdelaideApp.services', []);
})(HelloSPONGEAdelaideApp || (HelloSPONGEAdelaideApp = {}));
var HelloSPONGEAdelaideApp;
(function (HelloSPONGEAdelaideApp) {
    /**
     * The controller for the Hello form. Initialises form with data, and handle events.
     */
    var HelloController = (function () {
        function HelloController($scope, TestService, $routeParams) {
            this.$scope = $scope;
            this.TestService = TestService;
            this.$routeParams = $routeParams;
            if (this.$routeParams.name != null) {
                this.$scope.name = this.$routeParams.name;
            }
            else {
                this.$scope.name = "SPONGE Adelaide!";
            }
        }
        return HelloController;
    }());
    HelloSPONGEAdelaideApp.HelloController = HelloController;
    angular.module('HelloSPONGEAdelaideApp.controllers').controller('HelloController', HelloController);
})(HelloSPONGEAdelaideApp || (HelloSPONGEAdelaideApp = {}));
var HelloSPONGEAdelaideApp;
(function (HelloSPONGEAdelaideApp) {
    /**
     * Service to interact with the Service XYZ
     */
    var TestService = (function () {
        /**
         * Initialise the service and retrieve references from AngularJS dependency injection.
         * @constructor
         * @param $http The AngularJS Http Service object to invoke HTTP requests.
         */
        function TestService($http) {
            this.$http = $http;
            this.baseUrl = "/api/";
        }
        /**
         * @Returns the list of test items.
         */
        TestService.prototype.get = function () {
            return this.$http.get(this.baseUrl + "test/");
        };
        return TestService;
    }());
    HelloSPONGEAdelaideApp.TestService = TestService;
    angular.module('HelloSPONGEAdelaideApp.services').service('TestService', TestService);
})(HelloSPONGEAdelaideApp || (HelloSPONGEAdelaideApp = {}));
//# sourceMappingURL=HelloSPONGEAdelaide.js.map