import os
import json
from collections import defaultdict


# 这里需要大改，每个user需要自己对应的point
def checkExistence(query,userName):
    root = os.getcwd()
    directory = "FoodSearched"
    path = os.path.join(root, directory)
    if not os.path.exists(path):
        os.mkdir(path)
    user = userName
    user_path = os.path.join(path, user)
    if not os.path.exists(user_path):
        os.mkdir(user_path)
    result_path = os.path.join(user_path, f"{query}.json")
    return bool(os.path.exists(result_path))


def storeFood(json_file, query,userName):
    print(json_file)
    root = os.getcwd()
    directory = "FoodSearched"
    path = os.path.join(root, directory)
    if not os.path.exists(path):
        os.mkdir(path)
    user = userName
    user_path = os.path.join(path, user)
    if not os.path.exists(user_path):
        os.mkdir(user_path)
    result_path = os.path.join(user_path, f"{query}.json")
    result_list = json_file["results"]
    for i in result_list:
        if 'like' not in i.keys():
            i["like"] = 0
    result_dict = {"results":result_list}
    with open(result_path, "w", encoding = 'utf-8') as idx:
        json.dump(result_dict, idx, indent = 4)

def loadFood(query,userName):
    root = os.getcwd()
    directory = "FoodSearched"
    path = os.path.join(root, directory)
    if not os.path.exists(path):
        os.mkdir(path)
    user = userName
    user_path = os.path.join(path, user)
    if not os.path.exists(user_path):
        os.mkdir(user_path)
    
    result_path = os.path.join(user_path, f"{query}.json")
    with open(result_path, "r", encoding = 'utf-8') as idx:
        search = json.load(idx)

    alldict = defaultdict(int)
    for root, dirs, files in os.walk(path):
        for file in files:
            if query + '.json' in file and user_path not in root:
                with open(os.path.join(root, file), 'r', encoding = 'utf-8') as f:
                    for i in json.load(f)["results"]:
                        if int(i['like']) > 0:
                            alldict[str(i['id'])] += 1
    totalLike = sum([i for i in alldict.values()])
    print(alldict, flush=True)
    for i in search['results']:
        for k, v in alldict.items():
            if str(k) == str(i['id']):
                i['like'] += v / totalLike

    
    returnlist = sorted([d for d in search['results']], key=lambda x: x['like'], reverse=True)
    print(returnlist, flush=True)
    return returnlist


def addLike(id, userName, query):
    FLAG = False
    root = os.getcwd()
    directory = "FoodSearched"
    path = os.path.join(root, directory)
    if not os.path.exists(path):
        os.mkdir(path)
    user = userName
    user_path = os.path.join(path, user)
    if not os.path.exists(user_path):
        os.mkdir(user_path)

    result_path = os.path.join(user_path, f"{query}.json")
    with open(result_path, "r", encoding = 'utf-8') as idx:
        search = json.load(idx)

    result_list = search["results"]
    for i in result_list:
        # print(str(i['id']), id, str(i['id']) == str(id), flush=True)
        if str(i['id']) == str(id):
            i['like'] = 1
            FLAG = True
    result_dict = {"results":result_list}
    with open(result_path, "w", encoding = 'utf-8') as idx:
        json.dump(result_dict, idx, indent = 4)
    return FLAG