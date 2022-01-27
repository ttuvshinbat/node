var url = require('url')
var asd = "https://meet.google.com/wfq-fvxq-mho"
var b =url.parse(asd, false);
console.log(b.host);
console.log(b.pathname);
console.log(b.search);
console.log(b.homedir);
console.log(b.href)

