# README.md

## Description
This is a simple REST API for a cars management system with authentication & authorization features. The API has three roles: superadmin, admin and customer. 
- Superadmin can register new admin. 
- Superadmin, admins and users can login & get info current user.
- Users can register for themself
- Superadmin and admins can create, view, update, and delete cars.
- Usrs can only view available cars.

## Installation
To install this API, you need to have Node.js installed on your machine. You can download it [here](https://nodejs.org/en/). After installing Node.js, you can clone this repository by running the following command in your terminal:

```bash
git clone https://github.com/RiyandiDjohari/synrgy7-fsw1-riy-ch6-car_management_api.git
```

After cloning the repository, navigate to the project directory and run the following command to install the dependencies:

```bash
npm install
```

After installing the dependencies, you need to copy the `.env.example` file to `.env` and fill in the necessary environment variables.

```bash
cp .env.example .env
```

## Usage
To start the API, run the following command in your terminal:

```bash
npm start
```

The API will be running on `http://localhost:8000`.

## ERD
![ERD](https://res.cloudinary.com/df25q8a0m/image/upload/v1717172397/wykxv0fx6pzc019w5tnz.png)

## Documentation API Postman
[Documentation API using Postman](https://documenter.getpostman.com/view/15078650/2sA3Qv7qX6)

## Endpoints
The following are the available endpoints:

### Auth
#### Auth Superadmin
- POST `/api/v1/superadmin/auth/register` - Register a new admin

#### Auth For Admin & User
- POST `/api/v1/auth/login` - Login an superadmin, admin & user
- POST `/api/v1/auth/register` - Register a new user
- GET `/api/v1/auth/me` - Get info current user

### Admin & Superadmin
#### Cars
- GET `/api/v1/cars` - Get all cars
- POST `/api/v1/cars` - Create a new car
- GET `/api/v1/cars/:id` - Get a car by ID
- PUT `/api/v1/cars/status/:id` - Update a car by ID
- DELETE `/api/v1/cars/:id` - Delete a car by ID

### Users
#### Cars
- GET `/api/v1/cars` - Get all available cars

## Authors
- Riyandi Dwitama Djohari - [GitHub]("https://github.com/RiyandiDjohari/")

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex.js](http://knexjs.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Typescript](https://typescriptlang.org/)

## Additional Notes
This project is part of the Synrgy Academy Full Stack Web Development Bootcamp. This project is for educational purposes only.