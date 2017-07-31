class Solution:
	def Find(self,target,array):
		row = len(array)
		col = len(array[0])
		print(row,col)
		for i in range(row):
			if row > 0 and col > 0 and array[i][0] > target:
				break
			for j in range(col):
				if array[i][j] > target:
					break
				if array[i][j] == target:
					return True
		return False
		