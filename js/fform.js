function giverating(j, i) {
  let ratings = [];

  ratings[j - 1] = i;

  console.log(ratings);
  let objJSON = JSON.stringify(ratings);
  switch (i) {
    case 1:
      document.getElementById("rev" + j).innerHTML = "Very Poor";
      break;
    case 2:
      document.getElementById("rev" + j).innerHTML = "Poor"; break;
    case 3:
      document.getElementById("rev" + j).innerHTML = "Satisfactory"; break;
    case 4:
      document.getElementById("rev" + j).innerHTML = "Good"; break;
    case 5:
      document.getElementById("rev" + j).innerHTML = "Excellent"; break;

  }
} 