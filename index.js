// const Parser = require("./parser");
const Parser = require("./parser");
const Scanner = require("./scanner")
const {Visitor} = require("./visitor")

const code = `
class Book {
    addBook () {};
    removeBook() {};
    static viewBooks() {};
   }
`



const scanner = new Scanner();
const tokens = scanner.tokenize(code);

const parser = new Parser(tokens);
const ast = parser.parse();

console.log(ast[0]);
const visitor = new Visitor();
   const output =  visitor.visitStatements(ast);

  
console.log(output); 