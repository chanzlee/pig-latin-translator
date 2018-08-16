# _Pig Latin Translator_

#### _Html/CSS/jQuery Loop Exercise for Epicodus, 08.15.2018_

#### By _**Chan Lee, Kenneth Du**_

## Description

_.This webpage suggest the best track in Epicodus in response to users answers. The three tracks include C#/.Net, CSS/React.js, Ruby/Rails. Back-end logic analyzes the frequency of the user's answers linked to relevant track and apply the information to optimize the suggestion._

## Setup/Installation Requirements

* Clone this repository
* Open index.html file and type text to translate into Pig Latin.

## Specifications

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.** | Input: "3" | Output: "3" |
| **The program returns other specs regardless of capitalization** | Input: "chICken" | output: "ickenchay" |
| **The program moves the first letter of a single word beginning with a single consonant to the end and adds "ay"** | Input: "consonant" | Output: "onsonantcay" |
| **The program moves all consonants before the first vowel of a single word to the end and adds "ay"**| Input: "program" | Output: "ogrampray"|
| **If the word begins with "y", the program moves "y" to the end and adds "ay"** | Input: "yield" | Output: "ieldyay" |
| **The program adds "way" to the end of multi-letter words beginning with a vowel.** | Input: "igloo" | Output: "iglooway" |
| **If the first consonant start with "q" followed by "u", move the "qu", and adds "ay" to the end** | Input: "squeal" | Output: "ealsquay" |
| **The program returns other specs for multiple-word inputs** | Input: "I eat the chicken teriyaki" | Output: "iay eatway ethay ickenchay eriyakitay" |
| **The program returns the first character of word to be capitalized** | Input: "chicken" | Output: "Ickenchay" |


## Known Bugs

_There are no known bugs._

## Support and contact details

_ChanEthanLee@gmail.com, kennethdu3@gmail.com_

## Technologies Used

_HTML, CSS, javaScript, jQuery, Bootstrap_

### License

Copyright (c) 2018 **_Chan Lee_&_Kenneth_Du_**
