# 100%
# Kadane's Algorithm
def solution(numbers):
    max_sum = 0
    list_len = len(numbers)
    fwd = [0] * list_len    
    bkw = [0] * list_len    
    # going forward through the list
    for i in range(1, list_len - 1):
        fwd[i] = max(fwd[i - 1] + numbers[i], 0)    # going backward through the list
    for i in range(list_len - 2, 0, -1):
        bkw[i] = max(bkw[i + 1] + numbers[i], 0)    # getting the maximum double slice sum
    for i in range(1, list_len - 1):
        max_sum = max(max_sum, fwd[i - 1] + bkw[i + 1])    # return the maximum double slice sum
    return max_sum

#  O(n) - space
#  O(n) - time

# # 53%
# def solution(A):
#     B = A[1:-1]
#     max_sum, start, end = max_slice(B)
#     best_sum = 0
#     if end == 0:
#         end = 1
#     for val in B[start:end+1]:
#         current_sum = max_sum - val
#         best_sum = max(current_sum, best_sum)
#     return best_sum

# def max_slice(A):
#     maxslice, ending = -float('inf'), None
#     startIndex, lastIndex = 0, len(A)
#     for i, value in enumerate(A):
#         if ending == None:
#             ending = value
#         else:
#             if (ending + value) > value:
#                 ending = ending + value
#             else:
#                 ending = value
#                 startIndex = i
       
#         if (ending > maxslice):
#             maxslice = ending
#             lastIndex = i
#     return maxslice, startIndex, lastIndex

# #  O(1) - space
# #  O(n) - time