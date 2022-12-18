document.getElementById("submit").onclick = function () {

let arr = [];

// Task-1 - Creating a Table to store the form Elements in a Single Column 
const x = document.createElement("table");
const final = document.createElement("div");
div.type="division";
div.setAttribute("class","tablediv");
x.setAttribute("display","block");
x.setAttribute("border","3px solid black");
x.setAttribute("name","table");
x.setAttribute("class","table");
x.setAttribute("id","table");
final.append(x);
document.body.append(final);

  let table = document.getElementById("table");
  let name = table.insertRow(0);
    let firstname = name.insertCell(0);
    firstname.innerHTML = document.getElementById("first-name").value;
  let surname = table.insertRow(1);
    let lastname = surname.insertCell(0);
    lastname.innerHTML = document.getElementById("last-name").value;
  let Address = table.insertRow(2);
    let location = Address.insertCell(0);
    location.innerHTML = document.getElementById("address").value;
  let pincode = table.insertRow(3);
    let mycode = pincode.insertCell(0);
    mycode.innerHTML = document.getElementById("pincode").value;
  let gender = table.insertRow(4);
    let data = gender.insertCell(0);
    data.innerHTML = document.getElementById("Gender").value;
  let state = table.insertRow(5);
    let a = state.insertCell(0);
    a.innerHTML = document.getElementById("State").value;
  let country = table.insertRow(6);
    let b = country.insertCell(0);
    b.innerHTML = document.getElementById("Country").value;
  let food = table.insertRow(7);
    recipe = food.insertCell(0);
        recipe.innerHTML = ev();  
        
  // Task-2 - to Select atleast 2 options which are mandatory 
  
  let form_data = new FormData(document.querySelector("form"));
  if(form_data.getAll("recipes").length < 2) {
    alert("Please Select atleast 2 options ")
  }
  
  // Task-3 - to add the checkbox values to the table 
  function ev(){    
    let checkbox = document.querySelectorAll(".recipes:checked");
    for(let i in checkbox)
      arr.push(checkbox[i].value);
    return arr.join(" ");
  }
  
  // Task-4 - On uploading the fields, form has to be reset. 
  document.querySelector("form").reset();

return false;
};
