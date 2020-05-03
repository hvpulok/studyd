'use strict';

let changeColor = document.getElementById('changeColor');
console.log('popup script loaded')

chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
