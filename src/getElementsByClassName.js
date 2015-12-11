// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var elements = []
  var nodes = document.children;
  for (var i = 0; i < nodes.length; i++) {
    recurse(className, nodes[i]);
  }
  return elements;
  
  function recurse(className, node) {
    checkElement(className, node);

    if (node.children.length > 0) { 
      var childs = node.children;
      for (var j = 0; j < childs.length; j++) {
        recurse(className, childs[j]);
      } 
    } 
  }

  function checkElement(className, node) {
    if (node.classList != undefined && node.classList.contains(className)) {
      elements.push(node);
    }    
  }
}