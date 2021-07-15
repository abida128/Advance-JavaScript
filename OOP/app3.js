// constructor method


function Car(model){
    //console.log('this', this);

   this.model = model; 
   this.drive = function() {
       console.log('started  driving');
    
   }

}
let another = new Car(2020);
another.drive();

