const corn = {
    name: "corn",
    yield: 30,
    factors: {
        sun: {
            low: -50,
            medium: 0,
            high: 50
        },
    },
};

// console.log(corn.yield);

const environmentFactors = {
    sun: "low",
};

const getYieldForPlant = (corn, environmentFactors) => {
    let result = 0;
    if (!environmentFactors) {
        return corn.yield;
    } else {
        Object.keys(environmentFactors).forEach((key) => {
            const environmentFactorsKey = environmentFactors[key];
            console.log(environmentFactorsKey);
            const cornFactor = input.factors[key];
            result += (input.yield / 100) * cornFactor[environmentFactorsKey];
        });
        return input.yield + result;
    };
};

getYieldForPlant;