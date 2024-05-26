Simple transpiler written to convert JS `class` syntax to 
`function`.

E.g. 

```javascript
class Book {
 addBook () {}
 removeBook() {} 
 static viewBooks() {}
}
```

to


```javascript
function Book() {
    Book.prototype.addBook = function () => {}
    Book.prototype.removeBook = function () => {}
    Book.viewBooks = function () => {}
}
```


### Steps for transpiling code:
1. convert js code to tokens using `Scanner` class.
2. create AST (abstract syntax) using generated tokens, using `Parser` class.
3. Use AST tree to transpile the code using `Visitor` class.


### Visitor Pattern
`Visitor` class implements transpilation algorithm separated from `ClassDecl` object structure.