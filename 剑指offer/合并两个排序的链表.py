# -*- coding:utf-8 -*-
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution:
	# 返回合并后列表
	def Merge(self, pHead1, pHead2):
		# write code here
		head = ListNode(0)
		p = head
		while pHead2 and pHead1:
			if pHead1.val < pHead2.val:
				p.next = pHead1
				pHead1 = pHead1.next
				p = p.next
			else:
				p.next = pHead2
				pHead2 = pHead2.next
				p = p.next
		if pHead2:
			p.next = pHead2
		if pHead1:
			p.next = pHead1
		return head.next