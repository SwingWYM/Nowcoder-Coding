import sys

if __name__ == "__main__":
	while True:
		a = sys.stdin.readline().strip()
		if a == '':
			break
		a = int(a)
		for i in range(2,a + 1):
			while a % i == 0:
				a = a / i
				print(i,end=" ")
