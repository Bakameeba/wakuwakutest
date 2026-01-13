import pyxel
class App:
    def __init__(self):
        pyxel.init(256, 256)
        self.x, self.y = 48, 48
        self.color = pyxel.COLOR_RED
        pyxel.run(self.update, self.draw)    
    def update(self):
        #十字キー
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_DPAD_UP):
            self.y -= 2
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_DPAD_DOWN):
            self.y += 2
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_DPAD_LEFT):
            self.x -= 2
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_DPAD_RIGHT):
            self.x += 2
        #日本でいうところのAとB、XとYがそれぞれ逆なので注意
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_B):
            self.color = pyxel.COLOR_RED
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_A):
            self.color = pyxel.COLOR_GREEN
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_Y):
            self.color = pyxel.COLOR_YELLOW
        if pyxel.btnp(pyxel.GAMEPAD1_BUTTON_X):
            self.color = pyxel.COLOR_CYAN
        
    def draw(self):
        pyxel.cls(7)
        pyxel.rect(self.x, self.y, 32, 32, self.color)
if __name__ == '__main__':
    app = App()
