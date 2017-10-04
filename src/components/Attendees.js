import React,{Component} from 'react';
import Badge from './Badge';
import RemoveAttendee from './RemoveAttendee';

export default class Attendees extends Component {
    
        render() {
            return (
                <ul className="attendees">
                    {this.props.attendees.map((attendee, index) =>
                        <li className="attendees__attendee" key={index}>
                            <Badge attendee={attendee} />
                            <RemoveAttendee removeAttendee={this.props.removeAttendee} index={index} />
                        </li>
                    )}
                </ul>
            )
        }
    }