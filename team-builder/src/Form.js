import React from 'react';

const AddTeamMember = () => {
    return(
        <div className="formContainer"> 
            <h4>Add Team Member</h4>

            <form className="form">
                <label>
                    Team Members Name:
                    <input
                    name="name"
                    type='text' />
                </label>

                <label>
                    Email:
                    <input
                    name="email"
                    type='text' />
                </label>
                
                <label>
                    Role:
                    <input 
                    name="role"
                    type='text' />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddTeamMember;