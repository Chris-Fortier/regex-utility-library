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

// Match Ending String Patterns

// Match All Letters and Numbers

// Match Everything But Letters and Numbers

// Match All Numbers

// Match All Non-Numbers

// Match Non-Whitespace Characters

// Positive and Negative Lookahead

// Check For Mixed Grouping of Characters

// Use Capture Groups to Search and Replace

// Remove Whitespace from Start and End
