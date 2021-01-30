import React from 'react';

const AddTeamMember = () => {
    return(
        <div> 
            <h4>Add Team Member</h4>

            <form>
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