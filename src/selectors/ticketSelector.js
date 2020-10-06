export const findTicket = (tickets, id='')=>{
    return tickets.find(ticket=> ticket._id === id)
}