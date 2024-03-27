const fs = require('fs');

//Writing to file
fs.writeFileSync('welcom.txt','Hello Node');

//Reading from file
fs.readFileSync('welcome.txt','utf8',(err, data)=>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    console.log('Data from hello.txt:', data);
}
);