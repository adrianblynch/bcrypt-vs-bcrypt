var bcrypt = require('bcrypt');
var bcryptJs = require('bcryptjs');
var twinBcrypt = require('twin-bcrypt');
var bcryptNodeJs = require('bcrypt-nodejs');
var commander = require('commander');

commander
.option('-r, --rounds [num]', 'Number of rounds to use', parseInt)
.option('-i, --iterations [num]', 'Number of iterations to use', parseInt)
.parse(process.argv);

var password = "password";
var rounds = commander.rounds || 12;
var iterations = commander.iterations || 10;
var hash, start, end, i, total;

console.log(rounds + " rounds, " + iterations + " iterations");
console.log("Bcrypts ready?");
console.log("Fight!");

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
	hash = bcryptJs.hashSync(password, bcryptJs.genSaltSync(rounds));
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

// bcrypt-nodejs

total = 0;

for (i = 0; i < iterations; i++) {
	start = new Date();
	hash = bcryptNodeJs.hashSync(password, bcryptNodeJs.genSaltSync(rounds));
	end = new Date();
	total += (end - start);
}

console.log("bcrypt-nodejs - " + iterations + " iterations took " + total + "ms which is an average of " + parseInt(total / iterations) + "ms each");
