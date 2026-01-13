// main.ts
document.addEventListener('DOMContentLoaded', () => {
    const gameWrapper = document.getElementById('game-wrapper');

    if (gameWrapper) {
        gameWrapper.addEventListener('click', () => {
            // クラスをトグルして拡大/縮小を切り替え
            if (gameWrapper.classList.contains('is-small')) {
                gameWrapper.classList.remove('is-small');
                gameWrapper.classList.add('is-expanded');
                
                // ゲーム画面にフォーカスを当てる（操作可能にする）
                const player = gameWrapper.querySelector('pyxel-player');
                if (player) {
                    (player as HTMLElement).focus();
                }
            } else {
                gameWrapper.classList.remove('is-expanded');
                gameWrapper.classList.add('is-small');
            }
        });
    }
});