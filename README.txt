Our project aims to create a movie database website promoting writers of "Western" genre movies. It will let people browse their favourite Western films and
see who wrote them. Additionally you can create a list of your favourite movies and writers, to keep track of whats happening in and around the films you like.

The project file is structured like follows:

Images: image resources
Presenters: Presenters for all views
admin.css: styling for our application
Views: Views containing jsx script for each view of the app
MovieModel: Central model, contains all attributes relevant for the user and application aswell as functions for retrieving and updating them
MovieSource and IMDBsource: Contains the necessery logic for executing the API calls 
FirebaseModel: Saving and reading from firebase. Responsible for per user persistance
ResolvePromise: Resolving a promise from for example an API call
InkRoot: Contains routing for the views
index: starts the application.
writerpictures: Contains 25 AI genereted random pictures for our writers.


In the project directory, you can run:

npm install
install npm in order to be able to run related commands

npm run dev
Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

npm run build
Builds the app and structures the dist folder

firebase deploy
Deploy the appplication!
