
const {   isOperator,
  isAlphaNumeric,
  isNumeric,
  isKeyword
} = require("./utils")
/**
 * Scanner class takes JS code as input, and tokenizes it.
 */
class Scanner {

    // initialize Scanner object
   constructor() {
    this.tokens = [];
   }


   // it has multiple checks to see, if character is left, right parenthesis/curly brace or is  number/ alphanumeric , is it a keyword or identifier or operator(+,-, =)
   tokenize(code) {

   let s = "";
    for(let i = 0;i<code.length;i++) {
        s += code[i];
        
       s = s.trim();

       let peek = code[i+1];


       // is number (check first, coz function name's 1st letter can't have number...)
       if(isNumeric(s) && !isNumeric(peek)) {
            this.tokens.push({type: "NUM", value: s.trim()})
         s = "";
         continue;
       }

        // Left and right parenthesis
       if(s === "(" || s === ")") {
         if(s === "(") {
            this.tokens.push({type: "LPAREN"})
         }
         else {
            this.tokens.push({type: "RPAREN"})
         }

         s = "";
         continue;
       }


       // Left and Right curly braces
       if(s === "{" || s === "}") {
        if(s === "{") {
            this.tokens.push({type: "LBRACE"})
        }
        else {
            this.tokens.push({type: "RBRACE"})
        }

        s = "";
        continue;
       }


       // alphanumeric
       if(isAlphaNumeric(s.trim()) && !isAlphaNumeric(peek)) {
        
       if(isKeyword(s.trim()))  this.tokens.push({type: "KEYWORD", value: s.trim()})
         else this.tokens.push({type :"IDENTIFIER", value: s.trim()})


         s = "";
         continue;
       }

       // operator
       if(isOperator(s.trim()) && !isOperator(peek)) {
         this.tokens.push({type: "OP", value: s.trim()})
         s = "";
         continue;
       }


       if( s === ";" || s === "\n") {
         this.tokens.push({type: "EOL"});
         s = "";
         continue;
       }

    }


    this.tokens.push({type: "EOF"});

    return this.tokens;
   }
   
   }




module.exports = Scanner;