<html>
<head>
    <link rel="stylesheet" href="bubble.css">
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
<h1>Bubble Sorting</h1>
<h3>---</h3>

<h2>What is Bubble Sort</h2>
<p>Bubble sort is an algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed.</p>

<h2>Complexity</h2>
<h3>O(1)</h3>

<h2>Examples</h2>
<p></p>
<pre><code>
def bubble_sort(arr):
    n = len(arr)
    
    # Traverse through all array elements
    for i in range(n - 1):
        
    # Last i elements are already in place
    for j in range(0, n - i - 1):
            
    # Swap if the element found is greater than the next element
    if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
</code></pre>



<h2>Advantages of Bubble Sort</h2>

<h2>Disadvantages of Bubble Sort</h2>
</body>