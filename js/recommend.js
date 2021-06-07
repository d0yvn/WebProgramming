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
        // do noting.
    } else if (event.target.matches('.rcp-thm')) {
        console.log(step2.getElementsByClassName('selected').length);
        event.target.classList.toggle('selected');
    } else if (event.target.matches('.rcp-time')) {
        event.target.classList.toggle('selected');
    }

    /*  */
    if (event.target.matches('.submit')) {
        step1_cnt = step1.getElementsByClassName('selected').length;
        step2_cnt = step2.getElementsByClassName('selected').length;
        step3_cnt = step3.getElementsByClassName('selected').length;
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