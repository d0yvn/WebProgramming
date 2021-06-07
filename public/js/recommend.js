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
    // checked btn -> 'selected' class toggle시켜주기
    if (event.target.matches('.rcp-thm')) {
        // if (step2_cnt > 2) {
        //     if (event.target.matches('.selected')) {
        //         event.target.classList.toggle('selected');
        //     } else {
        //         alert('적당히 체크하세요')
        //     }
        // } else 
        {
            event.target.classList.toggle('selected');
            step2_cnt = step2.getElementsByClassName('selected').length;
        }
        step2_cnt = step2.getElementsByClassName('selected').length;
        console.log(step2_cnt)

    } else if (event.target.matches('.rcp-time')) {
        /* 버튼 shake animation 다는 부분.. (이따 계속..) */
        if (step3_cnt > 0) {
            if (event.target.matches('.selected')) {
                event.target.classList.toggle('selected');
            } else {
                alert('하나만 체크하세요')
            }
        } else {
            event.target.classList.toggle('selected');
            step3_cnt = step3.getElementsByClassName('selected').length;
        }
        step3_cnt = step3.getElementsByClassName('selected').length;
        console.log(step3_cnt)

    }


    /* 체크 다 안채우고 form submit 버튼 누르면 alert 띄어줌 */
    if (event.target.matches('.submit')) {
        step1_cnt = step1.getElementsByClassName('selected').length;

        if (step1_cnt == 0) {
            window.alert('재료를 마저 선택해주세요')

        } else if (step2_cnt == 0) {
            window.alert('요리 테마를 마저 선택해주세요')
        } else if (step3_cnt == 0) {
            window.alert('요리 방식을 마저 선택해주세요')
        } else {
            success = true;
        }

        if (success) {
            success = false;
            form.submit();
        }

    }

}