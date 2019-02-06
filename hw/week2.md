## Homework 2 (due Saturday, February 9, 2019, 11:59pm)

You will be submitting each homework assignment into a new GitHub repository each week. [Here are instructions on how to do so.](https://github.com/zamfi/github-guide/blob/master/README.md) Please [email me](mailto:michael.toren@cca.edu) if you have any questions.

Last week, we named the homework repository `hw1`.  This week, name it `hw2`.

### Classwork wrap-up

In class, we wrote and adapted code to create [Mondrian](https://www.google.com/search?q=mondrian&rls=en&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiL5_mk3sDdAhUB84MKHW6aAt4Q_AUIDigB&biw=1521&bih=943) look-alikes.

**Assignment**: Modify this code, or come up with new code, that generates other work in the style of Mondrian. Be as accurate as you like in [chanelling Mondrian's own process](https://www.theartstory.org/artist-mondrian-piet.htm)!  Upload two of your favorite dynamic (i.e., not one unchanging image) Mondrian-esque pieces to your repository.

*Some hints:*  If you want, you can use `mouseX` and `mouseY`.  You may also want to look at the `random()` function that we used in the `bubbles.html` program.  If you have some questions about how those variables and functions work, you can look them up in the P5 reference as a refresher.

You are welcome to work in either [the online P5 editor](https://editor.p5js.org) or in your local code editor (such as Atom) on your computer.  No matter which you choose, save often!  If you're using Atom, I've uploaded a [template.html](https://raw.githubusercontent.com/mct/cca-computational-practices-spring-2019/master/hw/template.html) file which you can save and use as the starting point for new programs you create.

### Animations & Variables in p5

In class, we [talked about](../README.md) animations in P5 and how to use variables to track changes across frames.

Watch the following Daniel Shiffman videos about variables and animation in P5 and Javascript:

- [2.1](https://www.youtube.com/watch?v=RnS0YNuLfQQ&index=7&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- [2.2](https://www.youtube.com/watch?v=Bn_B3T_Vbxs&index=8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- [3.1](https://www.youtube.com/watch?v=Bn_B3T_Vbxs&index=8&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- [3.2](https://www.youtube.com/watch?v=LO3Awjn_gyU&index=13&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- [3.3](https://www.youtube.com/watch?v=r2S7j54I68c&index=14&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
- [3.4](https://www.youtube.com/watch?v=Rk-_syQluvc&index=15&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)

The code we wrote together in class with the two balls bouncing can be found in the [class repository README file](../README.md) under the **Week 2** section.


1. **Assignment**: We ended up with a ball that bounces left and right.  Can you make the ball move up and down instead?

2. **Assignment**: Add other variables to the code above to have other parts of the animation change over time. Perhaps color? Or size? Shape? Speed?

3. **(Optional) Challenge**: Modify the code to draw three independent circles, each with their own variables, moving in the `x` *and* `y` directions, and bouncing off any canvas edge.

### HSB: Another way to look at color

We discussed in class how the *RGB* colorspace works, where we define a color by the amount of red, green, and blue it contains.  But there are other colorspaces we can work in, such as *HSB*. Consider the following program.  In `setup()`, it calls the function `colorMode()` to changes the way P5 interprets color information from the default of *RGB* to *HSB*:

```javascript
function setup() {
    createCanvas(400, 400);
    background(220);
    // HSB with H range 0-400, S range 0-400, B range 0-100:
    colorMode(HSB, 400, 400, 100);
}

function draw() {
    let x = random(width);
    let y = random(height);
    fill(x, y, 100);
    noStroke()
    ellipse(x, y, 20);
}
```

This code uses the location of each circle to determine its color. The `x` coordinate is *also* used in the `fill` command. **Remember, these are just numbers.** It's how they're **used** that gives them meaning.

**Assignment**: Modify the `HSB` above to `RGB`.

HSB still uses 3 numbers to represent color, but they're *hue*, *saturation*, and *brightness* instead of *red*, *green*, and *blue*.

Note that when you make this modification, none of the numbers change. The only thing that changes is **what those numbers represent**.

**Assignment**: Rename the `x` and `y` variables `h` and `s` (for "hue" and "saturation"). In your `README.me` file, answer: what changes in the animation when you renamed the variables? What if you change them to nonsense names, like "dog" and "cat"?

### Submitting Homework

When you have finished your homework and uploaded all of the files to GitHub, email me a link to your repository at [michael.toren@cca.edu](mailto:michael.toren@cca.edu).
