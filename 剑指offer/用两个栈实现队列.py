# class Solution:
# 	def __init__(self):
# 		self.arr = []
# 	def push(self, node):
# 		self.arr.append(node)

# 	def pop(self):
# 		print self.arr.pop(0)


class Solution:
	def __init__(self):
		self.stackA = []
		self.stackB = []
	def push(self, node):
		self.stackA.append(node)
	def pop(self):
		if len(self.stackB) == 0:
			for i in range(len(self.stackA)):
				self.stackB.append(self.stackA.pop())
		if len(self.stackB) == 0:
			return None
		return self.stackB.pop()





solution = Solution()
solution.push(1)
solution.push(2)
solution.push(3)
solution.pop()
solution.pop()
solution.push(4)
solution.pop()
solution.push(5)
solution.pop()
solution.pop()