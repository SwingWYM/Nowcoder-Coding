import sys

if __name__ == "__main__":
	
	a = sys.stdin.readline().strip()
	b = sys.stdin.readline().strip()
	result = 0
	for i in range(len(a)):
		if a[i].upper() == b.upper() :
			result = result + 1
	print(result)
