import React from 'react';

const ReactHookForm = () => {
    return (
        <div>
            <h2>react-hook-form</h2>
            <form>
                <input type="text" name="firstName" id="firstName" /><br />
                <input type="text" name="lastName" id="lastName" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReactHookForm;