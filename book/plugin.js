/*jslint node*/

require(["gitbook", "jQuery"], function (gitbook, $) {
    'use strict';
    gitbook.events.bind('start', function (e, config) {
        var data = config.meta.data || [],
            heads = '<meta name="gitbook-plugin-meta" content="https://github.com/CyberZHG/gitbook-plugin-meta">';
        data.forEach(function (datum) {
            heads += '<meta';
            Object.keys(datum).forEach(function (name) {
                if (datum.hasOwnProperty(name)) {
                    heads += ' ' + name + '="' + datum[name] + '"';
                }
            });
            heads += '>';
        });
        $('head').append(heads);
    });

});
