"use strict";
/**
 * 
 * @param {array} expr is an array 
 * @returns {boolean} true is an array
 */
function isBalanced(expr) {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
        // if opening braces push
        if (expr[i] == "(" || expr[i] == "[" || expr[i] == "{") {
            stack.push(expr[i]);
            continue;
        }

        // if it a closing brace and nothing to match with it's not balanced.
        if (stack.length === 0) return false;

        let opn = stack.pop();

        // if opening and closing pairs not matching it's not balanced.
        switch (expr[i]) {
            case ")":
                if (opn === "{" || opn === "[") return false;
                break;
            case "}":
                if (opn === "(" || opn === "[") return false;
                break;
            case "]":
                if (opn === "(" || opn === "{") return false;
                break;
        }
    }

    // if there are extra closing brackets not balanced.
    return (stack.length === 0);
}

console.log(isBalanced(["{", "(", ")", "}", "{", "}","]"]));