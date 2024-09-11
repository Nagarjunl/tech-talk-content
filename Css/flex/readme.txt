1. Since flexbox is a whole module and not a single property, it involves a lot of things including its whole set of
properties. Some of them are meant to be set on the container (parent element, known as “flex container”) whereas the
others are meant to be set on the children (said “flex items”).

2. Flexbox is (aside from optional wrapping) a single-direction layout concept.

3. Flex container (Flex formatting context) outer display is block and inner is flexbox
4. apply to its immedite or direct children not the all desecdents
5. Childerns are Flex items
6. its look like inline and display but they really are Main and Cross axis
7. Wee need to think multiligual

8. for direction ltr (Left to Right) Inline and block - with this think about Main and Cross axis

inline
---------------------------->
| 
|
| k
| c
| o
| l
| b
|
|

9. for direction rtl (Right to Left) Inline and block. - with this think about Main and Cross axis

                    inline
<----------------------------
                            | 
                            |
                            | k
                            | c
                            | o
                            | l
                            | b
                            |
                            |


10.revert inline and block - with this think about Main and Cross axis           

                            ^  
                            | 
                            |
                            | k
                            | c
                            | o
                            | l
                            | b
                            |
                            |                  
<----------------------------
inline

11. flex-basis This defines the default size of an element before the remaining space is distributed.

12. align-items: Controls the alignment of all items on the cross axis.
13. align-content: Controls the space between flex lines on the cross axis.

14. align-content: The key property is flex-wrap. When nowrap (or when there is no extra space in the cross axis), align-content has no effect. When wrap or wrap-reverse, it has always an effect (regardless of the line count) if there is extra space in the cross axis.
15. align-content : With multiple lines in the parent container align-content will alter the spacing BETWEEN and AROUND on the cross axis. Below I’ve used the align-content property with a value of center. This gets rid of the gap in the middle of the rows and moves all lines into the center of the container.

16. check align-items: center, align-content: center in index.html
