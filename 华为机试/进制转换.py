import sys

if __name__ == "__main__":
	while True:
		a = sys.stdin.readline().strip()
		if a == '':
			break
		print(int(a,16))



	 # int(str, base)      ==> int 
  #    bin(num)            ==> str 
  #    oct(num)            ==> str 
  #    hex(num)           ==> str