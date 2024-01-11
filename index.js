module.exports = {
  book: {
    assets: "./book",
    hooks: {
      "init": function() {
        console.log("Init hook executed");
      }
    }
  },
  blocks: {
    myBlock: {
      process: function(block) {
        const customParam = this.config.get('pluginsConfig.my-gitbook-plugin.customParam');
        return `Custom Parameter Value: ${customParam}`;
      }
    }
  }
};
