(function () {
    'use strict';

    angular
        .module("userList", [
            'userDetail'
        ])
        .component("userList", {
            templateUrl: "./components/user-list/user-list.html",
            controller: function ($http) {
                var vm = this;

                $http.get("http://jsonplaceholder.typicode.com/users")
                    .then(function (respuesta) {
                        vm.usuarios = respuesta.data;
                    })
            }
        });

})();
