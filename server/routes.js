var controller = require('./controller.js');

module.exports = function(app) {

  app.get('/:lessonId', controller.renderLesson);
  app.get('/', controller.renderHome);
  app.get('*', controller.handleWildCard);

};
