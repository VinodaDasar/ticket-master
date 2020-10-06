import React from 'react'
import TicketsForm from './Form'
import {connect} from 'react-redux'
import {findTicket} from '../../selectors/ticketSelector'


class TicketEdit extends React.Component{

    render(){
        return(
            <div>
                <h2>Edit Ticket</h2>
                {
                    this.props.tickets ? <TicketsForm tickets={this.props.tickets}/> : 'loading........'
                }
                
            </div>
        )
    }
}

const mapStateToProps =(state, props)=>{
    const id = props.match.params.id
    return{
        tickets: findTicket(state.tickets, id)
    }
}

export default connect(mapStateToProps)(TicketEdit)