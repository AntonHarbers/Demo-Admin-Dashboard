# The Odin Project - Admin Dashboard Demo

A reactive admin dashboard created using html, css and javascript for the odin project.

[Live Link](https://antonharbers.github.io/Demo-Admin-Dashboard/)

![Screenshot of Daschboard Page](/images/repoImage.png)

## Folder Structure

```
    /.git           -> This git repository
    /icons          -> Contains the home icon and the favicon
    /images         -> Contains the images from the app and repo
    /styles
        content.css     -> styling the content section
        header.css      -> styles for the header
        sidebar.css     -> sidebar styling
        style.css       -> Overarching styles and importing all other stylesheets
    index.html      -> Contains all the content
    README.md       -> This Readme
    script.js       -> Contains the logo animation script
```

## Key Concepts

### Divide and Conquer with CSS

I created multiple CSS stylesheets in order to keep track of the different areas of the dashboard. I have the content.css file for all the content styles, the header.css file for the header styles and the sidebar.css file for the sidebar styles. The main style.css document is then linked in the html file and used for global styles and to import the other stylesheets (more on this down below).

You can divide and conquer by focusing on different aspects separately, like layout, colors, and typography, which makes troubleshooting and updates way smoother. Plus, it's a breeze to collaborate with others when your CSS isn't one giant jumble.

Ontop of those benefits it makes the code easier to read and easier to follow after not having looked at it for a while.

### @Import

Using @import in CSS is like having a neat toolbox where you can keep your styles organized and easily accessible. It allows you to import one style sheet into another, which is super handy for maintaining consistency across different pages or components. This way, you can update styles globally in one place, and see those changes reflected everywhere.

CSS:

```
    @import url('path-to-your-stylesheet.css');
```

Just pop this line at the top of your CSS file, and you're importing styles like a pro. Keep in mind the path should be the relative or absolute path to the stylesheet you want to import.

### Grid vs Flexbox

In web development, CSS Grid and Flexbox are two powerful layout models that offer different approaches to structuring content. CSS Grid is ideal for creating complex, two-dimensional layouts where control over both rows and columns is needed. It excels in scenarios where a precise, grid-based layout is required. Flexbox, on the other hand, is more suitable for one-dimensional layouts, focusing either on rows or columns. It's perfect for aligning content within a container and is especially useful for responsive designs where elements need to adjust dynamically.

Here are examples of both:

CSS Grid:

CSS:

```
    .container {
        display: grid;
        grid-template-columns: auto auto auto; /* Defines three columns */
        gap: 10px; /* Space between grid items */
    }

    .item {
        background-color: lightblue;
        padding: 20px;
        text-align: center;
    }
```

Flexbox:

CSS:

```
    .container {
        display: flex;
        justify-content: space-between; /* Aligns items with space between them */
    }

    .item {
        background-color: lightcoral;
        padding: 20px;
        text-align: center;
    }
```

In the Grid example, .container is set up as a grid with three columns, while in the Flexbox example, .container is a flex container with items spaced evenly. The choice between Grid and Flexbox depends on the specific layout requirements of the project.

## Final Notes

This was the most challanging CSS project so far. All the containers inside containers and all the little details needed made it all a little convoluted. Splitting up the CSS and taking it one section at a time really helped compartmentalize the issues and keep the overview.
