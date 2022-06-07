import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import TicketList from "./TicketList";
import EditTicktetForm from "./EditTicketForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "./../actions";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = actions.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const action = actions.addTicket(newTicket);
    dispatch(action);
    const action2 = actions.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedTicket = id => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTicketInList = ticketToEdit => {
    const { dispatch } = this.props;
    const action = actions.addTicket(ticketToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleDeletingTicket = id => {
    const { dispatch } = this.props;
    const action = actions.deleteTicket(id);
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditTicktetForm ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList} />
      buttonText= "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = 
      <TicketDetail 
        ticket={this.state.selectedTicket} 
        onClickingDelete={this.handleDeletingTicket}
        onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Ticket List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.mainTicketList} onTicketSelection={this.handleChangingSelectedTicket} />;
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;