class Solution:
	def jumpFloorII(self, number):
		f0 = 1
		s = 1
		f = 1
		if number <= 1:
			return 1
		for i in range(1,number):
			f = s + f
			s = f
		return f