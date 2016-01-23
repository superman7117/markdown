'use strict';

$(document).ready(init);

function init() {
  $('#textForTranslation').keyup(markdownMaker);
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
