import React, {Component} from 'react';

export default class AddAttendee extends Component {
    // constructor(props){
    //     super(props);
    //     //this.handleSubmit = this.handleSubmit.bind(this);
    // }

    handleSubmit(e) {
        // Stop page refreshing
        e.preventDefault();

        let refs = this.refs;
        let name = refs.name.value;
        let color = refs.color.value
        let id = this.id;

        // Trigger action
        this.props.addAttendee(name, color, id);

        // Reset form
        refs.addAttendee.reset();
    }

    render() {
        return (
            <div className="row">
                <div className="medium-6 medium-offset-3 columns">
                    <form ref="addAttendee" onSubmit={this.handleSubmit.bind(this)}>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" ref="name" placeholder="John Doe" />
                        <label htmlFor="color">Favorite color</label>
                        <input id="color" type="text" ref="color" placeholder="#2e2e2e" />
                        <button type="submit" className="button">Add attendee</button>
                    </form>
                </div>
            </div>
        )
    }
}