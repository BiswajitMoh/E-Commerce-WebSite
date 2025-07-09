const mongoose = require('mongoose');

const User = require('./models/User'); // Adjust path if needed


 

mongoose.connect('mongodb://localhost:27017/mem', {

 useNewUrlParser: true,

 useUnifiedTopology: true,

})

 .then(async () => {

   console.log('Connected to MongoDB');


 

   const collection = mongoose.connection.collection('users');


 

   try {

     const indexes = await collection.indexes();

     const emailIndex = indexes.find(index => index.name === 'email_1');


 

     if (emailIndex) {

       await collection.dropIndex('email_1');

       console.log('Dropped old email index');

     }


 

     await User.syncIndexes();

     console.log('Applied new compound index on email + role');

   } catch (err) {

     console.error('Error during index update:', err.message);

   } finally {

     mongoose.connection.close();

   }

 })

 .catch(err => console.error('Connection error:', err));