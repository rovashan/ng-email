(function () {
    'use strict';

    angular
        .module('app.sent')
        .controller('SentController', SentController)

    SentController.$inject = ['mailservice', 'logger'];

    function SentController(mailservice, logger) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Sent';
        vm.messages = [];

        activate();

        function activate() {
            return getSentMail().then(function() {
                logger.info('Retrieved Sent');
            });
         }

        function getSentMail() {
            return mailservice.getSentItems().then(function (data) {
                vm.messages = data;
                return vm.messages;
            });
        }
    }
})();