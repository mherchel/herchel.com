---
title: Notes on CSS Grid
date: "2018-01-18T00:00:00.000Z"
subtitle: ""
---

This is preparation for my upcoming talk at Front-end Awesome

## Background

Lots of grid systems including Bootstrap, Singularity, and Susy (the big boy).

CSS Grid is pretty easy once you get started with it, but just like CSS, it gets more complicated the deeper you dive. The good news is that you don't need to dive very deep to reach some awesome power.

## Tips

Use a cheat sheet such as https://css-tricks.com/snippets/css/complete-guide-grid/

## Syntax

### Initialize CSS Grid

```css
display: grid;
```

### Set up columns

This sets up three 200px columns
```css
grid-template-columns: 200px 200px 200px;
```

### Repeat syntax
You can accomplish the same thing by using *repeat syntax*

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

### 

```css

```

### 

```css

```

### 

```css

```
