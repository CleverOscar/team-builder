import React from 'react';

const AddTeamMember = (props) => {

    console.log('props', props.handleChange)
    return(
        <div className="formContainer"> 
            <h4>Add Team Member</h4>

            <form className="form">
                <label>
                    Team Members Name:
                    <input
                    name="name"
                    type='text'
                    onChange={props.handleChange}
                    />
                </label>

                <label>
                    Email:
                    <input
                    name="email"
                    type='text'
                    onChange={props.handleChange}
                    />
                </label>
                
                <label>
                    Role:
                    <input 
                    name="role"
                    type='text' 
                    onChange={props.handleChange}
                    />
                </label>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default AddTeamMember;