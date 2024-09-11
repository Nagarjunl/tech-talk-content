*   CSS Grid Layout (aka “Grid” or “CSS Grid”), is a two-dimensional grid-based layout system

Properties for the Parent
---------------------------

.container {
  display: grid | inline-grid;
}

----------------------------------------------


grid-template-columns/grid-template-rows

.container {
  grid-template-columns: ...  ...;
  /* e.g. 
      1fr 1fr
      minmax(10px, 1fr) 3fr
      repeat(5, 1fr)
      50px auto 100px 1fr
  */
  grid-template-rows: ... ...;
  /* e.g. 
      min-content 1fr min-content
      100px 1fr max-content
  */
}

----------------------------------------------


.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}

----------------------------------------------


.container {
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 25% [row2-end];
}

----------------------------------------------

.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}

Which is equivalent to this:

.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start];
}

.item {
  grid-column-start: col-start 2;
}

----------------------------------------------

.container {
  grid-template-columns: 1fr 1fr 1fr;
}

----------------------------------------------

The free space is calculated after any non-flexible items. In this example the total amount of free space available to the fr units doesn’t include the 50px:

.container {
  grid-template-columns: 1fr 50px 1fr 1fr;
}

----------------------------------------------
----------------------------------------------

grid-template-areas

.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}

----------------------------------------------

grid-template - A shorthand for setting grid-template-rows, grid-template-columns, and grid-template-areas in a single declaration.

.container {
  grid-template: none | <grid-template-rows> / <grid-template-columns>;
}

.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}

That’s equivalent to this:

.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}

Since grid-template doesn’t reset the implicit grid properties (grid-auto-columns, grid-auto-rows, and grid-auto-flow), which is probably what you want to do in most cases, it’s recommended to use the grid property instead of grid-template.

----------------------------------------------
----------------------------------------------

column-gap
row-gap
grid-column-gap
grid-row-gap

.container {
  /* standard */
  column-gap: <line-size>;
  row-gap: <line-size>;

  /* old */
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
}

----------------------------------------------
----------------------------------------------


gap
grid-gap

.container {
  /* standard */
  gap: <grid-row-gap> <grid-column-gap>;

  /* old */
  grid-gap: <grid-row-gap> <grid-column-gap>;
}

.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  gap: 15px 10px;
}

----------------------------------------------
----------------------------------------------

justify-items

.container {
  justify-items: start | end | center | stretch;
}

----------------------------------------------

align-items

.container {
  align-items: start | end | center | stretch;
}

----------------------------------------------

place-items

.center {
  display: grid;
  place-items: center;
}

----------------------------------------------

justify-content

.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}

----------------------------------------------

align-content

.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}

----------------------------------------------

place-content

----------------------------------------------

grid-auto-columns
grid-auto-rows

.container {
  grid-template-columns: 60px 60px;
  grid-template-rows: 90px 90px;
}

.item-a {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.item-b {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}

We referenced lines that don’t exist, implicit tracks with widths of 0 are created to fill in the gaps. 

.container {
  grid-auto-columns: 60px;
}


----------------------------------------------

grid-auto-flow


.container {
  grid-auto-flow: row | column | row dense | column dense;
}

----------------------------------------------


Properties for the Children
----------------------------

grid-column-start
grid-column-end
grid-row-start
grid-row-end

.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
}

.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}

.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
}

----------------------------------------------

grid-column
grid-row

.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}

.item-c {
  grid-column: 3 / span 2;
  grid-row: third-line / 4;
}

----------------------------------------------

grid-area

.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}

.item-d {
  grid-area: header;
}

.item-d {
  grid-area: 1 / col4-start / last-line / 6;
}

----------------------------------------------

justify-self

.item {
  justify-self: start | end | center | stretch;
}

----------------------------------------------

align-self

.item {
  align-self: start | end | center | stretch;
}

----------------------------------------------

place-self


<align-self> / <justify-self> 

.item-a {
  place-self: center;
}

.item-a {
  place-self: center stretch;
}

----------------------------------------------
