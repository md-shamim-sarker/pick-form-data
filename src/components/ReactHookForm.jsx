import React from 'react';
import {useForm} from 'react-hook-form';

const ReactHookForm = () => {
    const {register, handleSubmit, resetField} = useForm();

    const onSubmitHandler = (data) => {
        console.log(data);
        resetField('firstName');
        resetField('lastName');
    };

    return (
        <div>
            <h2>react-hook-form</h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input type='text' {...register('firstName')} placeholder='First Name' /><br />
                <input type='text' {...register('lastName')} placeholder='Last Name' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReactHookForm;