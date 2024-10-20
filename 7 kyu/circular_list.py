# link : https://www.codewars.com/kata/5b2e60742ae7543f9d00005d/train/python

class CircularList():
    def __init__(self, *args):
        #throw error if no arguments are passed in
        if not args:
            raise ValueError("CircularList must be initialized with at least one item.")
        self.items = list(args)
        self.current_index = 0 if self.items else None
        self.initial_state = True
        
    def next(self):
        if self.items:
            if self.initial_state:
                self.initial_state = False
                return self.items[self.current_index]
            else:
                self.current_index = (self.current_index + 1) % len(self.items)
                return self.items[self.current_index]
        return None
    
    def prev(self):
        if self.items:
            if self.initial_state:
                self.initial_state = False
                self.current_index = len(self.items) - 1
                return self.items[self.current_index]
            else:
                self.current_index = (self.current_index - 1) % len(self.items)
                return self.items[self.current_index]
        return None