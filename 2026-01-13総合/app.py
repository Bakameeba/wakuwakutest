import pyxel
def update():
    pass
def draw():
    pyxel.cls(1) # 画面を青く塗るだけ
    pyxel.text(10, 10, "Running!", 7)

pyxel.init(160, 120)
pyxel.run(update, draw)