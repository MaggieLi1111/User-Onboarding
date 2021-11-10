import React from "react"

const Form = props => {
    const {values, submit, change, disabled, errors } = props


    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const realValue = type === "checkbox" ? checked : value ;
        change(name, realValue);
    }



    return (
        <form className="form container" onSubmit ={onSubmit} >

            <div className="input">
                <h2>Please leave your information</h2>
                <label>First Name
                    <input 
                        value={values.first_name}
                        onChange={onChange}
                        name="first_name"
                        type="text"
                        />

                </label>
                <label>Last Name
                    <input 
                    value={values.last_name}
                    onChange={onChange}
                    name="last_name"
                    type="text"
                    />
                </label>
                <label>Email
                    <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                    />
                </label>
                <label>Password
                    <input 
                    value={values.password}
                    onChange={onChange}
                    name="password"
                    type="password"
                    />
                </label>
                <label>Role
                    <select
                    onChange={onChange}
                    value={values.role}
                    name="role"                    
                    >
                        <option value="">--Select an option--</option>
                        <option value="warrior">warrior</option>
                        <option value="wizard">wizard</option>
                        <option value="elf">elf</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Terms of Service
                    <input 
                    name="termsOfService"
                    onChange={onChange}
                    type="checkbox"
                    checked={values.termsOfService}
                    />
                </label>
            </div>

        <div className="submit">
            <h3>Add a new new Data</h3>
            <button disabled={disabled}>Submit</button>
            <div className="errors">
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.role}</div>
                <div>{errors.termsOfService}</div>
            </div>
        </div>
        </form>
    )
}



export default Form