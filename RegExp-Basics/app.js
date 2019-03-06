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

const str = 'gray?'; //gray and grey both match, as does gry, griy does not

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
