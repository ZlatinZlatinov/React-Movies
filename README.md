# React-Movies
Movies catalog using ReactJS 


## Set-up the project: 


 - ### Download the project form [here](https://github.com/ZlatinZlatinov/React-Movies/archive/refs/heads/main.zip)(ofcourse)
 - ### Extract it in a separate folder
 - ### I would recommed using VSC, so that you can open the folder with VSC and run in the console npm install, but you can use cmd or something like that 
 - ### You will need to wait a few minutes because this will install the needed libraries (Don't worry, no bitcoin mining tools were added :D)
 - ### While you are waiting you can play this [song](https://www.youtube.com/watch?v=xy_NKN75Jhw) (Trust me, it will take some time...) 
 - ### Once done installing the packages, you will probably see some errors such as: 
 ![Errors you might see:](https://github.com/ZlatinZlatinov/React-Movies/blob/main/src/static/images/possibleErrors.png "errors")
 - ### Don't worry, everything is fine if you are seen those, but don't stop the song yet! 
 - ### Now run npm start in the console and wait for the browser to open and if it does you are ready to go! 
 
## Used libraries/templates/tools:

  - ### Well... the project is made with ReactJS, so we must mention the 'create-react-app' 
  - ### react-auth-kit, check documentation [here](https://authkit.arkadip.dev) Library for Authentication (saves lives) 
  - ### react-router-dom check documentation [here](https://reactrouter.com/en/main/start/tutorial) Used for page routing and navigation 
  - ### Font Awesome for react, check documentation [here](https://fontawesome.com/v5/docs/web/use-with/react) Used to add some font awesome images 
  - ### react-multi-carousel, check documentation [here](https://github.com/YIZHUANG/react-multi-carousel) I made a simple carousel on the homepage, for mote info read further down below 
  - ### The project was made with a html/css template from Templates Hub, [link](https://www.templateshub.net/template/Film-Review-Movie-Database) for the template (and yes I've changed it just a bit) 
  
## Using the carousel:

  - ### You wont see the carousel on the home page because the app is making a request to an API  from [The Movie DataBase](https://www.themoviedb.org/) , for which it needs a token, but I can't let you have mine. 
  - ### So you can register there and get yourself a token and see how the carousel works. You can watch [this](https://www.youtube.com/watch?v=FlFyrOEz2S4) video for more information about the API 
  - ### Once you get yourself a token, go in the App.js file and in the routes homepage path ('/') replace the MainView component with the MovieSlider component and hit save 
  - ### Also you will need to replace in the MovieSlider component the 'url' and the 'imgSrc' with your own using the token you have. 
  
## Link to YouTube Demo: [link](https://youtu.be/yYy0S44OdcU)
  
