# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. Explain what a token is used for.

- Tokens are JWT (Jason Web Tokens) They are issued by the server, these tokens are strings with cryptic text and are stored within the client-side through a storage unit like localStorage for that session in use.

2. What steps can you take in your web apps to keep your data secure?

- Creating PrivateRoute's is a way to make web apps more secure because the user needs to be authenticated with a token through the server. The user needs to get the right credentials when logging into a web app, this will send the server those user credentials and check if they match up with what is stored within the database. User receives token and access if authenticated.

3. Describe how web servers work.

- Web server stores all the code for website or program. It is connected to the internet can store code for all kinds/many websites across the world. We can host our website on the server, meaning our code/program is stored/held within that server and can be seen on the client-side

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

- GET, PUT, POST, DELETE
