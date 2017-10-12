# User Login and Registration System


## Project Description and Features

* MongoDB NoSQL Database
* Mongoose ORM
* Passport User Authentication
* Bcrypt Encription
* Full User Login/Registration System


# Project Sections

* MongoDB Install and Setup
* Application and Middleware Setup
* Views and Layouts
* User Registration
* Password Encryption with Bcrypt
* User Authentication with Passport
* Logout and Access Control


## Section 1 (Install MongoDB)

### MongoDB :

MongoDB is NoSQL Database and it stores information in JSON format. It is the commonly used DB for Node JS.
MongoDb makes development fast and it is syntactically simple. It is easy to change and maintain.

You  can Install MongoDB from here: [Install_MongoDB](https://docs.mongodb.com/manual/installation/)

You can check, if mongoDb is already installed in your system by typing this command in your terminal: 

You can find the path of mongoDB installed in your system through: ```$ which mongod``` 

You can start the mongoDB through: ```$ mongo```

You can see the list of databases through: ```> show dbs```

Create new Database by typing: ```> use nodeauth``` (where nodeauth here is the name of Database)

Create new Collection for ```nodeauth``` DB: ```db.createCollection('users');```

You can see the list of collections through: ```> show collections```

You can INSERT into DB through: ```db.users.insert({name: "NishiGaba"})```

To find all the Records of the Collection: ```db.users.find();``` or ```db.users.find().pretty();```

To update the Record: ```db.users.update({name: "NishiGaba"},{ $set: {email: "gabanishi45@gmail.com"}});```

If you want to dig deep into the mongoDB, visit this link [mongoDB](https://docs.mongodb.com/?_ga=2.25510269.1120633829.1507739544-13259898.1499097785)

### Node Modules to Install Before going to Section 2

* body-parser : ```npm install body-parser --save``` 

* cookie-parser : ```npm install cookie-parser --save```

* debug : ```npm install debug --save```

* express : ```npm install express --save```

* jade : ```npm install jade --save```

* morgan : ```npm install morgan --save```

* serve-favicon : ```npm install serve-favicon --save```

* mongodb : ```npm install mongodb --save```

* mongoose : ```npm install mongoose --save```

* connect-flash : ```npm install connect-flash --save```

* express-validator : ```npm install express-validator --save``` 

* express-session : ```npm install express-session --save``` 

* express-messages : ```npm install express-messages --save``` 

* passport : ```npm install passport --save```

* passport-local : ```npm install passport-local --save```

* passport-http : ```npm install passport-http --save```

* passport-local : ```npm install passport-local --save```

* multer : ```npm install multer --save```

If you want a detailed knowledge about these node modules, visit this link [npmJS](https://www.npmjs.com)

## Section 2 (Application and Middleware Setup)

* Require all the installed modules in your app.js

coming soon....


## Refrences

* [udemy](https://www.udemy.com/)
* [treehouse](https://teamtreehouse.com/home)
* [npmJS](https://www.npmjs.com)


## License

MIT © [Nishi Gaba](https://github.com/NishiGaba)



