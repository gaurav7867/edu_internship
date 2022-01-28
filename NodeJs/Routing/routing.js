const http = require('http')
const port = 8600;


const server = http.createServer((req,res) => {
    if(req.url === '/'){
    res.end("Hello from the other side")
    }else if(req.url == '/about'){   
    res.end("Hello from the About side")
    }else if(req.url == '/contact'){ 
    res.end("Hello from the Contact side")
    }else{
        res.end("404 error, Page is noot exits.")
    }
})

server.listen(port,(err) => {
    if (err) throw err
    console.log(`server is listening on ${port}`)
})