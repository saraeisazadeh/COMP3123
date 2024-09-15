const capitalize = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('').toLowerCase();
};

const colours = ['red', 'green', 'blue'];

const CapitalizedColors = colours.map(color => capitalize(color));

console.log(CapitalizedColors);  
