var shopper = {
     name: "GroceryCastle",
     groceryCart: ["Bread","Lettuce","Apples","Icecream"],
     drinkBrand: "gatorade",
     drinkFlavor: "fruit punch",
     fullDrink: function() {
         return this.drinkBrand + " " + this.drinkFlavor;
     }
    }
      var storeAddress = {
         street: "5678 grocery lane",
         city: "Riverside",
         state:"CA",
         fullAddress: function() {
             return this.street + " " + this.city;
         }
     }

     
     

 
 console.log(shopper.fullDrink())
 console.log(storeAddress.fullAddress())
