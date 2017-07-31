# -*- coding:utf-8 -*-
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution:
	# 返回ListNode
	def initLink(self,array):
		head = p = ListNode(0)
		for i in range(len(array)):
			p.next = ListNode(array[i])
			p = p.next
		return head.next
	def ReverseList(self, pHead):
		# write code here
		head = ListNode(0)
		q = head
		p = head.next
		while pHead:
			q.next = pHead
			pHead = pHead.next
			q.next.next = p
			p = q.next
		head = head.next
		while head:
			print(head.val)
			head = head.next



solution = Solution()
link = solution.initLink([1,2,3,4])
solution.ReverseList(link)