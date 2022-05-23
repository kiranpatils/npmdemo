console.log('First npm package 123');

var chalk = require('chalk');
console.log(chalk.green('I am a green line '  + chalk.blue.underline.bold(' with a blue substring ')  + 'that become green'));

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));

