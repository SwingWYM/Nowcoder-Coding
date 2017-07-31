class Solution:
	def printListFromTailToHead(self, listNode):
		result = []
		while listNode is not None:
			result.insert(0,listNode.val)
			listNode = listNode.next

		return result