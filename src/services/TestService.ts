namespace HelloSPONGEAdelaideApp {

    /**
     * Service to interact with the Service XYZ
     */
    export class TestService {

        baseUrl: string;

        /**
         * Initialise the service and retrieve references from AngularJS dependency injection.
         * @constructor
         * @param $http The AngularJS Http Service object to invoke HTTP requests.
         */
        constructor(
          private $http: ng.IHttpService) {
            this.baseUrl = "/api/";
        }

        /**
         * @Returns the list of test items.
         */
         get(): ng.IHttpPromise<Array<Test>> {
           return this.$http.get(this.baseUrl + "test/");
         }

    }

    angular.module('HelloSPONGEAdelaideApp.services').service('TestService', TestService);
}
