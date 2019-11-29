"use strict"

// module.exports = 

function convert(time) {
  let date = {};
  switch(time) {
    case 'today': 
      date.start = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
      date.end = date.start
      break;
    case 'tomorrow': 
      date.start = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+1}`;
      date.end = date.start;
    break;
    case'this weekend':
      let x = 6 - new Date().getDay()
      date.start = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+x}`;
      date.end = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+1+x}`;
      break;
    case 'this week': 
      date.start = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`;
      date.end = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+7}`;
    break;
    case 'next week': 
    date.start = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+7}`;
    date.end = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()+14}`;
      break;
    case 'this month': 

    break;
  }
  return date;
}

console.log(convert('next week'))