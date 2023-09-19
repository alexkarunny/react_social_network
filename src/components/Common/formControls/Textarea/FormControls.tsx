import React from 'react';
import styles from 'components/Common/formControls/Textarea/Formcontrols.module.css'

type Props = {
    input: any
    meta: any
}

const FormControl: React.FC<Props> = ({input, meta, ...restProps}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            {restProps.children}
            {hasError && < span className={styles.error}>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: Props) => {
    const {meta, input, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props: Props) => {
    const {meta, input, ...restProps} = props
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}