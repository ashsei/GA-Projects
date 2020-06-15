$(() => {
    // Player Definition
    let player = 1;

    // Play Function
    $('.Empty').on('click', (event) => {
        if(player % 2 == 0) {
            if(!$(event.currentTarget).hasClass('Player1') || (event.currentTarget).hasClass('Empty')) {
            player++;
            $(event.currentTarget).addClass('Player2');
            winCheck();
            }
        } else {
            if (!$(event.currentTarget).hasClass('Player2') || (event.currentTarget).hasClass('Empty')) {
            player++;
            $(event.currentTarget).addClass('Player1');
            winCheck();
            }
        };
    });

    // Win Function
    let winCheck = () => {
        
        //Horizontal Checks (Player 1)
        if($('#0').hasClass('Player1') && $('#1').hasClass('Player1') && $('#2').hasClass('Player1')) {
            alert('Player 1 Wins! Go Toes! The game will now reset!');
            reset();
        };
        if($('#3').hasClass('Player1') && $('#4').hasClass('Player1') && $('#5').hasClass('Player1')) {
            alert('Player 1 Wins! Go Toes! The game will now reset!');
            reset();
        };
        if($('#6').hasClass('Player1') && $('#7').hasClass('Player1') && $('#8').hasClass('Player1')) {
            alert('Player 1 Wins! Go Toes! The game will now reset!');
            reset();
        };
        
        //Horizontal Checks (Player 2)
        if($('#0').hasClass('Player2') && $('#1').hasClass('Player2') && $('#2').hasClass('Player2')) {
            alert('Player 2 Wins! Go Tacks! The game will now reset!');
            reset();
        };
        if($('#3').hasClass('Player2') && $('#4').hasClass('Player2') && $('#5').hasClass('Player2')) {
            alert('Player 2 Won! Go Tacks! The game will now reset!');
            reset();
        };
        if($('#6').hasClass('Player2') && $('#7').hasClass('Player2') && $('#8').hasClass('Player2')) {
            alert('Player 2 Won! Go Tacks! The game will now reset!');
            reset();
        };
        
        //Vertical Checks (Player 1)
        if($('#0').hasClass('Player1') && $('#3').hasClass('Player1') && $('#6').hasClass('Player1')) {
            alert('Player 1 Wins! Go Toes! The game will now reset!');
            reset();
        };
        if($('#1').hasClass('Player1') && $('#4').hasClass('Player1') && $('#7').hasClass('Player1')) {
            alert('Player 1 Wins! Go Toes! The game will now reset!');
            reset();
        };
        if($('#2').hasClass('Player1') && $('#5').hasClass('Player1') && $('#8').hasClass('Player1')) {
            alert('Player 1 wins! Go Toes! The game will now reset!');
            reset();
        };
        
        //Vertical Checks (Player 2)
        if($('#0').hasClass('Player2') && $('#3').hasClass('Player2') && $('#6').hasClass('Player2')) {
            alert('Player 2 wins! Go Tacks! The game will now reset!');
            reset();
        };
        if($('#1').hasClass('Player2') && $('#4').hasClass('Player2') && $('#7').hasClass('Player2')) {
            alert('Player 2 wins! Go Tacks! The game will now reset!');
            reset();
        };
        if($('#2').hasClass('Player2') && $('#5').hasClass('Player2') && $('#8').hasClass('Player2')) {
            alert('Player 2 Wins! Go Tacks! The game will now reset!');
            reset();
        };
        
        //Diagonal Checks (Player 1)
        if($('#0').hasClass('Player1') && $('#4').hasClass('Player1') && $('#8').hasClass('Player1')) {
            alert('Player 1 wins! Go Toes! The game will now reset!');
            reset();
        };
        if($('#6').hasClass('Player1') && $('#4').hasClass('Player1') && $('#2').hasClass('Player1')) {
            alert('Player 1 wins! Go Toes! The game will now reset!');
            reset();
        };
        
        //Diagonal Checks (Player 2)
        if($('#0').hasClass('Player2') && $('#4').hasClass('Player2') && $('#8').hasClass('Player2')) {
            alert('Player 2 wins! Go Tacks! The game will now reset!');
            reset();
        };
        if($('#6').hasClass('Player2')&& $('#4').hasClass('Player2') && $('#2').hasClass('Player2')) {
            alert('Player 2 wins! Go Tacks! The game will now reset!');
            reset();
        };
    };
    // Win Callback
    winCheck();

    // Reset Function Definition
    let reset = () => {
        $('td').removeClass().addClass('Empty');
    };
    reset();

    // Reset Button Functionality
    $('#Reset').on('click', reset);

});