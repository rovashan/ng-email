(function() {
    'use strict';
  
    angular
      .module('app.inbox')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'inbox',
          config: {
            url: '/',
            templateUrl: 'app/inbox/inbox.html',
            controller: 'InboxController',
            controllerAs: 'vm',
            title: 'inbox',
            settings: {
              nav: 1,
              content: '<i class="fa fa-inbox"></i> Inbox'
            }
          }
        }
      ];
    }
  })();
  