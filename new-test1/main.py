import pyxel
class App:
    def __init__(self):
        pyxel.init(256, 256)
        self.x, self.y = 48, 48
        self.color = pyxel.COLOR_GREEN
        pyxel.run(self.update, self.draw)    
    def update(self):
        #十字キー
        if pyxel.btnp(pyxel.KEY_DOWN):
            self.y -= 2
        if pyxel.btnp(pyxel.KEY_UP):
            self.y += 2
        if pyxel.btnp(pyxel.KEY_LEFT):
            self.x -= 2
        if pyxel.btnp(pyxel.KEY_RIGHT):
            self.x += 2
        #日本でいうところのAとB、XとYがそれぞれ逆なので注意
        if pyxel.btnp(pyxel.KEY_D):
            self.color = pyxel.COLOR_RED
        if pyxel.btnp(pyxel.KEY_C):
            self.color = pyxel.COLOR_GREEN
        if pyxel.btnp(pyxel.KEY_B):
            self.color = pyxel.COLOR_YELLOW
        if pyxel.btnp(pyxel.KEY_A):
            self.color = pyxel.COLOR_CYAN
        
    def draw(self):
        pyxel.cls(7)
        pyxel.rect(self.x, self.y, 32, 32, self.color)
if __name__ == '__main__':
    app = App()
