const solveBalancedBracket = (stringBracket) => {

    const OPEN_STRING_BRACKETS = ["{", "(", "["];

    const CLOSE_STRING_BRACKETS = ["}", ")", "]"];



    const stack = [];



    for (let i = 0; i < stringBracket.length; i++) {

        const currentBracket = stringBracket[i];



        if (OPEN_STRING_BRACKETS.includes(currentBracket)) {

            stack.push(currentBracket);

        }

        else if (CLOSE_STRING_BRACKETS.includes(currentBracket)) {

            if (stack.length === 0) {

                return "NO";

            }



            const lastOpenBracket = stack.pop();



            const openIndex = OPEN_STRING_BRACKETS.indexOf(lastOpenBracket);

            const closeIndex = CLOSE_STRING_BRACKETS.indexOf(currentBracket);



            if (openIndex !== closeIndex) {

                return "NO";

            }

        }

    }



    return stack.length === 0 ? "YES" : "NO";

};



console.log(solveBalancedBracket("{ [( )] }"));

console.log(solveBalancedBracket("{ [( ] ) }"));

console.log(solveBalancedBracket("{ (([])[])[] }"));
