

// visitor class implements transpiling algo. on the class declared in ClassDecl class.
class Visitor {

    // this is the main function which performs the actual transpilation...
    visitClassDecl (classDecl) {
let ctx = "function ";
ctx += classDecl.clsName;
ctx += "() { \n";
const methods = classDecl.methods;
for(let method of methods) {
    ctx += this._visitMethod(method, classDecl);
}

ctx+= "} \n";

return ctx;

    }

    // visit methods 
    _visitMethod (method, classDecl) {
let ctx = classDecl.clsName;

if(typeof method.type !== "undefined" && method.type === "static") {
    ctx += `.${method.name}`;

}
else {
    ctx+= `.prototype.${method.name}`;
}


// TODO: traverse the body array to convert statements of the methods...
ctx += " = function () => {} \n";

return ctx;
    }


   
    visitStatements(asts) {
        let ctx = "";
        for(let ast of asts) {
           ctx += this.visitClassDecl(ast);
        }

        return ctx;
    }
}


module.exports = {
    Visitor
}