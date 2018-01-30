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

You  can Install MongoDB (for Ubuntu) from here: [Install_MongoDB_Ubuntu](https://docs.mongodb.com/manual/installation/)

You can Install MongoDB (for Linux Mint - Sylvia) from here: [Install_MongoDB_Sylvia](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/)

You can check, if mongoDb is already installed in your system by typing this command in your terminal: 

You can find the path of mongoDB installed in your system through: ```$ which mongod``` 

You can start the mongoDB through: ```$ mongo```

In case of any error with running the mongoDB , you can first run this command: ``` $ sudo service mongod restart ``` & then again run the command: ``` $ sudo mongo ```

You can see the list of databases through: ```> show dbs```

Create new Database by typing: ```> use nodeauth``` (where nodeauth here is the name of Database)

Create new Collection for ```nodeauth``` DB: ```db.createCollection('users');```

You can see the list of collections through: ```> show collections```

You can INSERT into DB through: ```db.users.insert({name: "NishiGaba"})```

To find all the Records of the Collection: ```db.users.find();``` or ```db.users.find().pretty();```

To update the Record: ``` db.users.update({name: "NishiGaba"},{ $set: {email: "gabanishi45@gmail.com"}}); ```

To delete the Record: ``` db.users.remove({}); ```

If you want to dig deep into the mongoDB, visit this link [mongoDB](https://docs.mongodb.com/?_ga=2.25510269.1120633829.1507739544-13259898.1499097785)

### Node Modules to Install Before going to Section 2

Install all the modules mentioned in package.json file by running this command: 

	 npm install (package-name) --save 

If you want a detailed knowledge about these node modules, visit this link [npmJS](https://www.npmjs.com)


## Section 2 (Application and Middleware Setup)

In this section, we are going to setup our application and middleware system by following these steps:

* Require all the installed modules in your ``` app.js ``` file

* Use all the required modules in your ``` app.js ``` file


## Section 3 (Views and Layouts)

In this Section, we are going to Setup Bootstrap Theme and updating the views by changing the content in layout.jade,
index.jade in the ``` views``` Directory.

If you want to dig deep in Jade Templating and Express Multiple Views Setup, then just go through with this project:

[Express Website Building and Jade Template Setup](https://github.com/NishiGaba/Basic-Express-Website)

We are going to add some new Jade Templates for **Register** and **Login** Pages.


## Section 4 (User Registration)

In this section, we are going to register new users using mongoose models and saving their data in mongodb and 
validating the registration form data using express-validator. Modules used in this section are briefly described as:

* ``` express-validator ``` : An express.js middleware for validations.
* ``` multer ``` : Multer is a node.js middleware for handling multipart/form-data, which is primarily used for 					   uploading files.
* ``` flash ``` : The simplest flash implementation for Express for showing messages.

If you want detailed knowledge about these modules, just go through this link: [npmJS](https://www.npmjs.com)

We are Building Mongoose Models for defining Schema for registering new users in this section.


## Section 5 (Password Encryption with Bcrypt) 

In this section, we are going to use Bcrypt for Password Encryption.

**Bcrypt** generate a salt and hash on separate function calls or auto-gen a salt and hash to generate the hash of a password that is more secure rather than storing the actual password in the database.

Install Bcrypt using this command:

``` npm install bcrypt --save ```

For detailed information, visit this link: [npmJS](https://www.npmjs.com)


## Section 6 (User Authentication with Passport)

In this Section, we are going to compare the password entered by the user with the bcrypt hashed password and authenticate user and then maintain the session for current logged in user through **passport serializing**.

**Passport** is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

Install **passport** and **passport-local** through ``` npm install <package-name> --save ```

For more details, you can visit [passportjs.org](http://www.passportjs.org/)


## Section 7 (Logout and Access Control)

In this section, we are going to:

* Add Logout Functionality.
* Styling some of the **flash** messages.
* Restrict access of some Routes for not registered users using passport **isAuthenticated()** method.


## How to run this Project:

* Clone this repository by typing following command in your Terminal: 
	``` git clone https://github.com/NishiGaba/User-Login-System.git ``` 
* Then run ``` npm install ``` in the Cloned Project Directory
* In last, run ``` nodemon ./bin/www ``` command in your Terminal

**Yeahh** :smile: Great work so far. Keep it up. 


## Refrences

* [udemy](https://www.udemy.com/)
* [treehouse](https://teamtreehouse.com/home)
* [npmJS](https://www.npmjs.com)


## License

MIT © [Nishi Gaba](https://github.com/NishiGaba)



