var data;
var colors;
var sortingInterval;
var currentIndex;

// Function to generate random list of numbers and colors
function generateRandomList(size, min, max) {
    var list = [];
    var colorList = [];
    for (var i = 0; i < size; i++) {
        var number = Math.floor(Math.random() * (max - min + 1)) + min;
        list.push(number);
        colorList.push(getRandomColor());
    }
    return [list, colorList];
}

// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to visualize Bubble Sort
function bubbleSortVisualization() {
    var n = data.length;
    var chartContainer = d3.select("#chart-container");
    var barWidth = 30;
    var barSpacing = 5;

    chartContainer.selectAll("*").remove();

    var svg = chartContainer.append("svg")
        .attr("width", (barWidth + barSpacing) * n)
        .attr("height", 400);

    var bars = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function(d, i) { return i * (barWidth + barSpacing); })
        .attr("y", function(d) { return 400 - d * 10; })
        .attr("width", barWidth)
        .attr("height", function(d) { return d * 10; })
        .attr("fill", function(d, i) { return colors[i]; });

    function updateBars() {
        svg.selectAll("rect")
            .data(data)
            .transition()
            .duration(1000) // Increase the duration for slower sorting
            .attr("y", function(d) { return 400 - d * 10; })
            .attr("height", function(d) { return d * 10; })
            .attr("fill", function(d, i) { return colors[i]; });
    }

    function bubbleSort() {
        currentIndex = 0;
        sortingInterval = setInterval(function() {
            if (currentIndex < n - 1) {
                for (var i = 0; i < n - currentIndex - 1; i++) {
                    if (data[i] > data[i + 1]) {
                        var temp = data[i];
                        data[i] = data[i + 1];
                        data[i + 1] = temp;

                        var tempColor = colors[i];
                        colors[i] = colors[i + 1];
                        colors[i + 1] = tempColor;
                    }
                }

                updateBars();
                currentIndex++;
            } else {
                clearInterval(sortingInterval);
                sortingInterval = null;
            }
        }, 1000); // Increase the interval for slower sorting
    }

    bubbleSort();
}

// Function to start the sorting process
function startSorting() {
    if (!sortingInterval) {
        if (data.length === 0) {
            resetSorting();
        } else {
            if (data.length > 1) {
                bubbleSortVisualization();
            }
        }
    }
}

// Function to pause the sorting process
function pauseSorting() {
    if (sortingInterval) {
        clearInterval(sortingInterval);
        sortingInterval = null;
    }
}

// Function to reset the sorting process
function resetSorting() {
    pauseSorting();
    var generatedData = generateRandomList(10, 1, 50);
    data = generatedData[0];
    colors = generatedData[1];
    if (data.length > 1) {
        bubbleSortVisualization();
    }
}

// On page load
document.addEventListener("DOMContentLoaded", function(event) {
    var chartContainer = document.getElementById("chart-container");
    if (chartContainer.innerHTML.trim() === "") {
        resetSorting();
    }
});
