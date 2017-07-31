import sys

if __name__ == "__main__":
	while True:
		a = sys.stdin.readline().strip()
		if a == '':
			break
		a = a.split()
		result = len(a[-1])
		print(result)