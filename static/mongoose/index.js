// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shreyashstores');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    // console.log("we are connected............")


    const kittySchema = new mongoose.Schema({
        name: String
    });

    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? 'Meow name is ' + this.name
            : 'I don\'t have a name';
        // console.log(greeting);
    };

    const Kitten = mongoose.model('greatkitty', kittySchema);

    const silence = new Kitten({ name: 'Silence' });
    // console.log(silence.name); // 'Silence'  
    // silence.speak(); 

    const greatkitty = new Kitten({ name: 'greatkitty' });
    // console.log(greatkitty.name); // 'Silence'  
    // greatkitty.speak();

    await silence.save();
    // console.log('Silence saved to the database.'); 

    await greatkitty.save();
    // console.log('GreatKitty saved to the database.');

    // silence.speak();  
    // greatkitty.speak(); 

    const kittens = await Kitten.find({name:"greatkitty"}); 
    console.log(kittens);
} 