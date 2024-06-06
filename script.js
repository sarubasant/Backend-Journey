const fs = require('fs');

// fs.writeFile("hey.txt","hi dost, kaise ho?", function(err){
//     if(err) console.error(err);
//     else console.log("file created");
// })

// fs.appendFile("hey.txt","Mey toh accha hu", function(err){
//     if(err) console.error(err);
//     else console.log("file created");
// })

// fs.rename("hey.txt","hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("file rename done")
// })

// fs.copyFile("hello.txt","./copy/chacha.txt",function(err){
//     if (err) console.error(err);
//     else console.log("Done")
// })

// fs.unlink("./copy/chacha.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Deleted");
// })

fs.rm("./copy",{recursive: true},function(err){
    if(err) console.error(err);
    else console.log("Deleted folder");
})