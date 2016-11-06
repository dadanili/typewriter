# typewriter
=========

This module turns your static text into dynamic transformations on the screen. Each letter appears sequentially followed by a pipe character as if the text is currently being typed by a typewriter!


## Installation

  npm install typewriter --save


## Usage

  var typewriter = require('typewriter')
  typewriter(<the string to display>, <the DOM node this string is the textContent of>, [optional]<speed in milliseconds>)
  The default speed is 100 milliseconds
  eg. typewriter('mystring is this', document.getElementById('app'), 200)


## Release History

* 0.1.0 Initial release