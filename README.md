# Reactor Prep Syllabus

## Usage

The `master` branch should always have the latest curriculum updates that are
common to all classes -- we use class-specific branches for managing the state
of an in-progress class.

The reason is because we prefer to release material as it is needed on a daily
basis; this provides us with flexibility surrounding which lessons are covered
on which days -- certain classes need more or less time with certain topics than
others.

To update a class-specific branch for a day's lesson, there are two steps:

1. Update the homepage to display the day's warmup, and
2. Update the index page to reflect the day's lesson

After making these changes, just merge them into the class's branch.

### Updating the Warmup

The warmup/self-challenge for the day is shown on the homepage, and we control
what content is shown there in `server/controller.js` at the following location:

```js
renderHome: function(req, res) {
  var warmup = 'index'; // <-- change this value to display a warmup
  helpers.exists(warmup)
    .then(function(exists) {
      if (exists) {
        res.render('index', {content: warmup});
      } else {
        res.render('index', {content: 'home'});
      }
    });
}
```

For instance, to display the warmup for week one, day two, change the `warmup`
variable's value from `'index'` to `'warmup12'`.

### Updating the Index Page

The format we use for the material on the index page is to divide lessons into
**Past Lessons** and **Today's Lessons**; the requisite changes therefore, are
to move the previous day's lessons into **Past** and reveal the current day's
lessons.

This behavior is controlled in `views/index.hbs`:

```html
<ul class="nav navbar-nav">
  <li class="active"><a href="#">Today's Lesson(s)</a></li>
</ul>
<ul class="nav navbar-nav">
  <li class="active"><a href="#">Past Lessons</a></li>
  <!--
  <li><a href="/fundamentals">Fundamentals of Programming</a></li>
  <li><a href="/intro-functions">Introduction to Functions</a></li>
  <li><a href="/booleans-conditionals">Booleans, Comparisons & Conditionals</a></li>
  ... -->
</ul>
```

Find the above markup in `index.hbs`, and simply modify the two unordered lists
to reflect the content that is about to be covered and that has been covered
already.
