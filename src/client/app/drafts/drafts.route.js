(function() {
    'use strict';
  
    angular
      .module('app.drafts')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'drafts',
          config: {
            url: '/',
            templateUrl: 'app/drafts/drafts.html',
            controller: 'DraftsController',
            controllerAs: 'vm',
            title: 'drafts',
            settings: {
              nav: 1,
              content: '<i class="fa fa-folder"></i> Drafts'
            }
          }
        }
      ];
    }
  })();
  