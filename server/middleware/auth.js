const jwt = require('jsonwebtoken');


 

const auth = (req, res, next) => {

 const authHeader = req.headers.authorization;


 

 if (!authHeader || !authHeader.startsWith('Bearer ')) {

   return res.status(401).json({ message: 'Authorization token missing' });

 }


 

 const token = authHeader.split(' ')[1];


 

 try {

   const decoded = jwt.verify(token, process.env.JWT_SECRET);

   req.user = decoded; // decoded contains user._id and role

   next();

 } catch (err) {

   return res.status(401).json({ message: 'Invalid or expired token' });

 }

};


 

module.exports = auth;