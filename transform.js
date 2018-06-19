const through = require('through2');

process.stdin.pipe(through(function(buffer, encoding, next){
  const str = buffer.toString().toUpperCase();
  this.push(str);
  next();
}, function(done) {
  done();
})).pipe(process.stdout);
