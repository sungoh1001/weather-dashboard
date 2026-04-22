// 메인 자바스크립트
console.log('Weather Dashboard loaded!');

// 현재 시간 표시
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = now.toLocaleString('ko-KR');
    }
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    setInterval(updateTime, 1000);
});
