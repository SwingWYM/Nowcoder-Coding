import sys

if __name__ == "__main__":
	while (True):
		try:
			a = int(sys.stdin.readline().strip())
			b = []

			for i in range(a):
				b.append(int(sys.stdin.readline().strip()))
			b = list(set(b))

			b.sort()
			for i in range(len(b)):
				print(b[i])
		except:
			break