$(document).ready(function(){
  $("form#formOne").submit(function(event){
      event.preventDefault();
        var userInput = $("input#textInput").val();
        var result = translation(userInput);
        $("#transSentence").append(result);

  });

});

var vowels = ["a", "e", "i", "o", "u", "y"]
