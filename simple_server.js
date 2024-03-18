//import node http module and declare variables
const http =require (`http`);
const HOSTNAME = `localhost`
const PORT= 8900

//create a callball fuction (requets handler)
function requestHandler(req, res){
    console.log(req);
    res.writeHead(200)
    res.write(`My name is Armang Meshak Sale`);
    res.end();
}

//create a http server
const server =http.createServer(requestHandler);

//listen to the server on the declared port
server.listen(PORT, HOSTNAME, ()=>{
    console.log (`server is running on http://${HOSTNAME}:${PORT}`);
})