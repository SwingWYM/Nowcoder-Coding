class Solution:
	def minNumberInRotateArray(self, rotateArray):
		if len(rotateArray) <= 0:
			print 0
		else:
			result = rotateArray[0];
			for i in range(len(rotateArray)):
				if rotateArray[i] < result:
					result = rotateArray[i]

			print result