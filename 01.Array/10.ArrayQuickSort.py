def quick_sort(arr,low,high):
    if(low<high):
        pivot = partition(arr,low,high)
        quick_sort(arr,low,pivot-1)
        quick_sort(arr,pivot+1,high)

def partition(arr,low,high):
    partition_index = low-1
    pivot = high
    for i in range(low,high):
        
        if arr[i] <= arr[pivot]:
            partition_index +=1
            #swap values of partition_index and i
            temp = arr[i]
            arr[i] = arr[partition_index]
            arr[partition_index] = temp
    partition_index = partition_index+1
    temp = arr[partition_index]
    arr[partition_index] = arr[high]
    arr[high] = temp
    return partition_index

a = [10,2,5,4,1,3]
quick_sort(a,0,5)
print(a)