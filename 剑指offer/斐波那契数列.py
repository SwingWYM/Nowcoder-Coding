class Solution:
	def Fibonacci(self, n):
		if n <= 1:
			return n
		else:
			a = 0
			b = 1
			for i in range(n - 1):
				b = b + a
				a = b - a
			return b


