import re

with open('converted.txt', "w+") as resFile:

    with open('fp_codes.txt', 'r', encoding='utf-8') as f:
        for line in f:
            entry = line.replace("\n", "").split(" -- ") 
            longTitle = ''
            if len(entry) > 1:
                longTitle = entry[1]
            resLine =  "\""+ str(entry[0]) +"\": {\"title\":" + "\""+ re.sub(' +', ' ', entry[0]) +"\", \"desc\":"+ "\"" + longTitle + "\"" + "},"
            print(resLine)