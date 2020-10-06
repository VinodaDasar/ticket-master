export const findCustomer = (customers, id)=>{
    return customers.find(customer => customer._id === id)
}