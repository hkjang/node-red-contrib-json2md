module.exports = function (RED) {
  var Json2mdService = require('json2md');

  var jsonValue = [];
  var headers = [];

  function Json2md(config) {
    RED.nodes.createNode(this, config);
    var self = this;
    this.on('input', function(msg) {

      for(var k in msg.payload[0]) headers.push(k);
      var rows = {"headers":headers, "rows": msg.payload};
      var table = {"table":rows};
      jsonValue.push(table);

      msg.payload = Json2mdService(jsonValue);
      self.send(msg);
    });
  }

  RED.nodes.registerType('json2md', Json2md);

};
