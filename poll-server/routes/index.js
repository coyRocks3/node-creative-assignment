var express = require('express');

var router = express.Router();

var colors = [
  {
    name: 'blue',
    voteCount: 0
  },
  {
    name: 'red',
    voteCount: 0

  },
  {
    name: 'orange',
    voteCount: 0
  },
  {
    name: 'yellow',
    voteCount: 0
  },
  {
    name: 'green',
    voteCount: 0
  },
  {
    name: 'purple',
    voteCount: 0
  },
  {
    name: 'black',
   voteCount: 0
  },
  {
    name: 'white',
    voteCount: 0
  },
  {
    name: 'other',
    voteCount: 0
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colors Poll' });
});

router.post('/color', function(req, res) {
    console.log("In Color Post");
    console.log(req.body["name"]);
    for(var i = 0; i < colors.length; i++){
        if(colors[i].name == req.body["name"]){
            colors[i].voteCount = colors[i].voteCount + 1;
            break;
        }
    }
    res.send(JSON.stringify(colors));
}); 

module.exports = router;
