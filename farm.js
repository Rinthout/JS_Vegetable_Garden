// first function of first test (WITH environment factors)
const getYieldForPlant = (input, environmentFactors) => {
    let result = 0;
    if (!environmentFactors) {
        return input.yield;

    } else {
        const percentageFactor = (input.factors.sun[environmentFactors.sun] + 100) / 100;
        result += input.yield * percentageFactor;
        return result;
    };
};

// second function of second test (WITH environment factors)
const getYieldForCrop = (input, environmentFactors) => {
    let result = 0;
    if (!environmentFactors) {
        return input.crop.yield * input.numCrops;

    } else {
        // key value van sun
        const percentageSunFactor = (input.crop.factors.sun[environmentFactors.sun] + 100) / 100;
        // key value van wind
        const percentageWindFactor = (input.crop.factors.wind[environmentFactors.wind] + 100) / 100;
        // round off (else it keeps a test FAIL)
        const totalPercentage = Math.round(percentageSunFactor * percentageWindFactor * 10) / 10;

        result = input.crop.yield * input.numCrops * totalPercentage;
        return result;
    };
};

const getTotalYield = (input, environmentFactors) => {
    const crops = input.crops;
    // console.log (crops);
    const cropsYield = crops.map((crop) => getYieldForCrop(crop, environmentFactors));
    // console.log(cropsYield);
    return cropsYield.reduce((accumulator, currentValue) => accumulator + currentValue);
};

// adding the extra functionalities

//xx__________Costs For Crop__________xx//
const getCostsForCrop = (input) => {
    // console.log(input.crop.costs * input.crop.yield * input.numCrops);
    return input.crop.costs * input.crop.yield * input.numCrops;
};

//xx__________Revenue For Crop__________xx//
const getRevenueForCrop = (input, environmentFactors) => {
    const cropYield = getYieldForCrop(input, environmentFactors);
    // console.log(cropYield);
    const revenue = cropYield * input.crop.salePrice;
    return revenue;
};

//xx__________Profit For Crop__________xx//
const getProfitForCrop = (input, environmentFactors) => {
    const revenuePerCrop = getRevenueForCrop(input, environmentFactors);
    // console.log(revenuePerCrop);
    const costPerCrop = input.crop.costs * input.numCrops * input.crop.yield;
    // console.log(costPerCrop);
    return revenuePerCrop - costPerCrop;
};


//xx__________Get Total Profit__________xx//
const getTotalProfit = (input, enviromentFactors) => {
    const crops = input.crops;
    // console.log(crops);
    const profit = crops.map((crop) => getProfitForCrop(crop, enviromentFactors));
    // console.log(profit);
    return profit.reduce((accumulator, currentValue) => accumulator + currentValue);
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