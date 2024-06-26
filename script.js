const questions = Array.from(document.getElementsByClassName('question'));
let flag = true;
let idx = null;

// function openAccordian(image, ans, index) {
//     image.src = './assets/images/icon-minus.svg';
//     ans.classList.add('active');
//     idx = index;
// }

// questions.forEach((question, index) => {
//     question.addEventListener('click', () => {
//         if (flag) {
//             console.log("If ",idx, index);
//             openAccordian(Array.from(question.children)[1], question.nextElementSibling, index);
//             flag = false;
//         }
//         else {
//             console.log("Else ",idx, index);
//             Array.from(questions[idx].children)[1].src = './assets/images/icon-plus.svg';
//             questions[idx].nextElementSibling.classList.remove('active');

//             if (index != idx) {
//                     openAccordian(Array.from(question.children)[1], question.nextElementSibling, index);
//             }
//             else{
//                 flag = true;
//             }
//         }
//     })
// });

// Optimize Code 

function removeStyle(question) {
    question.parentElement.style.border = 'transparent';
    question.style.color = 'black';
}

function toggleAccordian(question, index) {

    const image = question.querySelector('.icon');
    const answer = question.nextElementSibling;

    // If already Accordian open -- so close previous one
    if (idx !== null && idx !== index) {
        const previousQuestion = questions[idx];
        const previousImage = previousQuestion.querySelector('.icon');
        const previousAnswer = previousQuestion.nextElementSibling;

        previousAnswer.classList.remove('active');
        previousImage.src = './assets/images/icon-plus.svg';
        removeStyle(previousQuestion, previousQuestion);
    }

    // // When Click on the Open Accordian
    if (idx === index) {
        image.src = './assets/images/icon-plus.svg';
        answer.classList.remove('active');
        removeStyle(question);
        idx = null;
    }
    else {
        // When it is first time click on Accordian
        image.src = './assets/images/icon-minus.svg';
        answer.classList.add('active');
        question.parentElement.style.border = '2px solid #AD28EB';
        question.style.color = '#AD28EB';
        idx = index;
    }

}

questions.forEach((question, index) => {

    question.addEventListener('click', () => {
        toggleAccordian(question, index);
    })
})