import pyxel

class App:
    def __init__(self):
        # 画面サイズ 160x120 で初期化
        pyxel.init(160, 120, title="Pyxel in Web")
        
        # 初期座標
        self.x = 75
        self.y = 55
        
        pyxel.run(self.update, self.draw)

    def update(self):
        # 矢印キーでドットを移動させる基本操作
        if pyxel.btn(pyxel.KEY_LEFT):
            self.x -= 1
        if pyxel.btn(pyxel.KEY_RIGHT):
            self.x += 1
        if pyxel.btn(pyxel.KEY_UP):
            self.y -= 1
        if pyxel.btn(pyxel.KEY_DOWN):
            self.y += 1

    def draw(self):
        # 画面を黒でクリア
        pyxel.cls(0)
        # テキスト表示
        pyxel.text(5, 5, "Click to Expand & Play!", 7)
        # 動く四角形を表示
        pyxel.rect(self.x, self.y, 10, 10, 11)

App()