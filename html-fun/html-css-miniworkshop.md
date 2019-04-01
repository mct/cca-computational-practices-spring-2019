## A mini-workshop for HTML, CSS, and JavaScript

### Basic HTML

HTML provides a blueprint, the base structure of a webpage. It's made up of a hierarchy of elements, including headers, paragraphs, bullet points, boxes with text ("div" tags), images, links, etc.

Browsers provide a default "interior decorator", or style, for these types of elements, but we can modify the appearance of these elements using CSS, which we'll talk about later.

Elements are declared using a **&lt;body&gt;** *some stuff, including other elements* **&lt;/body&gt;** syntax. To create an element, enclose its **tag** in `< >` characters, followed by any **content** you want within the element, and terminated by its **tag** in `</ >`. For example, this creates a first-level header element: `<h1>Hello!</h1>`. 

You can put tags inside the content of other tags, as in: `<p>This is a paragraph with a bit of <strong>strong text</strong> inside.</p>`. The tags now have a **parent-child** relationship; the inner tags are called **children** of the outer, **parent** tag (sometimes also called the **container**).

> **Exercise:** Open up your favorite text editor (e.g., [Atom](http://atom.io)) and create a new file called `hello.html`. Inside this file, paste in this starter HTML:
> ```html
> <html>
> <body>
>   Hi.
> </body>
> </html>
> ```
> Save the `hello.html` file and open it with Chrome. Note what you're doing: the file is a plan text file containing HTML code. Your editor shows you this code. But your browser, Chrome, interprets this code as HTML and renders it according to [the specification for interpreting HTML](https://www.w3.org/TR/html5/). (Aren't you glad you're not writing a browser?)

> **Exercise:** Create an `<h1>` header tag inside the `<body>` section. Examine the output. Add a `<small>` element inside the `<h1>` element.

> **Exercise:** Create an [&lt;img&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) tag; the `<img>` tag uses a `src=` attribute to incidte the URL (web address) of the image to be included in the page. Next, create an [anchor (`<a>`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) tag (a link!) that points to http://en.wikipedia.org/wiki/Main_Page -- the English language main page of Wikipedia.

> **Exercise:** Read through the [full list of HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element); create a `<p>` tag, a `<ul>` tag (with two or three `<li>` tags as children inside it), and a `<span>` tag. Pick three new tags from the list of all elements to create in your `hello.html` file. Put some of those tags inside other tags.

#### The Inspector

This is possibly the best part of web development: the Developer Tools. Chrome in particular has great developer tools. They let you look at the **Element Tree** (aka the **DOM**), the full hierarchy of all the elements on a web page. In addition to tags, you'll see attributes and styles.

> **Exercise:** Right-click (or control-click, or two-finger-click) on the header element you see in the output window and choose **Inspect** from the context menu. This will open up the Chrome Developer Tools, and you should see highlighted an `<h1>` element.

Next we'll load up the [English language main page of Wikipedia](http://en.wikipedia.org/wiki/Main_Page). Open the Developer Tools, and hover over the various elements of the page. What gets highlighted?

Each element on the page has a **margin**, **border**, **padding**, and **content**. What do those mean? (Hint: scroll down to the bottom of the "Styles" panel of the inspector.)

> **Research Question**: Notice that many elements have `class` and `id` attributes. What do those mean? How many elements can have the same `class` attribute? The same `id` attribute?

> **Research Question**: is the HTML source code of the file always the same as the element tree? 

> **Exercise**: Browse to your favorite web site, and inspect the visually-largest element on the page. What type of element (tag?) is it? What styling does it have? What tags are used to enclose textual content?

### CSS

CSS specifies styling information for your HTML. If HTML is the blueprint, then CSS is the paint colors, window trim, and tile in the kitchen.

CSS "style rules" consist of a **selector** that says which elements the rule applies to, and a collection of **declarations** that give actual style information. Style rules can live inside a `<style>` tag. For example:

```html
<style>
h1 {
  color: blue;
}
</style>
```

The actual CSS part is this:
```css
h1 {
  color: blue;
}
```

It says: selects all elements with tag name **h1** and sets their color to blue. Try adding it to your `hello.html` file, and you should see the color of your header element change.

>**Exercise**: Explore the following CSS attributes by setting them individually in the `h1` rule you created above:
>
> * `background: orange;`
> * `font-size: 200%;`
> * `margin: 25%;`
> * `padding: 20px 20px 20px 20px;`
> * `border: 3px;`
> * `border-radius: 10px;`
> * `width: 50%;`
> * `font-family: sans-serif;`
> * `text-transform: capitalize;`
> * `text-align: center;`
 
There's a [full list](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) on the web, of course. 

>**Exercise**: Pick an attribute, read the documentation, and ask someone what it means!

Beyond tag names, you can also **select** using the `class` or `id` attributes:

```css
h1.big {
  font-size: 200%;
}

h1#main {
  font-weight: bold;
}
```

Use the `.classname` syntax to select all elements with a given class. `tagname.classname` selects only elements of the given tag with the given class. Use `#id` to select the element with the given id.

You can also select elements that are children of other elements, for example: `.comment .author { ... }` would apply to all elements that have a class of `author` **within** elements that have a class of `comment`. This is extremely common practice.

Classes let you create consistent styling rules that you can apply to many different elements across the page. Tag names are set by the HTML standard, but classes are defined by you, the developer. For example, you could use a single class to indicate something like a warning box; each box might have a pastel red background and red bolded text with a red border:

```css
.warning-box {
  background: #fdb;
  color: red;
  font-weight: bold;
  border: 2px solid red;
  border-radius: 5px;
}
```

Then, creating a warning box is as easy as including `warning-box` in the `class` attribute of any element.

> **Exercise**: Define a new class in CSS with a bunch of attributes. Create a new paragraph tag `<p>`, and set its class attribute to the class you just created, e.g., `<p class="my-fancy-class">`.

> **Research Question**: What happens if you give an element more than one CSS class?

One last fun bit about styling: CSS also has "pseudo-classes", these are selectors that act kind of like classes, but can trigger on interactions. For example:

```css
h1 {
  color #333;
}
h1:hover {
  color: #999;
}
```

These two rules together will change the color of headers when you hover over them.

> **Exercise**: What happens when you add a `transition: color 2s` rule to `h1` above?

### Layout

In addition to style, CSS also lets you specify layout rules. But not all tags follow exactly the same rules.

Some tags are "block" elements, and others are "inline" elements. Block elements take up the whole width of their parent element, like paragraphs and headers. Inline elements don't, they flow naturally within their parent element, like images and links. You can change the default block/inline nature of elements in CSS using the `display: block` or `display: inline` declaration.

> **Exercise**: `<h1>` is a block element. Add a `display: inline` declaration to your CSS rule for `h1` -- what happens?

> **Exercise**: `<strong>` is an inline element. Consider the following HTML: `<p>This is a paragraph with <strong>strong text</strong> inside it.</p>`. What happens when you create a `strong` CSS rule with `display: block`?

Historically, websites used "absolutely-positioned" block elements with `width` and `margin` and positional properties like `left` and `right` to create columns and other structures. This was always a pain to deal with and error-prone, especially as different browsers often had slightly different behavior. But you should understand it at least a bit.

> **Exercise**: Create two block-level elements, perhaps `<div>` elements, with `id=left` and `id=right` respectively. 
> 
> Set `position: absolute` on both of them, then set `width: 400px;` on the left element, and set `left: 400px;` on the right. 
> 
> How does it look? (Columns, right! Kind of? What happens when you change the width of your window?)

Fortunately, these days, more sites are using the new **flexbox** model, which is a bit like auto-layout. There are a lot of options here, but the upshot is this: set a parent container to `display: flex` and the child elements will automatically be set into columns.

> **Exercise**: Create a `<div id="container">` element with an `<h1>` element, an `<img>` element, and a `<p>` element inside it. Set `display: flex` on `#container` in your CSS. What do you see?

> **Research Question**: Visit this [comprehensive guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to learn about what the layout possibilities are. Think about which model might be appropriate to a portfolio site! Columns? Rows? Wrapping? Sizes?

#### What about "responsive design"?

For a hot second, "responsive design" was a big buzzword. But it just means making pages that display well on a variety of screen sizes. For the most part, this is not that hard as long as most of your page is taken up by elements that grow and shrink with the screen size.

But what happens when the screen is too small to display columns side-by-side? Then you need to start thinking hard about how to display your content. Sometimes just putting elements below each other is fine, but sometimes you need to hide something behind a menu button or do something more complicated. For those cases, you can use "`@media` queries" to specify rules that only apply when the screen is a certain size or orientation. Learn more about `@media` queries at the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) -- but be warned, that pages contains a ton of jargon.

### A Practice Project

So far we've only looked at specific examples of one or two elements and made specific changes. It's a good way to learn, but it defeats the whole purpose of actually using CSS: websites are made up of repeated elements, like a list of comments, or many paragraphs, or several "related" links, or a collection of images, etc. And they'll all have the same tag, or you can give them the same class.

That means: you can style **all elements of the same type at once** with a single rule; this the power of abstraction!

Let's create and style a pretend comments section for a website. Here's some basic HTML to get us started, with three comments:

```html
<div class="comments">
  <div class="comment">
    <span class="author">zamfi</span><span class="date">11:15am, Thu, June 15, 2016</span>
    <p>This is the lamest exercise I've ever encountered. Can't we do something cool like animations with keyframes?</p>
  </div>

  <div class="comment">
    <span class="author">bhaynes</span><span class="date">11:35am, Thu, June 15, 2016</span>
    <p>At least it's practical, I guess?</p>
  </div>

  <div class="comment">
    <span class="author">zamfi</span><span class="date">11:36am, Thu, June 15, 2016</span>
    <p>Psh, whatevs.</p>
    <p>I want to learn JavaScript.</p>
  </div>
</div>
```

> **Exercises**
>
>1. Style these comments so they look good. (What looks good is up to you!) Remember that you can move stuff around using absolute positioning and `left` and `right` declarations.
>2. Add a new comment to the list.
>3. Add an avatar image to each comment.
>4. **Challenge**: add a comment input section.

### Basic JavaScript

There's a lot to programming in JavaScript (or any language), but if you remember 4 things you'll do well:

1.  To actually **do** something, you need to run a command, like this: `doSomething()`. Running a command is also sometimes referred to as "calling a function".

    Sometimes you'll need to tell your browser **what** to do that thing **with**: `doSomething(14)` or `doSomething("hi", "there")`. Those things in quotes are usually text, or CSS classes or ids, or tag names, etc. Functions don't have quotes around them; data often does. Other names for data: **parameters** or **arguments**.

2.  You can write your own functions, and often have to, like this:
    ```javascript
    function doThreeThings() {
      doOneThing(12);
      doAnotherThing(13);
      doOneMoreThing("blah");
    }
    ```
    This function is called `doThreeThings` and it runs the three functions inside the `{}`'s.

3.  You can "remember" things by assigning them to variables, like this: 
    ```javascript
    var headerElement = $('#main-header')
    ```
    This takes the result of calling the `$` function on the value `'#main-header'` and puts whatever that is in a variable called `headerElement`. Then you can just refer to `headerElement` and do stuff to it later:
    ```javacsript
    doSomething(headerElement);
    ```

4.  Some variables (like the `headerElement` above) have their **own** functions that you can call, like: 
    ```javascript
    headerElement.toggleClass('purple')
    ```
    That line says **call the `toggleClass` function that lives on the `headerElement` variable with the data `'purple'`**.

### Using jQuery

JavaScript comes with some built-in tools for handling events and changing your web page, but they're hard to use and clunky. Instead, many people use a tool called [jQuery](https://jquery.com). jQuery allows you to easily find elements in your HTML page and change them, as well as trigger actions to happen based on events.

jQuery's functionality is exposed through the `$` function. For example, `$('#main-header')` gets the HTML element whose `id` attribute is set to `main-header`, just like a CSS rule with the selector `#main-header` will apply to all elements whose `id` attribute is `main-header`.

To use jQuery, you generally need a trigger. One such trigger is provided by the `setTimeout` and `setInterval` functions. `setTimeout` schedules a function to be run later, like this:

```javascript
function togglePurpleClass() {
  $('.purpleable').toggleClass('purple');
  setTimeout(togglePurpleClass, 2000);
}

setTimeout(togglePurpleClass, 2000);
```

The code above defines the `togglePurpleClass` function, which finds all elements with class `purpleable` and toggles whether they also have the class `purple`. Then it calls `setTimeout` to say **run this function in 2000 milliseconds (i.e., 2 seconds).**

> **Exercise**: Try it! Add a single `<p class="purpleable">` tag with some content. Define a CSS rule `.purple { color: purple; }` that makes elements with class `purple` be rendered with purple text. Then copy the JavaScript code above.

> **Experiment**: What happens if you use `setInterval` instead of `setTimeout`? (What do you think will happen?) What if you toggle a different class name?

### Events

Timeouts are one way of triggering actions, but more interesting are triggers caused by human users! One of the most common is `click` events. You can listen to events using the jQuery `on` function, but there's a trick: you can only start listening for events after the page has been constructed. Here's an example that handles this for us:

```javascript
function togglePurpleClass() {
  $('.purpleable').toggleClass('purple');
}

function setup() {
  $('.purpleable').on('click', togglePurpleClass);
}

$(setup);
```

The code above keeps the `togglePurpleClass` function from before, but adds a `setup` function that actually attaches the `togglePurpleClass` function to the `click` event on anything `.purpleable`. 

Note that `click` is just one event -- and there are [very many](https://developer.mozilla.org/en-US/docs/Web/Events). 

> **Exercise**: Take a look through the [full list](https://developer.mozilla.org/en-US/docs/Web/Events) of events and pick one to replace `click` with in the example above. Try one of the "Focus Events" or "Mouse Events" first.

### Other Manipulations

In addition to toggling classes, you can use jQuery to manipulate HTML elements directly. One of the most common manipulations is to replace the content of an element, using the `.html()` function. For example, `$('.purpleable').html("Purple purple purple.")` would replace the content of every element of class `purpleable` with "Purple purple purple."

You can also apply CSS directly, which can be useful for moving single elements. For example:

```javascript
function moveButton() {
  $('button').css({ left: 100*Math.random(), top: 100*Math.random() });
}

function setup() {
  $('button').on('mouseover', moveButton);
}

$(setup);
```

This code sets the `left` and `top` properties to random values between 0 and 100 whenever the mouse moves over them, using the `{}` object syntax.

> **Exercise**: Create a new HTML file with the above JavaScript code, creating the complementary HTML and CSS.