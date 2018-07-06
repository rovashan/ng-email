(function() {
  'use strict';

  angular.module('app', [
    'app.core',
    'app.widgets',
    'app.layout',
    'app.inbox',
    'app.drafts',
    'app.sent',
    'app.outbox',
    'app.trash'
  ]);

})();
