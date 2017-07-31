import sys

if __name__ == "__main__":
	while True:
		a = sys.stdin.readline().strip()
		if a == '':
			break
		print(int(a.split()[0]) + int(a.split()[1]))