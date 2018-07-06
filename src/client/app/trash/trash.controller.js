(function () {
    'use strict';

    angular
        .module('app.trash')
        .controller('TrashController', TrashController)

    TrashController.$inject = ['mailservice', 'logger'];

    function TrashController(mailservice, logger) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Trash';
        vm.messages = [];

        activate();

        function activate() {
            return getTrashMail().then(function() {
                logger.info('Retrieved Trash');
            });
         }

        function getTrashMail() {
            return mailservice.getTrash().then(function (data) {
                vm.messages = data;
                return vm.messages;
            });
        }
    }
})();