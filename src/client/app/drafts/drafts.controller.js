(function () {
    'use strict';

    angular
        .module('app.drafts')
        .controller('DraftsController', DraftsController)

    DraftsController.$inject = ['mailservice', 'logger'];

    function DraftsController(mailservice, logger) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Drafts';
        vm.messages = [];

        activate();

        function activate() {
            return getDraftsMail().then(function() {
                logger.info('Retrieved Drafts');
            });
         }

        function getDraftsMail() {
            return mailservice.getDrafts().then(function (data) {
                vm.messages = data;
                return vm.messages;
            });
        }
    }
})();