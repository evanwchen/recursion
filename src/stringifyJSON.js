// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // object
  if (Object.prototype.toString.call(obj) === "[object Object]") {
  	var temp = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (stringifyJSON(obj[prop]) != null && prop != 'undefined') {
        	temp.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
        }
			}
    }
    return '{' + temp.join(',') + '}';
  }
  // array
  else if (Array.isArray(obj)) {
  	var strArray = "[";
  	for (var i=0; i<obj.length; i++) {
  		strArray += (i ? "," : "") + stringifyJSON(obj[i]);
  	}
  	return strArray + ']';
  }
  // String
  else if (typeof obj === "string") { return '"' + obj + '"'; }
  // Number
  else if (typeof obj === "number") { return String(obj); }
  // Boolean
  else if (typeof obj === "boolean") { return String(obj); }
  // null
  else if (obj == null) { return 'null'; }
  // function
  else if (typeof obj === "function") { return; }
  // symbol
  else if (typeof obj === "symbol") { return; }
  // non-enumberable properties
  else if (typeof obj === "undefined") { return; }
  //else
  else { return; }
};
