#!/usr/bin/env node

// commander 命令行参数解析
const program = require('commander');

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

program.parse(process.argv);

if (program.test) {
    console.log(program.test);
}