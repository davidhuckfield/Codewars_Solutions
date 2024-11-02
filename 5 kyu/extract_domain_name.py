# link : https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python

def domain_name(url):

    start_pos = 0
    https_pos = url.find("https://")
    http_pos = url.find("http://")
    www_pos = url.find("www.")
    http_www_pos = url.find("http://www.")
    
    if https_pos != -1:
        start_pos = https_pos+8
    elif http_www_pos != -1:
        start_pos = http_www_pos+11
    elif http_pos != -1:
        start_pos = http_pos+7
    elif www_pos != -1:
        start_pos = www_pos+4
        
    trunc_url = url[start_pos:]
    dot_pos = trunc_url.find(".")

    return trunc_url[0:dot_pos]

#alternative solution - remove http/www etc by replacing with empty string:

def domain_name2(url):
    url = url.replace('www.','')
    url = url.replace('https://','')
    url = url.replace('http://','')
    
    return url[0:url.find('.')]
    