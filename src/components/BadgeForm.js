import React from 'react';

class BadgeForm extends React.Component {
    // state= {};

    // props.OnChange = e => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // });
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    handleClick = e => {
        console.log("Button was clicked");
    }


    // Prevent submit OR type="button"
    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("Form was submitted");
    //     console.log(this.state)
    // }

    render() {
        return (
            <div>
                <h1>{this.props.attendant}</h1>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="firstName"
                        value={this.props.formValues.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="lastName"
                        value={this.props.formValues.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        onChange={this.props.onChange}
                        className="form-control" 
                        type="email" 
                        name="email"
                        value={this.props.formValues.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="jobTitle"
                        value={this.props.formValues.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                        onChange={this.props.onChange} 
                        className="form-control" 
                        type="text" 
                        name="twitter"
                        value={this.props.formValues.twitter}></input>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

                    {this.props.error && (
                        <p className="text-danger">{this.props.error.message}</p>
                    )}
                </form>
            </div>
        )
    }
}

export default BadgeForm;