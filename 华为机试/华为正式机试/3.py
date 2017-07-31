import sys

N = 1e5 + 5
father = {}
vis = []
global isfind


def dfs(a, b):
    global isfind
    if isfind:
        return
    else:
        if a in father.keys():
            l = len(father[a])
            for i in range(0, l):
                x = father[a][i]
                if b == x:
                    isfind = True
                    return
                if vis.count(x):
                    continue
                vis.append(x)
                dfs(x, b)


if __name__ == "__main__":
    n = int(sys.stdin.readline().strip())
    for i in range(n):
        line = sys.stdin.readline().strip()
        l = line.split(" ")
        a, b = l[0], l[1]
        if a in father.keys():
            father[a] = list([b])
        else:
            father[a] = [b]

    line = sys.stdin.readline().strip()
    l = line.split(" ")
    a, b = l[0], l[1]
    isfind = False
    vis.clear()
    dfs(a, b)
    atob = isfind

    isfind = False
    vis.clear()
    dfs(b, a)
    btoa = isfind
    if atob and btoa:
        print('T')
    else:
        print('F')
