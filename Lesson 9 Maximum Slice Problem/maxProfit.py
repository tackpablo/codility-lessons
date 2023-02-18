# 100%
def solution(A):
    start = float("inf")
    maxProfit = 0
    for i in range(len(A)):
        if start > A[i]:
            start = A[i]
        profit = A[i] - start
        if profit > maxProfit:
            maxProfit = profit
    return maxProfit

#  O(1) - space
#  O(n) - time

# 88%
# def solution(A):
#     start = A[0]
#     maxProfit = 0
#     for i in range(1, len(A)):
#         if start > A[i]:
#             start = A[i]
#         profit = A[i] - start
#         if profit > maxProfit:
#             maxProfit = profit
#     return maxProfit

#  O(1) - space
#  O(n) - time
