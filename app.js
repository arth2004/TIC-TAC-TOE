let flag = 0;
let input =0;
function  handleInput(e){
    console.log(flag)
    if ($(e).text() === 'X' || $(e).text() === 'O') {
        return; 
    }
    if(flag == 0){
        $(e).text("X").css('color','white');
        flag++;
        input++;
        winCondition();
    }
    else{
        $(e).text("O").css('color','white');
        flag--;
        input++;
        winCondition();
    }
   
}
function restart() {
    location.reload();
}

function winCondition(){
   let s1 =  $('#square1').text();
   let s2 =  $('#square2').text();
   let s3 =  $('#square3').text();
   let s4 =  $('#square4').text();
   let s5 =  $('#square5').text();
   let s6 =  $('#square6').text();
   let s7 =  $('#square7').text();
   let s8 =  $('#square8').text();
   let s9 =  $('#square9').text();

    if(s1 ==='X' && s2 ==='X' && s3 ==='X'||
       s4 ==='X' && s5 ==='X' && s6 ==='X'||
       s7 ==='X' && s8 ==='X' && s9 ==='X'||
       s1 ==='X' && s4 ==='X' && s7 ==='X'||
       s2 ==='X' && s5 ==='X' && s8 ==='X'||
       s3 ==='X' && s6 ==='X' && s9 ==='X'||
       s1 ==='X' && s5 ==='X' && s9 ==='X'||
       s5 ==='X' && s7 ==='X' && s3 ==="X" ){
        console.log('success')
    
        $('.board-container').text("Player 1 Win's the Game").css('font-size',"450%")
    }
    if(s1 ==="O" && s2 ==="O" && s3 ==="O"||
       s4 ==="O" && s5 ==="O" && s6 ==="O"||
       s7 ==="O" && s8 ==="O" && s9 ==="O"||
       s1 ==="O" && s4 ==="O" && s7 ==="O"|| 
       s2 ==="O" && s5 ==="O" && s8 ==="O"||
       s3 ==="O" && s6 ==="O" && s9 ==="O"||
       s1 ==="O" && s5 ==="O" && s9 ==="O"||
       s5 ==="O" && s7 ==="O" && s3 ==="O" ){
        console.log('success')
    
        $('.board-container').text("Player 2 Win's the Game").css('font-size',"450%")
    }
    if (input == 9){

        $('.board-container').text("Oops! Looks Like a Tie").css('font-size', "450%");
    }
}

