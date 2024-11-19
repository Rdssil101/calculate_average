// All Conts Project
const activateForm = document.getElementById('activate-form');
const happinessImage = '<img src="../images/aprovado.png" alt="Happiness"/>';
const sadnessImage = '<img src="../images/reprovado.png" alt="Sadness"/>';

const allActivates = [];
const allNotes = [];

const approvedSpam = '<spam class="approvedResult">Approved</spam>';
const failedSpam = '<spam class="failedResult">Failed</spam>';

const minimumNote = parseFloat(prompt('Type The Minimum Grade: '));

let allTableLines = '';
// // End of All Consts Projet;

// Event Submit
activateForm.addEventListener('submit', function(even) {
   even.preventDefault();

   addLines();
   tableUpdate();
   updateFinalAverage();
   //alert(`Activate => ${activateName.value} - Note ${activateGrade.value}`);
});
// End of Event Submit;

// Function Add Lines
function addLines() {
   const activateName = document.getElementById('activate-name');
   const activateGrade = document.getElementById('activate-grade');

   allActivates.push(parseFloat(activateName.value));
   allNotes.push(parseFloat(activateGrade.value));

   if (allActivates.includes(activateName.value)) {
      alert(`This Activate: ${activateName.value} Already Exists!`);

   } else {
      
      let lineTable = `<tr>`;
      lineTable += `<td>${activateName.value}</td>`;
      lineTable += `<td>${activateGrade.value}</td>`;
      lineTable += `<td>${activateGrade.value >= minimumNote ? happinessImage : sadnessImage}</td>`;
      lineTable += `</tr>`;
      
      allTableLines += lineTable;
   }
   
   // Clear Input Fields;
   activateName.value = '';
   activateGrade.value = '';
}
// End of Function Add Lines;

// Function Table Update
function tableUpdate() {

   const tableBody = document.querySelector('tbody');
   tableBody.innerHTML = allTableLines;
}
// End of Function Table Update;

// Function Update Final Average
function updateFinalAverage() {

   const finalAverage = calculateFinalAverage();

   document.getElementById('final-average-value').innerHTML = finalAverage;
   document.getElementById('final-result-average').innerHTML = finalAverage >= minimumNote ?'approvedSpam' : 'failedSpam'; 
}
// End of Function Update Final Average;

// Function Caculate  Final Average
function calculateFinalAverage() {

   let sumOfAllTheNotes = 0;

   for (let idx = 0; idx < activateGrade.length; idx++) {
      sumOfAllTheNotes += activateGrade[idx];
    }

    return sumOfAllTheNotes / activateGrade.length;
   
}
// End of Function Calculate Final Average;





























