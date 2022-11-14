const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
} = require("./farm");

// not allowed to modify yield for plant
describe("getYieldForPlant", () => {
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
    const environmentFactors = {
        sun: "low",
    };

    test("Get yield for plant with NO environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });

    test("Get yield for plant WITH environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });

});

// added extra environmentfactor (wind) for yield for Crop
describe("getYieldForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50
            },
            wind: {
                low: 0,
                medium: -20,
                high: -60
            },
        },
    };
    const input = {
        crop: corn,
        numCrops: 10
    };

    const environmentFactors = {
        sun: "high",
        wind: "medium",
    };

    test("Get yield for crop with NO environment factors", () => {
        expect(getYieldForCrop(input)).toBe(30);
    });

    test("Get yield for crop WITH environment factors", () => {
        expect(getYieldForCrop(input, environmentFactors)).toBe(36);
    });
});


describe("getTotalYield", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50
            },
            wind: {
                low: 0,
                medium: -20,
                high: -60
            },
        },
    };
    const pumpkin = {
        name: "pumpkin",
        yield: 4,
        factors: {
            sun: {
                low: -50,
                medium: 0,
                high: 50
            },
            wind: {
                low: 0,
                medium: -20,
                high: -60
            },
        },
    };

    const crops = [
        { crop: corn, numCrops: 5 },
        { crop: pumpkin, numCrops: 2 },
    ];

    const environmentFactors = {
        sun: "high",
        wind: "medium",
    };

    test("Get total yield with NO environment factors", () => {
        expect(getTotalYield({ crops })).toBe(23);
    });
    test("Get total yield WITH environment factors", () => {
        expect(getTotalYield({ crops }, environmentFactors)).toBe(27.6);
    });
});

// from exercise, 0 ammount
test("Calculate total yield with 0 amount", () => {
    const corn = {
        name: "corn",
        yield: 3,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
});


// add the extra funcionalities from exercise
//xx__________Costs For Crop__________xx//

describe("getCostsForCrop", () => {
    test("Get costs for crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 1,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getCostsForCrop(input)).toBe(30);
    });
});

//xx__________Revenue For Crop__________xx//

describe("getRevenueForCrop", () => {
    test("Calculate revenue for corn WITH environment factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costst: 1,
            salePrice: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -60,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getRevenueForCrop(input, environmentFactors)).toBe(72);
    });
});

//xx__________Profit For Crop__________xx//

describe("getProfitForCrop", () => {
    test("Calculate profit for corn WITH enviromentFactors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 1,
            salePrice: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -60,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            wind: "low",
        };
        expect(getProfitForCrop(input, environmentFactors)).toBe(60);
    });
});

//xx__________Get Total Profit__________xx//

describe("getTotalProfit", () => {
    test("Calculate total profit with enviromentFactors multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 1,
            salePrice: 2,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -60,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 2,
            salePrice: 4,
            factors: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 0,
                    medium: -20,
                    high: -60,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "high",
            wind: "medium",
        };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(43.4);
    });
});