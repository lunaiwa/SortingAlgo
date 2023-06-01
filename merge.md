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
<h1>Merge Sorting</h1>
<h3>---</h3>

<h2>What is Merge Sort</h2>
<p>Merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.</p>

<pre><code>
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    
    # Divide the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]
    
    # Recursively sort the two halves
    left_half = merge_sort(left_half)
    right_half = merge_sort(right_half)
    
    # Merge the sorted halves
    return merge(left_half, right_half)

def merge(left, right):
    merged = []
    left_index, right_index = 0, 0
    
    # Merge the two sorted arrays into a single sorted array
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            merged.append(left[left_index])
            left_index += 1
        else:
            merged.append(right[right_index])
            right_index += 1
    
    # Append the remaining elements (if any) of the left array
    while left_index < len(left):
        merged.append(left[left_index])
        left_index += 1
    
    # Append the remaining elements (if any) of the right array
    while right_index < len(right):
        merged.append(right[right_index])
        right_index += 1
    
    return merged
</code></pre>

<h2>Complexity</h2>
<h3>T(n) = 2T(n/2) + O(n) or O(nLogn)</h3>

<h2>Examples</h2>
<p>Use the data set and run it on your notebook using the code above ! You should get the result below !</p>
<!--Example Codes-->
<pre><code>
arr = [64, 25, 12, 22, 11]
sorted_arr = merge_sort(arr)
print("Sorted array:", sorted_arr)
</code></pre>
<!--Example Code Results-->
<pre><code>
Sorted array: [11, 12, 22, 25, 64]
</code></pre>

<h2>Advantages of Merge Sort</h2>

<h2>Disadvantages of Merge Sort</h2>
</body>