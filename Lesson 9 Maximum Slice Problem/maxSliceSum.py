# 100%
def solution(A):
    current_sum = float("-inf")
    max_of_array = max(A) if max(A) > sum(A) else sum(A)
    max_sum = float("-inf")
    for n in A:
        if current_sum < 0 and n > current_sum:
            current_sum = n
        else:
            current_sum += n
        if current_sum > max_sum:
            max_sum = current_sum
        else:
            current_sum = max(0, current_sum)
    return max_sum if max_sum > max_of_array else max_of_array

#  O(1) - space
#  O(n) - time

# 61%
# def solution(A):
#     current_sum = 0
#     max_of_array = max(A)
#     max_sum = float("-inf")
#     for n in A:
#         current_sum += n
#         if current_sum > max_sum:
#             max_sum = current_sum
#         else:
#             current_sum = 0
#     return max_sum if max_sum > max_of_array else max_of_array

#  O(1) - space
#  O(n) - time

# 30%
# def solution(A):
#     max_ending = max_slice = 0
#     for a in A:
#         max_ending = max_ending + a
#         max_slice = max(max_slice, max_ending)
#     return max_slice

#  O(1) - space
#  O(n) - time

# 53%
# def solution(A):
#     max_ending = max_slice = 0
#     for a in A:
#         max_ending = max(0, max_ending + a)
#         max_slice = max(max_slice, max_ending)
#     return max_slice

#  O(1) - space
#  O(n) - time