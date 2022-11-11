// first function of first test (WITH environment factors)
const getYieldForPlant = (input, environmentFactors) => {
    let result = 0;
    if (!environmentFactors) {
        return input.yield;

    } else {
        Object.keys(environmentFactors).forEach((key) => {
            const environmentFactorsKey = environmentFactors[key];
            const inputFactor = input.factors[key];
            const percentageFactor = (inputFactor[environmentFactorsKey] + 100) / 100;
            result = input.yield * percentageFactor;
        });
        return result;

    };
};

// second function of second test (WITH environment factors)
const getYieldForCrop = (input, environmentFactors) => {
    let result = 0;
    if (!environmentFactors) {
        return input.crop.yield * input.numCrops;

    } else {
        Object.keys(environmentFactors).forEach((key) => {
            const environmentFactorsKey = environmentFactors[key];
            const inputFactor = input.crop.factors[key];
            const percentageFactor = (inputFactor[environmentFactorsKey] + 100) / 100;
            console.log(percentageFactor);
            result = percentageFactor;
        });
        return hier moet dus iets komen ?????;

    };
};


// third function oconsole.log(getYieldForCrop);f third test (no envirement factors)
const getTotalYield = ({ crops }) => {
    let result = 0;
    crops.forEach(input => {
        result += input.crop.yield * input.numCrops;
    });
    //   console.log(result);
    return result;
};

// adding the extra functionalities (no envirement factors)
//xx__________Costs For Crop__________xx//
const getCostsForCrop = (input) => {
    // console.log(input.crop.costs * input.numCrops);
    return input.crop.costs * input.numCrops;
};

//xx__________Revenue For Crop__________xx//
const getRevenueForCrop = (input) => {
    // console.log(input.crop.revenue * input.numCrops);
    return input.crop.revenue * input.numCrops;
};

//xx__________Profit For Crop__________xx//
const getProfitForCrop = (input) => {
    const revenue = () => {
        return input.crop.revenue * input.numCrops;
    };
    // console.log(revenue(input));
    const costs = () => {
        return input.crop.costs * input.numCrops;
    };
    // console.log(costst(input));
    return revenue(input) - costs(input);
};

//xx__________Get Total Profit__________xx//
const getTotalProfit = ({ crops }) => {
    let result = 0
    crops.forEach(input => {
        result += (input.crop.revenue * input.crop.yield * input.numCrops) - (input.crop.costs * input.crop.yield * input.numCrops);
    });
    return result;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    // add the extra functionalities from the exercise
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};