var SingleInstance = require("single-instance");

var locker = new SingleInstance("my-app-name");

locker
  .lock()
  .then(function () {
    // We just locked our application,
    // now we can do what we want !
    console.log('application singleton mode!!');
    
  })
  .catch(function (err) {
    console.log(`existing singleton application found!!`);
    console.log(err);
    // Quit the application
  });


