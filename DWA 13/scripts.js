const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

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

console.log(provinces.toSorted());

// Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3.

const filterOutCape = provinces.filter(provinces => !provinces.includes("Cape"));
console.log(filterOutCape);

// Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, true, false]

const anyHasS = names.some(firstName => firstName.toLowerCase().includes('s')) 
if (anyHasS) {
     console.log(names.map(namesWithS => namesWithS.toLowerCase().includes("s")))
};

// Using only reduce, turn the above into an object that indicates the province of an individual. In other words:

const nameProvObj = names.reduce(
     (obj, key, index) => {
          obj[key] = provinces[index];
          return obj;
     }, 
{});

console.log(nameProvObj);

// NEXT EXERCISES

const products = [
     { product: 'banana', 
       price: "2" },
     { product: 'mango', 
       price: 6 },
     { product: 'potato', 
       price: ' ' },
     { product: 'avocado', 
       price: "8" },
     { product: 'coffee', 
       price: 10 },
     { product: 'tea', 
       price: '' }
   ]

// Use forEach to console.log each product name to the console.

console.log(products.forEach((food) => console.log(food.product)));

// Use filter to filter out products that have a name longer than 5 characters

console.log(products.filter((food) => food.product.length > 5));

// Using both filter and map. Convert all prices that are strings to numbers, and remove all products from the array that do not have prices. After this has been done then use reduce to calculate the combined price of all remaining products.

console.log(
     products
     .map((food) => parseInt(food.price))
     .filter((price) => !isNaN(price))
     .reduce((acc, currentValue) => acc + currentValue, 0));

// Use reduce to concatenate all product names to create the following string: banana, mango, potato, avocado, coffee and tea.

console.log(products.reduce((acc, current, index, array) => {
  const isLastItem = index === array.length - 1
  if (isLastItem) {
    return acc + 'and ' + current.product;
  } else {
      return acc + current.product + ', ';
  }
}, ''))

// Use reduce to calculate both the highest and lowest-priced items. The names should be returned as the following string: Highest: coffee. Lowest: banana.

console.log(
  ((products) => {
    const result = products
      .map(item => ({ product: item.product, price: parseInt(item.price) }))
      .reduce((acc, current) => {
        if (acc.highest === undefined || current.price > acc.highest) {
          acc.highest = current.price;
          acc.highestName = current.product;
        }

        if (acc.lowest === undefined || current.price < acc.lowest) {
          acc.lowest = current.price;
          acc.lowestName = current.product;
        }

        return acc;
      }, { highest: undefined, lowest: undefined, highestName: undefined, lowestName: undefined });

    return `Highest: ${result.highestName}. Lowest: ${result.lowestName}.`;
  })(products)
);

// Using only Object.entries and reduce recreate the object with the exact same values. However, the following object keys should be changed in the new array:
// product should be changed to name
// price should be changed to cost

console.log(
  ((products) => {
    const newObject = Object.entries(products).reduce((acc, [index, { product, price }]) => {
      acc[index] = { name: product, cost: price };
      return acc;
    }, {});
    return newObject;
  }
)(products));