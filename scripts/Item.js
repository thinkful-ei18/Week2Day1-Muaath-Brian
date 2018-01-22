'use strict';
const Item = (function() {  
  const validateName = function(name) {
    if (!name) {
      throw 'Name does not exist';
    }
  };
  function create(name) {
    return {
      id: cuid(),
      name: 'name',
      checked: false
    };
  }
  return {
    validateName,
    create
  };
}());