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

// Find One or More Criminals in a Hunt

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
