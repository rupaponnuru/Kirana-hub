getUserDetails = function(objs, requestMetadata, returnObject){
                             returnObject.success = true;
                             returnObject.statusCode = 200;
                             var firstnamedet = user_Details.find().fetch();
                             var userdetails = [];
                             for (i=0;i< firstnamedet.length;i++)
                             {
                               firstval= firstnamedet[i].firstname;
                               if(firstval!=null)
                                   userdetails.push(firstval);
                             }
                             returnObject.body = {
                                                        // method: 'GET',
                                                         objs: userdetails
                                                 }; 
                                    
                             return returnObject;
                            }
                            
addUser = function(objs, requestMetadata, returnObject) {
                      returnObject.success = true;
                      var userEmail= objs.email;
                      var checkEmail = user_Details.find({"email":userEmail}).count() ;
                      if (checkEmail == 0)
                      {
                        //user_Details.insert(objs);
                        returnObject.statusCode = 201;
                        returnObject.body = {
                                               method: 'POST',
                                               obj: 'user added'
                                            };
                      }
                      else
                      {
                        returnObject.statusCode = 500;
                        returnObject.body = { 
                                              //method: 'POST',
                                              obj : 'email already exists'
                                           };
                      }
                      return returnObject; 
                     }
                                

