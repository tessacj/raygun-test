# raygun-test

This is the main Project folder. The frontend (written in vue) and the backend (written in node.js) are kept separate so that their dependencies do not clash. Setup instructions can be found in each file.

After setup:

1. Open raygun-demo and server in separate terminals. Run each project (For raygun-demo it's npm run serve, for server it's npm start). The Raygun demo site opens at http://localhost:8080/ and the server is listening on port 3800.

2. Use the Raygun demo site with the options in the navigation bar. As you use the demo site, errors are sent to the Raygun dashboard where you can view the errors sent. 

3. On the Raygun dashboard, you can also view the performance of the website on the Real User Monitoring tab. This is tracked with the trackevent method from raygun. It is set up on the routing paths in the frontend. Raygun will also track your location, IP Address, browser information and user information.

