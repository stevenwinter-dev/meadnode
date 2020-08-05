const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes')
 
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note')
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//create list
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('List of notes')
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Read notes',
    handler: function () {
        console.log('Read notes')
    }
})

//add, remove, read, list

console.log(yargs.argv)