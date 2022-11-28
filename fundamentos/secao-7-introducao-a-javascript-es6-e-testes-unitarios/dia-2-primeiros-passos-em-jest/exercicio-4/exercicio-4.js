const techList = (techArray, nameString) => {
    if (techArray.length === 0) 
    { return 'Vazio!' };
    
    const sortedTechArray = techArray.sort();
    const returnedObject = [];

    for (let i = 0; i < sortedTechArray.length; i += 1) {
        returnedObject.push({tech: sortedTechArray[i], name: nameString});
    };
    return returnedObject;
};

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;