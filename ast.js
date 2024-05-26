const { Visitor } = require("./visitor");



class ClassDecl {
    constructor (clsName, methods) {
        this.clsName = clsName;
        this.methods = methods;
    }
}

class Method {

    // body has array of statements 

    // type is function type: normal or static...
    constructor (name, type, body) {
        this.name = name;
        this.type = type;
        this.body = body;
    }
}



// const newClassDecl = new ClassDecl("Book", [
//     new Method("addBook", null,[]),
//     new Method("removeBook", null, []),
//     new Method("viewBooks", "static", [])
// ])

// const visitor = new Visitor();
// const out = visitor.visitClassDecl(newClassDecl);
// console.log(out);


exports.Method = Method;
exports.ClassDecl = ClassDecl;