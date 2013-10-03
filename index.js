var path = require('path');
var fs = require('fs');
define({
  "name": "cat",
  "fn": function(filePath) {
    var absPath = path.resolve(this.cwd(), filePath);
    fs.exists(absPath, function(exists) {
      if(!exists) {
        throw "Doesn't exist";
      }
      fs.readFile(absPath, { encoding: 'binary'}, function(err, val) {
        if(err) throw err;
        this.stdout.write(val);
        this.exit();
      }.bind(this));
    }.bind(this));
    /*
    if(this.fs() && this.fs() instanceof Github.Repository) {
      this.exit();
      var newArgs = args.slice(0);
      newArgs.unshift('github');
      this.exec(newArgs.join(' '), true );
    } else {
      this.stdout.log('no filesystem mounted.');
      this.exit();
    }
    */
  },
  parse: function(arg) {
    return arg.replace(/^cat ?/,'');
  }
});
