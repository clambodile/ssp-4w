# Nesting

## Lesson

### Intro to Nesting
[Slides](https://docs.google.com/presentation/d/1aeBRIWOHMkXKeA3bdIDXIQr1_PJ6TMOJm0Eo2ItWbO4/embed?start=false&loop=false&delayms=3000)

### Nesting
[Slides](https://docs.google.com/presentation/d/1Qv7AFLOmgMzNPW7u7jizyTbm8kaMS-OOC95bcsmIL9Q/embed?start=false&loop=false&delayms=3000)

## Exercises

### Basic Requirements

#### Review :
* Retrieve the value "comeGetMe!" in each of the following data structures. Store them in variable(s)/data structure(s) of your choice.

```js
var arrayA = ["hello", "world", "hack", "reactor", "comeGetMe!", "is", "awesome"];
var arrayB = [true, false, 100, 200, "comeGetMe!", "Batman", "Robin",];
var objA = {
    name : "Joker",
    favoriteColor : "Purple",
    catchPhrase : "comeGetMe!"
}
var objB = {
    yogurtFlavor : "Vanilla Tart",
    serialNumber : "64928599301ADDG",
    companyName : "comeGetMe!",
    shippingAddress : "1600 Pennsylvania Ave NW, Washington, D.C."
}
```

#### Accessing Nested Elements

#### Exercise 1:

* How would you access the the value of `pets`?

```js
var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : "dogs"
}
```

What if the value associated with `pets` changed to :

```js
var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : {
        dogs : 13,
        cats : 10,
        birds : 30,
        fishes : 23
    }
}
```

* How would you access and store the **value** of the property `pets`?

In the original version of `myStore`, the value stored in `pets` property was a "string". In the second (modified) example, it was an "object". Did you access them differently?

_Now try this :_

* Retrieve the number of each pet the `pets` object. Store each of them in variables for easy reference later.

#### Exercise 2:

* Retrieve the specific property of each small box inside the `bigBox` and store it in the variables provided (replace `null`);

```js
var bigBox = {
    smallBoxA : {weight : 12, volume : 15, full : true},
    smallBoxB : {weight : 22, volume : 12, full : false},
    smallBoxC : {weight : 19, volume : 19, full : false}
}

var volumeOfSmallBoxA = null;
var weightOfSmallBoxB = null;
var isSmallBoxCFull = null;
```

Practice accessing and retrieving all the other elements in `bigBox`, and create variables for each of them.


### More Practice

* Create a function `BoxMaker` that returns an object `box` with the following properties:
    * length (number)
    * width (number)
    * height (number)
    * contents (array)

* Create a function `randomInt` that takes in a number, and returns a random integer between 1 and that parameter.
    * **Hint : `Math.random()`**

* Length, width, and height need values. Change the values in `BoxMaker` using the `randomInt` function to give your box random values. Note the max they should have.
    * length max 5
    * width max 10
    * height max 10

* Create 3 "box" variables and invoke `BoxMaker` on each. Check to make sure each variable is a `box` object -- this is important.

Example:
```js
var sampleBox1 = BoxMaker(); //creates a "box" object and assigns it to "sampleBox"
var sampleBox2 = BoxMaker(); //creates another "box" object, and is completely independent of the 1st function invocation in "sampleBox"
typeof sampleBox1; //"object"
typeof sampleBox2; //"object"
```

* Push all your box variables from the previous task into a `warehouse` array. This array will now contain `box` objects.
    * Check this array in your console. Does it contain object values?

* Create a function named `orderBoxes` that takes in a number argument. When invoked, it will create a `box` object using `BoxMaker` as many times as the argument asks. Each created `box` object should be pushed to `warehouse`.
    * Have a total of 10 boxes in the `warehouse`.

* Write a function `getVolume` which takes in a `box` object as an argument, and returns its volume.

* Invoke `getVolume`, and pass in the first value of `warehouse`.


**Argh! We forgot to put a few things in each box when we made them in the factory!**

* Use a loop to add these items to **each box's contents array** in the `warehouse`. :
    - "safety manual"
    - "mothballs"

### Advanced

Copy and paste this code block into your Javascript file. There is no need to edit anything that isn't a comment.
```js
var youDontNeedToWorryAboutAnythingInHere = function() {
    var NameArray = ['Noel Plain', 'Steffanie Plain', 'Hester Sanderfur', 'Retta Plain', 'Idella Saur','Shila Plain', "Marybeth Peavler", "Chadwick Jin", "Jerold Chauez", "Roselle Plain", "Doria Figgins", "Seth Arvizu", 'Gloria Wyche', "Melodi Plain", "Robin Shackleford", "Jack Plain", "Marina Prost", "Melvina Plain", "Ryan Plemons", "Janis Ohare", "Assata Shakur", "Kanye West", "Jay-Z", "Mariah Carey", "Bianca Gandolfo", "Cedric the Entertainer", "Chloe Plain"];
    var JobArray = ['Mortician', 'Broadcaster', 'Craftsperson', 'Engineer', 'Interior designer', 'Nun'];
    var CityArray = ["Scottsdale, Arizona", "Oakland, California", "Stockton, California", "New York, NY"];
    var emptyNetwork = [];

    function createNetwork(collection){

        for (var i = 0; i < NameArray.length; i++) {
            var randomJob = JobArray[Math.floor(Math.random() * JobArray.length)];
            var randomCity = CityArray[Math.floor(Math.random() * CityArray.length)];

            collection.push(createNewUser(NameArray[i], randomJob, randomCity));
        }

        return collection
    }

    return createNetwork(emptyNetwork);

}

function createNewUser(username, job, city){
    var newUser = {
        username: username,
        job: job,
        city: city,
        friends: [],
        family: [],
        coworkers: [],
    };

    return newUser;

};
// creating the user you're going to be adding to
var joeyProfile = createNewUser('Joey Plain', 'Engineer', 'Oakland, California');
// creating the network collection you're going to be pulling
var allUsers = youDontNeedToWorryAboutAnythingInHere();
// check the console to see what these look like

//console.dir(ourUser);
//console.dir(userNetwork);

// YOUR CODE HERE

```

Study the structure of each `newUser` object, either in the code above, or on your console.
    - `joeyProfile` is a `newUser` object
    - `allUsers` is an array of multiple `newUser` objects

#### Prompt:
Our User, Joey Plain, has just signed up for Facebook!
He's very excited and wants to start building out his network as quickly as possible  -and we're going to help him get started.

They are used to create Joey's user object (joeyProfile),
and the network of all users on Facebook (allUsers).
We're going to use allUsers to help him find his friends, family, and coworkers.

1) First, let's inspect joeyProfile and allUsers to see what we have.

* console.dir the joeyProfile object.
   It should have friends, family, and coworkers arrays.

* console.dir the allUsers collection.
   It should have > 20 objects with the same properties as your joeyProfile object.

2) Next, let's add some friends to the empty joeyProfile friends collection.

