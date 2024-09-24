//Problem-01////>>>>>>>>>>>>>>>>>

/*function signature/sample */
function calculateTax(income, expenses){
    if(income<0 || expenses<0 || income<expenses){
        return "Invalid Input";
    }
    else{
        const totalProfit=income-expenses;
        const tax=totalProfit*20/100;
        return tax;
    }
}

const total=calculateTax(34000, 1753);
// console.log(total);


//Problem-05/////>>>>>>>>>>

/*function signature/sample*/

function waitingTime(waitingTimes,serialNumber){
    if(Array.isArray(waitingTimes)==false || typeof serialNumber!=='number'){
        return "Invalid Input";
    }
    else{
        let i=0;
        for(let totalTime of waitingTimes){
            i=i+ totalTime;
            
            
        }
        const avarage=i/waitingTimes.length;
        const substract=serialNumber-1-waitingTimes.length;
        const serialTime=Math.round(avarage)*substract;
        return serialTime;
    }
}
// const abcd=waitingTime([13, 2], 6);
// console.log(abcd);    


//Problem-04///>>>>>>>>>>>>>

/*function signature/sample */
function calculateFinalScore(obj){
    if(typeof obj!=='object' || typeof obj.name!=='string' || typeof obj.testScore!=='number' || typeof obj.schoolGrade!=='number' || typeof obj.isFFamily!=='boolean'){
        return 'Invalid Input'
    }
    else{
        if(obj.testScore<=50 && obj.schoolGrade<=30 && obj.isFFamily===true){
            const admission=obj.testScore+obj.schoolGrade+20;
            if(admission<=80){
                return true;
            }
        }
    }
}
const finalScore=calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25,
    isFFamily : false })
console.log(finalScore);    


///Problem-02////>>>>>>>>


/*function signature/sample */
function sendNotification(email){
    if(email.includes('@') ==false){
        return 'Invalid Email';
    }
    else{
        if(email.includes('gmail.com')){
            const domainName='gmail.com';
            let userName=email.split('@gmail.com');
            const notification=userName+' sent you an email';
            return notification;
        }
    }
    }
    // const n=sendNotification('ziha@dgmail.com');
    // console.log(n);
 
    

//Problem-03/////>>>>>>>>>>>


function checkDigitsInName(name){
    if(typeof name!=='string'){
        return "Invalid Input";
    }
  for( i=0; i<name.length; i++){
    let character=name[i];
    if(isNaN(character)==''){
        return true;
    }
    
  }
  return false;
}
// const chkDigit=checkDigitsInName(900);
// console.log(chkDigit);
    



