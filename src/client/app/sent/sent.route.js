(function() {
    'use strict';
  
    angular
      .module('app.sent')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'sent',
          config: {
            url: '/',
            templateUrl: 'app/sent/sent.html',
            controller: 'SentController',
            controllerAs: 'vm',
            title: 'sent',
            settings: {
              nav: 1,
              content: '<i class="fa fa-folder"></i> Sent'
            }
          }
        }
      ];
    }
  })();
  