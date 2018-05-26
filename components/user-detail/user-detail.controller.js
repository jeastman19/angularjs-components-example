(function () {
    'use strict';

    UserDetailController.$inject = [];

    function UserDetailController() {
        var vm = this;

        vm.cambiarEmail = cambiarEmail;

        function cambiarEmail() {
            vm.usuario.email = "jeastman19@gmail.com";
        }

    }

    angular
        .module("userDetail")
        .controller('UserDetailController', UserDetailController);

})();
