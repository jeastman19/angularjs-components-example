(function () {
    'use strict';

    var userList = {
        templateUrl: "./components/user-detail/user-detail.html",
        controller: 'UserDetailController',
        controllerAs: 'udc',
        bindings: {
            usuario: "=",
            numero: "@"
        }
    }

    angular
        .module("userDetail", [])
        .component("userDetail", userList);

})();
