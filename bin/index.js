#!/usr/bin/env node

// commander 命令行参数解析
const program = require('commander');
// inquirer 用户交互
const inquirer = require('inquirer');
// 字体颜色
const chalk = require('chalk');
// loading spinner
const ora = require('ora');

const interaction = function () {
    console.log('start ...');
    inquirer.prompt([
        {
            type: 'list',
            name: 'list',
            message: 'Please choose from below list',
            choices: ['Option1', 'Option2','Option3'],
            filter: function (val) {
                return val.toLowerCase();
            }
        },
        {
            type: 'rawlist',
            name: 'rawList',
            message: 'Please choose from below list with line number',
            choices: ['Option1', 'Option2','Option3']
        },
        {
            type: 'checkbox',
            name: 'checkbox',
            message: 'Please choose from checkbox',
            choices: ['Option1', 'Option2','Option3', 'Option4'],
            default: function() {
                return ['Option1'];
            }
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Do you want to continue ?',
            default: function() {
                return true;
            }
        },
        {
            type: 'input',
            name: 'input',
            message: "What's your name ?",
            default: function() {
                return 'LSX';
            }
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter a password',
            mask: '*'
        }
    ])
    .then(answers => {
        console.log(answers);
        console.log('end ...');
    });
}

program
    .version('1.0.0')
    .option('-t, --test <testmessage>', 'output your test message')

program
    .command('demo1')
    .description('run the first demo')
    .action(function () {
        console.log('this is the first demo');
    });

program
    .command('demo2 <msg>')
    .description('run the second demo')
    .action(function (msg) {
        console.log('this is the second demo, this is the msg: ' + msg);
    });

program
    .command('demo3')
    .description('run the third demo, interact with the user')
    .action(function () {
        interaction();
    })

program
    .command('demo4')
    .description('run the fourth demo, show loading spinner')
    .action(function() {
        const spinner = ora('Loading').start();

        setTimeout(() => {
            spinner.succeed('Successful');
            spinner.start();
        }, 1000);

        setTimeout(() => {
            spinner.fail('Failed');
            spinner.start();
        }, 2000);

        setTimeout(() => {
            spinner.warn('Warnning');
            spinner.start();
        }, 3000);

        setTimeout(() => {
            spinner.info('Info');
            spinner.start();
        }, 4000);

        setTimeout(() => {
            spinner.stop();
        }, 5000);
    })

program.parse(process.argv);

if (program.test) {
    console.log(program.test);
    console.log(chalk.blue('I am blue color !'));
}