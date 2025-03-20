//UC-7
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calcDailyWage(empHrs){
    return empHrs *WAGE_PER_HOUR;
}
const MAX_HRS_IN_MONTH=160;
const NUM_OF_WORKING_DAYS=20;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();
while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArr.push(calcDailyWage(empCheck));
}
let empWage=calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: "+totalEmpHrs);
console.log("UC6-Total Days "+totalWorkingDays +"Total hrs "+totalEmpHrs+ " Emp Wage: "+empWage);
let totEmpWage=0;
function sum(dailyWage){
    totEmpWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7-Total Days :"+totalWorkingDays+ " Total Hrs: "+totalEmpHrs+" Emp Wage: "+totEmpWage);
function totalWage(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC7A- Emp Wage with reduce: "+ empDailyWageArr.reduce(totalWage,0));
let dailyCntr=0;
function mapDayWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr+ " = "+dailyWage;
}
let mapDayWithWageArr=empDailyWageArr.map(mapDayWithWage);
console.log("UC7B- Daily Wage Map");
console.log(mapDayWithWageArr);

function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr=mapDayWithWageArr.filter(fulltimeWage);

console.log("UC7 - Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);
function findFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D -First time FullTime was earned on Day: "+ mapDayWithWageArr.find(findFulltimeWage));
 function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");;
 }
 console.log("UC 6E -Check All Element have full Time Wage"+fullDayWageArr.every(isAllFulltimeWage));
 function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
 }
 console.log("UC7F -Check if any part time wage: "+ mapDayWithWageArr.some(isAnyPartTimeWage));
 function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0)
        return numOfDays+1;
    return numOfDays;
 }
 console.log("UC 7G-Number of Days Emp Worked: "+empDailyWageArr.reduce(totalDaysWorked,0));