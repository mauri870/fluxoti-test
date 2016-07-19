var elixir = require('laravel-elixir');
var bowerDir = './bower_components';

// laravel-elixir-vue (laravel-elixir >= 6.0) currently support only vue 1.0, so,
// we need to register the specific loaders for Vue 2.0 on the webpack.config.js

elixir(function(mix) {
    mix.styles([
        bowerDir + '/font-awesome/css/font-awesome.css',
        bowerDir + '/bootstrap/dist/css/bootstrap.css',
    ], 'public/css/vendor.css')

    mix.scripts([
        bowerDir + '/jquery/dist/jquery.js'
    ], 'public/js/vendor.js')

    mix.copy([
        bowerDir + '/font-awesome/fonts',
        bowerDir + '/bootstrap/fonts',
    ], 'public/fonts')

    mix.webpack('app.js', null, null, require('./webpack.config.js'))
});
