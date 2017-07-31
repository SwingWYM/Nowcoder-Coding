class Solution:
	def Power(self, base, exponent):
		result = 1
		if exponent > 0:
			for i in range(exponent):
				result = result * base
		if exponent < 0:
			for i in range(-exponent):
				result = result * 1/base
		return result
