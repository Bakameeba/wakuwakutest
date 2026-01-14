// main.js

document.addEventListener('DOMContentLoaded', () => {
    const pyxelPlayer = document.getElementById('my-pyxel');
    const gameWrapper = document.getElementById('game-wrapper');
    const startButton = document.getElementById('start-button');

    // 初期状態では src を空にするか、自動実行を防ぐ
    // (HTML側で既に src がある場合は、一度保持して削除しておく) 
    const scriptSrc = "https://kitao.github.io/pyxel/wasm/launcher/?run=Bakameeba.wakuwakutest.main-app.game1.main"; 
    
    // クリックイベントの監視
    let isStarted = false;  //プレイ中かどうか
    startButton.addEventListener('click', () => {
        
        //開始する
        if (!isStarted) {

            console.log("Pyxel Starting...");

            // クラスを切り替えて見た目を変える（必要であれば）
            gameWrapper.classList.remove('is-small');
            gameWrapper.classList.add('is-expanded');

            // Pyxel側にリソースとスクリプトを読み込ませて実行
            pyxelPlayer.setAttribute('src', scriptSrc);

            startButton.textContent = 'END';
            isStarted = true;
        }
        //すでに起動している場合
        else { 

            console.log("Pyxel Stopping...");

            // クラスを切り替えて見た目を変える（必要であれば）
            gameWrapper.classList.remove('is-expanded');
            gameWrapper.classList.add('is-small');

            // Pyxel側にリソースとスクリプトを読み込ませて実行
            pyxelPlayer.setAttribute('src', 'about:blank');

            startButton.textContent = 'START';
            isStarted = false;
        }
    });
});