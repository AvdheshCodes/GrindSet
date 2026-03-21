const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/Question");

dotenv.config();

const questions = [
  {
    "questionNumber": 1,
    "title": "Maximum and Minimum Element in an Array",
    "topic": "Arrays",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/find-the-maximum-and-minimum-of-an-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 2,
    "title": "Reverse the Array",
    "topic": "Arrays",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/reverse-string/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 3,
    "title": "Maximum-Subarray",
    "topic": "Arrays",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 4,
    "title": "Contains Duplicate",
    "topic": "Arrays",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/contains-duplicate/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 5,
    "title": "Chocolate Distribution Problem",
    "topic": "Arrays",
    "difficulty": "Easy",
    "leetcodeLink": "https://www.geeksforgeeks.org/chocolate-distribution-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 6,
    "title": "Search in Rotated Sorted Array",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 7,
    "title": "Next Permutation",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 8,
    "title": "Best time to Buy and Sell Stock",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 9,
    "title": "Repeat and Missing Number Array",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 10,
    "title": "Kth-Largest Element in an Array",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 11,
    "title": "Trapping Rain Water",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 12,
    "title": "Product of Array Except Self",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/product-of-array-except-self/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 13,
    "title": "Maximum Product Subarray",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/maximum-product-subarray/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 14,
    "title": "Find Minimum in Rotated Sorted Array",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 15,
    "title": "Find Pair with Sum in Sorted & Rotated Array",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://www.geeksforgeeks.org/find-a-pair-with-given-sum-in-a-sorted-and-rotated-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 16,
    "title": "3Sum",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/3sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 17,
    "title": "Container With Most Water",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 18,
    "title": "Given Sum Pair",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/two-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 19,
    "title": "Kth - Smallest Element",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://www.geeksforgeeks.org/kth-smallest-element-in-an-unordered-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 20,
    "title": "Merge Overlapping Intervals",
    "topic": "Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 21,
    "title": "Find Minimum Number of Merge Operations to Make an Array Palindrome",
    "topic": "Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/find-minimum-number-of-merge-operations-to-make-an-array-palindrome/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 22,
    "title": "Given an Array of Numbers Arrange the Numbers to Form the Biggest Number",
    "topic": "Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/largest-number/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 23,
    "title": "Space Optimization Using Bit Manipulations",
    "topic": "Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/space-optimization-using-bit-manipulations/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 24,
    "title": "Subarray Sum Divisible K",
    "topic": "Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 25,
    "title": "Print all Possible Combinations of r Elements in a Given Array of Size n",
    "topic": "Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/combinations/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 26,
    "title": "Mo's Algorithm",
    "topic": "Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/mos-algorithm-query-square-root-decomposition-set-1-introduction/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 27,
    "title": "Valid Palindrome",
    "topic": "Strings",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 28,
    "title": "Valid Anagram",
    "topic": "Strings",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/valid-anagram/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 29,
    "title": "Valid parentheses",
    "topic": "Strings",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 30,
    "title": "Remove Consecutive Characters",
    "topic": "Strings",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 31,
    "title": "Longest Common Prefix",
    "topic": "Strings",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 32,
    "title": "Convert a Sentence into its Equivalent Mobile Numeric Keypad Sequence",
    "topic": "Strings",
    "difficulty": "Medium",
    "leetcodeLink": "https://www.geeksforgeeks.org/convert-sentence-equivalent-mobile-numeric-keypad-sequence/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 33,
    "title": "Print all the Duplicates in the Input String",
    "topic": "Strings",
    "difficulty": "Medium",
    "leetcodeLink": "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 34,
    "title": "Longest Substring without Repeating Characters",
    "topic": "Strings",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 35,
    "title": "Longest Repeating Character Replacement",
    "topic": "Strings",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 36,
    "title": "Group Anagrams",
    "topic": "Strings",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 37,
    "title": "Longest Palindromic Substring",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 38,
    "title": "Palindromic Substrings",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/palindromic-substrings/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 39,
    "title": "Next Permutation",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 40,
    "title": "Count Palindromic Subsequences",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-palindromic-subsequences/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 41,
    "title": "Smallest Window in a String Containing all the Characters of Another String",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 42,
    "title": "Wildcard String Matching",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/wildcard-string-matching/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 43,
    "title": "Longest Prefix Suffix",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-prefix-suffix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 44,
    "title": "Rabin-Karp Algorithm for Pattern Searching",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/rabin-karp-algorithm-for-pattern-searching/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 45,
    "title": "Transform One String to Another using Minimum Number of Given Operation",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/transform-one-string-to-another-using-minimum-number-of-given-operation/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 46,
    "title": "Minimum Window Substring",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 47,
    "title": "Boyer Moore Algorithm for Pattern Searching",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/boyer-moore-algorithm-for-pattern-searching/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 48,
    "title": "Word Wrap",
    "topic": "Strings",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/word-wrap/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 49,
    "title": "Zigzag (or diagonal) Traversal of Matrix",
    "topic": "2D Arrays",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/zigzag-or-diagonal-traversal-of-matrix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 50,
    "title": "Set Matrix Zeroes",
    "topic": "2D Arrays",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 51,
    "title": "Spiral Matrix",
    "topic": "2D Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 52,
    "title": "Rotate Image",
    "topic": "2D Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 53,
    "title": "Word Search",
    "topic": "2D Arrays",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/word-search/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 54,
    "title": "Find the Number of Islands | Set 1 (Using DFS)",
    "topic": "2D Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-the-number-of-islands-|-set-1-using-dfs/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 55,
    "title": "Given a Matrix of \u2018O\u2019 and \u2018X\u2019, Replace \u2018O\u2019 with \u2018X\u2019 if Surrounded by \u2018X\u2019",
    "topic": "2D Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/given-a-matrix-of-\u2018o\u2019-and-\u2018x\u2019-replace-\u2018o\u2019-with-\u2018x\u2019-if-surrounded-by-\u2018x\u2019/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 56,
    "title": "Find a Common Element in all Rows of a Given Row-Wise Sorted Matrix",
    "topic": "2D Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-a-common-element-in-all-rows-of-a-given-row-wise-sorted-matrix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 57,
    "title": "Create a Matrix with Alternating Rectangles of O and X",
    "topic": "2D Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/create-a-matrix-with-alternating-rectangles-of-o-and-x/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 58,
    "title": "Maximum Size Rectangle of all 1s",
    "topic": "2D Arrays",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximum-size-rectangle-of-all-1s/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 59,
    "title": "Permute Two Arrays such that Sum of Every Pair is Greater or Equal to K",
    "topic": "Searching & Sorting",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/permute-two-arrays-such-that-sum-of-every-pair-is-greater-or-equal-to-k/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 60,
    "title": "counting sort",
    "topic": "Searching & Sorting",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/counting-sort/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 61,
    "title": "find common elements three sorted arrays",
    "topic": "Searching & Sorting",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/find-common-elements-three-sorted-arrays/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 62,
    "title": "Searching in an array where adjacent differ by at most k",
    "topic": "Searching & Sorting",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 63,
    "title": "ceiling in a sorted array",
    "topic": "Searching & Sorting",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/ceiling-in-a-sorted-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 64,
    "title": "Piar with given difference",
    "topic": "Searching & Sorting",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/piar-with-given-difference/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 65,
    "title": "majority element",
    "topic": "Searching & Sorting",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/majority-element/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 66,
    "title": "count triplets with sum smaller that a given value",
    "topic": "Searching & Sorting",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/count-triplets-with-sum-smaller-that-a-given-value/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 67,
    "title": "Maximum Sum Subsequence with no adjacent elements",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximum-sum-subsequence-with-no-adjacent-elements/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 68,
    "title": "Merge Sorted Arrays using O(1) Space",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/merge-sorted-arrays-using-o1-space/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 69,
    "title": "Inversion of Array",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/inversion-of-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 70,
    "title": "Find Duplicates in O(n) Time and O(1) Extra Space",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-duplicates-in-on-time-and-o1-extra-space/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 71,
    "title": "Radix Sort",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/radix-sort/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 72,
    "title": "Product of Array except itself",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/product-of-array-except-itself/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 73,
    "title": "Make all Array Elements Equal",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/make-all-array-elements-equal/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 74,
    "title": "Check if Reversing a Sub Array Make the Array Sorted",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/check-if-reversing-a-sub-array-make-the-array-sorted/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 75,
    "title": "Find Four Elements that Sum to a Given Value",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-four-elements-that-sum-to-a-given-value/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 76,
    "title": "Median of Two Sorted Array with Different Size",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-array-with-different-size/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 77,
    "title": "Median of Stream of Integers Running Integers",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/median-of-stream-of-integers-running-integers/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 78,
    "title": "Print Subarrays with 0 Sum",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/print-subarrays-with-0-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 79,
    "title": "Aggressive Cows",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/aggressive-cows/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 80,
    "title": "Allocate Minimum number of Pages",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/allocate-minimum-number-of-pages/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 81,
    "title": "Minimum Swaps to Sort",
    "topic": "Searching & Sorting",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-swaps-to-sort/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 82,
    "title": "Backtracking Set 2 Rat in a Maze",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/backtracking-set-2-rat-in-a-maze/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 83,
    "title": "Combinational Sum",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/combinational-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 84,
    "title": "Crossword-Puzzle",
    "topic": "Backtracking",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/crossword-puzzle/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 85,
    "title": "Longest Possible Route in a Matrix with Hurdles",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-possible-route-in-a-matrix-with-hurdles/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 86,
    "title": "Printing all solutions in N-Queen Problem",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/printing-all-solutions-in-n-queen-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 87,
    "title": "Solve the Sudoku",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/solve-the-sudoku/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 88,
    "title": "Partition Equal Subset Sum",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 89,
    "title": "M Coloring Problem",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 90,
    "title": "Knight Tour",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/knight-tour/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 91,
    "title": "Soduko",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/soduko/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 92,
    "title": "Remove Invalid Parentheses",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/remove-invalid-parentheses/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 93,
    "title": "Word Break Problem using Backtracking",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/word-break-problem-using-backtracking/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 94,
    "title": "Print all Palindromic Partitions of a String",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/print-all-palindromic-partitions-of-a-string/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 95,
    "title": "Find Shortest Safe Route in a Path with Landmines",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-shortest-safe-route-in-a-path-with-landmines/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 96,
    "title": "Partition of Set into K Subsets with Equal Sum",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/partition-of-set-into-k-subsets-with-equal-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 97,
    "title": "Backtracking set-7 hamiltonian cycle",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/backtracking-set-7-hamiltonian-cycle/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 98,
    "title": "tug-of-war",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/tug-of-war/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 99,
    "title": "Maximum Possible Number by doing at most K swaps",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximum-possible-number-by-doing-at-most-k-swaps/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 100,
    "title": "Backtracking set-8 solving cryptarithmetic puzzles",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/backtracking-set-8-solving-cryptarithmetic-puzzles/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 101,
    "title": "Find paths from corner cell to middle cell in maze",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-paths-from-corner-cell-to-middle-cell-in-maze/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 102,
    "title": "Arithmetic Expressions",
    "topic": "Backtracking",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/arithmetic-expressions/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 103,
    "title": "Reverse Linked List",
    "topic": "Linked List",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 104,
    "title": "Linked List Cycle",
    "topic": "Linked List",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/linked-list-cycle/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 105,
    "title": "Merge Two Sorted Lists",
    "topic": "Linked List",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 106,
    "title": "Delete without Head node",
    "topic": "Linked List",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/delete-without-head-node/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 107,
    "title": "Remove duplicates from an unsorted linked list",
    "topic": "Linked List",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 108,
    "title": "Sort a linked list of 0s-1s-or-2s",
    "topic": "Linked List",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/sort-a-linked-list-of-0s-1s-or-2s/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 109,
    "title": "Multiply two numbers represented linked lists",
    "topic": "Linked List",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/multiply-two-numbers-represented-linked-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 110,
    "title": "Remove nth node from end of list",
    "topic": "Linked List",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 111,
    "title": "Reorder List",
    "topic": "Linked List",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/reorder-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 112,
    "title": "Detect and remove loop in a linked list",
    "topic": "Linked List",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/detect-and-remove-loop-in-a-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 113,
    "title": "Write a Function to get the Intersection Point of two Linked Lists",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/write-a-function-to-get-the-intersection-point-of-two-linked-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 114,
    "title": "Flatten a linked list with next and child pointers",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/flatten-a-linked-list-with-next-and-child-pointers/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 115,
    "title": "Linked list in zig-zag fashion",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/linked-list-in-zig-zag-fashion/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 116,
    "title": "Reverse a doubly linked list",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/reverse-a-doubly-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 117,
    "title": "Delete nodes which have a greater value on right side",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/delete-nodes-which-have-a-greater-value-on-right-side/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 118,
    "title": "Segregate even and odd Elements in a Linked List",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/segregate-even-and-odd-elements-in-a-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 119,
    "title": "Point to next higher value node in a linked list with an Arbitrary Pointer",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/point-to-next-higher-value-node-in-a-linked-list-with-an-arbitrary-pointer/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 120,
    "title": "Rearrange a given linked list in place",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/rearrange-a-given-linked-list-in-place/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 121,
    "title": "Sort Biotonic Doubly Linked Lists",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/sort-biotonic-doubly-linked-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 122,
    "title": "Merge K Sorted Lists",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 123,
    "title": "Merge sort for linked list",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/merge-sort-for-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 124,
    "title": "Quicksort on singly-linked list",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/quicksort-on-singly-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 125,
    "title": "Sum of two linked lists",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/sum-of-two-linked-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 126,
    "title": "Flattening a linked list",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/flattening-a-linked-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 127,
    "title": "Clone a linked list with next and random Pointer",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/clone-a-linked-list-with-next-and-random-pointer/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 128,
    "title": "Subtract two numbers represented as linked lists",
    "topic": "Linked List",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/subtract-two-numbers-represented-as-linked-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 129,
    "title": "Implement two stacks in an Array",
    "topic": "Stacks & Queues",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/implement-two-stacks-in-an-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 130,
    "title": "Evaluation of Postfix Expression",
    "topic": "Stacks & Queues",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/evaluation-of-postfix-expression/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 131,
    "title": "Implement Stack using Queues",
    "topic": "Stacks & Queues",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/implement-stack-using-queues/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 132,
    "title": "Queue Reversal",
    "topic": "Stacks & Queues",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/queue-reversal/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 133,
    "title": "Implement Stack Queue using Deque",
    "topic": "Stacks & Queues",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/implement-stack-queue-using-deque/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 134,
    "title": "Reverse first k elements of queue",
    "topic": "Stacks & Queues",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/reverse-first-k-elements-of-queue/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 135,
    "title": "Design Stack with Middle Operation",
    "topic": "Stacks & Queues",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/design-stack-with-middle-operation/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 136,
    "title": "Infix to Postfix",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/infix-to-postfix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 137,
    "title": "Design and Implement Special stack",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/design-and-implement-special-stack/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 138,
    "title": "Longest Valid String",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-valid-string/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 139,
    "title": "Find if an expression has duplicate parenthesis or not",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-if-an-expression-has-duplicate-parenthesis-or-not/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 140,
    "title": "Stack permutations check if an array is stack permutation of other",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 141,
    "title": "Count natural numbers whose permutation greater number",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-natural-numbers-whose-permutation-greater-number/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 142,
    "title": "Sort a stack using Recursion",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/sort-a-stack-using-recursion/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 143,
    "title": "Queue based approach for first non repeating character in a stream",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/queue-based-approach-for-first-non-repeating-character-in-a-stream/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 144,
    "title": "The Celebrity Problem",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/the-celebrity-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 145,
    "title": "Next larger Element",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/next-larger-element/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 146,
    "title": "Distance of nearest cell",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/distance-of-nearest-cell/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 147,
    "title": "Rotten-oranges",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/rotten-oranges/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 148,
    "title": "Next smaller element",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/next-smaller-element/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 149,
    "title": "Circular-tour",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/circular-tour/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 150,
    "title": "Efficiently implement k-stacks single array",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/efficiently-implement-k-stacks-single-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 151,
    "title": "The celebrity problem",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/the-celebrity-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 152,
    "title": "Iterative tower of hanoi",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/iterative-tower-of-hanoi/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 153,
    "title": "Find the maximum of minimums for every window size in a given array",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-the-maximum-of-minimums-for-every-window-size-in-a-given-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 154,
    "title": "lru cache implementation",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/lru-cache-implementation/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 155,
    "title": "Find a tour that visits all stations",
    "topic": "Stacks & Queues",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-a-tour-that-visits-all-stations/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 156,
    "title": "Activity selection problem greedy algo",
    "topic": "Greedy",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/activity-selection-problem-greedy-algo/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 157,
    "title": "Greedy algorithm to find minimum number of coins",
    "topic": "Greedy",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/greedy-algorithm-to-find-minimum-number-of-coins/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 158,
    "title": "Minimum sum two numbers formed digits array-2",
    "topic": "Greedy",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/minimum-sum-two-numbers-formed-digits-array-2/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 159,
    "title": "Minimum sum absolute difference pairs two arrays",
    "topic": "Greedy",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/minimum-sum-absolute-difference-pairs-two-arrays/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 160,
    "title": "Find maximum height pyramid from the given array of objects",
    "topic": "Greedy",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/find-maximum-height-pyramid-from-the-given-array-of-objects/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 161,
    "title": "Minimum cost for acquiring all coins with k extra coins allowed with every coin",
    "topic": "Greedy",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/minimum-cost-for-acquiring-all-coins-with-k-extra-coins-allowed-with-every-coin/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 162,
    "title": "Find maximum equal sum of every three stacks",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-maximum-equal-sum-of-every-three-stacks/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 163,
    "title": "Job sequencing problem",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/job-sequencing-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 164,
    "title": "Greedy algorithm egyptian fraction",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/greedy-algorithm-egyptian-fraction/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 165,
    "title": "Fractional knapsack problem",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/fractional-knapsack-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 166,
    "title": "Maximum length chain of pairs",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximum-length-chain-of-pairs/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 167,
    "title": "Find smallest number with given number of digits and digit sum",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-smallest-number-with-given-number-of-digits-and-digit-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 168,
    "title": "Maximize sum of consecutive differences circular-array",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximize-sum-of-consecutive-differences-circular-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 169,
    "title": "paper-cut minimum number squares",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/paper-cut-minimum-number-squares/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 170,
    "title": "Lexicographically smallest array-k consecutive swaps",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/lexicographically-smallest-array-k-consecutive-swaps/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 171,
    "title": "Problems-CHOCOLA",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/problems-chocola/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 172,
    "title": "Find minimum time to finish all jobs with given constraints",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-with-given-constraints/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 173,
    "title": "Job sequencing using disjoint set union",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/job-sequencing-using-disjoint-set-union/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 174,
    "title": "Rearrange characters string such that no two adjacent are same",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/rearrange-characters-string-such-that-no-two-adjacent-are-same/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 175,
    "title": "Minimum edges to reverse to make path from a source to a destination",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-edges-to-reverse-to-make-path-from-a-source-to-a-destination/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 176,
    "title": "Minimize Cash Flow among a given set of friends who have borrowed money from each other",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimize-cash-flow-among-a-given-set-of-friends-who-have-borrowed-money-from-each-other/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 177,
    "title": "Minimum Cost to cut a board into squares",
    "topic": "Greedy",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-cost-to-cut-a-board-into-squares/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 178,
    "title": "Maximum Depth of Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 179,
    "title": "Reverse Level Order Traversal",
    "topic": "Binary Trees",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/reverse-level-order-traversal/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 180,
    "title": "Subtree of Another Tree",
    "topic": "Binary Trees",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/subtree-of-another-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 181,
    "title": "Invert Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/invert-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 182,
    "title": "Binary Tree Level Order Traversal",
    "topic": "Binary Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 183,
    "title": "Left View of Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://www.geeksforgeeks.org/print-left-view-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 184,
    "title": "Right View of Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 185,
    "title": "ZigZag Tree Traversal",
    "topic": "Binary Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/zigzag-tree-traversal/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 186,
    "title": "Create a mirror tree from the given binary tree",
    "topic": "Binary Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/create-a-mirror-tree-from-the-given-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 187,
    "title": "Leaf at same level",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/leaf-at-same-level/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 188,
    "title": "Check for Balanced Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/check-for-balanced-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 189,
    "title": "Transform to Sum Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/transform-to-sum-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 190,
    "title": "Check if Tree is Isomorphic",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/check-if-tree-is-isomorphic/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 191,
    "title": "Same Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/same-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 192,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 193,
    "title": "Height of Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/height-of-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 194,
    "title": "Diameter of a Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/diameter-of-a-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 195,
    "title": "Top View of Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 196,
    "title": "Bottom View of Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/bottom-view-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 197,
    "title": "Diagonal Traversal of Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/diagonal-traversal-of-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 198,
    "title": "Boundary Traversal of binary tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/boundary-traversal-of-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 199,
    "title": "Construct Binary Tree from String with Brackets",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-string-with-brackets/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 200,
    "title": "Minimum swap required to convert binary tree to binary search tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-swap-required-to-convert-binary-tree-to-binary-search-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 201,
    "title": "Duplicate subtree in Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/duplicate-subtree-in-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 202,
    "title": "Check if a given graph is tree or not",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/check-if-a-given-graph-is-tree-or-not/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 203,
    "title": "Lowest Common Ancestor in a Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/lowest-common-ancestor-in-a-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 204,
    "title": "Min distance between two given nodes of a Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/min-distance-between-two-given-nodes-of-a-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 205,
    "title": "Duplicate Subtrees",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/duplicate-subtrees/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 206,
    "title": "Kth ancestor of a node in binary tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/kth-ancestor-of-a-node-in-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 207,
    "title": "Binary Tree Maximum Path Sum",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 208,
    "title": "Serialize and Deserialize Binary Tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 209,
    "title": "Binary Tree to DLL",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-to-dll/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 210,
    "title": "Print all k-sum paths in a binary tree",
    "topic": "Binary Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/print-all-k-sum-paths-in-a-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 211,
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "topic": "Binary Search Trees",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 212,
    "title": "Binary Search Tree | Set 1 (Search and Insertion)",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/binary-search-tree-|-set-1-search-and-insertion/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 213,
    "title": "Minimum element in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/minimum-element-in-bst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 214,
    "title": "Predecessor and Successor",
    "topic": "Binary Search Trees",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/predecessor-and-successor/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 215,
    "title": "Check whether BST contains Dead End",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/check-whether-bst-contains-dead-end/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 216,
    "title": "Binary Tree to BST",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-to-bst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 217,
    "title": "Kth largest element in BST",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/kth-largest-element-in-bst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 218,
    "title": "Validate Binary Search Tree",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 219,
    "title": "Kth Smallest Element in a BST",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 220,
    "title": "Delete Node in a BST",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/delete-node-in-a-bst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 221,
    "title": "Flatten BST to sorted list",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/flatten-bst-to-sorted-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 222,
    "title": "Preorder to Postorder",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/preorder-to-postorder/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 223,
    "title": "Count BST nodes that lie in a given range",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-bst-nodes-that-lie-in-a-given-range/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 224,
    "title": "Populate Inorder Successor for all Nodes",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/populate-inorder-successor-for-all-nodes/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 225,
    "title": "Convert Normal BST to Balanced BST",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/convert-normal-bst-to-balanced-bst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 226,
    "title": "Merge two BSTs",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/merge-two-bsts/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 227,
    "title": "Given n appointments, find all conflicting appointments",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/given-n-appointments-find-all-conflicting-appointments/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 228,
    "title": "Replace every element",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/replace-every-element/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 229,
    "title": "Construct BST from given preorder traversal",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/construct-bst-from-given-preorder-traversal/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 230,
    "title": "Find median of BST in O(n) time and O(1) space",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-median-of-bst-in-on-time-and-o1-space/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 231,
    "title": "Largest BST in a Binary Tree",
    "topic": "Binary Search Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/largest-bst-in-a-binary-tree/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 232,
    "title": "Choose k array elements such that difference of maximum and minimum is minimized",
    "topic": "Heaps & Hashing",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/choose-k-array-elements-such-that-difference-of-maximum-and-minimum-is-minimized/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 233,
    "title": "Heap Sort",
    "topic": "Heaps & Hashing",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/heap-sort/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 234,
    "title": "Top K Frequent Elements",
    "topic": "Heaps & Hashing",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/top-k-frequent-elements/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 235,
    "title": "k largest elements in an array",
    "topic": "Heaps & Hashing",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/k-largest-elements-in-an-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 236,
    "title": "Next Greater Element",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/next-greater-element-i/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 237,
    "title": "K\u2019th Smallest/Largest Element in Unsorted Array",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/k\u2019th-smallestlargest-element-in-unsorted-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 238,
    "title": "Find the maximum repeating number in O(n) time and O(1) extra space",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-the-maximum-repeating-number-in-on-time-and-o1-extra-space/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 239,
    "title": "K-th smallest element after removing some integers from natural numbers",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/k-th-smallest-element-after-removing-some-integers-from-natural-numbers/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 240,
    "title": "Find k closest elements to a given value",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-k-closest-elements-to-a-given-value/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 241,
    "title": "K\u2019th largest element in a stream",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/k\u2019th-largest-element-in-a-stream/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 242,
    "title": "Connect Ropes",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/connect-ropes/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 243,
    "title": "Cuckoo Hashing",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/cuckoo-hashing/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 244,
    "title": "Itinerary from a List of Tickets",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/itinerary-from-a-list-of-tickets/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 245,
    "title": "Largest Subarray with 0 Sum",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/largest-subarray-with-0-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 246,
    "title": "Count distinct elements in every window of size  k",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-distinct-elements-in-every-window-of-size-k/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 247,
    "title": "Group Shifted Strings",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/group-shifted-strings/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 248,
    "title": "Merge K Sorted lists",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 249,
    "title": "Find Median from Data Stream",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-median-from-data-stream/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 250,
    "title": "Sliding Window Maximum",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/sliding-window-maximum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 251,
    "title": "Find the smallest positive number",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-the-smallest-positive-number/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 252,
    "title": "Find Surpasser Count of each element in array",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-surpasser-count-of-each-element-in-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 253,
    "title": "Tournament Tree and Binary Heap",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/tournament-tree-and-binary-heap/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 254,
    "title": "Check for palindrome",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/check-for-palindrome/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 255,
    "title": "Length of the largest subarray with contiguous elements",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/length-of-the-largest-subarray-with-contiguous-elements/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 256,
    "title": "Palindrome Substring Queries",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/palindrome-substring-queries/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 257,
    "title": "Subarray distinct elements",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/subarray-distinct-elements/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 258,
    "title": "Find the recurring function",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-the-recurring-function/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 259,
    "title": "K maximum sum combinations from two arrays",
    "topic": "Heaps & Hashing",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/k-maximum-sum-combinations-from-two-arrays/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 260,
    "title": "BFS",
    "topic": "Graphs",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/bfs/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 261,
    "title": "DFS",
    "topic": "Graphs",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/dfs/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 262,
    "title": "Flood Fill Algorithm",
    "topic": "Graphs",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/flood-fill-algorithm/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 263,
    "title": "Number of Triangles",
    "topic": "Graphs",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/number-of-triangles/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 264,
    "title": "Detect cycle in a graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/detect-cycle-in-a-graph/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 265,
    "title": "Detect cycle in an undirected graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/detect-cycle-in-an-undirected-graph/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 266,
    "title": "Rat in a Maze Problem",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/rat-in-a-maze-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 267,
    "title": "Steps by Knight",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/steps-by-knight/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 268,
    "title": "Clone graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 269,
    "title": "Number of Operations to Make Network Connected",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 270,
    "title": "Dijkstra\u2019s shortest path algorithm",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/dijkstra\u2019s-shortest-path-algorithm/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 271,
    "title": "Topological Sort",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/topological-sort/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 272,
    "title": "Oliver and the Game",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/oliver-and-the-game/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 273,
    "title": "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 274,
    "title": "Find whether it is possible to finish all tasks or not from given dependencies",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 275,
    "title": "Find the number of islands",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-the-number-of-islands/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 276,
    "title": "Prim's Algo",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/prims-algo/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 277,
    "title": "Negative Weighted Cycle",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/negative-weighted-cycle/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 278,
    "title": "Floyd Warshall",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/floyd-warshall/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 279,
    "title": "Graph Coloring",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/graph-coloring/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 280,
    "title": "Snakes and Ladders",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/snakes-and-ladders/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 281,
    "title": "Kosaraju's Theorem",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/kosarajus-theorem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 282,
    "title": "Journey to moon",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/journey-to-moon/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 283,
    "title": "Vertex Cover",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/vertex-cover/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 284,
    "title": "M Coloring Problem",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 285,
    "title": "Cheapest Flights Within K Stops",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 286,
    "title": "Find if there is a path of more than k length from a source",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 287,
    "title": "Bellman Ford",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/bellman-ford/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 288,
    "title": "Bipartitie Graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/bipartitie-graph/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 289,
    "title": "Word-Ladder",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 290,
    "title": "Allen Dictionary",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/allen-dictionary/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 291,
    "title": "Kruskals MST",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/kruskals-mst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 292,
    "title": "Total number spanning trees graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/total-number-spanning-trees-graph/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 293,
    "title": "Travelling Salesman",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/travelling-salesman/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 294,
    "title": "Find longest path directed acyclic graph",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-longest-path-directed-acyclic-graph/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 295,
    "title": "Two Clique Problem",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/two-clique-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 296,
    "title": "Minimise the cash flow",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimise-the-cash-flow/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 297,
    "title": "Chinese postman",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/chinese-postman/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 298,
    "title": "Water Jug",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/water-jug/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 299,
    "title": "Water Jug 2",
    "topic": "Graphs",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/water-jug-2/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 300,
    "title": "Construct a trie from scratch",
    "topic": "Tries",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/construct-a-trie-from-scratch/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 301,
    "title": "Print unique rows in a given boolean matrix",
    "topic": "Tries",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/print-unique-rows-in-a-given-boolean-matrix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 302,
    "title": "Word Break Problem | (Trie solution)",
    "topic": "Tries",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/word-break-problem-|-trie-solution/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 303,
    "title": "Given a sequence of words, print all anagrams together",
    "topic": "Tries",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/given-a-sequence-of-words-print-all-anagrams-together/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 304,
    "title": "Find shortest unique prefix for every word in a given list",
    "topic": "Tries",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/find-shortest-unique-prefix-for-every-word-in-a-given-list/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 305,
    "title": "Implement a Phone Directory",
    "topic": "Tries",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/implement-a-phone-directory/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 306,
    "title": "Knapsack with Duplicate Items",
    "topic": "DP",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/knapsack-with-duplicate-items/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 307,
    "title": "BBT counter",
    "topic": "DP",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/bbt-counter/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 308,
    "title": "Reach a given score",
    "topic": "DP",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/reach-a-given-score/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 309,
    "title": "Maximum difference of zeros and ones in binary string",
    "topic": "DP",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/maximum-difference-of-zeros-and-ones-in-binary-string/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 310,
    "title": "Climbing Stairs",
    "topic": "DP",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 311,
    "title": "Permutation Coefficient",
    "topic": "DP",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/permutation-coefficient/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 312,
    "title": "Longest Repeating Subsequence",
    "topic": "DP",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/longest-repeating-subsequence/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 313,
    "title": "Pairs with specific difference",
    "topic": "DP",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/pairs-with-specific-difference/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 314,
    "title": "Longest subsequence-1",
    "topic": "DP",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/longest-subsequence-1/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 315,
    "title": "Coin Change",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/coin-change/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 316,
    "title": "LIS",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/lis/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 317,
    "title": "Longest Common Subsequence",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-common-subsequence/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 318,
    "title": "Word Break",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/word-break/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 319,
    "title": "Combination Sum IV",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/combination-sum-iv/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 320,
    "title": "House Robber",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/house-robber/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 321,
    "title": "Houe Robber 2",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/houe-robber-2/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 322,
    "title": "Decode Ways",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 323,
    "title": "Unique Paths",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 324,
    "title": "Jumps Game",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/jumps-game/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 325,
    "title": "Knapsack Problem",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/knapsack-problem/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 326,
    "title": "nCr",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/ncr/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 327,
    "title": "Catalan Number",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/catalan-number/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 328,
    "title": "Edit Distance",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 329,
    "title": "Subset Sum",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/subset-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 330,
    "title": "Gold mine",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/gold-mine/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 331,
    "title": "Assembly Line Scheduling",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/assembly-line-scheduling/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 332,
    "title": "Maximize The Cut Segments",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximize-the-cut-segments/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 333,
    "title": "Maximum sum increasing subsequence",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/maximum-sum-increasing-subsequence-dp-14/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 334,
    "title": "Count all subsequences having product less than K",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-all-subsequences-having-product-less-than-k/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 335,
    "title": "Maximum sum increasing subsequence",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/maximum-sum-increasing-subsequence-dp-14/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 336,
    "title": "Egg dropping puzzle",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/egg-dropping-puzzle/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 337,
    "title": "Max length chain",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/max-length-chain/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 338,
    "title": "Largest Square in Matrix",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/largest-square-in-matrix/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 339,
    "title": "Maximum Path Sum",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 340,
    "title": "Minimum Number of Jumps",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-number-of-jumps/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 341,
    "title": "Minimum removals from array to make max \u2013 min <= K",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/minimum-removals-from-array-to-make-max-\u2013-min-<=-k/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 342,
    "title": "Longest Common Substring",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/longest-common-substring-dp-29/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 343,
    "title": "Partition Equal Subset Sum",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 344,
    "title": "Longest Palindromic Subsequnce",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-subsequnce/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 345,
    "title": "Count Palindromic Subsequences",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-palindromic-subsequences/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 346,
    "title": "Longest Palindromic Substring",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 347,
    "title": "Longest Alternating Sequence",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/longest-alternating-sequence/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 348,
    "title": "Weighted Job Scheduling",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/weighted-job-scheduling/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 349,
    "title": "Coin Game",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/coin-game/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 350,
    "title": "Coin Game Winner",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/coin-game-winner/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 351,
    "title": "Optimal Strategy for a game",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/optimal-strategy-for-a-game/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 352,
    "title": "Word Wrap",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/word-wrap/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 353,
    "title": "Mobile numeric keypad",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/mobile-numeric-keypad/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 354,
    "title": "Maximum Length of Pair Chain",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximum-length-of-pair-chain/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 355,
    "title": "Matrix Chain Multiplication",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/burst-balloons/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 356,
    "title": "Maximum profit by buying and selling a share at most twice",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 357,
    "title": "Optimal BST",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/optimal-bst/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 358,
    "title": "Largest Submatrix with sum 0",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/largest-submatrix-with-sum-0/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 359,
    "title": "Largest area rectangular sub-matrix with equal number of 1\u2019s and 0\u2019s",
    "topic": "DP",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/largest-area-rectangular-sub-matrix-with-equal-number-of-1\u2019s-and-0\u2019s/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 360,
    "title": "Count set bits in an integer",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/count-set-bits-in-an-integer/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 361,
    "title": "Find the two non-repeating elements in an array of repeating elements",
    "topic": "Bit Manipulation",
    "difficulty": "Easy",
    "leetcodeLink": "https://leetcode.com/problems/find-the-two-non-repeating-elements-in-an-array-of-repeating-elements/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 362,
    "title": "Program to find whether a no is power of two",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/program-to-find-whether-a-no-is-power-of-two/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 363,
    "title": "Find position of the only set bit",
    "topic": "Bit Manipulation",
    "difficulty": "Medium",
    "leetcodeLink": "https://leetcode.com/problems/find-position-of-the-only-set-bit/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 364,
    "title": "Count number of bits to be flipped to convert A to B",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-number-of-bits-to-be-flipped-to-convert-a-to-b/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 365,
    "title": "Count total set bits in all numbers from 1 to n",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-total-set-bits-in-all-numbers-from-1-to-n/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 366,
    "title": "Copy set bits in a range",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/copy-set-bits-in-a-range/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 367,
    "title": "Calculate square of a number without using *, / and pow()",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/calculate-square-of-a-number-without-using-*-and-pow/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 368,
    "title": "Divide two integers without using multiplication, division and mod operator",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/divide-two-integers-without-using-multiplication-division-and-mod-operator/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 369,
    "title": "Power Set",
    "topic": "Bit Manipulation",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/subsets/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 370,
    "title": "Range Sum Query - Immutable",
    "topic": "Segment Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/range-sum-query--immutable/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 371,
    "title": "Range Minimum Query",
    "topic": "Segment Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://www.geeksforgeeks.org/range-minimum-query-for-static-array/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 372,
    "title": "Range Sum Query - Mutable",
    "topic": "Segment Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/range-sum-query--mutable/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 373,
    "title": "Create Sorted Array through Instructions",
    "topic": "Segment Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/create-sorted-array-through-instructions/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 374,
    "title": "Count of Range Sum",
    "topic": "Segment Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-of-range-sum/",
    "videoLinks": [],
    "articleLinks": []
  },
  {
    "questionNumber": 375,
    "title": "Count of Smaller Numbers After Self",
    "topic": "Segment Trees",
    "difficulty": "Hard",
    "leetcodeLink": "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
    "videoLinks": [],
    "articleLinks": []
  }
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Question.deleteMany({});
  await Question.insertMany(questions);
  console.log("✅ " + questions.length + " questions seeded with LeetCode + GFG links!");
  process.exit();
});