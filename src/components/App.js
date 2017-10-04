import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddAttendee from './AddAttendee';
import Attendees from './Attendees';

import {addAttendee, removeAttendee} from '../actions';

import '../App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Attendees</h1>
				<AddAttendee addAttendee={this.props.addAttendee} />
				<Attendees attendees={this.props.attendees} removeAttendee={this.props.removeAttendee} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		attendees: state
	}
}


export default connect(mapStateToProps, {addAttendee, removeAttendee})(App);
