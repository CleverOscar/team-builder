import React from 'react';

const AddTeamMember = () => {
    return(
        <div className="formContainer"> 
            <h4>Add Team Member</h4>

            <form className="form">
                <label>
                    Team Members Name:
                    <input type='text' />
                </label>

                <label>
                    Email:
                    <input type='text' />
                </label>
                
                <label>
                    Role:
                    <input type='text' />
                </label>
            </form>
        </div>
    )
}

export default AddTeamMember;