# link : https://www.codewars.com/kata/5d6a11ab2a1ef8001dd1e817/train/python

def connect_the_dots(paper):

    unique_chars = list({char for row in paper for char in row if char != " " and char !="\n"})
    unique_chars.sort()
    print (f"Unique characters are {unique_chars}")

    paper = paper.splitlines()

    def get_coords(letter):
        for y, row in enumerate(paper):
            for x, char in enumerate(row):
                if char == letter:
                    return x, y
        return None
    
    def get_directions(start, end):
        return (end[0]-start[0], end[1]-start[1])

    def path(start, directions):
        pass

    print(get_directions("a"))
    print(get_directions("b"))
    print(get_directions(get_coords("a"), get_coords("b")))
    return ""

connect_the_dots(
            "           \n" +
            "     a     \n" +
            "    e      \n" +
            "           \n" +      
            "  d     b  \n" +
            "           \n" +      
            "           \n" +
            "     c     \n" +
            "           \n")