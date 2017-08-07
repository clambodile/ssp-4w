var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var marked = require('marked');
var path = require('path');
var highlight = require('highlight.js');

var paths = {
  lessons: path.join(__dirname, '..', 'lessons'),
  warmups: path.join(__dirname, '..', 'warmups'),
  templates: path.join(__dirname, '..', 'views', 'partials')
};


// Convert all lessons in `path`
function convertLessons(path) {

  // Convert a single lesson
  function convertLesson(lesson) {
    return fs.readFileAsync(path + '/' + lesson, 'utf-8')
      .then(function(markdownString){
        return marked(markdownString, {
          highlight: function (code) {
            return highlight.highlightAuto(code).value;
          }
        });
      })
      .then(function(content) {
        var fileName = lesson.replace(/.md/g, '.hbs');
        return fs.writeFileAsync(paths.templates + '/' + fileName, content);
      });
  }

  return fs.readdirAsync(path)
    .each(function(lesson) {
      return convertLesson(lesson).then(function() {
        console.log('Successfully converted:', lesson, 'into .hbs template');
      });
    })
    .catch(function(err) {
      throw('Error initializing Templates:', err);
    });
}

module.exports = {

  initialize: function() {
    var _paths = [paths.lessons, paths.warmups];
    return Promise.map(_paths, convertLessons);
  },

  exists: function(lesson) {
    return fs.readdirAsync(paths.templates)
      .map(function(template) {
        return template.split('.')[0];
      })
      .then(function(templates) {
        return templates.indexOf(lesson) > -1;
      });
  }
};
