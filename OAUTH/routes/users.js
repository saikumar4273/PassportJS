var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  if(!req.user) {
    res.redirect('/');
  }
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  res.send('<h1>'+req.user.displayName+'</h1><br><img src='+req.user.image+'>');
  // res.render('user',{'hi': user.req.displayName});
});

module.exports = router;
