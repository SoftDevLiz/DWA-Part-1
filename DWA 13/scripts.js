const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];



// Using only reduce, turn the above into an object that indicates the province of an individual. In other words:

// {
//     Ashwin: 'Western Cape',
//       Sibongile: 'Gauteng',
//     'Jan-Hendrik': 'Northern Cape',
//       Sifso: 'Eastern Cape',
//       Shailen: 'KwaZulu-Natal',
//       Frikkie: 'Free State',

// Use forEach to console log each name to the console. You are allowed to call console.log seven times.

names.forEach((firstName) => console.log(firstName));

// Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.

names.forEach((firstName, index) => console.log(`${firstName} (${provinces[index]})`)
);

// Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.

provinces.map((province) => console.log(province.toUpperCase()));

// Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 7, 7]

names.map((firstName) => console.log(firstName.length));

// Using toSorted to sort all provinces alphabetically.

provinces.toSorted((provinces) => console.log(provinces));

// Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3.

const filterOutCape = provinces.filter(provinces => !provinces.includes("Cape"));
console.log(filterOutCape);

// Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, true, false]

// names.map(firstName => console.log(firstName.toLowerCase().includes("s")));

if (names.some(firstName => firstName.toLowerCase().includes('s'))) {
     console.log(names.map(namesWithS => namesWithS.toLowerCase().includes("s")))
};
