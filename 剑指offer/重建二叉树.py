class Solution:
	def reConstructBinaryTree(self,pre,tin):
		lpre = len(pre)
		ltin = len(tin)
		if lpre != ltin or lpre <= 0:
			return None
		else:
			rootValue = pre[0]
			root = TreeNode(rootValue)
			if lpre == 1:
				return root

			roottin = 0	
			while roottin < ltin and tin[roottin] != rootValue:
				roottin = roottin + 1
			if roottin == ltin:
				return None

			if roottin > 0:
				root.left = self.reConstructBinaryTree(pre[1:roottin + 1],tin[0:roottin])

			if roottin < lpre:
				root.right = self.reConstructBinaryTree(pre[roottin + 1:lpre],tin[roottin + 1:lpre])
			return root

			