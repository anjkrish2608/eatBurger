# Eat BurgerZ

[Click here to view repository.](https://github.com/anjkrish2608/eatBurger)

[Click here to use the application on heroku.](https://quiet-waters-62028.herokuapp.com/)

## Table of Contents

* [Description of Application](#des)
* [Technologies Used](#tech)
* [Challenges Faced](#chall)
* [Features to be Implemented](#dev)
* [Installation Steps](#insta)
* [Tests](#tests)
* [How to Use](#use)
* [Credits](#cred)

<a id="des"></a>

## Description of Application
The Eat BurgerZ application provides the user with an interface to create a listing of the burgers that they want to eat and have already demolished. The user can also delete the burger from either list or swap the burger between lists once it has been prepared or demolished. This application was created based off a CRUD excercise provided by Trilogy Education Servies. 
The application can:
*CREATE*
    * add a new burger to the demolished or ready to eat list
*READ*
* view the list of demolished burgers
* view the list of ready to eat burgers
*UPDATE*
* update the state of the burger to either demolished or ready to eat
*DELETE*
* delete a burger from either list

<a id="tech"></a>

## Technologies Used
While creating this application I have used many different technologies listed below:

* JavaScript ES6 : to write all of the code inside server.js
* Node JS : to run the server.js file when used off computer
* MYSQL Package : to access the database I created
* Heroku : to access the application off of the internet
* Express : to create server connection, routes and queries
* Express-Handlebars : to allow html to be created based of database queries
* Bootstrap : to structure the CSS of the page
* Font Awesome : to create the burger icon

<a id="chall"></a>

## Challenges Faced
Throughout the creation of this application I have faced many challenges. The main challenge I faced was the css, I always struggle when using CSS as I find it is very sensitive. I also struggled using the heroku submission as it is my first time using. I am not sure whether I have either made a mistake or it is a delayed display. Furthermore the use of express-handlebars is still foreign but after the completion of this task I feel as though I have a greater understanding.

<a id="dev"></a>

## Features to be Implemented
In the future I would like to improve the CSS styling as it is very basic. I would also like to create some more advanced features like maybe a shopping list table which incorporates the items needed to create the burgers that will be cooked.

<a id="insta"></a>

## Installation Steps
**OPTION ONE**
Use the application on Heroku at the following link : [Click Here!](https://quiet-waters-62028.herokuapp.com/).

**OPTION TWO**
1. Download Node.js
2. Download server.js to a folder.
3. Run the terminal in that folder and write the following commands:
```
npm init
npm install
npm install --save express express-handlebars mysql
```
4. Set your mysql port to satisfy:
```
host: "localhost",
port: 3306,
user: "root",
password: "anj",
database: "burgerDB"
```
5. Run the following code in mysql:
```
ALTER USER "root"@"localhost" IDENTIFIED WITH mysql_native_password BY "anj"
```

6. Open schema.sql and seed.sql in mysql and run them respectively.
7. Run the server.js file in the console using the command:
```
node server.js
```

<a id="tests"></a>

## Tests
There are currently no tests for this application.

<a id="use"></a>

## How to Use
After following the Installation steps or access the application on Heroku you will be able to keep track of all the burgers you want to eat.

<a id="cred"></a>

## Credits
As mentioned in [Technologies Used](#tech) the following assets were used:
* [JavaScript ES6](https://www.javascript.com/)
* [Node JS](https://nodejs.org/en/)
* [MYSQL Package](https://www.npmjs.com/package/mysql)
* [Heroku](https://heroku.com/)
* [Express](https://www.npmjs.com/package/express)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [Bootstrap](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com/)
Furthermore the requirements set for this application were supplied by Trilogy Education Services.

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.