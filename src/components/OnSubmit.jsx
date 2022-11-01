import React from 'react';

const OnSubmit = () => {
    const user = {};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(user);
        event.target.reset();
    };

    const onChangeHandler = (event) => {
        event.preventDefault();
        const props = event.target.name;
        const val = event.target.value;
        user[props] = val;
    };

    return (
        <div>
            <h2>onSubmit</h2>
            <form onSubmit={onSubmitHandler}>
                <input onBlur={onChangeHandler} type="text" name="firstName" placeholder='First Name' /><br />
                <input onBlur={onChangeHandler} type="text" name="lastName" placeholder='Last Name' /><br />
                <input onBlur={onChangeHandler} type="email" name="email" placeholder='Email' /><br />
                <input onBlur={onChangeHandler} type="password" name="password" placeholder='Password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default OnSubmit;