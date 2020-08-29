Json2md NodeRED Node
=====================

Installing with npm
-------

`npm install node-red-contrib-json2md`

Adding nodes to the palette
-------
Using the Editor
You can install nodes directly within the editor by selecting the Manage Palette option from the main menu to open the Palette Manager.

The ‘Nodes’ tab lists all of the modules you have installed. It shows which you are using and whether updates are available for any of them.

The ‘Install’ tab lets you search the catalogue of available node modules and install them.

<a href="https://www.buymeacoffee.com/gagagiga" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

Example
------
- json array object to markdown

```json
[
    {
        "a": "11",
        "b": "22",
        "c": "33",
        "d": "44"
    },
    {
        "a": "55",
        "b": "66",
        "c": "77",
        "d": "88"
    }
]
```

```markdown
 | a | b | c | d | 
 | --- | --- | --- | --- | 
 | 11 | 22 | 33 | 44
55 | 66 | 77 | 88 | 
```

 | a | b | c | d | 
 | --- | --- | --- | --- | 
 | 11 | 22 | 33 | 44
55 | 66 | 77 | 88 | 

JS Code for Node-RED
------
```js
module.exports = function (RED) {
  var json2md = require('json2md');

  function Json2md(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {
      var headers = [];
      for(var k in msg.payload[0]){
        headers.push(k)
      };
      msg.payload =  json2md([{"table":{"headers":headers, "rows": msg.payload}}]);
      self.send(msg);
    });
  }
  RED.nodes.registerType('json2md', Json2md);
};

```
