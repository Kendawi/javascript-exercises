const removeFromArray = function(arr,...rest) {
    
    return arr.filter(val => !rest.includes(val));

    /*let newArray = [];

    arr.forEach(item => {

        if (!rest.includes(item)) {
            newArray.push(item)
        }
        
    });

    return newArray;*/
};

// Do not edit below this line
module.exports = removeFromArray;
