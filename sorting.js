
========================================================PSEUDOCODE==========================================

// procedure insertion_sort(arr):
//    for i from 1 to length(arr) - 1:
//        key = arr[i]
//        j = i - 1
//        while j >= 0 and key < arr[j]:
//            comparisons = comparisons + 1
//            swaps = swaps + 1
//            arr[j + 1] = arr[j]
//            j = j - 1
//        arr[j + 1] = key


       ===========================THE JAVASCRIPT=========================

       function insertionSort(arr) {
        const n = arr.length;
      
        for (let i = 1; i < n; i++) {
          let key = arr[i];
          let j = i - 1;
      
          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
          }
      
          arr[j + 1] = key;
        }
      }
      
      const myArray = [12, 11, 13, 5, 6];
      insertionSort(myArray);
      console.log("Sorted array:", myArray);
      