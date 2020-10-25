var shopper = {
     name:"Grocery_Castle",
     groceryCart:["Bread","Lettuce","Apples","Icecream"],
     apples:7,
     isThereCoupons: true,
     drinkBrand:"gatorade",
     drinkFlavor:"fruit punch",
     fullDrink : function(){
         return this.drinkBrand + " " + this.drinkFlavor;
     },
      storeAddress: {
         street: "5678 grocery lane",
         city: "Riverside",
         state: "CA",
         fullAddress: function() {
             return this.street + " " + this.city;
         }
        }
     }
     
 console.log(shopper);
console.log("fullAddress.displayInfo");
console.log("fullDrink.displayinfo");
