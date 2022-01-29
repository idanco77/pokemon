# pokemon
pokemon cards gallery

Client- made with angular.
3rd party libraries:
	1. Bootstrap,
	2. Font-awesome,
	3. SweetAlert2
	4. Angular Material
All 3rd party libraries are included in package.json file. 
All you have to do is "npm install".

Ohh, and don't forget to edit environment.ts file at src/environment folder in order to let the client know the api url. This how my file looks like:
export const environment = {
  apiUrl: 'http://localhost:8000/pokemon-gallery-api/public/api/',
};


Api - made with Laravel.
No 3rd party libraries.
In order to run the project please do the following steps:
	1. Composer install.
	2. Database- create database named "pokemon".
	3. Run the command- php artisan migrate- it will create the schema tables and also insert data.
