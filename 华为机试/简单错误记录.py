import sys

if __name__ == "__main__":
	# result = [None] * 8
	result = []
	count = {}
	i = 0
	while True:
		path = sys.stdin.readline().strip()
		if path == '':
			break
		num = path.split(' ')[1]
		file = path.split(' ')[0].split('\\')
		file = file[len(file) - 1]
		file = file[-16:]
		temp = file + ' ' + num
		if temp not in result:
			result.append(temp)
			count[temp] = 1
		else:
			count[temp] += 1

	for i in result[-8:]:
		sys.stdout.write(i + ' ' + str(count[i])+'\n')  #print(i + ' ' + str(count[i]))

		# 不换行：sys.stdout.write(i + ' ' + str(count[i])+' ')  或者 print(i + ' ' + str(count[i]), end="")
