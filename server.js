const http = require('http');

const server =http.createSeerver((req, res) =>{
    res.writeHead(200,{'content-Type': 'text/html'});
    res.end('<h1>Hello Node!!!!<h1/>\n');
}
);

server.listen(3000,()=> {
    console.log('Server is running on port 3000');
}
);