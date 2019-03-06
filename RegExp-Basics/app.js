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

const str = '3x3x3x3x3x'; //gray and grey both match, as does gry, griy does not

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
