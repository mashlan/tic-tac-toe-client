[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic-Tac-Toe Project  Client


## URL to play the game
<https://angmas.github.io/tic-tac-toe-client/>

## Issues Log
- Need to NOT create a new game if there is a blank one that is
  ready to be used. Clicking multiple times on the 'Play A Game'
  nav link, 'Start a New Game' button on the TIC TAC TOE page,
  will increase the player's games started counter.

- Nav bar does not collapse into the hamburger menu when in
  smaller media sizes.

- Form validation and ajax api failure messaging needs to be styled
  more consistently with each other.

- Code could be refactored to be more organized. I want
  to separate the Tic Tac Toe page events and the Game
  Statistics events.

## Technlogies used
- Boostrap 3.3.7
- JQuery
- JavaScript
- HTML
- CSS
- Ruby on Rails
- Ajax
- Grunt

## Development Approach
I believe I spent about 75% of my time struggling with
HTML and CSS layout and form validation. Since I already
knew that those were my weakest areas, I started with
what I was more comfortable with: API calls and Javascipt.
In a nutshell, the best scription of how I developed is
that I got everything working and then moved the pieces into
the shapes that I made sense to me.

I first developed the logic to detect the the winning lanes for the Tic Tac Toe grid. I copied the boggle challenge solution Abandoned played with in the bash console with node until I felt
really comfortable with it. I started with one set of coordinates
and eventually designed an array with all eight coordinates
that I looped through to determine the win.

After that, I worked on the front end in the following order,
adding each to a single page:
- Tic tac toe grid
- The Sign up/in/out, and change password forms (which were
  super easy since I had working code from the patch training).
- The Game Statistics page (during which I ended refactoring
  the game winning logic so that it was easier to call from
  both the game grid and a button click event)

Once I had all of the individual pieces working, I spent some
time deciding how I wanted the final layout. I know that this is
totally backwards, but I felt like I needed more play time
with the individual sections visible on page before I could
feel comfortable playing with the hide/show functions.

While working on the layout, I also had fit in the form
field validations and api call error handling. I actually crammed
in those two different scopes of work together due to the time crunch.



## User Stories
-   [Spreadsheet with user stories] (https://drive.google.com/open?id=1JQ75G0IxGLu3HlFi_2D7e7Izc0_7nW45IE8v4qeNjkw)


## Wireframes
-   [Slide deck with wireframes] (https://drive.google.com/open?id=1vc7G2eOTmCbDvsQd_2jnym0QP2-w8-Z2JD2Eoei6hsA)



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
