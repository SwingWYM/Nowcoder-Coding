import sys

if __name__ == "__main__":
	a = sys.stdin.readline().strip()
	b = sys.stdin.readline().strip()

	while len(a) >= 8:
		print(a[:8])
		a = a[8:]
	if len(a) >= 1:
		print(a[:] + '0'*(8-len(a)))

	while len(b) >= 8:
		print(b[:8])
		b = b[8:]
	if len(b) >= 1:
		print(b[:] + '0'*(8-len(b)))

	
			