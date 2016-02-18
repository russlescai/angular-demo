/// <reference path="typings/angularjs/angular.d.ts" />

namespace HelloSPONGEAdelaideApp {
    export var app = angular.module('HelloSPONGEAdelaideApp', [
        'HelloSPONGEAdelaideApp.controllers',
        'HelloSPONGEAdelaideApp.services',
        'ngRoute',
        'ui.bootstrap',
        'ui.bootstrap.tooltip'
    ]);

    app.config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) =>
    {
        $routeProvider.
            when("/", { templateUrl: "src/views/Hello.html", controller: "HelloController", controllerAs: "helloController" }).
            when("/hello/:name", { templateUrl: "src/views/Hello.html", controller: "HelloController", controllerAs: "helloController" }).
            otherwise({ redirectTo: '/' });
    }]);

    angular.module('HelloSPONGEAdelaideApp.controllers', []);
    angular.module('HelloSPONGEAdelaideApp.services', []);
}
