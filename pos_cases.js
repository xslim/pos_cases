module.exports = {
  cases: {},
  loadAll: function() {
    var cases = {};
    var casePath = path.join(__dirname, 'cases');
    var files = fs.readdirSync(casePath);
    for (k in files) {
      var file = files[k]
      try {
        var filename = path.join(casePath, file),
            contents = fs.readFileSync(filename, 'utf8'),
            data     = yaml.load(contents);
        var key = path.basename(file, path.extname(file))
        cases[key.toString()] = data
      } catch (err) {
        console.log(err.stack || String(err));
      }
    }
    console.log("Loaded %d cases", Object.keys(cases).length);
    this.cases = cases;
    return cases;
  }
}
