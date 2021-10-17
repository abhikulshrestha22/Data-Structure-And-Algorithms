# Find largest and smallest in an array

import math

def findLargestNSmallest(arr):
    smallest = math.inf
    largest = -math.inf
    for i in arr:
        if i<smallest:
            smallest = i
        if i>largest:
            largest = i
    return smallest,largest



smallest, largest = findLargestNSmallest([-20, 34, 21, -87, 92, 2147483647])
print(smallest,largest)
