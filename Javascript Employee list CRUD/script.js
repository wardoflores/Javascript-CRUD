var selectedrow = null // made global for Update Operation on onformsubmit function

function onformsubmit() {
    if(validate()) {
        var formdata = readformdata();
        if(selectedrow == null)
            insertnewrecord(formdata);
            else
            updaterecord(formdata);
        resetform();
    }
}

function readformdata() {
    var formdata = {};
    formdata["fullname"] = document.getElementById("fullname").value;
    formdata["empcode"] = document.getElementById("empcode").value;
    formdata["salary"] = document.getElementById("salary").value;
    formdata["city"] = document.getElementById("city").value;
    return formdata;
}

function insertnewrecord(data) {
    var table = document.getElementById("employeelist").getElementsByTagName("tbody")[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = data.empcode;
    cell3 = newrow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newrow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newrow.insertCell(4);
    cell5.innerHTML = `<a onClick="onedit(this)">Edit</a>
                        <a onClick="ondelete(this)">Delete</a>`;
}

function resetform() {
    document.getElementById("fullname").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedrow = null;
}

function onedit(td) {
    selectedrow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedrow.cells[0].innerHTML;
    document.getElementById("empcode").value = selectedrow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedrow.cells[2].innerHTML;
    document.getElementById("city").value = selectedrow.cells[3].innerHTML;
}

function updaterecord(formdata) {
    selectedrow.cells[0].innerHTML = formdata.fullname;
    selectedrow.cells[1].innerHTML = formdata.empcode;
    selectedrow.cells[2].innerHTML = formdata.salary;
    selectedrow.cells[3].innerHTML = formdata.city;
}

function ondelete(td) {
    if (confirm("Are you sure to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        resetform();
    }
}

function validate() {
    isvalid = true;
    if (document.getElementById("fullname").value == "") {
        isvalid = false;
        document.getElementById("fullnamevalidationerror").classList.remove("hide");
    } else {
        isvalid = true;
        if (!document.getElementById("fullnamevalidationerror").classList.contains("hide"))
        document.getElementById("fullnamevalidationerror").classList.add("hide");
    }
}