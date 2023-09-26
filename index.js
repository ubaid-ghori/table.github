let totalScore = 0;

function addToTable() {
    let name = document.getElementById("name").value;
    let fathername = document.getElementById("fathername").value;
    let score = parseFloat(document.getElementById("score").value);

    let table = document.getElementById("dataTable");
    let row = table.insertRow(-1);
    let colum1 = row.insertCell(0);
    let colum2 = row.insertCell(1);
    let colum3 = row.insertCell(2);
    let colum4 = row.insertCell(3);

    colum1.innerHTML = name;
    colum2.innerHTML = fathername;
    colum3.innerHTML = score.toFixed(0);
    
    totalScore += score;
    colum4.innerHTML = totalScore.toFixed(0);

    
}