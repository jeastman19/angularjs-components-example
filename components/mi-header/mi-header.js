(function() {
    'use strict';

    var header = {
        templateUrl: './components/mi-header/mi-header.html',
        controller: 'MiHeaderController',
        controllerAs: 'c'
    }




    angular
        .module('miHeader', [])
        .component('miHeader', header);
})();
