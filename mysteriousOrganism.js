// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}






//factory function
//returns object
let pAequorFactory = (num, arr) =>{

  //will be used in method mutate()
  let newArr =[];

  return{
    specimenNum:num,
    dna:arr,

    //mutate() randomly chooses a base and changes it
    mutate (){
      newArr= this.dna.map((x) => x);
        let i= Math.floor(Math.random() * 15);
          if(arr[i] == 'A'){
            while (newArr[i] != 'G' && newArr[i] != 'C' && newArr[i] != 'T'){
              newArr[i]= returnRandBase();
            } 
          }  
          if(arr[i] == 'G'){
            while (newArr[i] != 'T' && newArr[i] != 'C' && newArr[i] != 'A' ){
              newArr[i]= returnRandBase();
            }   
          } 
          if(arr[i] == 'C'){
            while (newArr[i] != 'T' && newArr[i] != 'G' && newArr[i] != 'A' ){
              newArr[i]= returnRandBase();
            }   
          }
          if(arr[i] == 'T'){
            while (newArr[i] != 'G' && newArr[i] != 'C' && newArr[i] != 'A' ){
              newArr[i]= returnRandBase();
            }   
          }
        return newArr;
      },

      //compares 2 dna and prints out how many percent they have in common
       compareDNA(pAequor) {
        let counter = 0;
        let firstSpec = this.specimenNum;
        let secondSpec = pAequor.specimenNum;
          for (let i = 0; i < this.dna.length; i++){
            if (this.dna[i]==pAequor.dna[i])
              counter++;
          }
        differences = (counter/this.dna.length*100).toFixed(2);
        console.log(`Specimen #${firstSpec} and specimen #${secondSpec} have ${counter}% DNA in common`); 
      },

      //checks if DNA is composed of minimum 60% of "G" and "C" bases
      //if yes, returns true, otherwise false
      willLikelySurvive(){
        let counter = 0;
        for (let i = 0; i < this.dna.length; i++){
          if(this.dna[i] == "C" || this.dna[i] == "G"){
            counter ++;
          }
        } 
        if (counter >8 ){
          return true;
        } else{
          return false; 
        }
      }
      
  }
}





//n1 array stores 10 DNA objects
let i = 0;
let n1 =[];
while (i < 10) {
n1.push(pAequorFactory(i, mockUpStrand()));
i++;
}
console.log(n1);

//to log 1 element in n1 array
//console.log(n1[1]);


//calling mutate function on 9th element
/*
n1[9].mutate();
console.log(n1[9].mutate());
*/


//calling compareDNA mathod and comparing 8th and 9th element in array
console.log(n1[9].compareDNA(n1[8]));


//calling willLikelySurvive method on 9th element of n1
console.log(n1[9].willLikelySurvive());



//code that creats survivors array that stores 30 DNAs that would 
//most likely survive
let p=0;
let survivors =[];
while (survivors.length < 30) {
  let helpArr=[];
  helpArr = pAequorFactory(p, mockUpStrand());
  if(helpArr.willLikelySurvive() == true){
    survivors.push(helpArr);
  }
p++;
}
console.log(survivors);










