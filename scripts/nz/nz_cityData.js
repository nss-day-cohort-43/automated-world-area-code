const cityArray = [
    {
        cityName: "Auckland"
    },
    {
        cityName: "Wellington"
    },
    {
        cityName: "Queenstown"
    }
];

export const cityArrayCopy = () => {
    return cityArray.slice();
};