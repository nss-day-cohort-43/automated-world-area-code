const cityArray = [
    {
        cityName: "Auckland, population: 1.65 mil"
    },
    {
        cityName: "Wellington, population: 212k"
    },
    {
        cityName: "Queenstown, population: 15k"
    }
];

export const cityArrayCopy = () => {
    return cityArray.slice();
};