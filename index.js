var bcrypt = require('bcrypt');
var bcryptJS = require('bcryptjs');
var twinBcrypt = require('twin-bcrypt');

var password = "password";
var rounds = 12;
var iterations = 10;
var hash, start, end, i, total;

// bcrypt

total = 0;

for (i = 0; i < iterations; i++) {
	start = new Date();
	hash = bcrypt.hashSync(password, bcrypt.genSaltSync(rounds));
	end = new Date();
	total += (end - start);
}

console.log("bcrypt - " + iterations + " iterations took " + total + "ms which is an average of " + parseInt(total / iterations) + "ms each");

// bcryptjs

total = 0;

for (i = 0; i < iterations; i++) {
	start = new Date();
	hash = bcryptJS.hashSync(password, bcryptJS.genSaltSync(rounds));
	end = new Date();
	total += (end - start);
}

console.log("bcryptjs - " + iterations + " iterations took " + total + "ms which is an average of " + parseInt(total / iterations) + "ms each");

// twin-bcrypt

total = 0;

for (i = 0; i < iterations; i++) {
	start = new Date();
	hash = twinBcrypt.hashSync(password, twinBcrypt.genSalt(rounds));
	end = new Date();
	total += (end - start);
}

console.log("twin-bcrypt - " + iterations + " iterations took " + total + "ms which is an average of " + parseInt(total / iterations) + "ms each");