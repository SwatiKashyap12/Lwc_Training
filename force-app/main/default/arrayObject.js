//object in Array
let myArr = [
    {
     employeeName: 'Swati',
     Age: 20,
     Gender: 'Female'
    },
    {
        employeeName: 'Sravani',
        Age: 21,
        Gender: 'Female'
    }];
console.log(myArr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array object inside the object
let myTeam = {
    firstName: ['Swati','Anil','Bhavani','Rohan','Tarun','Naresh','Shikha',
                'Sravani','Amrutha','Nikhilesh','Shweta','Asifa','Snehdeep'],
                
    isAllTeamPresent: false,
  
    myTeam2 : {
      firstName: {Sukanya:'F',Durga:'M',Praneeth:'M',Lavanya:'F',
                  Pavani:'F',Ranjith:'M',Haritha:'F',Rajitha:'F'}
    }
  }
  console.log(myTeam.firstName);
  console.log(myTeam.isAllTeamPresent);
  console.log(myTeam.myTeam2);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Array.prototype.push()
let myTeam3=  ['Swati','Anil','Bhavani','Rohan','Tarun','Naresh','Shikha',
                'Sravani','Amrutha','Nikhilesh','Shweta','Asifa','Snehdeep'];
            let count = myTeam3.push('Swami');
console.log(count);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.indexOf()
let myTeam4=  ['Swati','Anil','Bhavani','Rohan','Tarun','Naresh','Shikha',
                'Sravani','Amrutha','Nikhilesh','Shweta','Asifa','Snehdeep'];
            
console.log(myTeam3.indexOf('Bhavani'));
console.log(typeof 'Swati');
console.log(typeof 1);
console.log(1 === 'Swati'); // Checking data type
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.filter() and Array.prototype.length()
let myTeam5=  ['Swati','Anil','Bhavani','Rohan','Tarun','Naresh','Shikha',
                'Sravani','Amrutha','Nikhilesh','Shweta','Asifa','Snehdeep'];

let result = myTeam5.filter(word => word.length > 6);
console.log(result);
console.log(result.length);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Spread syntax (...) and refrance value 
let myTeam6=  ['Swati','Anil','Bhavani','Rohan','Tarun','Naresh','Shikha',
                'Sravani','Amrutha','Nikhilesh','Shweta','Asifa','Snehdeep'];
let myTeamCopyFull = [...myTeam6];

myTeamCopyFull.push('Abhijith');
console.log(myTeam6);
console.log(myTeamCopyFull);     
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let myArrObj = [
    {
     employeeName: 'Swati',
     Age: 20,
     Gender: 'Female'
    },
    {
        employeeName: 'Sravni',
        Age: 21,
        Gender: 'Female'
       }];
       myArrObj.map((value) => {
        for(let property in value) {
          console.log(`${property}: ${value[property]}`);
      }
    });