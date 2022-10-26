var selectedRow=null;



function onformsubmit(){
   
   var formData=readFormData();
   if(selectedRow==null)
   insertNewRecord(formData);
   else
   updateRecord(formData);

   resetform();
}

function readFormData(){
    var formData={};
    formData["userid"]=document.getElementById("userid").value;
    formData["username"]=document.getElementById("username").value;
    formData["emailid"]=document.getElementById("email").value;
    formData["password"]=document.getElementById("password").value;
    formData["age"]=document.getElementById("age").value;
    return formData;

}

function insertNewRecord(data){
    var table=document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.userid;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.username;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.emailid
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.password;
    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.age;
    cell6=newRow.insertCell(5);
    cell6.innerHTML=`<a href="#" onClick="onEdit(this)">Edit</a>
                           <a href="#" onClick="onDelete(this)">Delete</a>`;

}
function resetform(){
    document.getElementById("userid").value="";
    document.getElementById("username").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    document.getElementById("age").value="";
    selectedRow=null;
}

function onEdit(td){
  selectedRow= td.parentElement.parentElement; 
  document.getElementById("userid").value=selectedRow.cells[0].innerHTML;
  document.getElementById("username").value=selectedRow.cells[1].innerHTML;
  document.getElementById("email").value=value=selectedRow.cells[2].innerHTML;
  document.getElementById("password").value=value=selectedRow.cells[3].innerHTML;
  document.getElementById("age").value=value=selectedRow.cells[4].innerHTML;

}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.userid; 
    selectedRow.cells[1].innerHTML=formData.username; 
    selectedRow.cells[2].innerHTML=formData.emailid; 
    selectedRow.cells[3].innerHTML=formData.password; 
    selectedRow.cells[4].innerHTML=formData.age; 

}

function onDelete(td){
    if(confirm("Are you sure to delete this record ?")){
   row=td.parentElement.parentElement;
   document.getElementById("employeelist").deleteRow(row.rowIndex);
   resetform();
}}




















