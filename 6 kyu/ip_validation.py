# link : https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/python

def is_valid_IP(strng):
    split = strng.split(".")
    
    if len(split) != 4:
        return False
    for octet in split:
        try:
            if (
                int(octet) < 0 or 
                int(octet) > 255 or 
                (octet[0] == "0" and len(octet) > 1) or 
                octet.strip() != octet
                ):
                return False
        except:
            return False
    return True