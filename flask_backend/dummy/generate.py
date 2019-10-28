# 1571315837938
# 1571315841646
# 1571315844958
# 1571315848504
# 1571315852088
# 1571315855570
# F7826DA6-4FA2-4E98-8024-BC5B71E0893E


# 4th november == monday

from datetime import datetime, timedelta
from random import random, randrange as rr

base = datetime(2019,11,4,15,0)

def randomUUID():
    return "F7826DA6-4FA2-4E98-8024-BC5B71E0893E," if random()<0.8 else "F7826DA6-4FA2-4E98-8024-BC5B71E0893F," 

dts = []
days = 1
for i in range(31):
    temp = base+timedelta(days=i, minutes=rr(0,181), seconds=rr(60))
    if temp.weekday()<5 and random()<0.2:
        dts.append(temp)

output = []

for dt in dts:
    n = rr(1,21)
    for i in range(n):
        output.append(randomUUID() + str(dt+timedelta(seconds=i)))

with open("data/logs.csv","w") as f:
    f.write("uuid,datetime\n")
    for line in output:
        f.write(line+"\n")

print("done")