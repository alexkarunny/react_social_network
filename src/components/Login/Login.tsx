import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from 'components/Common/formControls/Textarea/FormControls';
import {required} from 'utils/validators/validators';


export const Login = () => {
    const onSubmitHandler = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} component={Input} name={'login'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input} name={'password'} validate={[required]}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'contact'
})(LoginForm)

//types
type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}