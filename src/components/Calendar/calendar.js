import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import '../../assets/css/styles.css';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class MyCal extends Component {    

  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      }
    ]
  };

  render() {
    return (
      <div className="container aboutus"> 
      <br/><br/><br/><br/>
      <h2 className="aboutus-title">Calendar</h2>                
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        />
        <br/><br/>
      </div>
    );
  }
}

export default MyCal;