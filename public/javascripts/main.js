/**
 * Created by charlie on 5/16/16.
 */

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        elfLog: 'components/elven-tools/elf-log',
        makeHtml: 'javascripts/make-html/make-html',
        walking: 'javascripts/make-html/walking',
        makeImage: 'javascripts/make-image/make-image',
        imagePicker: 'javascripts/make-image/image-picker',
        display: 'javascripts/tools/display',
        settings: 'javascripts/tools/settings',
        utilities: 'javascripts/tools/utilities'
    }
});

requirejs(['jquery'], function($) {
    'use strict';
    requirejs(['bootstrap', 'control'], function(bootstrap, control) {
        control();
        $('.navbar-nav li.trigger-collapse a').click(function(event) {
            $('.navbar-collapse').collapse('hide');
        });
    });
});
