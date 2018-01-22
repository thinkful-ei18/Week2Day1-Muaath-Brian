'use strict';

/* global shoppingList, cuid, $, Item */

const store = (function () {
  const items = [{
    id: cuid(),
    name: 'apples',
    checked: false
  },
  {
    id: cuid(),
    name: 'oranges',
    checked: false
  },
  {
    id: cuid(),
    name: 'milk',
    checked: true
  },
  {
    id: cuid(),
    name: 'bread',
    checked: false
  }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  function findById(id) {
    return items.find(id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      const newItem = Item.create(name);
      items.push(newItem);
    } catch (error) {
      console.log('Did not create item');
    }
  }

  function findAndToggleChecked(id){
    this.findById(id).checked = !this.findById(id).checked;
  }

  function findAndUpdateName(id , newName) {
    try {
      Item.validateName(newName);
      findById(id);
    } catch (error) {
      console.log('Cannot update name: ' + error.message);
    }

  }
  function findAndDelete(id){
    this.items = this.items.filter(item => item.id !== id); 
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    findAndToggleChecked,
    addItem,
    findAndUpdateName,
    findAndDelete

  };

}());
