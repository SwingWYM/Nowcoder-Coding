import sys

if __name__ == "__main__":
    input = sys.stdin.readline().strip()
    if input == '':
        print('ERROR')
    else:
        l = input.split("#")
        dic = ['F', 'G', 'R', 'S', 'T', 'L', 'M', 'N', 'O', 'P', 'Q',
               'W', 'X', 'Y', 'Z', 'U', 'A', 'G', 'H', 'I', 'J', 'K',
               'B', 'C', 'D', 'E', 'l', 'm', 'n', 'o', 'p', 'i', 'j',
               'k', 'f', 'g', 'h', 'a', 'b', 'c', 'd', 'e', 'q', 'r',
               'w', 'x', 'y', 'z', 's', 't', 'u', 'v']

        result = []
        flag = False
        for s in l:
            if s is not "":
                s = s.replace('-', '0')
                s = s.replace('.', '1')
                num = int(s, 2)
                if num > 51 or num < 0:
                    flag = True
                    break
                result.append(dic[num])
        if flag:
            print("ERROR")
        else:
            print(''.join(result))
