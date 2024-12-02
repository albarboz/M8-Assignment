// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    { id: 12345678, name: 'Alan', extension: 1111, email: 'alan@gmail.com', department: 'Liquor' },
    { id: 12345679, name: 'Avery', extension: 2222, email: 'Avery@gmail.com', department: 'Cooking' },
    { id: 12345680, name: 'Inca', extension: 3333, email: 'Inca@gmail.com', department: 'Pet' },
    { id: 12345681, name: 'Abraham', extension: 4444, email: 'Abraham@gmail.com', department: 'Gaming' },
    { id: 12345682, name: 'Nadia', extension: 5555, email: 'nadia@gmail.com', department: 'Garden' },
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const storedEmployees = localStorage.getItem('employees')
if (storedEmployees) {
    try {
        const parsedEmployees = JSON.parse(storedEmployees);
        if (Array.isArray(parsedEmployees)) {
            employees = parsedEmployees;
        }
    } catch (e) {
        console.error('Error parsing employees from localStorage', e);
    }
}

// GET DOM ELEMENTS
let empTable = document.querySelector('#empTable tbody')
let empCount = document.querySelector('#empCount')
let form = document.querySelector('#addForm')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    const id = parseInt(document.querySelector('#id').value)
    const name = document.querySelector('#name').value
    const extension = parseInt(document.querySelector('#extension').value)
    const email = document.querySelector('#email').value
    const department = document.querySelector('#department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = { id, name, extension, email, department }
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target && e.target.classList.contains('btn-outline-danger')) {
        const confirmDelete = confirm('Are you sure?')
        if (!confirmDelete) return

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        const row = e.target.closest('tr')
        const rowIndex = Array.from(empTable.rows).indexOf(row)
        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex, 1)
        // BUILD THE GRID
        buildGrid()
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.innerHTML = ''
    // REBUILD THE TBODY FROM SCRATCH
    employees.forEach((employee) => {
        const row = document.createElement('tr')
        // LOOP THROUGH THE ARRAY OF EMPLOYEES
        // REBUILDING THE ROW STRUCTURE
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.extension}</td>
            <td>${employee.email}</td>
            <td>${employee.department}</td>
            <td><button class='btn btn-outline-danger'>Delete</button></td>`
        // BIND THE TBODY TO THE EMPLOYEE TABLE
        empTable.appendChild(row)
    })

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};

