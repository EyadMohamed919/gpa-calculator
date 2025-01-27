import logo from './logo.svg';
import './App.css';
import ErrorNotification from "./ErrorNotification";

function App() {
  return (
    <div className="w-full h-full flex flex-col 
    justify-start items-center" >
      <h1 className="text-5xl m-auto mt-28 mb-10 text-green-900">
      <i class="fa-solid fa-calculator mr-3 drop-shadow-md text-green-700"></i>GPA Calculator</h1>
      <h2 className='text-3xl '>Your GPA is</h2>
      <div className="flex flex-row mt-2 justify-center items-end">
        <h1 id="gpaScore" className="text-5xl">2.0</h1>
        <h3 className="text-xl">/4.0</h3>
      </div>
    <ErrorNotification></ErrorNotification>
      <div className="mt-6 w-fit h-9">
        <input type="text" placeholder="Enter subject name" name="subjectName" id="subjectName"
        className="w-60 h-9 border-b-2 mt-0 mr-1 pl-1 rounded-sm border-green-700 shadow-md"></input>
        <input type="number" min={1} placeholder="Enter credit hours" name="subjectName" id="creditHours"
        className="w-60 h-9 border-b-2 ml-1 mr-1 pl-1 rounded-sm border-solid border-green-700 shadow-md"></input>

        <select id="grade" className="w-12 h-9 rounded-sm border-b-2 ml-1 mr-1 pl-1 border-solid border-green-700 shadow-md">
          <option value="4">A</option>
          <option value="3">B</option>
          <option value="2">C</option>
          <option value="1">D</option>
          <option value="0">F</option>
        </select>

        <button onClick={()=>addSubject()} value="Add" 
        className="w-16 h-9 border-b-2 border-green-700 ml-1 rounded-sm text-white bg-green-700">Add</button>

        <button onClick={()=>clearData()} value="Remove" 
        className="w-16 h-9 border-b-2 border-green-700 ml-1 rounded-sm text-white bg-green-700">Clear</button>
      </div>

        <table className="w-[800px] rounded-md p-3 mt-6 bg-green-900 text-white" id="subjectsTable">
          <tr className="w-fit rounded-md p-2 bg-green-950  font-bold">
            <td>Subject</td>
            <td>Credit Hours</td>
            <td>Grade</td>
            <td>Grade Points</td>
          </tr>
        </table>
    </div>
  );
}

var gradeToLetter = {
  4:"A",
  3:"B",
  2:"C",
  1:"D",
  0:"F"
};

// Global Variables
var totalGrade = 0.0;
var totalCredit = 0.0;
var isNotificationVisible = false;

function inputCheck()
{
  if(document.getElementById("subjectName").value.trim() == "" || document.getElementById("creditHours").value < 0)
  {
    return true;
  }
}


function NotificationVisisbility()
{
    if(!isNotificationVisible)
    {
        document.getElementById("notification").style.opacity = "100%";
        isNotificationVisible = true;
        setTimeout(() => { 
          document.getElementById("notification").style.opacity = "0%";
          isNotificationVisible = false; 
      }, 3000);
    }
}

function addSubject()
{
  if(inputCheck())
  {
    NotificationVisisbility();  
  }
  else
  {

    let table = document.getElementById("subjectsTable");
    
    let row = table.insertRow(-1);
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
  
    let credit = document.getElementById("creditHours").value;
    let grade = document.getElementById("grade").value;
  
    cell1.innerHTML = document.getElementById("subjectName").value;
  
    cell2.innerHTML = credit;
    totalCredit += parseInt(credit);
  
    cell3.innerHTML = grade + " (" + gradeToLetter[grade] + ")";
    cell4.innerHTML = credit * grade;
  
    totalGrade += credit * grade;
  
    calculateGPA();
  }
}

function calculateGPA()
{
  let gpa = totalGrade / totalCredit;
  
  gpa *= 100;
  gpa = Math.round(gpa);
  gpa /= 100;
  document.getElementById("gpaScore").innerHTML = gpa;
}


function clearData()
{
  totalGrade = 0.0;
  totalCredit = 0.0;

  document.getElementById("subjectsTable").innerHTML = `<tr className="w-fit rounded-md p-2 bg-yellow-900  font-bold">
  <td>Subject</td>
  <td>Credit Hours</td>
  <td>Grade</td>
  <td>Grade Points</td>
  </tr>`;
  
}

export default App;
