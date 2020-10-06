export const selectEmpName = (employees, empIds)=>{
const selectedEmployees = employees.filter(employee=> {
   return empIds.includes(employee._id)
})
 return selectedEmployees.map(emp => emp.name)
}

//array of emp id , in that select one id and compare with the id present in employees array and get the name)

export const selectEmployeesByDepartment = (employees, deptId)=>{
   return employees.filter(emp=> emp.department === deptId)
}