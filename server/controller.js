var helpers = require('./helpers.js');

module.exports = {

  renderLesson: function(req, res) {
    var lesson = req.params.lessonId;

    helpers.exists(lesson)
      .then(function(lessonExists) {
        if (!lessonExists) {
          throw new Error('Lesson not found: ' + lesson );
        }
        req.session.currentLesson = lesson;
        res.render('index', { content: lesson });
      })
      .catch(function(err) {
        res.render('index', { content: 'fourOhFour' });
      });

  },

  renderHome: function(req, res) {
    var warmup = 'index';
    helpers.exists(warmup)
      .then(function(exists) {
        if (exists) {
          res.render('index', {content: warmup});
        } else {
          res.render('index', {content: 'home'});
        }
      });
  },


  handleWildCard: function(req, res) {
    res.redirect('/');
  }

};
