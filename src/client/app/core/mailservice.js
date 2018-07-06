(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('mailservice', mailservice)

    mailservice.$inject = ['$http', 'exception', 'apiUrl'];

    function mailservice($http, exception, apiUrl
    ) {
        var service = {
            getInbox: getInbox,
            getDrafts: getDrafts,
            getSentItems: getSentItems,
            getOutbox: getOutbox,
            getTrash: getTrash
        };

        return service;

        function getInbox() {
            return $http.get(apiUrl + '/mail?label=inbox')
                .then(returnDataSuccess)
                .catch(returnDataFail);
        }

        function getDrafts() {
            return $http.get(apiUrl + '/mail?label=drafts')
                .then(returnDataSuccess)
                .catch(returnDataFail);
        }

        function getSentItems() {
            return $http.get(apiUrl + '/mail?label=sent')
                .then(returnDataSuccess)
                .catch(returnDataFail);
        }

        function getOutbox() {
            return $http.get(apiUrl + '/mail?label=outbox')
                .then(returnDataSuccess)
                .catch(returnDataFail);
        }

        function getTrash() {
            return $http.get(apiUrl + '/mail?label=trash')
                .then(returnDataSuccess)
                .catch(returnDataFail);
        }

        function returnDataSuccess(response) {
            return response.data;
        }
        
        //Promise is rejected inside catcher
        function returnDataFail(e) {
            return exception.catcher('XHR Failed')(e);
        }
    }
})();