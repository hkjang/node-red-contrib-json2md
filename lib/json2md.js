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
