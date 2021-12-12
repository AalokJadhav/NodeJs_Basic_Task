const fs = require('fs');
const path = require('path');
const http = require('http');
const pokemon = require('pokemon');

//     Module
//   - Filebase Module 
//   - BulidIn Module
//   - Third-Party Module


console.log('Hello World..!');
const a = 420;
const b = {
    avarage: (c, d) => {
        console.log((c + d) / 2);
    },
    percent: (e, f) => {
        console.log((e / f) * 100);
    }
}
// console.log('Bulid In File System :',fs);
console.log(a);

//read file
const filesystem = fs.readFileSync('./fs.txt','utf8',(err, data) => {
    if(err) {
        return err;
    }
    console.log(data);
})

console.log(filesystem);
console.log('I am First');
module.exports = b;

//create file
const new_file = 'This is made by fs.writeFileSync';
fs.writeFileSync('./fs1.txt',new_file)

//file extension
const file_path = path.extname('/Node_Basic/index.js')
console.log(file_path);

//base name
const base_name = path.basename('F:/Projects/NodeJs/Node_Basic>');
console.log(base_name);

//to get directory
const directory = path.dirname('F:\Projects\NodeJs\Node_Basic>');
console.log(directory);

//to create random pokemon
console.log(pokemon.random());

//to get all pokemon
console.log(pokemon.all());


//create server
const PORT = 4000;
const hostname= 'localhost'
const home = fs.readFileSync('./index.html',"utf8");

// current file path
console.log(__filename);
const server = http.createServer((req,res,next) => {
    if(req.url === "/") {
       return res.end(home);
    }
    if(req.url === "/about") {
        return res.end('<h1>About Page</h2>');
    }
    if(req.url === "/contact") {
       return res.end('<h1>Contact Page</h2>');
    }
    if(req.url === '/service') {
        return res.end('<h1>Service Page</h1>')
    }
    else {
       return res.end('<h1> 404 Page Not Found..!</h1>')
}
});

server.listen(PORT,hostname,() => {
    console.log(`server is running on http://${hostname}:${PORT}`);
})

