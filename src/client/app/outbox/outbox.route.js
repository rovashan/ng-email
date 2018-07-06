(function() {
    'use strict';
  
    angular
      .module('app.outbox')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'outbox',
          config: {
            url: '/',
            templateUrl: 'app/outbox/outbox.html',
            controller: 'OutboxController',
            controllerAs: 'vm',
            title: 'outbox',
            settings: {
              nav: 1,
              content: '<i class="fa fa-folder"></i> Outbox'
            }
          }
        }
      ];
    }
  })();
  