// main.js
window.addEventListener("load", () => {
    // pyxel-playerを強制的に認識させる（念のため）
    const player = document.querySelector("pyxel-player");
    
    // --- 強制ロード処理を追加 ---
    if (player) {
        // もしPyxelが自動で動かない場合、手動でsrcを再設定して刺激を与える
        const scriptPath = player.getAttribute('src');
        console.log("Loading Pyxel app:", scriptPath);
        
        // PyxelのWASMエンジンが準備できたら実行する命令
        window.addEventListener("pyxel-load", () => {
            console.log("Pyxel Engine Loaded!");
        });
    }
    // -------------------------
    
    if (player && !player.getAttribute("src")) {
        player.setAttribute("src", "app.py");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const gameWrapper = document.getElementById('game-wrapper');

    if (gameWrapper) {
        gameWrapper.addEventListener('click', () => {
            // クラスを切り替えてサイズを変更
            if (gameWrapper.classList.contains('is-small')) {
                gameWrapper.classList.remove('is-small');
                gameWrapper.classList.add('is-expanded');
                
                // Pyxel画面にフォーカスを当てて操作可能にする
                const player = gameWrapper.querySelector('pyxel-player');
                if (player) {
                    player.focus();
                }
            } else {
                gameWrapper.classList.remove('is-expanded');
                gameWrapper.classList.add('is-small');
            }
        });
    }
});