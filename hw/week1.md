### Homework 1 (due Saturday, February 2, 2019, 11:59pm)

This homework has two parts. First, follow up on our in-class work experimenting with the Bubbles program.  Second, prepare for our next class session by watching a few videos and answering some questions.

Each week, you will be submitting the homework assignment in a new GitHub repository. The repository name for the first week's homework will be `hw1`. [Here are instructions on how to do so](https://github.com/zamfi/github-guide/blob/master/README.md). Please [email me](mailto:michael.toren@cca.edu) if you have any questions!

#### Getting ready to program

In class, we talked about using the online P5 editor at [editor.p5js.org](https://editor.p5js.org/).  There are advantages and disadvantages to using the online editor.  On the plus side, it's very simple to start programming right away.  On the other hand, it has some limitations that are going to get in the way as you progress.

We're going to use the online editor a lot while getting started in this class and then transition more and more to using a dedicated code editor running on your laptop.  For this week's homework, though, try to download and install a code editor editors onto your laptop and use it complete the assignment.  If you run into trouble using the editor on your laptop, you can fall back to using the online editor.  Drop me an email if you run into trouble.

1. Download and install a code editor on your laptop.  You have a couple choices.  If you don't have any particular reason to pick one of them over another, I recommend trying Atom first.  Some options:

    - [Atom](https://atom.io)
    - [Sublime Text ](https://www.sublimetext.com)
    - [Visual Studio Code](https://code.visualstudio.com)


2. For this class, we'll be using Google Chrome to run your code.  [Download Chrome](https://www.google.com/chrome/) and install it if you don't already have it.

3. Create a new folder on your computer for storing programs you work on as part of this class.  For example, you might want to create a folder named `cp1` in your Documents directory.

4. Save the file [bubbles.html](https://raw.githubusercontent.com/mct/cca-computational-practices-spring-2019/master/hw/bubbles.html) to the folder you just created.  Hint: try right-clicking the link and selecting "save-as".

5. Open the file you just saved in the Chrome Browser.  In Chrome, you can click "File" and "Open File".  You should see the same bubbles vibrating on the your screen as we saw in class.

6. Open the same file in your code editor.  Because this is an HTML file, it contains HTML as well as JavaScript code.  Look for the `<script>` tag, which contains the code.  Figure out what numbers you can change to:
    - Make the bubbles tiny or huge.
    - Make the bubbles' motions more vigorous.
    - Change the bubbles' colors.

You are running an experiment when you do the above. It helps to keep track of what changes to the code you've tried and what effect each of those changes had. Take advantage of your code editor's **undo** and **revert** functionality.

On paper, keep a table of which numbers you've changed (how do you even identify them? perhaps by line number?) and what effect that change had. See if you can figure out a theory for what effect each number has.

**Challenge**: Modify the code so that it adds more bubbles if you click *outside* of any existing bubble.

**Assignment**: Upload each of your modifications in its own file to a new GitHub repository ([instructions here](https://github.com/zamfi/github-guide/blob/master/README.md)) for this homework assignment, called `hw1`.

**Assignment**: Include a brief description in your homework repository's README.md file.

**Assignment**: Email me a link to your repository at [michael.toren@cca.edu](mailto:michael.toren@cca.edu)

7.  In class, we talked about how a CPU runs through instructions linearly performing calculations. Think about whether you have ever performed a task like this in your life. What was it?

#### Learning about P5.js

Watch the following videos by Daniel Shiffman:
-  [1.3](https://www.youtube.com/watch?v=c3TeLi6Ns1E&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=3)
-  [1.4](https://www.youtube.com/watch?v=riiJTF5-N7c&index=4&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
-  [1.5](https://www.youtube.com/watch?v=LuGsp5KeJMM&index=5&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
-  [1.6](https://www.youtube.com/watch?v=xJcrPJuem5Q&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=6)

(You are free to watch 1.1 and 1.2 as well, which introduce p5.js and the web editor, but you don't have to.)

**Assignment**: Answer the following questions in a `questions.md` file in your repository:

1. What do the numbers inside the parentheses after a function name do?
2. What’s the difference between `fill` and `stroke`?
3. The p5 web editor has a built-in console — but it turns out that Chrome also has a console to display errors. Do some googling to find out how you can open the Chrome console. Then, try to find a website that has errors — visit a website, open the console, and see if there are any red-highlighted items. Take a screenshot and upload it into your repository.
4. What is the keyboard shortcut to open the JavaScript console in Chrome on your system?
