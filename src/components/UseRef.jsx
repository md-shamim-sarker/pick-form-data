import React from 'react';

const UseRef = () => {
    return (
        <div>
            <h2>useRef</h2>
            <form>
                <input type="text" name="firstName" id="firstName" /><br />
                <input type="text" name="lastName" id="lastName" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UseRef;