export const findDepartments = (departments = [], id)=>{
    return departments.find(departments => departments._id === id)
}

/*
departments is an array 
id is the dept id we to search from the array
departments._id === id
it will return the dept 

*/