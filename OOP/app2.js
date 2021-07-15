// factory method

function carData(model) {
    return{
        model,
        drive: function() {
            console.log('started  driving');
         
        }

    };
    
  }
let car = carData(1992);
car.drive();


