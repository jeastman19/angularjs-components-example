(function () {
    'use strict';

    var userList = {
        templateUrl: "./components/user-list/user-list.html",
        controller: 'UserListController'
    };

    angular
        .module("userList", [
            'userDetail'
        ])
        .component("userList", userList);

})();
