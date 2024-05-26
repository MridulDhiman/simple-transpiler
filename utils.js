const isOperator = (str) => {
    const operators = ["=", ">", "<", "+", "-", "/", "*", "."];
 return operators.includes(str);
}

const isAlphaNumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
}


const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string)

const isKeyword = (str) =>{
    const keywords = ["const", 'let', 'var', 'function', 'class', 'prototype', 'static'];
    return keywords.includes(str);
}




module.exports = {
    isOperator,
    isAlphaNumeric,
    isNumeric,
    isKeyword
}