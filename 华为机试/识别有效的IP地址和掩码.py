import sys

if __name__ == "__main__":
	A = 0
	B = 0
	C = 0
	D = 0
	E = 0
	Error = 0
	private = 0
	m = [0,128,192,224,240,248,252,254,255]
	while (True):
		a = sys.stdin.readline().strip()
		if a == "":
			break
		flagE = 0
		flagM = 0
		a = a.split("~")
		ip = a[0].split(".")
		mask = a[1].split(".")
		for i in range(4):
			if len(ip) != 4 or ip[i] == '' or int(ip[i]) > 255 or int(ip[i]) < 0:
				flagE = 1
				break
		for i in range(1,4):
			if mask[i] == '' or int(mask[i]) not in m:
				flagM = 1
				break
			if int(mask[i]) > int(mask[i-1]) or len(mask) != 4:
				flagM = 1
				break
			elif int(mask[i-1]) < 255 and int(mask[i]) != 0:
				flagM = 1
				break
			if int(mask[3]) == 255:
				flagM = 1
				break
			
		if flagE == 0 and flagM == 0:
			if int(ip[0]) >= 1 and int(ip[0]) <= 126:
				A = A + 1
			elif int(ip[0]) >= 128 and int(ip[0]) <= 191:
				B = B + 1
			elif int(ip[0]) >= 192 and int(ip[0]) <= 223:
				C = C + 1
			elif int(ip[0]) >= 224 and int(ip[0]) <= 239:
				D = D + 1
			elif int(ip[0]) >= 240 and int(ip[0]) <= 255:
				E = E + 1
			else:
				pass
			if (int(ip[0]) == 10) or (int(ip[0]) == 172 and int(ip[1]) >= 16 and int(ip[1]) <= 31) or (int(ip[0]) == 192 and int(ip[1]) == 168):
				private = private + 1
		else:
			Error = Error + 1
		

	print(A,B,C,D,E,Error,private)


# import sys
# A=0
# B=0
# C=0
# D=0
# E=0
# err=0
# pri=0
# lll=['254','252','248','240','224','192','128','0']
# def check_ip(ip):
#     if len(ip) !=4 or '' in ip:
#         return False
#     else:
#         for i in range(4):
#             if int(ip[i])<0 or int(ip[i])>255:
#                 return False
#         else:
#             return True
# def check_mask(ms):
#     if len(ms) != 4:
#         return False
#     if ms[0] == '255':
#         if ms[1] == '255':
#             if ms[2] == '255':
#                 if ms[3] in lll:
#                     return True
#                 else:
#                     return False
#             elif ms[2] in lll and ms[3] == '0':
#                 return True
#             else:
#                 return False
#         elif ms[1] in lll and ms[2] == ms[3] == '0':
#             return True
#         else:
#             return False
#     elif ms[0] in lll and ms[1] == ms[2] == ms[3] == '0':
#         return True
#     else:
#         return False
# while True:
#     string = sys.stdin.readline().strip()
#     if string == "":
#         break
#     list1 = string.split("~")[0]
#     list2 = string.split("~")[1]
#     ip = list1.split('.')
#     ms = list2.split('.')
#     if check_mask(ms) and check_ip(ip):
#         if 1 <= int(ip[0]) <= 126:
#             A += 1
#         if 128 <= int(ip[0]) <= 191:
#             B += 1
#         if 192 <= int(ip[0]) <= 223:
#             C += 1
#         if 224 <= int(ip[0]) <= 239:
#             D += 1
#         if 240 <= int(ip[0]) <= 255:
#             E += 1
#         if int(ip[0])==10 or (int(ip[0])==172 and 15<int(ip[1])<32) or (int(ip[0])==192 and int(ip[1])==168):
#             pri += 1
#     else:
#         err += 1
# print(A,B,C,D,E,err,pri)