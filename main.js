'use strict';

const amounts = [];
const target = 2000;
let rest;
let donors;
let progressBar;

const addDonation = (event)=> {
  event.preventDefault(); //to stop from submitting
  let amount = parseInt(document.getElementById('donated-amount').value);
  amounts.push(amount);
  console.log(amount);
  document.querySelector('form').reset; //to clear the form for the next entries
  
  let add = (a, b) =>  a + b
  const totalRaised = amounts.reduce(add)
  rest = target - totalRaised;

let tooltip = document.getElementById('tooltip');
tooltip.textContent = `$ ${rest} still needed for this project`;

/* I should make the progress bar increase according to totalRaised var, but I couldn't implement a working solution,
 so it's hardcoded to 10% in CSS */

// for the above code I inspired from this example:  https://gist.github.com/prof3ssorSt3v3/52ebd432bb7b8a155985a2f82509541d


donors = amounts.length; //here I calculate number of donors based on every click
let noOfDonors = document.getElementById('donorsNo');
noOfDonors.textContent = `${donors}`;

}
// below I set an aleatory future date to count the days left until then
const deadline = "2021-11-01 24:00"
function daysLeft(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const days = Math.floor( total/(1000*60*60*24));
  return {
    total,
    days
  };
}
const days = document.getElementById('daysLeft');
days.textContent = `Only ${daysLeft(deadline).days} days left`;


document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('button-green').addEventListener('click', addDonation);
});

