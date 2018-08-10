import React, { Component } from "react";
import { connect } from 'react-redux';
import { Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { deleteEvent } from '../eventActions';
class EventDashboard extends Component {
  
  handleDeleteEvent = eventId => () => {
    const {deleteEvent} = this.props;
    deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
        </Grid.Column>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: (id) => dispatch(deleteEvent(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);
