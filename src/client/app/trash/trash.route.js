(function() {
    'use strict';
  
    angular
      .module('app.trash')
      .run(appRun);
  
    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
      routerHelper.configureStates(getStates());
    }
  
    function getStates() {
      return [
        {
          state: 'trash',
          config: {
            url: '/',
            templateUrl: 'app/trash/trash.html',
            controller: 'TrashController',
            controllerAs: 'vm',
            title: 'trash',
            settings: {
              nav: 1,
              content: '<i class="fa fa-folder"></i> Trash'
            }
          }
        }
      ];
    }
  })();
  