# CountAnimator

A lightweight and dependency-free number counter that animates numbers incrementing or decrementing, which allows you to control the 'speed' too!

[VIEW DEMO HERE]()

<br />

## Usage

1. Either include the CDN
```

```
or install it as an NPM package.
```
npm i countanimator
```

2. Import the package (you can skip this step if you've included the CDN script).
```

```

3. Pass the necessary arguments to the constructor.

The constructor takes two arguments - an HTML element and an optional object (consists of the following keys: `start`, `end`, `steps`, `delay`).

 - `el` - HTML element that should output the number (_required_)

 - `start` - number to start counting from (_default value is 0_)
 - `end` - number to end counting at (_default value is 100_)
 - `steps` - number of steps to increment or decrement by. Only whole numbers are allowed (ie. 0, 1, 2, 3, 4, ...) (_default value is 1_)
 - `delay` - number to indicate the delay between increments or decrements. You can think of this as the "speed" of the number counter. Negative numbers cannot be used. Maximum value is 100 (_default value is 50_)

 ```
const options = {
    start: -4,
    end: 60,
    steps: 2,
    delay: 70
};
```

4. Instantiate the `CountAnimator` class and pass in the arguments object.

```
const countAnimator = new CountAnimator(el, options);
```

5. Initialize the counter when you're ready by invoking `.init()`.

```
countAnimator.init();
```

<br />

## Example
Example of a simple program that counts from 0 to 50 when you click a button:

```


const el = document.querySelector('div');
const btn = document.querySelector('button');

const options = {
  start: -4,
  end: 60,
  steps: 2,
  delay: 70
};

const countAnimator = new CountAnimator(el, options);

btn.addEventListener('click', () => {
  countAnimator.init();
});
```