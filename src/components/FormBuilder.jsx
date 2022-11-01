import React from 'react';
import {useForm} from 'react-hook-form';

const FormBuilder = () => {
    const {register, handleSubmit, resetField} = useForm();

    const onSubmitHandler = data => {
        console.log(data);
        resetField('firstName');
        resetField('lastName');
        resetField('email');
        resetField('password');
        resetField('confirmPassword');
    };

    return (
        <>
            <h2>Form Builder <a href="https://react-hook-form.com/form-builder">Documentation</a></h2>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <input placeholder="First name" {...register("firstName", {required: true, maxLength: 80})} /><br />
                <input placeholder="Last name" {...register("lastName", {required: true, maxLength: 100})} /><br />
                <input placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} /><br />
                <input type="password" placeholder="Password" {...register("password", {})} /> <br />
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {})} /> <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default FormBuilder;