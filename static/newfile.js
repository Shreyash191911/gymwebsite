db.items.find({price:{$lte:95000}, ratings:{$lte:4} })   

db.items.deleteOne({price:98000})  

db.items.deleteMany({name:"iphone14plus"})

db.items.insertMany([ 
    {
      name: "John Doe",
      age: 25,
      email: "john.doe@example.com",
      address: {
        city: "Cityville",
        state: "Stateville",
        country: "Countryland"
      }
    },
    {
      name: "Alice Smith",
      age: 30,
      email: "alice.smith@example.com",
      address: {
        city: "Townville",
        state: "Stateville",
        country: "Countryland"
      }
    },
    {
      name: "Bob Johnson",
      age: 22,
      email: "bob.johnson@example.com",
      address: {
        city: "Villageville",
        state: "Stateville",
        country: "Countryland"
      }
    },
    // Add more records as needed
  ]);

  db.items.updateOne({name:"moto 3G"},{$set: {price:30}}) 