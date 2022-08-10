let userSurveyData = [];
let survey = {

}

let questionnaire = document.getElementById("questionnaire");
let questionTracker = 0;

/* Creating drop down box option of question types */
let selectBox = document.createElement('select');
let option1 = document.createElement('option');
let option2 = document.createElement('option');
let option3 = document.createElement('option');
let option4 = document.createElement('option');
let option5 = document.createElement('option');
let option6 = document.createElement('option');
let option7 = document.createElement('option');
let option8 = document.createElement('option');
let option9 = document.createElement('option');

option1.innerHTML = "Rating Scale";
selectBox.appendChild(option1);
option1.id = "rating-scale";

// option2.innerHTML = "Closed-Ended";
// selectBox.appendChild(option2);
// option2.id = "close-ended";

// option3.innerHTML = "Dichotomous";
// selectBox.appendChild(option3);
// option3.id = "dichotomous";

option4.innerHTML = "Multiple Choice";
selectBox.appendChild(option4);
option4.id = "multiple-choice";

// option5.innerHTML = "Likert";
// selectBox.appendChild(option5);
// option5.id = "likert";

// option6.innerHTML = "Matrix";
// selectBox.appendChild(option6);
// option6.id = "matrix";

option7.innerHTML = "Open-Ended";
selectBox.appendChild(option7);
option7.id = "open-ended";

// option8.innerHTML = "Demographic";
// selectBox.appendChild(option8);
// option8.id = "demographic";

// option9.innerHTML = "Checkbox";
// selectBox.appendChild(option9);
// option9.id = "checkbox";

let questionOptions = document.getElementById('questionOptions');
questionOptions.id = "questionOptions";
questionOptions.appendChild(selectBox);

