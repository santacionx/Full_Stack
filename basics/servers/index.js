const http=require('http');
const port=8000;
// http: btw client and server  protocol
// port:  service running identified using port
// to read the files
const fs=require('fs');
// request handler to avoid loading for ever
// function reqHandler(req,res){
//     console.log(req.url);
//     // from send response server the response i need is gotcha
//     // res.end('gotcha!!');

//     // html tag to send to server 
//     // res.writeHead(200,{'content-type':'text/html'});
//     // res.end('<h1> gotcha!</h1>');

//     // html file to send to server 
//     fs.readFile('./index.html',function(err,data){
//         if(err){
//             return res.end('error');
//         }else{
//             return res.end(data);
//         }
//     })

// }

// multiple pages linking and sending to server as res
function reqHandler(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    let filepath;
    switch(req.url){
        case '/': filepath='./index.html'
        break;
        case '/profile': filepath='./profile.html'
        break;
        default: filepath='./404.html'
    }
    fs.readFile(filepath,function(err,data){
            if(err){
                return res.end('error');
            }else{
                return res.end(data);
            }
    })
};
// sending request to server 
const server=http.createServer(reqHandler);
server.listen(port,function(err){
    if(err){
        console.log("error",err);
        return;
    }else{
        console.log("sucess",port);
    }
});
// nodemon : Set-ExecutionPolicy RemoteSigned -Scope CurrentUser