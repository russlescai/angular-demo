var HelloSPONGEAdelaideApp;
(function (HelloSPONGEAdelaideApp) {
    var HelloController = (function () {
        function HelloController($scope, TestService) {
            this.$scope = $scope;
            this.TestService = TestService;
        }
        return HelloController;
    }());
    HelloSPONGEAdelaideApp.HelloController = HelloController;
    angular.module('HelloSPONGEAdelaideApp.controllers').controller('HelloController', HelloController);
})(HelloSPONGEAdelaideApp || (HelloSPONGEAdelaideApp = {}));
