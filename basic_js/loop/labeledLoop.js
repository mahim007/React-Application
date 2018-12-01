var createPet=function (name) {
    var gender;

    return{
        setName: function (newName) {
            name=newName;
        },
        getName: function () {
            return name;
        },
        getGender: function () {
            return gender;
        },
        setGender: function (newGender) {
            if (typeof newGender==="string" && (newGender.toLowerCase()==="male" || newGender.toLowerCase()==="female")){
                gender=newGender;
            }
        }
    }
};

var pet=createPet("jeny");

console.log(pet);

console.log(pet.getName());
pet.setName("gheu");
console.log(pet.getName());

console.log(pet.getGender());
pet.setGender("male");
console.log(pet.getGender());