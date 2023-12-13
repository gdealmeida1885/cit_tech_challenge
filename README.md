##### CI&T Tech Challenge

# How to run this code

````
git clone 
yarn install
npx cypress run
````

### Bugs
The first challenge has a bug in it. Whenever the user tries to submit a form without uploading a driver's license, the form resets and clean everything up. This should be addressed by the developers. And since the focus of the test is to catch potential bugs, I consider this one as a bug and therefore, it should be treated as a success.
Also, the user is not able to attempt to upload a drivers license with an invalid CNPJ. Whenever he tries to do this, he doesn't even get a error message from the drivers input field/

The others scenarios should run fine.
