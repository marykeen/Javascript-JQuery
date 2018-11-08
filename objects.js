var person = {
    name: ['Mary', 'Abiodun'],
    age: 24,
    gender: 'female',
    interests: ['programming', 'capacity building'],
    bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age +
    ' years old. She likes ' + this.interests[0] + ' and ' +
    this.interests[1] + '.');
    },
    greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
    }
    };