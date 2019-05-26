var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});
router.get("/:id", function(req, res){
  switch(req.params.id)
  {
    case "index.html":{
      res.render('index.ejs', { title: 'Express' });
    }
    case "home-02.html":{
      res.render('home-02.ejs', { title: 'Express' });
    }
    case "home-03.html":{
      res.render('home-03.ejs', { title: 'Express' });
    }
    case "category-01.html":{
      res.render('category-01.ejs', { title: 'Express' });
    }
    case "category-02.html":{
      res.render('category-02.ejs', { title: 'Express' });
    }
    case "blog-list-01.html":{
      res.render('blog-list-01.ejs', { title: 'Express' });
    }
    case "blog-grid.html":{
      res.render('blog-grid.ejs', { title: 'Express' });
    }
    case "blog-list-02.html":{
      res.render('blog-list-02.ejs', { title: 'Express' });
    }
    case "blog-detail-01.html":{
      res.render('blog-detail-01.ejs', { title: 'Express' });
    }
    case "blog-detail-02.html":{
      res.render('blog-detail-02.ejs', { title: 'Express' });
    }
    case "about.html":{
      res.render('about.ejs', { title: 'Express' });
    }
    case "contact.html":{
      res.render('contact.ejs', { title: 'Express' });
    }
    case "Admin":{
      res.render('login.ejs', { title: 'Express' });
    }
  }
})

module.exports = router;
