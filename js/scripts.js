// Front-end Logic
$(document).ready(function(){
  $("form#formOne").submit(function(event){
      event.preventDefault();
        var userInput = $("input#textInput").val();
        var result = translation(userInput);
        $("#transSentence").text(result);
  });
});

// Back-end logic

var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b","c","d","e","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]

var upperFirst = function (word) {
  return word.charAt(0).toUpperCase() + word.substr(1);
}

var translation = function(sentence) {
  sentence = sentence.toLowerCase();

  wordsArray = [];
  wordsArray = sentence.split(" ");

  var pigArray = wordsArray.map(function(words){

    var isVowel = vowels.includes(words[0]);
    var isConsonant = consonants.includes(words[0]);

    var regexQU = /q(?=u)/i;
    var isQU = words.match(regexQU);
    var indexQU = words.indexOf(words.match(regexQU));

    if ( isQU ){
      var quWord = words.substring(indexQU + 2) + words.substring(indexQU+2, 0) + "ay";
      return upperFirst(quWord);

    } else if ( isConsonant ){
        var regexVowel =/[aeiou]/i
        var indexVowel = words.indexOf(words.match(regexVowel));
        var startConsonant = words.substring(indexVowel) + words.substring(0, indexVowel) + "ay";
        return upperFirst(startConsonant);

    } else if ( isVowel ){
      var startVowel = words + "way";
      return upperFirst(startVowel);

    } else {
      return ("invalid");
    }
  });

  var pigSentence = pigArray.join(" ");
  return pigSentence;
};
