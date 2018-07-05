(function () {
    'use strict';

    angular
        .module('app.inbox')
        .controller('InboxController', InboxController)

    InboxController.$inject = ['mailservice'];

    function InboxController(mailservice) {
        /* jshint validthis:true */
        var vm = this;
        vm.messages = [];

        activate();

        function activate() {
            return getInboxMail().then(function() {
                logger.info('Retrieved Inbox');
            });
         }

        function getInboxMail() {
            return mailservice.getInbox().then(function (data) {
                vm.messages = data;
                return vm.messages;
            });
        }
    }
})();