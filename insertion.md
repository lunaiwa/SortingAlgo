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
<h1>Insertion Sorting</h1>
<h3>---</h3>

<h2>What is Insertion Sort</h2>
<p>Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time by comparisons. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</p>

<pre><code>
def insertion_sort(arr):
    n = len(arr)
    
    # Traverse through 1 to n-1
    for i in range(1, n):
        key = arr[i]
        
    # Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
        
        arr[j + 1] = key
</code></pre>


<h2>Complexity</h2>
<h3>O(n^2)</h3>

<h2>Examples</h2>
<p>Use the data set and run it on your notebook using the code above ! You should get the result below !</p>
<!--Example Codes-->
<pre><code>
arr = [64, 25, 12, 22, 11]
insertion_sort(arr)
print("Sorted array:", arr)
</code></pre>

<!--Example Code Results-->
<pre><code>
Sorted array: [11, 12, 22, 25, 64]
</code></pre>


<h2>Advantages of Insertion Sort</h2>

<h2>Disadvantages of Insertion Sort</h2>
</body>