const { stdout,stdin } = require("process");
const Readline = require("readline");
const rl  = Readline.createInterface({
    input:stdin,
    output:stdout
});

rl.question("Please Enter Your Name:",(name)=>{
    console.log(`Hello ${name}`)
    rl.close();
})
