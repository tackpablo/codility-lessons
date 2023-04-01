# 100%
def solution(N):
    i = 1
    factors = []
    minPerimiter = float("inf")


    while (i * i < N):
        if (N % i == 0):
            factors.append((i, N/i))
        i += 1
    if (i * i == N):
        factors.append((i, i))


    for j, k in factors:
        minPerimiter = min(minPerimiter, (2 * (j + k)))

    return int(minPerimiter)


#  O(n) - space
#  O(sqrt(n)) - time