Our project aims to create a movie database website promoting writers of "Western" genre movies. It will let people browse their favourite Western films and
see who wrote, what other films these writers have created as well as who they usually work with. Additionally you can create a list of your favourite movies and
writers, to keep track of whats happening in and around the films you like.

At this stage we have implemented the basic structural framework of the application, the API calls we want to make
so you can now use both browsing features (movies,writers) quite like intended and 
add movies to you users favourite page.

Left to do is a lot of esthetic refinement of the graphical interface, the implementation and correction of features such as favouriting writers, authentication
aswell is not fully functional. Persistance is not yet implemented either.

The project file is structured like follows:

Images: image resources
Presenters: Presenters for all views
Views: Views containing jsx script for each view of the app
MovieModel: Central model, contains all attributes relevant for the user and application aswell as functions for retrieving and updating them
MovieSource and IMDBsource: Contains the necessery logic for executing the API calls 
FirebaseModel: Saving and reading from firebase. Will also later include persistance
ResolvePromise: Resolving a promise from for example an API call
InkRoot: Contains routing for the views
index: starts the application.

