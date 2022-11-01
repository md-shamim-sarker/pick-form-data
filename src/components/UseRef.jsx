import React, {useRef} from 'react';

const UseRef = () => {
    const firstName = useRef();
    const lastName = useRef();
    const user = {};

    const onSubmitHandler = (event) => {
        event.preventDefault();
        user[firstName.current.name] = firstName.current.value;
        user[lastName.current.name] = lastName.current.value;
        console.log(user);
        event.target.reset();
    };

    return (
        <div>
            <h2>useRef</h2>
            <form onSubmit={onSubmitHandler}>
                <input ref={firstName} name="firstName" type="text" placeholder='First Name' /><br />
                <input ref={lastName} name="lastName" type="text" placeholder='Last Name' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UseRef;