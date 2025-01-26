import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="w-full h-full flex flex-col 
    justify-start items-center" >
      <h1 className="text-5xl m-auto mt-28 mb-10">
      <i class="fa-solid fa-calculator mr-3 drop-shadow-md"></i>GPA Calculator</h1>
      <h2 className='text-3xl '>Your GPA is</h2>
      <div className="flex flex-row mt-2 justify-center items-end">
        <h1 id="gpaScore" className="text-5xl">2.0</h1>
        <h3 id="gpaScore" className="text-xl">/2.0</h3>
      </div>

      <div className="mt-6 w-fit h-9">
        <input type="text" placeholder="Enter subject name" name="subjectName" id="subjectName"
        className="w-60 h-9 border-b-2 mt-0 mr-1 pl-1 rounded-sm border-yellow-900 shadow-md"></input>
        <input type="number" min={1} placeholder="Enter credit hours" name="subjectName" id="creditHours"
        className="w-60 h-9 border-b-2 ml-1 mr-1 pl-1 rounded-sm border-solid border-yellow-900 shadow-md"></input>

        <select id="creditHours" className="w-12 h-9 rounded-sm border-b-2 ml-1 mr-1 pl-1 border-solid border-yellow-900 shadow-md">
          <option value="4">A</option>
          <option value="3">B</option>
          <option value="3">C</option>
          <option value="2">D</option>
          <option value="1">F</option>
        </select>

        <button onClick={()=>addSubject()} value="Add" 
        className="w-16 h-9 border-b-2 border-yellow-900 ml-1 rounded-sm text-white bg-yellow-900">Add</button>
      </div>

        <table className="w-[800px] mt-6 bg-yellow-950" id="subjectsTable">
          <tr className="w-fit bg-yellow-900 text-white font-bold">
            <td>Subject</td>
            <td>Credit Hours</td>
            <td>Grade</td>
            <td>Grade Points</td>
          </tr>
        </table>
    </div>
  );
}

function addSubject()
{
  let table = document.getElementById("subjectsTable");
  
  let row = table.insertRow(-1);
  
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerHTML = document.getElementById("subjectName").value;
  cell2.innerHTML = document.getElementById("subjectName").value;
  cell4.innerHTML = document.getElementById("subjectName").value;
}

export default App;
