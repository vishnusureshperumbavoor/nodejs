var http = require("http");
var formidable = require("formidable");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath =
          "C:/Users/LENOVO/Desktop/nodejs/images/" +
          files.filetoupload.originalFilename;
        console.log(newpath);
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      fs.readFile("test.html",(err,data)=>{
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        return res.end()
      })
    }
  })
  .listen(8081);
