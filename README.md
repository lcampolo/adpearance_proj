### Project for Adpearance

### Installation
To get this app running locally, do the following steps. This will require php and composer being installed
- `git clone https://github.com/lcampolo/adpearance_proj.git <YOUR PROJECTNAME>`
- `cd <YOUR PROJECTNAME>`
- `composer install`
- `touch database/database.sqlite` to create the sqlite database (note, I've included .env even though it's not best practice to make the database configuration easier. In an actual app that was going out, I'd instead have the .env be configured in each environment, but it's fine for this purpose)
- `php artisan migrate --seed` to create database tables and seed database
- `npm install`
- `npm run dev` to compile front end
- `php artisan serve` will start the app on localhost: `http://localhost:8000/`

