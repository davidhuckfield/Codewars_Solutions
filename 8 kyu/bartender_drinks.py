# link : https://www.codewars.com/kata/568dc014440f03b13900001d/train/python

def get_drink_by_profession(param):
    param_formatted = param.title()
    def drinks (input):
        if input == "Jabroni":
            return "Patron Tequila"
        elif input == "School Counselor":
            return "Anything with Alcohol"
        elif input == "Programmer":
            return "Hipster Craft Beer"
        elif input == "Bike Gang Member":
            return "Moonshine"
        elif input == "Politician":
            return "Your tax dollars"
        elif input == "Rapper":
            return "Cristal"
        else:
            return "Beer"
    return drinks(param_formatted)