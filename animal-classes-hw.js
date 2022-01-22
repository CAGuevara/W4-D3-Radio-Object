// superclass  -- parent

class Animal {
    constructor(name,color,age,sound){
        this.name = name
        this.color = color
        this.age = age
        // this.legs = legs
        this.sound = sound
    }

    genericSound() {
        console.log(` ${this.name} makes a ${this.sound} sound`);
    }
    playBall(){
        console.log(`${this.name} Lets Play Ball`);
    }
    getTreat(){
        console.log(`Good bein a very good dog, ${this.name}, you got a Treat`);
    }
}

const dog = new Animal('Maximiliano', 'grey',3,'barking')
const cat = new Animal('Pecas', 'brown', 2, 'roaring')
dog.genericSound();
cat.genericSound();

class Dogs extends Animal{
    constructor(name,color,age,sound,owner){
        super(name,color,age,sound)
        this.owner = owner;
    }
    playBall(){
        // console.log(this.owner);
        console.log(`Lets Catch ball with ${this.owner}`);
    }
}
const terrier = new Dogs('Lola','Brown',1,'hawls','Daniel');
console.log(terrier.playBall());
terrier.genericSound();
