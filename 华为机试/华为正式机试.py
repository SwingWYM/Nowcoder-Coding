# import sys
# import string

# def isDaffodil(num):
#     t = num
#     sum = 0
#     while t!= 0:
#         m = t % 10
#         t = t // 10
#         sum += m * m * m
#     return int(sum) == int(num)

# if __name__ == "__main__":
#     cnt = 0
#     sum = 0
#     result = []
#     for num in range(100, 1000):
#         if isDaffodil(num):
#             print('第%d个水仙花数: %d'%(cnt+1, num))
#             cnt = cnt + 1
#             sum += num

#     print("水仙花数总和为: %d"%sum)



# import sys

# if __name__ == "__main__":
#     input = sys.stdin.readline().strip()
#     if input == '':
#         print('ERROR')
#     else:
#         l = input.split("#")
#         print(l)
#         dic = ['F', 'G', 'R', 'S', 'T', 'L', 'M', 'N', 'O', 'P', 'Q',
#                'W', 'X', 'Y', 'Z', 'U', 'A', 'G', 'H', 'I', 'J', 'K',
#                'B', 'C', 'D', 'E', 'l', 'm', 'n', 'o', 'p', 'i', 'j',
#                'k', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'q', 'r',
#                'w', 'x', 'y', 'z', 's', 't', 'u', 'v']

#         result = []
#         flag = False
#         for s in l:
#             if s is not "":
#                 s = s.replace('-', '0')
#                 s = s.replace('.', '1')
#                 num = int(s, 2)
#                 if num > 51 or num < 0:
#                     flag = True
#                     break
#                 result.append(dic[num])
#         if flag:
#             print("ERROR")
#         else:
#             print(''.join(result))


# import sys

# if __name__ == "__main__":
#     input = sys.stdin.readline().strip()
#     l = input.split("#")
#     dic = ['F','G','R','S','T','L','M','N','O','P','Q',
#            'W','X','Y','Z','U','A','G','H','I','J','K',
#            'B','C','D','E','l','m','n','o','p','i','j',
#            'k','f','g','h','a','b','c','d','e','q','r',
#            'w','x','y','z','s','t','u','v']
#     result = []
#     for s in l:
#         if s is not "":
#             s = s.replace('-', '0')
#             s = s.replace('.', '1')
#             num = int(s, 2)
#             result.append(dic[num])
#     print(''.join(result))

# import sys

# if __name__ == "__main__":
# 	N = 1e5 + 5
# 	isfind = False

# 	def dfs(self,a,b):
# 		if isfind == True:
# 			return
# 		l = father[a].size()
# 		for i in range(l):
# 			x = father[a][i]
# 			if b==x:
# 				isfind=True
# 				return
# 			if vis.count(x):
# 				continue
# 			vis.insert(x)
# 			dfs(x,b)
# 	def solve(self):
# 		n = int(sys.stdin.readline().strip())
# 		for i in range(n):
# 			r = sys.stdin.readline().strip().split()
# 			a = int(r[0])
# 			b = int(r[1])
# 			isfind = False
# 			vis.clear()






import sys

N = 1e5 + 5
father = {}
vis = []
global isfind


def dfs(a, b):
    global isfind
    if isfind:
        return
    else:
        if a in father.keys():
            l = len(father[a])
            for i in range(0, l):
                x = father[a][i]
                if b == x:
                    isfind = True
                    return
                if vis.count(x):
                    continue
                vis.append(x)
                dfs(x, b)


if __name__ == "__main__":
    n = int(sys.stdin.readline().strip())
    for i in range(n):
        line = sys.stdin.readline().strip()
        l = line.split(" ")
        a, b = l[0], l[1]
        if a in father.keys():
            father[a] = list([b])
        else:
            father[a] = [b]

    line = sys.stdin.readline().strip()
    l = line.split(" ")
    a, b = l[0], l[1]
    isfind = False
    vis.clear()
    dfs(a, b)
    atob = isfind

    isfind = False
    vis.clear()
    dfs(b, a)
    btoa = isfind
    if atob and btoa:
        print('T')
    else:
        print('F')
