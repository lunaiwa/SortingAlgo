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

// Function to visualize Merge Sort
function mergeSortVisualization() {
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
            .duration(500)
            .attr("y", function(d) { return 400 - d * 10; })
            .attr("height", function(d) { return d * 10; })
            .attr("fill", function(d, i) { return colors[i]; });
    }

    function merge(arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;

        var L = [];
        var R = [];

        var i, j, k;

        for (i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        i = 0;
        j = 0;
        k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr, l, r) {
        if (l >= r)
            return;

        var m = l + Math.floor((r - l) / 2);

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }

    function mergeSortWrapper() {
        currentIndex = 0;
        sortingInterval = setInterval(function() {
            if (currentIndex < n) {
                mergeSort(data, 0, currentIndex);
                updateBars();
                currentIndex++;
            } else {
                clearInterval(sortingInterval);
                sortingInterval = null;
            }
        }, 500);
    }

    mergeSortWrapper();
}

// Function to start the sorting process
function startSorting() {
    if (!sortingInterval) {
        if (data.length === 0) {
            resetSorting();
        } else {
            if (data.length > 1) {
                mergeSortVisualization();
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
        mergeSortVisualization();
    }
}

// On page load
document.addEventListener("DOMContentLoaded", function(event) {
    var chartContainer = document.getElementById("chart-container");
    if (chartContainer.innerHTML.trim() === "") {
        resetSorting();
    }
});
