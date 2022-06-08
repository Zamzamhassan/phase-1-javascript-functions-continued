// code your solution here

function saturdayFun (action = "roller-skate") {
  return `This Saturday, I want to ${action}!`; 
  }
  saturdayFun();
  saturdayFun("bathe my dog");


function mondayWork (work = "go to the office"){
  return `This Monday, I will ${work}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(test = "*"){ 
  return function (myCompliment = "special"){
    return `You are ${test}${myCompliment}${test}!`;
  }
   }