/* Creating button to add a question to the questionnaire. */
let addQuestionBtn = document.createElement('button');
addQuestionBtn.innerHTML = "+";
addQuestionBtn.addEventListener('click', ()=>{
    let questionNumber = "Q" + questionTracker;
    let questionType = "";
    let option = selectBox.options[selectBox.selectedIndex].id;
    let div = document.createElement('div');
    if(option === 'rating-scale'){
        div.id = "rating-scale" + questionNumber;
        questionType = 'rating-scale';
        let question = "";
        let rScaleType = "Graphing";

        var br = document.createElement('br');
        div.appendChild(br);

        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', 'label');
        newLabel.innerText = "Rating-Scale Question"
        div.appendChild(newLabel);

        var br = document.createElement('br');
        div.appendChild(br);

        let ratingScaleText = document.createElement('input');
        ratingScaleText.type = "text";
        ratingScaleText.id = "ratingScaleText" + questionNumber;
        div.appendChild(ratingScaleText);

        ratingScaleText.addEventListener('change', ()=>{
            question = ratingScaleText.value;
            survey[parseInt(ratingScaleText.id.replace('ratingScaleTextQ', ""))] = {
                question,
                questionNumber,
                questionType,
                rScaleType
            };
            console.log(survey);
        });

        let ratingScaleType = document.createElement('select');
        ratingScaleType.id = "ratingScale";
        let ratingScaleOption1 = document.createElement('option');
        let ratingScaleOption2 = document.createElement('option');
        let ratingScaleOption3 = document.createElement('option');

        ratingScaleOption1.innerHTML = "Graphing Rating Scale";
        ratingScaleType.appendChild(ratingScaleOption1);
        ratingScaleOption1.id = "graphing-rating-scale";

        ratingScaleOption2.innerHTML = "Numerical Rating Scale";
        ratingScaleType.appendChild(ratingScaleOption2);
        ratingScaleOption2.id = "numerical-rating-scale";

        ratingScaleOption3.innerHTML = "Degree of Agreement Rating Scale";
        ratingScaleType.appendChild(ratingScaleOption3);
        ratingScaleOption3.id = "degree-of-agreement";
        
        let ratingScaleDiv = document.createElement('div');
        ratingScaleDiv.id = "ratingScaleDiv";

        /* Default rating scale type = graphing-rating-scale */
        let radio1 = document.createElement('input');
        let radio2 = document.createElement('input');
        let radio3 = document.createElement('input');
        let radio4 = document.createElement('input');
        let radio5 = document.createElement('input');
        
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);

        radio1.type = "radio";
        radio1.disabled = true;
        radio1.value = 'hd';

        let label1 = document.createElement('label');
        label1.for = 'hd';
        label1.innerText = "Highly Dissatisfied"

        radio2.type = "radio";
        radio2.disabled = true;
        radio2.value = 'd';

        let label2 = document.createElement('label');
        label2.for = 'd';
        label2.innerText = "Dissatisfied"

        radio3.type = "radio";
        radio3.disabled = true;
        radio3.value = 'n';

        let label3= document.createElement('label');
        label3.for = 'n';
        label3.innerText = "Neutral"

        radio4.type = "radio";
        radio4.disabled = true;
        radio4.value = 's';

        let label4= document.createElement('label');
        label4.for = 's';
        label4.innerText = "Satisfied"

        radio5.type = "radio";
        radio5.disabled = true;
        radio5.value = 'hs';

        let label5 = document.createElement('label');
        label5.for = 'hs';
        label5.innerText = "Highly Satisfied"

        ratingScaleDiv.appendChild(radio1);
        ratingScaleDiv.appendChild(label1);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio2);
        ratingScaleDiv.appendChild(label2);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio3);
        ratingScaleDiv.appendChild(label3);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio4);
        ratingScaleDiv.appendChild(label4);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio5);
        ratingScaleDiv.appendChild(label5);
        
        ratingScaleType.addEventListener('change', ()=>{
            console.log(ratingScaleType.options[ratingScaleType.selectedIndex].id);
            let ratingScaleTypeOption = ratingScaleType.options[ratingScaleType.selectedIndex].id;
            if(ratingScaleTypeOption === 'graphing-rating-scale'){
                rScaleType = 'graphing';

                ratingScaleDiv.id += "Graphing";
                console.log(ratingScaleDiv.id);
                ratingScaleDiv.innerHTML = "";
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);

                radio1.type = "radio";
                radio1.disabled = true;
                radio1.value = 'hd';

                let label1 = document.createElement('label');
                label1.for = 'hd';
                label1.innerText = "Highly Dissatisfied"

                radio2.type = "radio";
                radio2.disabled = true;
                radio2.value = 'd';

                let label2 = document.createElement('label');
                label2.for = 'd';
                label2.innerText = "Dissatisfied"

                radio3.type = "radio";
                radio3.disabled = true;
                radio3.value = 'n';

                let label3= document.createElement('label');
                label3.for = 'n';
                label3.innerText = "Neutral"

                radio4.type = "radio";
                radio4.disabled = true;
                radio4.value = 's';

                let label4= document.createElement('label');
                label4.for = 's';
                label4.innerText = "Satisfied"

                radio5.type = "radio";
                radio5.disabled = true;
                radio5.value = 'hs';

                let label5 = document.createElement('label');
                label5.for = 'hs';
                label5.innerText = "Highly Satisfied"

                ratingScaleDiv.appendChild(radio1);
                ratingScaleDiv.appendChild(label1);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio2);
                ratingScaleDiv.appendChild(label2);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio3);
                ratingScaleDiv.appendChild(label3);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio4);
                ratingScaleDiv.appendChild(label4);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio5);
                ratingScaleDiv.appendChild(label5);
                div.appendChild(ratingScaleDiv);
            } else if(ratingScaleTypeOption === 'numerical-rating-scale') {
                rScaleType = 'numerical';

                ratingScaleDiv.innerHTML = "";
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);

                radio1.type = "radio";
                radio1.disabled = true;
                radio1.value = 'hd';

                let label1 = document.createElement('label');
                label1.for = 'hd';
                label1.innerText = "Totally Satisfied (5)"

                radio2.type = "radio";
                radio2.disabled = true;
                radio2.value = 'd';

                let label2 = document.createElement('label');
                label2.for = 'd';
                label2.innerText = "4"

                radio3.type = "radio";
                radio3.disabled = true;
                radio3.value = 'n';

                let label3= document.createElement('label');
                label3.for = 'n';
                label3.innerText = "3"

                radio4.type = "radio";
                radio4.disabled = true;
                radio4.value = 's';

                let label4= document.createElement('label');
                label4.for = 's';
                label4.innerText = "2"

                radio5.type = "radio";
                radio5.disabled = true;
                radio5.value = 'hs';

                let label5 = document.createElement('label');
                label5.for = 'hs';
                label5.innerText = "Totally Dissatisfied(1)"

                ratingScaleDiv.appendChild(radio1);
                ratingScaleDiv.appendChild(label1);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio2);
                ratingScaleDiv.appendChild(label2);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio3);
                ratingScaleDiv.appendChild(label3);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio4);
                ratingScaleDiv.appendChild(label4);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio5);
                ratingScaleDiv.appendChild(label5);
                div.appendChild(ratingScaleDiv);
            } else if(ratingScaleTypeOption === 'degree-of-agreement'){
                rScaleType = 'doa';
                
                ratingScaleDiv.innerHTML = "";
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);

                radio1.type = "radio";
                radio1.disabled = true;
                radio1.value = 'hd';

                let label1 = document.createElement('label');
                label1.for = 'hd';
                label1.innerText = "Strongly Agree"

                radio2.type = "radio";
                radio2.disabled = true;
                radio2.value = 'd';

                let label2 = document.createElement('label');
                label2.for = 'd';
                label2.innerText = "Agree"

                radio3.type = "radio";
                radio3.disabled = true;
                radio3.value = 'n';

                let label3= document.createElement('label');
                label3.for = 'n';
                label3.innerText = "Neither Agree nor Disagree"

                radio4.type = "radio";
                radio4.disabled = true;
                radio4.value = 's';

                let label4= document.createElement('label');
                label4.for = 's';
                label4.innerText = "Disagree"

                radio5.type = "radio";
                radio5.disabled = true;
                radio5.value = 'hs';

                let label5 = document.createElement('label');
                label5.for = 'hs';
                label5.innerText = "Strongly Disagree"

                ratingScaleDiv.appendChild(radio1);
                ratingScaleDiv.appendChild(label1);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio2);
                ratingScaleDiv.appendChild(label2);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio3);
                ratingScaleDiv.appendChild(label3);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio4);
                ratingScaleDiv.appendChild(label4);
                var br = document.createElement('br');
                ratingScaleDiv.appendChild(br);
                ratingScaleDiv.appendChild(radio5);
                ratingScaleDiv.appendChild(label5);
                div.appendChild(ratingScaleDiv);
            }
            
            survey[parseInt(ratingScaleText.id.replace('ratingScaleTextQ', ""))] = {
                question,
                questionNumber,
                questionType,
                rScaleType
            };
            console.log(survey);
        });
        div.appendChild(ratingScaleType);
        div.appendChild(ratingScaleDiv);
        questionnaire.appendChild(div);

    } else if(option === 'close-ended'){
        
    } else if(option === 'dichotomous'){
        
    } else if(option === 'multiple-choice'){
        questionType = "multiple-choice";
        let question = "";
        let responses = [];

        var br = document.createElement('br');
        questionnaire.appendChild(br);

        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', 'label');
        newLabel.innerText = "Multiple Choice Question";

        questionnaire.appendChild(newLabel);
        var br = document.createElement('br');
        questionnaire.appendChild(br);

        let multipleChoiceText = document.createElement('input');
        multipleChoiceText.type = "text";
        multipleChoiceText.id = "multipleChoiceText" + questionNumber;
        multipleChoiceText.addEventListener('change', ()=>{
            question = multipleChoiceText.value;
            survey[parseInt(multipleChoiceText.id.replace('multipleChoiceTextQ', ""))] = {
                question,
                questionNumber,
                questionType,
                responses
            };
            console.log(survey);
        });
        questionnaire.appendChild(multipleChoiceText);

        var br = document.createElement('br');
        questionnaire.appendChild(br);
        
        let div = document.createElement('div');
        div.id = 'responseAmtQ';

        let p = document.createElement('p');
        p.innerText = "How many responses would you like to create? (5 max)";
        div.appendChild(p);
        questionnaire.appendChild(div);

        let newInput = document.createElement('input');
        let responseAmt = 0;
        newInput.type = "text";
        newInput.id = "responseAmt";
        newInput.addEventListener('change', ()=>{
            responseAmt = parseInt(newInput.value);
        });
        
        div.appendChild(newInput);
        questionnaire.appendChild(div);

        let button = document.createElement('button');
        button.type = "button";
        button.id = "responseAmtBtn";
        button.addEventListener('click', ()=>{
            div.innerHTML = "";
            for(let i = 0; i < responseAmt; i++){
                responses[i] = "";
                
                var br = document.createElement('br');
                questionnaire.appendChild(br);

                let newInput = document.createElement('input');
                newInput.type = "checkbox";
                newInput.id = "multipleChoiceResponseText";
                questionnaire.appendChild(newInput);

                let responseText = document.createElement('input');
                responseText.type = "text";
                responseText.id = "multipleChoiceResponseText" +i;
                responseText.addEventListener('change', ()=>{
                    let id = parseInt(responseText.id.replace('multipleChoiceResponseText', ''));
                    responses[id] = responseText.value;
                    survey[parseInt(multipleChoiceText.id.replace('multipleChoiceTextQ', ""))] = {
                        question,
                        questionNumber,
                        questionType,
                        responses
                    } 
                    console.log(survey);
                });
                questionnaire.appendChild(responseText);
            }
        });
        
        button.innerText = 'Add Responses';
        div.appendChild(button);
        questionnaire.appendChild(div);
    } else if(option === 'likert'){
    
    } else if(option === 'matrix'){
        
    } else if(option === 'open-ended'){
        let question = "";
        questionType = "open-ended";
        var br = document.createElement('br');
        questionnaire.appendChild(br);

        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', 'label');
        newLabel.innerText = "Open-Ended Question"
        questionnaire.appendChild(newLabel);

        var br = document.createElement('br');
        questionnaire.appendChild(br);

        let openEndedText = document.createElement('input');
        openEndedText.type = "text";
        openEndedText.id = "openEndedText" + questionNumber;

        openEndedText.addEventListener('change', ()=>{
            question = openEndedText.value;
            survey[parseInt(openEndedText.id.replace('openEndedTextQ', ""))] = {
                question,
                questionNumber,
                questionType
            };
            console.log(survey);
        });
        questionnaire.appendChild(openEndedText);

    } else if(option === 'demographic'){
        
    } else if(option === 'checkbox'){
    
    }
    questionTracker += 1; 
});
questionOptions.appendChild(addQuestionBtn);

/* Form Save */
let saveForm = document.getElementById("saveForm");
let saveQuestionBtn = document.createElement('button');
saveQuestionBtn.innerText = "Create Survey";
saveQuestionBtn.addEventListener('click', () => {
    let title = document.getElementById('title');
    let surveyData = {
        title: title.value,
        data: survey
    };
    userSurveyData.push(surveyData);
    localStorage.setItem("userSurveyData", JSON.stringify(userSurveyData));
    console.log(JSON.parse(localStorage.getItem("userSurveyData")));
});
saveForm.appendChild(saveQuestionBtn);