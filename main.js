document.addEventListener('DOMContentLoaded', function() {
  var days = document.querySelector('.days span');
  // var hour = document.querySelector('.hour');
  // var min = document.querySelector('.min');
  // var second = document.querySelector('.second');

  var startDate = new Date(2023, 0, 1); //Month-=1
  var day_count = Math.floor((new Date - startDate)/86400000);
  if (day_count <= 0)
    day_count = "00 DAY"
  else if (day_count == 1)
    day_count+=" DAY"
  else
    day_count+=" DAYS"
  days.innerText = day_count 
  // countTime();

  // function countTime() {
  //   let today = new Date();
  //   let ms = (today - startDate) % 86400000;
  //   hour.innerText = Math.floor(ms / 3600000);
  //   min.innerText = Math.floor(ms % 3600000 / 60000);
  //   second.innerText = Math.floor(ms % 3600000 % 60000 / 1000);
  // }

  // setInterval(countTime, 1000);

}, false);