* Loop through the allUsers array.
     On each iteration, we'll have a single user object.

* If a user in the allUsers array is from the same city as joeyProfile,
     push the username to the joeyProfile friends array.

3) Next, let's add some coworkers to the empty joeyProfile coworkers collection.

* Loop through the allUsers array.

* If a user in the allUsers array has the same job as Joey,
   push the username to the joeyProfile coworker array.

4) Next, let's add some family members to the empty joeyProfile family collection.

* Loop through the allUsers array.

* If a user in the allUsers array has the same last name,
   push the username into the joeyProfile family array.

* **You'll have to do something special to check JUST the last name.
   Check out the split() function.**

5) Now let's make sure there aren't any duplicate usernames in our friends and family arrays.
   *  If 'Doug Flutie' is in our family array, it shouldn't be in our friends array.
   *  If it is, let's delete it from our friends array, as family is more important to Joey.

* Loop through our family array.

* Inside of our family loop, loop through our friends array.
   What this is doing?
   As we loop through each family member,
   check that family member against every person in the friends array.

* If the current family member is equal to the current element of our friends array,
   delete that element from our friends array.

* There are a couple of ways to delete things from an array.
   Look up .splice() and try to use that.

6) Now let's make sure there aren't any duplicate usernames in our friends and coworkers arrays.
   *  If 'Doug Flutie' is in our friends array, it shouldn't be in our coworkers array.
   *  If it is, let's delete it from our coworkers array, as friends are more important to Joey.

* Loop through our friends array.

* Inside of our friends loop, loop through our coworkers array.

* If the value of the current element inside of our coworkers array is equal to
   the current element of our friends array, delete that element from our coworkers array.