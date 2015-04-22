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
    if (i == 0) {
      $(this).css("margin-bottom", "5px");
    } else {
      $(this).css("margin", "20px 0px 5px 0px");
    }
  });
};

$(document).ready(function() {
  setInterval(update, 5000);
});