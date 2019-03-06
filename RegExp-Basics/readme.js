let re;
// using literal characters
//re = /hello/;
re = /hello/i;

// using METACHARACTER symbols
re = /^h/i; // means must START with 'h', case insensitive
re = /world$/i; // means must END with 'world', case insensitive
re = /^hello$/i; //must start and end with 'hello'
re = /h.llo/i; //match any ONE character
re = /h*llo/i; //matches any character 0 or more time, including nothing at all

re = /gre?a?y/i; //means the character before the ? is optional
re = /gre?a?y\?/i; //escape character is \

// BRACKETS [] - CHARACTER SETS
re = /gr[ae]y/i; // the character in brackets must be an 'a' or 'e' - better than the . option because the space cannot be blank
re = /[GF]ray/; // must be G or F, case sensitive
re = /[^GF]ray/i; // must be anything EXCEPT G or F, case insensitive
re = /^[GF]ray/i; // means must BEGIN with GF, case insensitive - subtle diff
re = /[A-Z]ray/; // match any UPPERCASE letter
re = /[a-z]ray/; // match any LOWERCASE letter
re = /[A-Za-z]ray/; // match any UPPERCASE OR LOWERCASE letter
re = /[0-9]ray/; // match any digit

// BRACES {} - QUANTIFIERS
re = /Hel{2}o/i; // means look for pattern with 2 ls. Must occur {x} numbers of times.
re = /Hel{2,4}o/i; // means l can occur 2-4 times.
re = /Hel{2,}o/i; // means l must occur at least 2 times, no upperbound

// PARENTHESES () - GROUPING
re = /^([0-9]x){3}$/ // looking for the pattern, [0-9]x, three times, starting and ending with that pattern

// SHORTHAND CHARACTER CLASSES
re = /\w/; // WORD character - alphanumeric or _ - returns first match
re = /\w+/; // WORD character - alphanumeric or _ - + means one or more
re = /\W/; // NON WORD character - alphanumeric or _

re = /\d/; // match any DIGIT
re = /\d+/; // match ALL DIGITS
re = /\D/; // match any NON-DIGIT

re = /\s/; // match WHITESPACE character
re = /\S/; // match NON-WHITESPACE character

re = /Hell\b/i; // \b is the WORD BOUNDARY - look for the actual word, not just the word inside of the word

// ASSERTIONS - similar to conditionals
re = /x(?=y)/; //match x ONLY if followed by y
re = /x(?!y)/; //match x ONLY if NOT followed by y

const str = 'dgeaggegeekxl,el,';

const result = re.exec(str);
console.log(result);

function reTest(re, str) {
	if(re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does not match ${re.source}`);
	}
}

reTest(re, str);
