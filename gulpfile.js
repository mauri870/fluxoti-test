var elixir = require('laravel-elixir');
var bowerDir = './bower_components'
require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

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

    mix.browserify('app.js')
});
