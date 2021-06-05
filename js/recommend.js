const ingredients = new Array();
const step1 = document.querySelector('.step-1');
const step2 = document.querySelector('.step-2');
const step3 = document.querySelector('.step-3');
let step1_cnt = 0;
let step2_cnt = 0;
let step3_cnt = 0;
// submit 버튼 비활성화
const form = document.querySelector('form');

$("input[type='submit']").click(function(event) {
    event.preventDefault();
})

window.onclick = function(event) {
    let success = false;
    console.log(event.target);

    // checked btn -> 'selected' class toggle시켜주기
    if (event.target.matches('.dropdown-item')) {
        // js코드 따로 안써도 선택시 selected class 붇어줌
        step1_cnt = step1.getElementsByClassName('selected').length;
    } else if (event.target.matches('.rcp-thm')) {
        event.target.classList.toggle('selected');
        step2_cnt = step2.getElementsByClassName('selected').length;
        console.log(step2_cnt)
    } else if (event.target.matches('.rcp-time')) {
        /* 버튼 shake animation 다는 부분.. (이따 계속..) */
        if (step3_cnt > 0) { // 😒☺️😊😩😊😩😩😊😒😏여기부터 수정 😁☺️😘😘😩😁😳😩😔
            if (event.target.matches('.selected')) {
                event.target.classList.toggle('selected');
            } else {
                console.log(event.target.previousSibling);
                event.target.previousSibling.classList.add('shake');
                event.target.previousSibling.addEventListener('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
                    console.log('animation end');
                    event.target.classList.remove('shake')
                })
            }
        } else {
            event.target.classList.toggle('selected');
            console.log(step3_cnt)
        }
        step3_cnt = step3.getElementsByClassName('selected').length;

    }

    /* 체크 다 안채우고 form submit 버튼 누르면 alert 띄어줌 */
    if (event.target.matches('.submit')) {
        if (step1_cnt == 0) {
            window.alert('Please check your ingredients')

        } else if (step2_cnt == 0) {
            window.alert('Please check your recipe theme')
        } else if (step3_cnt == 0) {
            window.alert('Please check recipe time you want')
        } else if (step3_cnt > 1) {
            window.alert('Please choose just one at step3')
        } else {
            success = true;
        }

        if (success) {
            success = false;
            form.submit();
        }

    }

}