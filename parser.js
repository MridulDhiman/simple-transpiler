const { Method, ClassDecl } = require("./ast");

class Parser {


    constructor(tokens) {
        this.index = 0;
        this.tokens = tokens;
        this.expr = [];
    }

    advance() {
        this.index++;
    }

    current() {
        return this.tokens[this.index];
    }

    parse () {
         const tokens = this.tokens;

         while (
            tokens[this.index].type !== "EOF" &&
            tokens[this.index].type !== "KEYWORD"
         ) {
            this.advance();
         }

         // 
        if(this.current().type === "KEYWORD" && this.current().value === "class") {
          let clsDecl =  this.classDeclaration();
          this.expr.push(clsDecl);
        }

        return this.expr;


    }


    classDeclaration() {
        this.advance();
        let className = this.current().value;
        while(this.current().type !== "LBRACE") this.advance();
        this.advance();

        let methods = [];
        while(this.current().type !== 'RBRACE' && this.current().type !== 'EOF') {
            methods.push(this.methodDeclaration());
        }


        return new ClassDecl(className, methods)
    }


    methodDeclaration () {
        let type = null;
       if(this.current().value === "static") {
        type = "static";
        this.advance();
    }

let methodName = this.current().value;

// TODO: implement statements logic
let statements = [];

while(this.current().type !== "EOF" && this.current().type !== "EOL") this.advance();
this.advance();

    return new Method(methodName, type, statements);
    }
}


module.exports = Parser;