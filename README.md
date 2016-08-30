# gitbook-plugin-meta-single

[![npm](https://img.shields.io/npm/v/gitbook-plugin-meta-single.svg)](https://www.npmjs.com/package/gitbook-plugin-meta-single)
[![npm](https://img.shields.io/npm/dt/gitbook-plugin-meta-single.svg)](https://www.npmjs.com/package/gitbook-plugin-meta-single)
[![npm](https://img.shields.io/npm/l/gitbook-plugin-meta-single.svg)](https://www.npmjs.com/package/gitbook-plugin-meta-single)

Add meta data to `<head>` for your [gitbooks](https://www.gitbook.com/).

## Config

In your gitbook.json, add this plugin:

```javascript
{
    "plugins": [
        "meta-single"
    ]
}
```

And add/edit the config:

```javascript
{
    "plugins": [
        "meta"
    ],
    "pluginsConfig": {
        "meta-single": {
            "name": "name",
            "content": "content"
        }
    }
}
```

`data` is an array of objects, in which each object has the keys 'name' and 'content'.
