var Rsync = require('rsync');
var chalk = require('chalk');

var path = process.argv.length > 2 ? process.argv[2].split("=")[1] : "";
var prefix = path ? path.split("/")[0] + "." : "";

process.env.PUBLICURL = process.env.PUBLICURL || `http://${prefix}iuga.info`;

// Build the command
var rsync = new Rsync()
  .exclude('.DS_Store')
  .flags('av')
  .shell('ssh -p 7822')
  .source('./build/')
  .destination(`iuga@iuga.info:~/www/${path}`)

console.log("");
console.log("");
console.log("Deploying to Server: " + chalk.green(process.env.PUBLICURL));
console.log("You will need to input your " + chalk.blue("password"));
console.log("");
console.log("");

// Execute the command
rsync.execute(function(error, code, cmd) {
  // we're done
  if (error) {
    console.log(cmd);
    console.log("");
    console.error(error);
  } else {
    console.log("");
    console.log("");
    console.log("Deployed!! visit it at: " + chalk.green(process.env.PUBLICURL));
  }
  console.log("");
  console.log("");
}, function(data){
  process.stdout.write(data);
});
