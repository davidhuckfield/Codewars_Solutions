# link : https://www.codewars.com/kata/5eb27d81077a7400171c6820

import math
def graceful_tipping(bill):
    if bill == 0:
        return 0
    bill_with_tip = bill * 1.15
    magnitude = 10 ** math.floor(math.log10(bill_with_tip))
    base = max(magnitude / 2,1)
    rounded_bill = math.ceil(bill_with_tip / base) * base
    
    return rounded_bill