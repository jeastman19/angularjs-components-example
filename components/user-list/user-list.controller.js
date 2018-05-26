(function () {
    'use strict';

    angular
        .module('userList')
        .controller('UserListController', UserListController);

    UserListController.$inject = ['$http'];

    function UserListController($http) {
        var vm = this;

        $http
            .get("http://jsonplaceholder.typicode.com/users")
            .then(function (respuesta) {
                vm.usuarios = respuesta.data;
            });
    }
})();