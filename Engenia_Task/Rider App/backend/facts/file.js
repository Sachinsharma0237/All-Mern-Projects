let petList = [{name:"steve", pet:"dog"}, {name:"thor", pet:"mouse"}, {name:"iron", pet:"cat"}, {name:"wonder", pet:"lion"}];

petList = petList.filter( pet=>{
        return  pet["pet"] == "dog" || pet["pet"] == "cat"
})

console.log(petList);
