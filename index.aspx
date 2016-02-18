<html>
    <head>
        <title>Hello SPONGE Adelaide!</title>
        <!-- Third Party Libraries -->
        <script src="dist/jquery-2.1.1/jquery-2.1.1.min.js"></script>
        <script src="dist/angular-1.4.2/angular.min.js"></script>
        <script src="dist/angular-1.4.2/angular-animate.min.js"></script>
        <script src="dist/angular-1.4.2/angular-sanitize.min.js"></script>
        <script src="dist/angular-1.4.2/angular-route.js"></script>
        <script src="dist/ui-bootstrap-0.11.0/ui-bootstrap-tpls-0.11.0.min.js"></script>
        <script src="dist/bootstrap-3.2.0/js/bootstrap.min.js"></script>

        <!-- AngularJS App Configuration -->
        <script src="HelloSPONGEAdelaide.js?appv=1.0"></script>

        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="dist/bootstrap-3.2.0/css/bootstrap-theme.css">
        <link rel="stylesheet" type="text/css" href="dist/bootstrap-3.2.0/css/bootstrap.css">

        <link rel="stylesheet" type="text/css" href="src/styles/layout.css?appv=1.0">

    </head>
    <body>
        <!-- Core Container -->
        <div ng-app="HelloSPONGEAdelaideApp">
            <ng-view />
        </div>
    </body>
</html>
