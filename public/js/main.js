'use strict';

$(document).ready(init);

function init() {
  $('#textForTranslation').keyup( debounce(markdownMaker, 250) );
  $('#textForTranslation').focus();
  markdownMaker();
}

function markdownMaker(){
  var squack = $("#textForTranslation").val()
  $.post('/squack', {squack: squack})
  .success(function(speak){
    var html = $.parseHTML(speak)
    console.log(html);
    $("#display").empty().append(html)
  })
  .fail(function(err) {
    console.log(err);
    // alert('something went wrong :(')
  });

}


function debounce(func, wait) {
  var timeout;              //Why is this set to nothing?
  return function() {

    clearTimeout(timeout);   // If timeout was just set to nothing, what can be cleared?
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(this, arguments);
    }, wait);
  };
};


//
// function addName() {
//   var newName = $('#newName').val();
//   $.post('/names', {name: newName})
//   .success(function(data) {
//     var $li = $('<li>').text(newName);
//     $('#output').append($li);
//   })
// }
//
// function populateNames() {
//   $.get('/names', function(data) {
//     var $names = data.map(function(name) {
//       return $('<li>').text(name);
//     });
//     $('#output').append($names);
//   });
// }
