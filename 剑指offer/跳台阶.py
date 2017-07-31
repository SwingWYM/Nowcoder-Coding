class Solution:
	def jumpFloor(self,number):
		f1 = 1
		f2 = 2
		if number <= 2:
			return number
		for i in range(2,number):
			f2 = f1 + f2
			f1 = f2 - f1
		return f2
			
			