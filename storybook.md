# Getting Started
## Introduction
In this workshop, we're going to use React Storybook to speed up our UI design. We'll use this to make components for a fake landing page.

To see a live example, click here.

## Install Storybook
Open up your console and type in `npm install -g @storybook/cli`.
Then inside the directory for the project enter `getstorybook` into the console.

# Using Storybook
## Example
Inside the project directory enter `npm run storybook` into the console. Then direct yourself to localhost:6006 (or whatever path is given in the console). On the left side of the screen dropdown Button and you should be taken to the "with text" story. Try clicking on the button, at the bottom you should see an "Action Logger", the button was configured to print this inside of stories/index.js.

## Hot Reloading
Storybook has hot reloading, meaning that any change you make to a React Component (including the CSS) will change in Storybook after you save the file you're working on. Let's see this for ourselves.

Open up the "Button with text" story in the Storybook client. Then on another monitor, open `stories/index.js`.

Now, on line 12, edit the text inside of the <Button> component from 'Hello Button' and save your changes. And voila! you should be see your changes in real time.

Let's try working with the React Component itself.
