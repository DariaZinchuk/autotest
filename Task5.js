class Animal {
    constructor (name, gender){
        this.name = name;
        this.gender = gender;
    }
    move(){
        console.log(`${this.name} can run`);
    }
}
const cat = new Animal("Barsik", "male");
cat.move();
