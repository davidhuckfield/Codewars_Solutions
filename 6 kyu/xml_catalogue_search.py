# link : https://www.codewars.com/kata/59d9d8cb27ee005972000045/train/python

import re

s = """<prod><name>drill</name><prx>99</prx><qty>5</qty></prod> 
<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>
<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>
<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>
<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>"""

def search_catalogue(s, search_term):
    results = []

    products = re.findall(r"<prod>(.*?)</prod>", s, re.DOTALL) #creates a list of all matches between <prod> and </prod> tags
    print(f"products is {products}")

    for prod in products: #for each extracted entry in the products list
        name_match = re.search(r"<name>(.*?)</name>", prod) #search the current product for anything between <name> and </name> tags
        print(f"name_match.group(1).lower() is {name_match.group(1).lower()}") #drill, hammer, screwdriver etc
        if name_match and search_term.lower() in name_match.group(1).lower(): #if there's a match (anything between name tags) and the search term inputted into the function matches
            prx = re.search(r"<prx>(.*?)</prx>", prod).group(1) #prx is whatever is between the prx tags
            qty = re.search(r"<qty>(.*?)</qty>", prod).group(1)
            results.append(f"{name_match.group(1)} > prx: ${prx} qty: {qty}") 
    return "\n".join(results) if results else "Nothing"

print(search_catalogue(s, "saw"))