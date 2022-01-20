var str = "aaaaewwrhfgdsgrtdht"
const a = str.replace(new RegExp("[Aa]*"), "s");
console.log("old :" + str);
console.log("new :" +a)