var typetext = function(text1, node, speed) {
	var context = this;
  node.textContent = '|';
  speed = speed || 100;
  var i = 0;

  (function next1() {
    //console.log('context', node)
    if(text1 && node) {
		  node.textContent = node.textContent.slice(0, node.textContent.length - 1);
  	  if(i !== text1.length - 1){
  	  	node.textContent += text1[i] + '|';
  	  } else {
		    node.textContent += text1[i];
  	  }

  	  i++;

  	  if (i < text1.length ) {
  	    var typing = setTimeout(next1, speed);
  	  }
	  }
	})()

}

module.exports = typetext;