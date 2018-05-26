(function() {
    'use strict';

    angular
        .module('miHeader')
        .controller('MiHeaderController', MiHeaderController);

        MiHeaderController.$inject = [];

    function MiHeaderController() {
        var vm = this;

        vm.numClicks = 0;
        vm.incrementaClick = incrementaClick;

        function incrementaClick() {
            vm.numClicks++;
        }
    }
})();
