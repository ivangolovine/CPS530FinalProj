import React from 'react';
import { useState } from 'react'; 

export const Form = ( {uChange, passChange, submitForm, submitUN, submitPass}) => {
    const onSubmit = (event) => {
        event.preventDefault();
        submitForm();
    }

    const handleUChange = (event) => {
        uChange(event.target.value);
    }

    const handlePChange = (event) => {
        passChange(event.target.value);
    }

    return (
    <div>
        <form onSubmit={onSubmit} method="POST">
            <input name="username" placeholder="admin" value={submitUN} onChange={handleUChange} type="text"/> <br/> <br/>
            <input name="password" placeholder="password123" value={submitPass} onChange={handlePChange} type="password"/> <br/> <br/>
            <input className = "btn" type="submit" value="Submit"/>
        </form>
    </div>)
}