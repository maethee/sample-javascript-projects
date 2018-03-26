# sample-javascript-projects

## Server requirements

Nodejs 8.*

## Docker

```
 npm run docker:build
 npm run docker:run  //port : 49161
 
```
## REST API

All of files I push in `/app` folder

```
  /app
      - controllers
      - middlewares
      - models
      - routers
      
```

### controllers
   Controlller functions get data from models, create an HTMl, display data and also return json data to client.

### middlewares
   Ciddleware functions do somethings before or after controller functions. like a authentication, redirect and get somedata if you want before controller function.
   
### models
   Models like a CRUD is necessary in most every application for create, update, delete, validations of data and prevent SQL injection.
   
### routers
   Route is point the request to controller functions
   
### crons
  Crons folder is keep all background process.
   
## Modules
  Functions can reusable to other projects.
  
## Style sheet
  Scss or Less is good choice.
  
## Testing
  I try to use Jasmine for testing feature and method.
 
## View template
  Pug is good pattern for buiid template and inject somedata to template. This greatly improves code-readability and streamlines projects with multiple developers.
