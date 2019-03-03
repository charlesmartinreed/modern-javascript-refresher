# What is an API?
Application Programming Interface. These are present in many devices, online and off.

An API utilizes a structured request and response. A piece of software asks for data formatted in a certain manner and promises to provide the data format the API requires.

All APIs have their own rules and structure.

# What is REST?
Representation State Transfer

REST is an architectural style, or design patter, for designing networked applications.
Needs a stateless, client-server protocol - almost always HTTP.
Server objects are treated as resources that can created, destroyed; GET, POST, DELETE, etc.

# What type of HTTP Requests are there?
Common Request types:
GET : Retrieve data
POST : Submit data to be processed to a specific resource
PUT : Update a specified resource
DELETE: Delete a specified resource

Less common Requests:
HEAD : GET, but just returns header
OPTIONS : Returns the supported HTTP methods
PATCH : Update partial resources

# API Endpoints
These are the URLs used to accomplish specific API tasks
GET might be https://someurl.com/api/users for grabbing all users

The same URL can be used for different request types; the important thing to note is that the request METHOD changes.
