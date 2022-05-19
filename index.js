console.log('First npm package');

var chalk = require('chalk');
console.log(chalk.green('I am a green line '  + chalk.blue.underline.bold(' with a blue substring ')  + 'that become green'));