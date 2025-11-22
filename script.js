document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94', '#95e1d3', '#f38181', '#aa96da'];
    
    function createConfetti(event) {
        const confettiCount = 30;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            
            // 랜덤 색상
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.backgroundColor = randomColor;
            
            // 랜덤 크기
            const size = Math.random() * 8 + 6;
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            
            // 화면 상단에서 랜덤 위치로 시작
            const startX = Math.random() * window.innerWidth;
            confetti.style.left = startX + 'px';
            confetti.style.top = '-10px';
            
            // 랜덤 떨어지는 속도 (3초 정도)
            const duration = Math.random() * 1.5 + 2.5; // 2.5 ~ 4초
            confetti.style.animationDuration = duration + 's';
            
            // 불규칙한 수평 이동 (좌우로 흔들리며 떨어짐)
            const horizontalDrift = (Math.random() - 0.5) * 300;
            confetti.style.setProperty('--drift', horizontalDrift + 'px');
            
            body.appendChild(confetti);
            
            // 애니메이션 종료 후 제거
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
    
    // 클릭 이벤트 리스너
    body.addEventListener('click', createConfetti);
    
});

