import sys

if __name__ == "__main__":
	while True:
		a = sys.stdin.readline().strip()
		if a == '':
			break
		result = {}
		l = []
		for i in range(int(a)):
			b = sys.stdin.readline().strip().split()
			if int(b[0]) not in result:
				result[int(b[0])] = int(b[1])
				l.append(int(b[0]))
			else:
				result[int(b[0])] = result[int(b[0])] + int(b[1])
		l.sort()
		for i in l:
			print(i,result[i])