var score = 0;
document.getElementById("question1_option1").addEventListener('click', function() {
    score += 0;
    document.getElementById("question1").style.visibility = "hidden";
    document.getElementById("question2").style.visibility = "visible";
    alert(score)
})
document.getElementById("question1_option2").addEventListener('click', function() {
    score += 1;
    document.getElementById("question1").style.visibility = "hidden";
    document.getElementById("question2").style.visibility = "visible";
    alert(score)
})

