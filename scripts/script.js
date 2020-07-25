var table = document.getElementById('toDoTable');

function addItem() {
    var getInput = document.getElementById('toDoText')

    if (getInput.value == "") {
        $(document).ready(function() {
            $("#insertSomeThing").modal('show');
        });
    } else {
        var ul = document.createElement('tr')
        var liName = document.createElement('td')
        ul.appendChild(liName)

        var liEdit = document.createElement('td')
        ul.appendChild(liEdit)

        var liDelete = document.createElement('td')
        ul.appendChild(liDelete)

        var editButton = document.createElement('button')
        var editButtonText = document.createTextNode('EDIT')

        editButton.setAttribute('class', 'btn btn-warning tableButton')
        editButton.setAttribute('onclick', 'editItem(this)')

        liEdit.appendChild(editButton)
        editButton.appendChild(editButtonText)

        var deleteButton = document.createElement('button')
        var deleteButtonText = document.createTextNode('DELETE')

        deleteButton.setAttribute('class', 'btn btn-danger text-white tableButton')
        deleteButton.setAttribute('onclick', 'deleteItem(this)')

        liDelete.appendChild(deleteButton)
        deleteButton.appendChild(deleteButtonText)

        var listText = document.createTextNode(getInput.value)
        liName.appendChild(listText)

        table.appendChild(ul)

        getInput.value = ""
    }
}

function editItem(button) {
    var editTextField = document.getElementById('edit-name')

    var updateValue = button.parentNode.parentNode.firstChild.innerText
    var updatedValue = button.parentNode.parentNode.firstChild

    editTextField.value = updateValue


    $(document).ready(function() {
        $("#editButtonPopUp").modal('show');
    });

    $('#editButtonPopUp').on('click', '#saveButton', function() {
        updatedValue.innerText = editTextField.value
        $('#editButtonPopUp').modal('hide');
    });
}

function deleteItem(button) {
    button.parentNode.parentNode.remove()
}

function deleteItems() {
    if (table.innerHTML == "") {
        $(document).ready(function() {
            $("#insertField").modal('show');
        });
    } else {
        table.innerHTML = ""
    }
}