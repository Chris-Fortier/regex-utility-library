// Match Literal Strings
function matchLiteral(string, pattern) {
   // This will check if pattern is in string with a literal match.
   let regex = new RegExp(pattern, "g"); // https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression
   return regex.test(string);
}

// Match Single Character with Multiple Possibilities
function matchSingleCharacterWithMultiplePossibilities(string, possibilities) {
   // This will find all the characters in possibilities in string.
   let regex = new RegExp("[" + possibilities + "]", "ig");
   console.log(regex);
   return string.match(regex);
}

// Match Single Characters Not Specified
function matchSingleCharactersNotSpecified(string, possibilities) {
   // This will find all the characters not in possibilities in string.
   let regex = new RegExp("[^" + possibilities + "]", "ig");
   console.log(regex);
   return string.match(regex);
}

// Match Characters that Occur One or More Times
function matchCharactersThatOccurOneOrMoreTimes(string, letter) {
   // This will find matches when the given letter occurs one or more times in string.
   let regex = new RegExp(letter + "+", "ig");
   return string.match(regex);
}

// Find One or More Criminals in a Hunt
function findCriminals(people, criminal) {
   // This will find one or more criminals represented by letter criminal within a group of other people.
   let reCriminal = new RegExp(criminal + "+", "g");
   return people.match(reCriminal);
}

// Match Beginning String Patterns
function matchBeginningStringPattern(string, target) {
   // This will find target only in the beginning of the string.
   let regex = new RegExp("^" + target);
   return string.match(regex);
}

// Match Ending String Patterns
function matchEndingStringPattern(string, target) {
   // This will find target only at the ending of the string.
   let regex = new RegExp(target + "$");
   return string.match(regex);
}

// Match All Letters and Numbers
function countAlphanumeric(string) {
   // This will count the number of alphanumeric characters in the given string.
   let regex = /\w/g;
   return string.match(regex).length;
}

// Match Everything But Letters and Numbers
function countNonAlphanumeric(string) {
   // This will count the number of non alphanumeric characters in the given string.
   let regex = /\W/g;
   return string.match(regex).length;
}

// Match All Numbers
function countNumeric(string) {
   // This will count the number of numeric characters in the given string.
   let regex = /\d/g;
   return string.match(regex).length;
}

// Match All Non-Numbers
function countNonNumeric(string) {
   // This will count the number of non numeric characters in the given string.
   let regex = /\D/g;
   return string.match(regex).length;
}

// Match Non-Whitespace Characters
function countNonWhiteSpace(string) {
   // This will count the number of non-whitespace characters in the given string.
   let regex = /\S/g;
   return string.match(regex).length;
}

// Positive and Negative Lookahead
function lookAhead(password) {
   // This will match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
   let regex = /^\D(?=\w{5})(?=\w*\d{2})/;
   return regex.test(password);
}

// Check For Mixed Grouping of Characters
function testIfRoosevelt(string) {
   // This will check if the name you entered is either Franklin or Eleanor Roosevelt.
   let myString = "Eleanor Roosevelt";
   let myRegex = /(Franklin|Eleanor).+Roosevelt/;
   return myRegex.test(string);
}

// Use Capture Groups to Search and Replace
function reverseThreeWords(string) {
   // This will reverse three words in a string using capture groups to search and replace.
   let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
   let replaceText = "$3 $2 $1";
   let result = string.replace(fixRegex, replaceText);
   console.log(result);
   return result;
}

// Remove Whitespace from Start and End
function removeWhiteSpaceFromEnds(string) {
   // This will remove the space from the beginning and end of the string.
   let hello = "   Hello, World!  ";
   // let wsRegex = /(\s{2,})/gi; // Change this line
   let wsRegex = /^\s+|\s+$/gi;
   let result = string.replace(wsRegex, "");
   console.log(result);
   return result;
}
