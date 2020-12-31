# About this Application
This is a Session Editor App using ExtJS
This project shows a simple to demo how a ExtJS MVC components are created. Uses various funcationalities provided by ExtJS like:-
- Containers, Components and Layout managers
- Stores
- Grid Panel
- Loading data from JSON file
- CRUD operation using proxies
- It uses MVC architecture.
- events like doubleClick and select

# Prerequisite
## Prerequisite for Ext JS Setup
1.	XAMPP - We will use apache as web server

    Start apache server. If not started please refer below link to change port:
    https://stackoverflow.com/questions/18300377/xampp-apache-error-apache-shutdown-unexpectedly
2.	Sencha CMD
3.	Ext JS SDK

## Steps to Create sample Ext JS application
1.	Create folder my-app under location C:\xampp\htdocs\
2.	Open command prompt with location - C:\xampp\htdocs\
3.	Command to generate sencha app:

    a)	sencha -sdk path-to-sdk-folder generate app app-name path-to-your-app
   
    b)	For example - sencha -sdk d:\Sencha\ext-4.2.2.1144 generate app HelloWorld C:\xampp\htdocs\sencha-app\my-app
   
4.	Run command -  sencha app build in your my-app

5.	After starting apache server - your app should be running on url – http://localhost:8080/sencha-training/my-app/

# To run this project follow below steps
1. First create a sencha app by running the below command in terminal - 
sencha -sdk d:\Sencha\ext-4.2.2.1144 generate app SE C:\xampp\htdocs\sencha-app\myApp
1. Download/clone this repo.
2. Copy all the files and folder present in my-first-app folder.
3. Paste/Replace these files and folder into your app directory C:\xampp\htdocs\sencha-app\myApp
4. Open this link in your browser - http://localhost:8080/sencha-app/myApp/
Note: Use Firefox or Microsoft edge because the controllers are not working properly in Chrome browser.

# SE/app

This folder contains the javascript files for the application.

# SE/resources

This folder contains static resources (typically an `"images"` folder as well).

# SE/overrides

This folder contains override classes. All overrides in this folder will be 
automatically included in application builds if the target class of the override
is loaded.

# SE/sass/etc

This folder contains misc. support code for sass builds (global functions, 
mixins, etc.)

# SE/sass/src

This folder contains sass files defining css rules corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'SE'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in SE/.sencha/app/sencha.cfg. 

# SE/sass/var

This folder contains sass files defining sass variables corresponding to classes
included in the application's javascript code build.  By default, files in this 
folder are mapped to the application's root namespace, 'SE'. The
namespace to which files in this directory are matched is controlled by the
app.sass.namespace property in SE/.sencha/app/sencha.cfg. 
