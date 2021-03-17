

module.exports = function(app,fs)
{
     app.get('/index',function(req,res){
        res.render('index.html')
     });

    app.get('/', function (req, res) {
        res.send('Hello /');
      });
      
      app.get('/world.html', function (req, res) {
        res.send('Hello World');
      });

      app.get('/model1_metadata', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "metadata.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/model1_model', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "model.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/model1_weights.bin', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "weights.bin", function (err, data) {
          res.writeHead(200, {"Content-Type": "binary"});
          res.write(data);
          res.end();
        });
      })

      app.get('/model1_test', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "model.json", function (err, data) {
          res.writeHead(200, {"Content-Type": "json"});
          res.write(data);
          res.end();
        });
      })
      app.get('/squart_metadata', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "metadata_squart.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/squart_model', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "model_squart.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/squart_weights.bin', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "weights_squart.bin", function (err, data) {
          res.writeHead(200, {"Content-Type": "binary"});
          res.write(data);
          res.end();
        });
      })
      app.get('/tree_metadata', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "metadata_tree.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/tree_model', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "model_tree.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/tree_weights.bin', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "weights_tree.bin", function (err, data) {
          res.writeHead(200, {"Content-Type": "binary"});
          res.write(data);
          res.end();
        });
      })
     app.get('/standingside_metadata', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "metadata_standingside.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/standingside_model', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "model_standingside.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/standingside_weights.bin', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "weights_standingside.bin", function (err, data) {
          res.writeHead(200, {"Content-Type": "binary"});
          res.write(data);
          res.end();
        });
      })

      app.get('/backback_metadata', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "metadata_backback.json", 'utf8', function (err, data) {
            res.end( data );
        });
      })

      app.get('/backback_model', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "model_backback.json", 'utf8', function (err, data){
            res.end( data );
        });
      })

      app.get('/backback_weights.bin', function (req, res) {
        fs.readFile( __dirname + "/../views/my_model/" + "weights_backback.bin", function (err, data) {
          res.writeHead(200, {"Content-Type": "binary"});
          res.write(data);
          res.end();
        });
      })
      app.get('/sidebomb_metadata', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "metadata_sidebomb.json", 'utf8', function (err, data) {
        res.end( data );
    });
  })

  app.get('/sidebomb_model', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "model_sidebomb.json", 'utf8', function (err, data){
        res.end( data );
    });
  })

  app.get('/sidebomb_weights.bin', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "weights_sidebomb.bin", function (err, data) {
      res.writeHead(200, {"Content-Type": "binary"});
      res.write(data);
      res.end();
    });
  })

  
  app.get('/russiantwist_metadata', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "metadata_russiantwist.json", 'utf8', function (err, data) {
        res.end( data );
    });
  })

  app.get('/russiantwist_model', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "model_russiantwist.json", 'utf8', function (err, data){
        res.end( data );
    });
  })

  app.get('/russiantwist_weights.bin', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "weights_russiantwist.bin", function (err, data) {
      res.writeHead(200, {"Content-Type": "binary"});
      res.write(data);
      res.end();
    });
  })


  app.get('/chestopener_metadata', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "metadata_chestopener.json", 'utf8', function (err, data) {
        res.end( data );
    });
  })

  app.get('/chestopener_model', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "model_chestopener.json", 'utf8', function (err, data){
        res.end( data );
    });
  })

  app.get('/chestopener_weights.bin', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "weights_chestopener.bin", function (err, data) {
      res.writeHead(200, {"Content-Type": "binary"});
      res.write(data);
      res.end();
    });
  })


  app.get('/bellybomb_metadata', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "metadata_bellybomb.json", 'utf8', function (err, data) {
        res.end( data );
    });
  })

  app.get('/bellybomb_model', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "model_bellybomb.json", 'utf8', function (err, data){
        res.end( data );
    });
  })

  app.get('/bellybomb_weights.bin', function (req, res) {
    fs.readFile( __dirname + "/../views/my_model/" + "weights_bellybomb.bin", function (err, data) {
      res.writeHead(200, {"Content-Type": "binary"});
      res.write(data);
      res.end();
    });
  })   
     
}
