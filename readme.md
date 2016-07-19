# Fluxoti-test

Tecnologies used (at this time):

Front:
- VueJS v2.0.0-beta.2
- Vuex v2.0.0-rc.3
- Vue Resource v0.9
- Laravel Elixir v6.0.0-9
- Jade
- SCSS
- Webpack

Back:
- Laravel 5.2
- guzzlehttp/guzzle ~6.0

## Installation

```
composer install
npm i
npm run dev
php artisan serve
```

For production you can run `npm run prod`


## Routes

#### GET `/`
+ Response: HTML

#### GET `user/:username`
+ Response
    + Success
    
                {
                    "github_response_code": 200
                    "data": {
                        ...
                    }
                }
    + Error (code and message may change)
                
                {
                    "github_response_code": 404
                    "message": "Not Found"
                }