
namespace HelloSPONGEAdelaideApp {

    /**
     * The controller for the Hello form. Initialises form with data, and handle events.
     */
    export class HelloController {
      constructor(
        private $scope: HelloModel,
        private TestService: TestService,
        private $routeParams: HelloParams
      )
      {
        if (this.$routeParams.name != null)
        {
          this.$scope.name = this.$routeParams.name;
        }
        else
        {
          this.$scope.name = "SPONGE Adelaide!";
        }
      }
    }

    angular.module('HelloSPONGEAdelaideApp.controllers').controller('HelloController', HelloController);
}
