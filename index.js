module.exports = {
    website: {
        html: {
            "head:start": function () {
                'use strict';
                var data = this.options.pluginsConfig.meta.data || [],
                    heads = '<meta name="gitbook-plugin-meta" content="https://github.com/CyberZHG/gitbook-plugin-meta">';
                data.forEach(function (datum) {
                    heads += '<meta';
                    for (var name in datum) {
                        if (!datum.hasOwnProperty(name)) {
                            continue;
                        }
                        var value = datum[name];
                        heads += ' ' + name + '="' + value + '""';
                    }
                    heads += '>';
                });
                return heads;
            }
        }
    }
};
