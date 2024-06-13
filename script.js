let activitynumber = 1;

function addActivity() {

    activitynumber++;
    const activitiesFieldset = document.getElementById('activities-fieldset');

    const newActivityDiv = document.createElement('div');
    newActivityDiv.classList.add('activity-entry');
    
    const newActivityLabel = document.createElement('label');
    newActivityLabel.setAttribute('for', `activity${activitynumber}`);
    newActivityLabel.textContent = `Activity ${activitynumber}`;
    
    const newActivityInput = document.createElement('input');
    newActivityInput.setAttribute('type', 'text');
    newActivityInput.setAttribute('id', `activity${activitynumber}`);
    newActivityInput.setAttribute('placeholder', 'Activity');
    
    const newTimeLabel = document.createElement('label');
    newTimeLabel.setAttribute('for', `time${activitynumber}`);
    newTimeLabel.textContent = 'Time spent';
    
    const newTimeInput = document.createElement('input');
    newTimeInput.setAttribute('type', 'number');
    newTimeInput.setAttribute('id', `time${activitynumber}`);
    newTimeInput.setAttribute('min', '0');
    newTimeInput.setAttribute('max', '24');
    newTimeInput.setAttribute('placeholder', 'Hours');

    newActivityDiv.appendChild(newActivityLabel);
    newActivityDiv.appendChild(newActivityInput);
    newActivityDiv.appendChild(newTimeLabel);
    newActivityDiv.appendChild(newTimeInput);
    
    activitiesFieldset.appendChild(newActivityDiv);
}



function reflection() {
   
    const writtenActivity = document.querySelectorAll('.activity-entry');
    let activitynumber = '';

    writtenActivity.forEach((entry, index) => {
        const activity = entry.querySelector(`input[type="text"]`).value;
        const time = entry.querySelector(`input[type="number"]`).value;
        activitynumber += `You spent ${time} hours ${activity}. `;
    });

    const happinessLevels = document.getElementsByName('feeling');
    let selectedHappiness;
    for (const level of happinessLevels) {
        if (level.checked) {
            selectedHappiness = level.value;
            break;
        }
    }

    const reflectionText = document.getElementById('reflectionText').value;

   
    const summary = `${activitynumber}
                     Your happiness level today was: ${selectedHappiness}. 
                     Your own comments: ${reflectionText}`;

    
    document.getElementById('reflectionday').innerText = summary;
}



function saveResult() {
    
    const summary = document.getElementById('reflectionday').innerText;
    const blob = new Blob([], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'your_day.txt';
    a.click();

    
}