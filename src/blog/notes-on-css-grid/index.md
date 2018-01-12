---
title: Notes on CSS Grid
date: "2018-01-18T00:00:00.000Z"
subtitle: "A cheatsheet just for me, made by me"
---

One of the best ways for me to learn a topic is to teach a topic. To that end, I'm preparing this blog and then giving a presentation for our local front-end development meetup.

## Background

Lots of grid systems including Bootstrap, Singularity, and Susy (the big boy).

CSS Grid is pretty easy once you get started with it, but just like CSS, it gets more complicated the deeper you dive. The good news is that you don't need to dive very deep to reach some awesome power.

## Tips

Use a cheat sheet such as https://css-tricks.com/snippets/css/complete-guide-grid/

## Grid Container Syntax

### Initialize CSS Grid

```css
display: grid;
```

### Set up columns

This sets up three 200px columns.

```css
grid-template-columns: 200px 200px 200px;
```

### Set up rows

Similarly,` grid-template-rows` sets up your rows.
```css
/* Set up three 200px rows */
grid-template-rows: 200px 200px 200px;
/* The auto keyword is equal to the maximum height of the content. */
grid-template-rows: auto auto auto;
```

### Repeat syntax
You can accomplish the same thing by using *repeat syntax*.

```css
grid-template-columns: repeat(3, 200px);
```

You can mix and match the regular syntax and repeat syntax. This creates one 300px column, and three 200px columns.

```css
grid-template-columns: 300px repeat(3, 200px);
```

### MinMax syntax

`minmax` allows you to set a minimum and maximum width of your columns. Doing so helps you avoid using media queries. You can use `minmax` inside of `repeat`.

```css
grid-template-columns: minmax(100px, 200px) repeat(3, 200px);
```

### FR unit

The "fr" in the `fr` unit stands for *fraction*. Grid will split up the units according to the sum of all the `fr` units in the row, and then divvy them up according to each column's count.

So, if I have a three columns that each have `1fr` width, they will each be 33.33% wide. If they each have `2fr`, their width will also be the same because they're all equal.

If the first column is `2fr` and the next two columns are each `1fr`, then the first column will take up 50%, and the next two will each take up 25%.

```css
/* Each of the three columns will take up 33.33% width. */
grid-template-columns: repeat(3, 1fr);

/* Each of the three columns will still take up 33.33% width because they're all equal. */
grid-template-columns: repeat(3, 2fr);

/* The first column will take up 50% of the width, and the other columns will each take up 25% width. */
grid-template-columns: 2fr repeat(2, 1fr);

```


### Autofill property

`autofill` automatically adds columns to the grid layout according to the container width. The example below will create 5 200px columns. Note that these columns can be empty if elements don't exist to fill them in.

```css
width: 1000px;
grid-template-columns: repeat(autofill, 200px);
```

### Autofill + minmax + fr units = Awesome!

The syntax below will automatically create as many 200px columns in the row as possible. But, once it cannot fit any more in, it'll stretch each column out equally to fill out the entire width of the container! 😎

```css
grid-template-columns: repeat(autofill, minmax(200px, 1fr));
```

### grid-auto-rows and grid-auto-columns

`grid-auto-rows` and `grid-auto-columns` specify the height (track size) of the auto-generated columns and rows. This can be in in any unit including `fr`.

```css
/* All auto-generated rows will have 30px height */
grid-auto-rows: 30px;
```

### Masonry layout using grid

If you have grid elements that are taking up multiple columns and/or rows, you can come across situations where "holes" in the grid appear.

You can fix this by using `grid-auto-flow: dense;`. Note this will show the elements out of the original source order.

```css
/* Enable masonry like layout */
grid-auto-flow: dense;
```

## Grid Child Syntax

The following properties apply to children of grid containers.

### Have a child span multiple columns

The following rule will have the child take up two columns

```css
/* Grid child element will always take up two columns */
grid-column-end: span 2;

/* Grid child element will start on column two, and go to column 4 */
grid-column-start: 2;
grid-column-end: span 2;

/* You can also specify the exact end column */
grid-column-start: 2;
grid-column-end: 4;

/* Shorthand for this specifying the ending column */
grid-column: 2 / 4; 

/* Shorthand specifying that element always spans 2 columns */
grid-column: 2 / span 2;
```
### Have a child span multiple *rows*

Similarly, the following rule will have the child take up two *rows*

```css
grid-row-end: span 2;
```

### Always put a child into a certain row

I can see this being is useful for advertisements.

Note that you can reference rows from the end by using negative integers. So `grid-row: -2` will reference the second to last row.

```css
/* This will always be in the second row */
grid-row: 2;
```

### Have child element take up the full width of the row

The following snippet will place the `.grid-child` element into the third row and have it span the entire width of the row.

```css
.grid-child {
  grid-row: 3; /* Place the element into the third row */
  grid-column-start: 1; /* Start the element in the first column */
  grid-column-end: -1; /* End the column at the last column. Remember that you can reference
                          columns and rows from the end by using negative integers */
  grid-column: 1 / -1; /* Shorthand syntax for grid-column-start and grid-column-end */
}

```

### Place a child in a certain column and have it span multiple columns

```css

```

### 

```css

```

### 

```css

```

### 

```css

```

### 

```css

```

## Helpful syntax
### Named lines

You can use *names* instead of numbers for your lines. Note that you're not naming your regions, you're naming the lines *around the regions*. Then when you assign a child element, you assign it by *name* instead of *number*.

```css
.grid {
  display: grid;

  /* The line between the first and second column is named "content-start",
     and the line at the end is called "content-end." */
  grid-template-columns: 1fr [content-start] 3fr [content-end];
  grid-template-rows: auto [content-start] auto [content-end];
}

/* Now instead of using numbered column names, I can used the named column names. */
.grid-child {
  grid-column: content-start;
  grid-row: content_start;
}
```

### Named lines with media queries == 🤘

The cool thing about named lines is that it makes responsive web design *much simpler*. This is because, when defining placement on the `.grid-child`, you do not need to add media queries for this element &mdash; it will automatically follow the named lines. 

```css
/* Define our grid at small widths. Note that we can name the lines to the
   left and right of the grid. */
.grid {
  grid-template-columns: [content-start] 1fr [content-end];
  grid-template-rows: auto [content-start] auto [content-end];
}

/* Now, let's change the layout of the grid in a media query. */
@media (min-width: 700px) {
  .grid {
    grid-template-columns: 1fr [content-start] 3fr [content-end];
  }
}

/* And now, we only need to set the columns on our grid child once. 
   This child will follow the named lines for the media query. */
.grid-child {
  grid-column: content-start;
}
```

grid-column-end: span 2  // take up two columns
grid-row-end: span 2 // take up two rows
grid-row: 3 // will always be in 3rd row
Column placement
grid-column-start: 1; // Where the grid starts
grid-column-end: -1; // Where the grid ends
Shorthand: grid-column: 1 / -1 // starts on column 1, and goes until the end (-1)
Or you can say: grid-column 1 / span 2;



