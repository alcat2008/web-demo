
require.config({
  // baseUrl: 'js/lib',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery'
  }
});

require(['jquery'], function($) {
  alert($().jquery);
});

