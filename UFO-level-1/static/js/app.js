// from data.js
var tbody = d3.select("tbody");

// console.log the UFO data from data.js

console.log(data);

// using the arrow functions
//  Loop Through `data` and console.log each ufo report object
// append one table row `tr` for each ufo report object
//Use `Object.entries` to console.log each weather report value
//append 1 cell per ufo report value (date, city, state, country,shape,duration, comments)
// update each cell's text with ufo report  values (date, city, state, country,shape,duration, comments)

data.forEach((ufoReport) => {
    
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key,value]) => {
        
        var cell =row.append("td");

        // incase of blanks in the report
        if (value.length === 0){
            cell.text("NA");
        }
        else {
            cell.text(value);
        }
      });
  });

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();

  // Select the input element(datetime) and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredDate = data.filter(row => row.datetime === inputValue);

  console.log(filteredDate);


 // script to clear the data to avoid appending at the bottom
tbody.html("");

// This section is so that the script that loops through the selected dates of the data

  filteredDate.forEach((ufoReport) => {
    console.log(ufoReport);
  var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key,value]) => {
        
        var cell =row.append("td");

        // incase of blanks in the report
        if (value.length === 0){
            cell.text("NA");
        }
        else {
            cell.text(value);
        }
      });
});
});

