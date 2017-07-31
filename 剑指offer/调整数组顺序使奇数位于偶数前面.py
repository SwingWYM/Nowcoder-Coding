# -*- coding:utf-8 -*-
class Solution:
	def reOrderArray(self, array):
		a = []
		b = []
		for i in range(len(array)):
			if array[i] % 2 == 0:
				a.append(array[i])
			else:
				b.append(array[i])
		return b + a

solution = Solution();
print(solution.reOrderArray([2,5,1,7]));