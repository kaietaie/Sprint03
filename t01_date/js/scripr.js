const   date0 = new Date(1993, 11, 1),
        date1 = new Date(1998, 0, -33),
        date2 = new Date('42 03:24:00');

function getFormattedDate(dateObject) {
   let  date = dateObject.getDate(),
        month = dateObject.getMonth()+1,
        hours = dateObject.getHours(),
        min = dateObject.getMinutes(),
        day = dateObject.getDay();
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayweek = week[day];

    if( date < 10 ) date = `0${date}`;
    if( month < 10 ) month = `0${month}`;
    if( hours < 10 ) hours = `0${hours}`;
    if( min < 10 ) min = `0${min}`;


    return `${date}.${month}.${dateObject.getFullYear()} ${hours}:${min} ${dayweek}`
    
}

console.log(getFormattedDate(date2))