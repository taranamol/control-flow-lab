var securityQuestions = {question : ["where are you from?", "how old are you?", "what is your favorite color"], 
    expectedAnswer : ["la", "24", "blue"]};

if (prompt(securityQuestions.question[0]) === securityQuestions.expectedAnswer[0]) {
    if (prompt(securityQuestions.question[1]) === securityQuestions.expectedAnswer[1]){
       if(prompt(securityQuestions.question[2]) === securityQuestions.expectedAnswer[2]) {
           alert("come in!"); 
       } else {
           alert("wrong answer");
       } 
    } else {
        alert("wrong answer");
    }
} else { 
    alert("wrong answer"); 
} 