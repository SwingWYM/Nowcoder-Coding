import sys
import string

if __name__ == "__main__":
	while True:
		a = sys.stdin.readline().strip()
		if a == '':
			break
		a = a.split('.')
		if int(a[1]) >= 5:
			print(int(a[0]) + 1)
		else:
			print(int(a[0]))