const getCharWeight = (char) => {

    return char.charCodeAt(0) - 96;

};



const solveWeightedStrings = (text, queries) => {

    if (!text) return [];



    text = text.toLowerCase();



    let weightResult = [];



    let i = 0;

    while (i < text.length) {

        const char = text[i];

        const charWeight = getCharWeight(char);



        let currentWeight = 0;

        let j = i;



        while (j < text.length && text[j] === char) {

            currentWeight += charWeight;

            weightResult.push(currentWeight);

            j++;

        }



        i = j;

    }





    let result = [];

    queries.forEach(element => {

        if (weightResult.includes(element)) {

            result.push("Yes");

        } else {

            result.push("No");

        }

    });



    return result;

}



const caseOne = solveWeightedStrings("abbcccd", [1, 3, 9, 8]);

console.log(caseOne);
