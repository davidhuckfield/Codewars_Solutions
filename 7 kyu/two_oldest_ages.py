# link : https://www.codewars.com/kata/511f11d355fe575d2c000001/train/python

def two_oldest_ages(ages):
  #create empty results array
    results_array = []
  #for loop to repeat twice
    for i in range(2):
        #store highest number
        oldest = max(ages)
        #remove it from input array to be able to find the next oldest
        ages.remove(oldest)
        #add current oldest value to results array
        results_array.append(oldest)

    #sort the results array in ascending order
    results_array.sort()
    #return the results array
    return results_array
