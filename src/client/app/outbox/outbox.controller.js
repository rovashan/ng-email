(function () {
    'use strict';

    angular
        .module('app.outbox')
        .controller('OutboxController', OutboxController)

    OutboxController.$inject = ['mailservice', 'logger'];

    function OutboxController(mailservice, logger) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Outbox';
        vm.messages = [];

        activate();

        function activate() {
            return getOutboxMail().then(function() {
                logger.info('Retrieved Outbox');
            });
         }

        function getOutboxMail() {
            return mailservice.getOutbox().then(function (data) {
                vm.messages = data;
                return vm.messages;
            });
        }
    }
})();