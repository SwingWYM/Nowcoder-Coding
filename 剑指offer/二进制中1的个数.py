class Solution:
	def NumberOf1(self, n):
		num = 0
		neg = False
		if n < 0:
			n = ~n
			neg = True
		while n != 0:
			if n & 1:
				num = num + 1
			n = n >> 1
		if neg:
			return 32 - num   #共三十二位
		return num

# class Solution:
# 	def NumberOf1(self, n):
# 		num = 0
# 		while n != 0:
# 			num += 1
# 			n = n & (n - 1)
# 		return num




solution = Solution()
print(solution.NumberOf1(-7))

print(-6 & -3)