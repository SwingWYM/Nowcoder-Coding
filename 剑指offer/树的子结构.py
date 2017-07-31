# -*- coding:utf-8 -*-
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
	def HasSubtree(self, pRoot1, pRoot2):
		# write code here
		if pRoot1 is None or pRoot2 is None:
			return False
		return self.Subtree(pRoot1,pRoot2) or self.HasSubtree(pRoot1.left,pRoot2) or self.HasSubtree(pRoot1.right,pRoot2)

	def Subtree(self,pRoot1,pRoot2):
		if pRoot2 is None:
			return True
		if pRoot1 is None:
			return False
		if pRoot1.val == pRoot2.val:
			return self.Subtree(pRoot1.left,pRoot2.left) and self.Subtree(pRoot1.right,pRoot2.right)
		else:
			return False