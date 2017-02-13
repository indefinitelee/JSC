// STEP 1:
var cat = {
    name: 'Felix',

    // First: update the breed
    breed: 'Calico',

    age: 10,
    makeNoise: function() {
        console.log('Meow!');
    },
    exercise: function() {
      // Next: Log "Felix chases the mouse." to the console.
      	console.log("Felix chases the mouse.");
    }
       
};

cat.makeNoise();
// Finally: Call the exercise method on the cat object.
cat.exercise();


// STEP 2
var book = {
  author: 'Harper Lee',
  // 1: Add a title property. The value should be 'To Kill A Mockingbird'

  year: 1960,
  rating: 4.2,
  startReading: function () {
          console.log('Reading begins!');
  },
  stopReading: function() {
    	console.log('Reading ends.');
  // 3: Add a stopReading method. This method should log 'Reading ends.' to the console.
  },

};

book.startReading();
  // 4: Call the stopReading method on the book object.
book.stopReading();


// STEP 3
var car = {
  make: 'Volkswagen',
  // 1. Add a model property. The value should be 'Samba Bus'.
  model: "Samba Bus",
  // 2. Add a year property. The value should be the number 1951.
  year: 1951,
  start: function () {
      console.log('Vroom!!!');
  },
  // 3. Add a stop method. Within the function for the method, log 'Screeech!!' to the console.
  stop: function () {
    	console.log('Screeech!!');
  },

};

car.start();
  // 4. Call the stop method on the car object.
car.stop();
console.log(car.make);
  // 5. Using the line above as reference, log the model property to the console.
console.log(car.model);