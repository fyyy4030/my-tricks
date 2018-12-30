import random
import sys

args = []
with open("i.txt", "r") as f:
    for line in f:
        args.append(line[:-1])


def fuck(alist):
    if len(alist) <= 1:
        return alist
    pick = alist[random.randint(0, len(alist) - 1)]
    alist.remove(pick)
    a = []
    b = []
    for i in alist:
        c = input("%s(j)比较重要还是%s(k)比较重要？(q退出)" % (pick, i))
        if c == 'j':
            a.append(i)
        elif c == 'k':
            b.append(i)
        elif c == 'q':
            exit(0)
        else:
            print("您的输入有误！")
            exit(-1)
    return fuck(a) + [pick] + fuck(b)


blist = fuck(args)
print("重要性依次递减：")
for i in range(len(blist)):
    print(blist[-1 - i])
