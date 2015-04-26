// ==UserScript==
// @name         Add Margin to Heading Script for Trello
// @namespace    https://github.com/chestnutfield
// @version      0.1
// @description  Add a margin to heading tag for description.
// @author       Takashi Kurihara
// @include      https://trello.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==
var update = function() {
  $('div.current.markeddown.hide-on-edit.js-card-desc.js-show-with-desc :header').each(function(i){
    if ($(this)[0].tagName == "H2") {
      $(this).css("margin-bottom", "5px");
      $(this).css("border-left", "5px solid #48832C");
      $(this).css("border-bottom", "1px solid #48832C");
    } else {
      $(this).css("margin", "20px 0px 5px 0px");
      $(this).css("border-bottom", "1px solid #48832C");
    }
  });
};

$(document).ready(function() {
  setInterval(update, 5000);
});
