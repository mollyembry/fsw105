const person = "John";
const age = 101;
function runForLoop(pets) {
    var petObjects = [];
    for ( let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] };
        if (pets[i] === "cat") {
            name = "fluffy";
        } else {
            name = "spot";
        }
        console.log("pet name = ", name);
        pet.name =  name ;
        petObjects.push(pet);
    }
    console.log("man name: ", person);
    return petObjects
}
runForLoop(["cat", "dog"]);