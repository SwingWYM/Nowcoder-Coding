class Solution:
	def rectCover(self, number):
		if number <= 2:
			return number
		f1 = 1
		f2 = 2
		for i in range(2,number):
			f2 = f1 + f2
			f1 = f2 - f1
		return f2