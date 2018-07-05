(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('mailservice', mailservice)

    mailservice.$inject = ['$http', 'exception'];

    function mailservice($http, exception) {
        var service = {
            getInbox: getInbox
            // getDrafts: getDrafts,
            // getSentItems: getSentItems,
            // getOutbox: getOutbox,
            // getTrash: getTrash
        };

        return service;

        function getInbox() {
            return $http.get('/api/inbox')
                .then(returnDataSuccess)
                .catch(returnDataFail('getInbox'));
        }

        // function getDrafts() {
        //     return $http.get('/api/people')
        //         .then(success)
        //         .catch(fail);
        //     }
        // }

        function returnDataSuccess(response) {
            return response.data;
        }

        //Promise is rejected inside catcher
        function returnDataFail(method, e) {
            var message =  'XHR Failed for ' + method;
            return exception.catcher(message)(e);
        }


    }
})();