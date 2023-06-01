<html>
<head>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="index.css">

<!--Google Fonts Sheets-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&family=Palette+Mosaic&family=Slackside+One&display=swap" rel="stylesheet">

<!--Code Block Using Highlight.js-->
<!--Loading the Script-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
<!--CDN Template-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/atom-one-light.min.css" integrity="sha512-o5v54Kh5PH0dgnf9ei0L+vMRsbm5fvIvnR/XkrZZjN4mqdaeH7PW66tumBoQVIaKNVrLCZiBEfHzRY4JJSMK/Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!--To Start the Highlight.js-->
<script>hljs.initHighlightingOnLoad();</script>

</head>
<body>
<h1>Selection Sorting</h1>
<h3>---</h3>

<h2>What is Selection Sort</h2>
<p>Selection sort is an in-place comparison sorting algorithm. It has an O(n²) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort.</p>

<!--Example Coding for Selection Sorting-->
<pre><code>
def selection_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n):
        
    # Find the minimum element in the remaining unsorted array
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
        
    # Swap the found minimum element with the first element
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
</code></pre>

<h2>Complexity</h2>
<h3>O(n^2)</h3>

<h2>Examples</h2>
<p>Use the data set and run it on your notebook using the code above ! You should get the result below !</p>
<!--Example Codes-->
<pre><code>
arr = [64, 25, 12, 22, 11]
selection_sort(arr)
print("Sorted array:", arr)
</code></pre>
<!--Example Code Results-->
<pre><code>
Sorted array: [11, 12, 22, 25, 64]
</code></pre>

<h2>Advantages of Selection Sort</h2>

<h2>Disadvantages of Selection Sort</h2>
</body>