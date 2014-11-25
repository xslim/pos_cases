var path = require('path'),
    fs = require('fs'),
    yaml = require('js-yaml');

module.exports = {
  cases: {},

  unloadAll: function() {
    this.cases = {}
  },

  loadCase: function(case_name) {
    var casePath = path.join(__dirname, 'cases');

    var file = case_name.toString();
    if (path.extname(file) != '.yml') {
      file = file + '.yml'
    }

    var key = path.basename(file, path.extname(file))

    try {
      var filename = path.join(casePath, file),
          contents = fs.readFileSync(filename, 'utf8'),
          data     = yaml.load(contents);
      this.cases[key.toString()] = data
    } catch (err) {
      console.log(err.stack || String(err));
    }
  },

  loadAll: function() {
    var casePath = path.join(__dirname, 'cases');
    var files = fs.readdirSync(casePath);
    for (k in files) {
      var file = files[k]
      this.loadCase(file);
    }
    console.log("Loaded %d cases", Object.keys(this.cases).length);
    return this.cases;
  }
}
