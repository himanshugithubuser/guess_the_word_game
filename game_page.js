player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn-"+player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    console.log("word in lower case="+word);

    charAt1 = word.charAt(1);
    console.log("character at 1="+charAt1);

    length_div2 = Math.ceil(word.lenght/2);
    charAt2 = word.charAt(length_div2);
    console.log("character at"+length_div2+"="+charAt2);

    lenght_minus_1 = word.lenght-1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt_1 = word.replace(charAt1, "_");
    remove_charAt_2 = remove_charAt_1.replace(charAt2, "_");
    remove_charAt_3 = remove_charAt_2.replace(charAt3, "_");

    console.log(remove_charAt_3);

    question_word = "<h4 id='word_display'>Q."+remove_charAt_3+"</h4>";
    input_box = "<br> answer:<input type='text' id='input_check_box' placeholder='Enter the answer here'>";
    check_button = "<br><br> <button class='btn btn-info' onclick = 'check()'> Check </button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}