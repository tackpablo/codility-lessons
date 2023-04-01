# 100%
def solution(N):
    i = 1
    result = 0

    while (i * i < N):
        if (N % i == 0):
            result += 2
        i += 1
    if (i * i == N):
        result += 1
    return result


#  O(n) - space
#  O(sqrt(n)) - time

# Brute force
# def solution(N):
#     count = 0


#     for i in range(1, N + 1):
#         if (N % i == 0):
#             count+=1
   
#     return count
#  O(n) - space
#  O(n) - time