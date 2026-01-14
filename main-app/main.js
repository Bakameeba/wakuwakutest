// main.js

document.addEventListener('DOMContentLoaded', () => {
    const pyxelPlayer = document.getElementById('my-pyxel');
    const gameWrapper = document.getElementById('game-wrapper');

    // 初期状態では src を空にするか、自動実行を防ぐ
    // (HTML側で既に src がある場合は、一度保持して削除しておく) 
    const scriptSrc = "https://kitao.github.io/pyxel/wasm/launcher/?run=Bakameeba.wakuwakutest.new-test1.main"; 
    
    // クリックイベントの監視
    gameWrapper.addEventListener('click', () => {
        // すでに起動している場合は何もしない
        if (pyxelPlayer.hasAttribute('started')) return;

        console.log("Pyxel Starting...");

        // クラスを切り替えて見た目を変える（必要であれば）
        gameWrapper.classList.remove('is-small');
        gameWrapper.classList.add('is-active');

        // Pyxel側にリソースとスクリプトを読み込ませて実行
        // 手法：属性をセットすることで Pyodide の起動をトリガーする
        pyxelPlayer.setAttribute('src', scriptSrc);
        
        // 起動済みフラグ（独自）
        pyxelPlayer.setAttribute('started', 'true');
        
        // ヘッダーのテキストを消すなどの演出
        const headerP = document.querySelector('header p');
        if (headerP) headerP.textContent = "Loading...";
    }, { once: true }); // 1回だけ実行
});