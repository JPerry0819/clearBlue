// Start document ready function
$(document).ready(function(){



    // Start quiz modal
    var modal = document.getElementById('myModal');
        
    // Get the button that opens the modal
    var btn = document.getElementById("openQuiz");
        
    
    // When the user clicks on the button, open the modal
    $(btn).click(function(){
        modal.style.display = "block";
    })
    
    
    // The following code will provide a result for each question in the quiz. The answer will show once the user clicks submit.
    const factArray= ["","The Pacific Ocean is the largest ocean on the planet. It covers more than 30% of the earth’s surface. ", "Marine Pollution has increased by over 100 times in the Pacific Ocean over the past 40 years.","The main culprit for the pollution of oceans is small fragments of plastic which float in the water, polluting the surrounding environment and endangering wildlife.", " The ever-growing Great Pacific garbage patch between California and Japan is three times the size of France.","Marine life is in extreme danger of extenision, due to polution. Sea Turtles are the largest population effected by plastic polution."]
    // When user clicks submit function
    $('#submit').click(function(){
        event.preventDefault();
       
    
    
        // Start array of facts for questions on quiz
       
    
    
    var i = 1;
    for(i; i<6; i++){
        var q = $(`#q${i}-truthbox`); 
        if($(q).is(':checked') == true){
            $(`.q${i}-response`).text('Correct: '+ factArray[i]);
            console.log("working man" + i);
    }else{
        $(`.q${i}-response`).text('Incorrect: ' + factArray[i] );
    }
    
    
    }
    
    
    
    
    
    
    
    })
    
  
    
    
 // End of Document Ready Function//
});   
    
    
    
    