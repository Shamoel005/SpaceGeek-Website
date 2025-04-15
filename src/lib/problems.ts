
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  category: string;
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  starterCode: Record<string, string>;
  solution: Record<string, string>;
}

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "easy",
    category: "Arrays & Hashing",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    starterCode: {
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n    \n}",
      python: "def twoSum(nums, target):\n    \n    pass"
    },
    solution: {
      javascript: "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nfunction twoSum(nums, target) {\n    const map = new Map();\n    \n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        \n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        \n        map.set(nums[i], i);\n    }\n    \n    return [-1, -1]; // No solution found\n}",
      python: "def twoSum(nums, target):\n    num_map = {}\n    \n    for i, num in enumerate(nums):\n        complement = target - num\n        \n        if complement in num_map:\n            return [num_map[complement], i]\n        \n        num_map[num] = i\n    \n    return [-1, -1]  # No solution found"
    }
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "easy",
    category: "Stack",
    description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    examples: [
      {
        input: 's = "()"',
        output: "true"
      },
      {
        input: 's = "()[]{}"',
        output: "true"
      },
      {
        input: 's = "(]"',
        output: "false"
      }
    ],
    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only '()[]{}'."
    ],
    starterCode: {
      javascript: "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isValid(s) {\n    \n}",
      python: "def isValid(s):\n    \n    pass"
    },
    solution: {
      javascript: "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isValid(s) {\n    const stack = [];\n    const pairs = {\n        '(': ')',\n        '{': '}',\n        '[': ']'\n    };\n    \n    for (const char of s) {\n        if (char in pairs) {\n            stack.push(char);\n        } else {\n            const last = stack.pop();\n            if (!last || pairs[last] !== char) {\n                return false;\n            }\n        }\n    }\n    \n    return stack.length === 0;\n}",
      python: "def isValid(s):\n    stack = []\n    pairs = {\n        '(': ')',\n        '{': '}',\n        '[': ']'\n    }\n    \n    for char in s:\n        if char in pairs:\n            stack.append(char)\n        else:\n            if not stack or pairs[stack.pop()] != char:\n                return False\n    \n    return len(stack) == 0"
    }
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "medium",
    category: "Arrays & Sorting",
    description: "Given an array of `intervals` where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
        explanation: "Intervals [1,4] and [4,5] are considered overlapping."
      }
    ],
    constraints: [
      "1 <= intervals.length <= 10^4",
      "intervals[i].length == 2",
      "0 <= starti <= endi <= 10^4"
    ],
    starterCode: {
      javascript: "/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nfunction merge(intervals) {\n    \n}",
      python: "def merge(intervals):\n    \n    pass"
    },
    solution: {
      javascript: "/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nfunction merge(intervals) {\n    if (!intervals.length) return [];\n    \n    intervals.sort((a, b) => a[0] - b[0]);\n    \n    const result = [intervals[0]];\n    \n    for (let i = 1; i < intervals.length; i++) {\n        const current = intervals[i];\n        const lastMerged = result[result.length - 1];\n        \n        if (current[0] <= lastMerged[1]) {\n            // Overlapping intervals, merge them\n            lastMerged[1] = Math.max(lastMerged[1], current[1]);\n        } else {\n            // Non-overlapping interval, add to result\n            result.push(current);\n        }\n    }\n    \n    return result;\n}",
      python: "def merge(intervals):\n    if not intervals:\n        return []\n    \n    intervals.sort(key=lambda x: x[0])\n    result = [intervals[0]]\n    \n    for current in intervals[1:]:\n        last_merged = result[-1]\n        \n        if current[0] <= last_merged[1]:\n            # Overlapping intervals, merge them\n            last_merged[1] = max(last_merged[1], current[1])\n        else:\n            # Non-overlapping interval, add to result\n            result.append(current)\n    \n    return result"
    }
  },
  {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "medium",
    category: "Design",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the `LRUCache` class:\n\n- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.\n- `int get(int key)` Return the value of the key if the key exists, otherwise return -1.\n- `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.",
    examples: [
      {
        input: "Input:\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]",
        output: "Output:\n[null, null, null, 1, null, -1, null, -1, 3, 4]",
        explanation: "LRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4"
      }
    ],
    constraints: [
      "1 <= capacity <= 3000",
      "0 <= key <= 10^4",
      "0 <= value <= 10^5",
      "At most 2 * 10^5 calls will be made to get and put."
    ],
    starterCode: {
      javascript: "/**\n * @param {number} capacity\n */\nclass LRUCache {\n    constructor(capacity) {\n        \n    }\n    \n    /** \n     * @param {number} key\n     * @return {number}\n     */\n    get(key) {\n        \n    }\n    \n    /** \n     * @param {number} key \n     * @param {number} value\n     * @return {void}\n     */\n    put(key, value) {\n        \n    }\n}",
      python: "class LRUCache:\n    def __init__(self, capacity):\n        \n\n    def get(self, key):\n        \n\n    def put(self, key, value):\n        "
    },
    solution: {
      javascript: "/**\n * @param {number} capacity\n */\nclass LRUCache {\n    constructor(capacity) {\n        this.capacity = capacity;\n        this.cache = new Map();\n    }\n    \n    /** \n     * @param {number} key\n     * @return {number}\n     */\n    get(key) {\n        if (!this.cache.has(key)) return -1;\n        \n        // Refresh key by removing and re-inserting it\n        const value = this.cache.get(key);\n        this.cache.delete(key);\n        this.cache.set(key, value);\n        \n        return value;\n    }\n    \n    /** \n     * @param {number} key \n     * @param {number} value\n     * @return {void}\n     */\n    put(key, value) {\n        // If key exists, remove it\n        this.cache.delete(key);\n        \n        // If cache is full, remove the least recently used item (first inserted)\n        if (this.cache.size >= this.capacity) {\n            const lruKey = this.cache.keys().next().value;\n            this.cache.delete(lruKey);\n        }\n        \n        // Add new key\n        this.cache.set(key, value);\n    }\n}",
      python: "class LRUCache:\n    def __init__(self, capacity):\n        self.capacity = capacity\n        self.cache = {}\n        self.order = []\n        \n    def get(self, key):\n        if key not in self.cache:\n            return -1\n            \n        # Update order\n        self.order.remove(key)\n        self.order.append(key)\n        \n        return self.cache[key]\n        \n    def put(self, key, value):\n        # If key exists, update it and refresh its position\n        if key in self.cache:\n            self.order.remove(key)\n        # If at capacity, remove least recently used (oldest element)\n        elif len(self.cache) >= self.capacity:\n            lru_key = self.order.pop(0)\n            del self.cache[lru_key]\n            \n        # Add new entry\n        self.cache[key] = value\n        self.order.append(key)"
    }
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "hard",
    category: "Two Pointers",
    description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped."
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9"
      }
    ],
    constraints: [
      "n == height.length",
      "1 <= n <= 2 * 10^4",
      "0 <= height[i] <= 10^5"
    ],
    starterCode: {
      javascript: "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction trap(height) {\n    \n}",
      python: "def trap(height):\n    \n    pass"
    },
    solution: {
      javascript: "/**\n * @param {number[]} height\n * @return {number}\n */\nfunction trap(height) {\n    if (height.length <= 2) return 0;\n    \n    let left = 0;\n    let right = height.length - 1;\n    let leftMax = height[left];\n    let rightMax = height[right];\n    let water = 0;\n    \n    while (left < right) {\n        if (leftMax < rightMax) {\n            left++;\n            leftMax = Math.max(leftMax, height[left]);\n            water += leftMax - height[left];\n        } else {\n            right--;\n            rightMax = Math.max(rightMax, height[right]);\n            water += rightMax - height[right];\n        }\n    }\n    \n    return water;\n}",
      python: "def trap(height):\n    if len(height) <= 2:\n        return 0\n        \n    left, right = 0, len(height) - 1\n    left_max = height[left]\n    right_max = height[right]\n    water = 0\n    \n    while left < right:\n        if left_max < right_max:\n            left += 1\n            left_max = max(left_max, height[left])\n            water += left_max - height[left]\n        else:\n            right -= 1\n            right_max = max(right_max, height[right])\n            water += right_max - height[right]\n            \n    return water"
    }
  }
];

export const categories = Array.from(
  new Set(problems.map(problem => problem.category))
);

export const getProblems = () => {
  return problems;
};

export const getProblemById = (id: string) => {
  return problems.find(problem => problem.id === id);
};

export const getProblemsByDifficulty = (difficulty: Difficulty) => {
  return problems.filter(problem => problem.difficulty === difficulty);
};

export const getProblemsByCategory = (category: string) => {
  return problems.filter(problem => problem.category === category);
};
