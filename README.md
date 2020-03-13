### Project for Adpearance

### Installation
To get this app running locally, do the following steps. This will require php and composer being installed
- `git clone https://github.com/lcampolo/adpearance_proj.git projectname`
- `cd projectname`
- `composer install`
- `touch database/database.sqlite` to create the sqlite database
- `php artisan migrate --seed` to create database tables and seed database
- `npm install`
- `npm run dev` to compile front end
- `php artisan serve` will start the app on localhost: `http://localhost:8000/`
