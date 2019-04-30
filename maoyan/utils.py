import hashlib

def md5(text:str):
    md = hashlib.md5()
    # text = isinstance()
    md.update(text.encode('utf-8'))
    return md.hexdigest()


if __name__ == '__main__':
    md5('hh')