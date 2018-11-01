// ./routes/votes.js
var express = require('express');
// var Pusher = require('pusher');

var router = express.Router();
// var pusher = new Pusher({
//   appId: '<APP_ID>',
//   key: '<APP_KEY>',
//   secret: '<APP_SECRET>',
//   cluster: '<APP_CLUSTER>',
//   encrypted: true
// });
// /* Vote
router.post('/', function(req, res, next) {
//   pusher.trigger('poll', 'vote', {
//     points: 10,
//     framework: req.body.framework
//   });
  res.send('Voted');
});
module.exports = router;