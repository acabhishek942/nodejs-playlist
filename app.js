var events = require('events');
var utils = require('util');
var fs = require('fs');

// synchronous version
fs.readFile('raedme.txt', 'utf-8', function(error, data){
  fs.writeFile('writee.txt', data, (err) => {
    if (err) throw err;
      console.log('It is saved!');
 });
});

console.log("tst");
// code

var Person = function(name){
  this.name = name;
}

class PersonClass extends events.EventEmitter {
  constructor(name){
    super();
    this.name = name;
  }
}

utils.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');

var jamesES6 = new PersonClass('James');
var maryES6 = new PersonClass('Mary');
var ryuES6 = new PersonClass('Ryu');

var people = [james, mary, ryu]

//ES6 style
var peopleES6 = [jamesES6, maryES6, ryuES6]

people.forEach(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said ' + msg);
  });
});

peopleES6.forEach(function(personES6){
  personES6.on('speakES6', function(msg){
    console.log(personES6.name + ' said ' + msg);
  });
});

james.emit('speak', 'Hey dudes');
jamesES6.emit('speakES6', 'ES6 is supposed to be better');
