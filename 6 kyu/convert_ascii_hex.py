

class Converter():
    @staticmethod
    def to_ascii(h):
        return bytes.fromhex(h).decode("utf-8")
    
    @staticmethod
    def to_hex(s):
        return s.encode("utf-8").hex()
    
s = "Look mom, no hands"
h = "4c6f6f6b206d6f6d2c206e6f2068616e6473"

print(Converter.to_ascii(h))
print(Converter.to_hex(s))