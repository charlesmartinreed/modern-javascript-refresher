let re;
// each character here is a literal
re = /hello/;
re = /hello/i; // i makes this expression case insensitive
// re = /hello/g; // Global search, searches for ALL instances

// console.log(re); //read as an expression
// console.log(re.source); //disregard the /, gives us the inner expression

// exec() - RETURN RESULT IN ARRAY IF PRESENT, NULL IF NOT
// const result = re.exec('yet another hello world');

// returns expression, index it begins at and the string being matched
// console.log(result);
//console.log(result[0]);
// console.log(result.index); //starting point for match
// console.log(result.input); //the input string for our exec()

// test() - RETURNS TRUE OR FALSE, DEPENDING UPON MATCH

// const result = re.test('Hello');
// console.log(result); // FALSE when our expression is case sensitive

// match() - RETURN RESULT ARRAY OR NULL

// Difference? We call this on the string we want to match rather than on the expression itself
// const str = 'Hell There'; //
// const result = str.match(re);
// console.log(result); //returns null

// search() - Returns index of the first match, if not found returns -1

// const str = 'Everyone says Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Returns new string with some or all patterns matches
const str = 'Hello There';
const newStr = str.replace(re, 'Goodbye');
console.log(newStr);
