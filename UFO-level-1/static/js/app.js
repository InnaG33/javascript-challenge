// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// 
var filteredData = tableData;

function dataLoad() {

    tbody.html("");

    filteredData.forEach((insight) => {
    var row = tbody.append("tr");
    Object.entries(insight).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

var filterType = d3.select("#filters");
var chosenElement = filterType.property("value");

// Select the button
var button = d3.select("#filter-btn");

button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputValue);

    if (inputValue) {
        filteredData = filteredData.filter(date => date.datetime === inputValue);
        dataLoad();
    }
}

dataLoad ();








