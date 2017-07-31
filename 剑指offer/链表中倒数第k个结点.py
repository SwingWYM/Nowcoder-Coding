# -*- coding:utf-8 -*-
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:

	def initLink(self,array):
		head = p = ListNode(0)
		for i in range(len(array)):
			p.next = ListNode(array[i])
			p = p.next
		return head.next

	def FindKthToTail(self, head, k):
		if k < 0:
			return None
		link = head
		i = 1
		while link and i < k:
			link = link.next
			i = i + 1
		if link is None:
			return None
		while link.next:
			link = link.next
			head = head.next
		return head.val

solution = Solution()
link = solution.initLink([1,2,3,4])

print(solution.FindKthToTail(link,0))






# 使用这种方法更加简洁，将所有的节点放入数组中，再对数组进行操作。
class Solution:
    def FindKthToTail(self, head, k):
        # write code here
        l=[]
        while head!=None:
            l.append(head)
            head=head.next
        if k>len(l) or k<1:
            return
        return l[-k]