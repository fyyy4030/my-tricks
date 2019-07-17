import requests
import datetime

def query(arg):
    url = "https://muji.beitian.net/common/hotelInfo?type=oReservation&sessionId=5494D2F5217914EDF8094F159AF79387&adultCount=2&childCount=0&language=ZH&beginDate=2019-{}-{}&endDate=2019-{}-{}".format(*arg)

    a = requests.post(url)
    stra = a.text
    lista = stra.split("房间余量")
    lista.pop(0)
    newlist = []
    for i in lista:
        newlist.append(i[:55])
    seclist = []
    for i in newlist:
        seclist.append(i.split("color:")[1])
    thilist = []
    for i in seclist:
        thilist.append(i.split("\">")[0])
    return thilist

def inttostr(inta):
    inta = str(inta)
    if len(inta) == 1:
        inta = "0" + inta
    return inta

def datetostr(thisday):
    nextday = thisday + datetime.timedelta(days=1)
    a = inttostr(thisday.month)
    b = inttostr(thisday.day)
    c = inttostr(nextday.month)
    d = inttostr(nextday.day)
    return [a, b, c, d]



today = datetime.datetime.today()

days = []
for i in range(60):
    if today.weekday() == 5:
        days.append(today)
    today += datetime.timedelta(days=1)

strdays = []
for i in days:
    strdays.append(i.strftime('%Y-%m-%d'))

arglist = []
for i in days:
    arglist.append(datetostr(i))

result = []
for i in arglist:
    result.append(query(i)[0])

for i in range(len(strdays)):
    print(strdays[i], result[i])
