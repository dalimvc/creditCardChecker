// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];








// Add your functions below:
//to check if specific card is valid
let validateCred = (arr) => {
  let lastNum;
  let doubledNum=[];
  let sameNum=[];
  let newArr=[];
  let sum;
  lastNum = arr[arr.length - 1]; //getting last digit from array
  //getting numbers that would be doubled
  let i=arr.length - 2;
  while(i >= 0){
    doubledNum.push(arr[i]);
    i = i -2;
  }
  //duplicating numbers and subtracting 9 from those higher then 9
  for(let j=0; j < doubledNum.length; j++ ){
      doubledNum[j] = doubledNum[j] * 2;
      if(doubledNum[j] >9){
        doubledNum[j] = doubledNum[j] - 9;
      }
  }
  //getting sum for double numbers
  const sumDoubles = doubledNum.reduce(
    (previousValue, currentValue) => previousValue + currentValue);
  //getting numbers that don't have to get doubled
  let p=arr.length - 3;
  while(p >= 0){
    sameNum.push(arr[p]);
    p = p -2;
  }
  //getting sum for numbers that don't have to get doubled
  const sumSameNum = sameNum.reduce(
    (previousValue, currentValue) => previousValue + currentValue);
  //getting sum for all numbers
  sum = lastNum + sumDoubles + sumSameNum;
  //check if card is valid using modulo
  if(sum % 10 == 0){
    return true;
  } else{
    return false;
  }
}
  


//finding invalid cards
let invalid = [];
let findInvalidCards = (arr) => {
  for(let i=0; i < arr.length; i++){
    validateCred(arr[i]);
    if(validateCred(arr[i]) == false){
      invalid.push(arr[i]);
    }  
  }
  return invalid;
}


//getting companies that have isued invalid cards
let idInvalidCardCompanies = (arr) => {
  let companies = [];
  findInvalidCards(arr);
  for(let i = 0; i < invalid.length; i++){
    if(invalid[i][0] == 3){
      companies.push('Amex');
    } else if(invalid[i][0] == 4){
      companies.push('Visa');
    } else if(invalid[i][0] == 5){
      companies.push('Mastercard');
    } else if(invalid[i][0] == 6){
      companies.push('Discover');
    }
  }
  companies = [...new Set(companies)]; //removing duplicates
  return companies;
}


console.log("Card is valid? ----> " + validateCred(invalid1));

console.log("Following cards are invalid: ")
console.log(findInvalidCards(batch));

console.log("Invalid card are isued by: " + idInvalidCardCompanies(batch));