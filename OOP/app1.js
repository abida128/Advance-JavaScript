// An Object method

let car = {
    color: 'black',
    // price: $5000000, it show an error in console
    model:1992,
    brand: 'BMW 5 series',
    drive: function() {
        console.log('started  driving');
     
    }

    
  };
console.log(car.model);
car.drive();