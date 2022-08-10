let userSurveyData = JSON.parse(localStorage.getItem("userSurveyData"));
let surveyList = document.getElementById('surveyList');
for(let i = 0; i < userSurveyData.length; i++){
    console.log(userSurveyData[i]);
    let survey = document.createElement('li');
    survey.id = "survey-id-" + i;
    survey.innerText = userSurveyData[i].title;
    surveyList.appendChild(survey);
}