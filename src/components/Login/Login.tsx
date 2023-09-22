import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from 'components/Common/formControls/Textarea/FormControls';
import {required} from 'utils/validators/validators';
import {login} from 'redux/auth-reducer';
import {connect} from 'react-redux';
import {RootStateType} from 'redux/redux-store';
import {Redirect} from 'react-router-dom';

type Props = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login: React.FC<Props> = ({login, isAuth}) => {
    const onSubmitHandler = (formData: FormDataType) => {
        console.log(formData)
        const {email, rememberMe, password} = formData
        login(email, password, rememberMe)
    }

    if(isAuth){
        return <Redirect to={'/profile'}/>
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
                <Field placeholder={'email'} component={Input} name={'email'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input} name={'password'} validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/> remember me
            </div>
            {
                props.error && <div style={{'border': '1px solid red', 'width': '300px'}}>{props.error}</div>
            }
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
    email: string
    password: string
    rememberMe: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
}


const mapStateToProps = (state: RootStateType):MapStateToPropsType  => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect( mapStateToProps, {login})(Login)