// ES6문법
import _ from 'lodash';

// ES5문법
// var path = require('path');

function component() {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    // 아래의 내용은  element.innerHTML = 'Hello webpack'; 이거와 같다.
    element.innerHTML = _.join(['Hello','webpack'], ' '); //_.join은 lodash의 join문법이다.
  
    return element;
  }
  
  document.body.appendChild(component());