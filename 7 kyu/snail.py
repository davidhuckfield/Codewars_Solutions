# link : https://www.codewars.com/kata/66cdc6ab9e7a9f009e0ca8f6/train/python

def can_snail_reach_end(length, speed, length_increases):
    snail_position=0
    rubber_band_end=length
    for i in range (525600):
        snail_position+=speed
        rubber_band_end+=length_increases
        if snail_position >= rubber_band_end:
            return True
    return False
