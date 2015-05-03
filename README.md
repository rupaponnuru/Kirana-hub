# Kirana-hub
The idea is to build a model website for retail stores (Ex. Kirana shops, sweet shops).  It is fact that big big supermarkets (Ex: walmart,reliance) are eating the business of small retail stores.  To improve customer satisfaction and overcome pressure due to big  super markets , small retail stores should maintain their site &amp;  provide home delivery service.      Almost every shop keeper has smartphone these days. Shopkeepers can take ordesr via mail or txt messages from customers along with their address and then goods are delivered to their address.

Design Proposal : 
This app requires a server to act as a database. Instead of asking people to write a server program, we can provide a service [This service has to be written by us] where ...
[1] Students signup to our service lets say (backend.swecha.org, henceforth :backend:)
[2] Students can create a "collection"  ( an other table ) which will be created on :backend:
[3] Then, :backend: will give two API Authentication keys to students (one for writing and one for reading) and will create a REST API for accessing.
[4] Students do not have to specify the schema of the tables because the :backend: databases will be in Mongo (NOSQL) (hence the name "collection" and not RDBMS' tables)
[5] After this, to do any of the collection operations ( create, delete, edit and retrieve) will be done through the REST APIs

Because of this,  the topology of the project is changed. Instead of having a server-side portal for the Kirana Shop Owner, we will have another mobile application from which one can add items 
and there will be another application for client side which can see these items and then order them. All transactions will be REST based and will go through :backend:

To call these REST APIs we would need AJAX invocations. These can be standardized and adapted into a small JS library. The students need not bother with AJAX invocations, 
they just need to bother with the business logic.
