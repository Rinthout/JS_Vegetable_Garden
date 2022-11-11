const {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
} = require("./farm");

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
        numCrops: 10,
    };

    const environmentFactors = {
        sun: "high",
        wind: "medium",
    };

    test("Get yield for crop with NO environment factors", () => {
        expect(getYieldForCrop(input)).toBe(30);
    });

    test("Get yield for crop WITH environment factors", () => {
        expect(getYieldForCrop(input, environmentFactors)).toBe(36.9);
    });
});


describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

// add the extra funcionalities from exercise
//xx__________Costs For Crop__________xx//

describe("getCostsForCrop", () => {
    test("Get costs for crop, simple", () => {
        const corn = {
            name: "corn",
            costs: 1,
        };
        const input = {
            crop: corn,
            numCrops: 230,
        };
        expect(getCostsForCrop(input)).toBe(230);
    });
});

//xx__________Revenue For Crop__________xx//

describe("getRevenueForCrop", () => {
    test("Get revenue for crop, simple", () => {
        const apple = {
            name: "apple",
            revenue: 2,
        };
        const input = {
            crop: apple,
            numCrops: 5,
        };
        expect(getRevenueForCrop(input)).toBe(10);
    });
});

//xx__________Profit For Crop__________xx//

describe("getProfitForCrop", () => {
    test("Get profit for crop, simple", () => {
        const apple = {
            name: "apple",
            costs: 1,
            revenue: 2,
        };
        const input = {
            crop: apple,
            numCrops: 30,
        };
        expect(getProfitForCrop(input)).toBe(30);
    });
});

//xx__________Get Total Profit__________xx//

describe("getTotalProfit", () => {
    test("Get total profit", () => {
        const corn = {
            name: "corn",
            yield: 3,
            costs: 1,
            revenue: 2,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            costs: 2,
            revenue: 4,
        };
        const apple = {
            name: "apple",
            yield: 5,
            costs: 3,
            revenue: 6,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
            { crop: apple, numCrops: 3 },
        ];
        expect(getTotalProfit({ crops })).toBe(76);
    });
});
