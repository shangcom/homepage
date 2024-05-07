// 익명함수 선언
(function () {
    const spanEl = document.querySelector("main h2 span");
    // html에서 main h2 span 찾아 spanEL에 할당.
    const txtArr = ['Web Publisher', 'Front=End Developer', 'Web UI Designer',
    'UX Designer', 'Back-End Developer'];
    // 텍스트 애니메이션에 사용할 문자열들을 모아놓은 배열 txtArr 생성.
    let index = 0;
    // 인덱스 초기화.
    let currentTxt = txtArr[index].split("");
    // txtArr의 index번째에 있는 문자열을 문자 단위로 쪼개서 currentText에 저장.

    // 텍스트를 화면에 출력하는 함수 writeTxt()
    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        // spanEl의 텍스트 내용에 currentTxt 배열의 첫 번째 요소를 추가.
        // shift() 메서드를 사용하여 currentTxt 배열에서 해당 요소를 제거함.       
         if (currentTxt.length !==0 ) {
            // = 아직 currentTxt에 문자가 남아 있으면
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
            // 재귀함수. 반복함.
            // 시간 입력 간격 불규칙하게 지정. 자연스럽게 보이도록.
        } else {
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
            // 입력 다 끝나면 deleteTxt 함수 호출한다.
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
            // 삭제 간격 불규칙하게 지정. 자연스럽게 보이도록.
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    writeTxt();
})

const animationMove = function (selector) {
    const targetEl = document.querySelector(selector);
    const targetScorllY = targetEl.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
};

const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) {
    scollMoveEl[i].addEventListener('click', function (e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}