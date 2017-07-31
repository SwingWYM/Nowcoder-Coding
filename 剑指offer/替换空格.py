class Solution:
	def replaceSpace(self, s):
		length = len(s)
		result = ""
		for i in range(length):
			if s[i] == ' ':
				result = result + "%20"
			else:
				result = result + s[i]
		return result