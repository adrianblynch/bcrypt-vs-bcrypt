var bcrypt = require('bcrypt');
var bcryptJS = require('bcryptjs');
var twinBcrypt = require('twin-bcrypt');
var commander = require('commander');

commander
.option('-r, --rounds [num]', 'Number of rounds to use')
.option('-i, --iterations [num]', 'Number of iterations to use')
.parse(process.argv);

var password = "password";
var rounds = commander.rounds || 12;
var iterations = commander.iterations || 10;
var hash, start, end, i, total;

console.log("Bcrypts ready? Fight!");

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
