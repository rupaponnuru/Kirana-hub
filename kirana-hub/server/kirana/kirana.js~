        // Players = new Meteor.Collection("players");
        
        
user_Details = new Meteor.Collection("user_details");
validate_Users = new Meteor.Collection("validate_users");

if (Meteor.isServer) {
  Meteor.startup(function () {

 /*console.log(user_Details.remove({_id:"BuELQkTJfwiREyGzH"}));
 console.log(user_Details.find({ $in : [ {firstname: 'a'}]}));
  var userdet = (user_Details.find().fetch());
  for (i=0;i< userdet.length;i++)
      console.log(userdet[i].firstname); */
    // All values listed below are default
  collectionApi = new CollectionAPI({
      authToken: undefined,              // Require this string to be passed in on each request
      apiPath: 'collectionapi',          // API path prefix
      standAlone: false,                 // Run as a stand-alone HTTP(S) server
      allowCORS: true,                  // Allow CORS (Cross-Origin Resource Sharing)
      sslEnabled: false,                 // Disable/Enable SSL (stand-alone only)
      listenPort: 3005,                  // Port to listen to (stand-alone only)
      listenHost: undefined,             // Host to bind to (stand-alone only)
      privateKeyFile: 'privatekey.pem',  // SSL private key file (only used if SSL is enabled)
      certificateFile: 'certificate.pem' // SSL certificate key file (only used if SSL is enabled)
    });

    // Add the collection Players to the API "/players" path
    collectionApi.addCollection(user_Details, 'user_details', {
      // All values listed below are default
      authToken: undefined,                   // Require this string to be passed in on each request.
      authenticate: undefined, // function(token, method, requestMetadata) {return true/false}; More details can found in [Authenticate Function](#Authenticate-Function).
      methods: ['POST','GET','PUT','DELETE'],  // Allow creating, reading, updating, and deleting
      
      before: {  
       POST: function (objs, requestMetadata, returnObject) {
                                   var returnObject= addUser(objs, requestMetadata, returnObject);
                                   return returnObject;
                                   } ,
        GET: /* function (objs, requestMetadata, returnObject) {
                                   var returnObject = getUserDetails(objs, requestMetadata, returnObject);                      
                                   return returnObject;
                                    }*/ undefined,
        PUT: function() {console.log("After PUT");},
        DELETE: function() {console.log("After DELETE");}
        },
      
     after: {  // This methods, if defined, will be called after the POST/GET/PUT/DELETE actions are performed on the collection.
                // Generally, you don't need this, unless you have global variable to reflect data inside collection.
                // The function doesn't need return value.
        POST: undefined , 
        GET: function() {console.log("After Get");}, 
        PUT: function() {console.log("After PUT");},
        DELETE: function() {console.log("After DELETE");},
      } 
    }); 
    

    // Starts the API server
    collectionApi.start(); 
  });
}

