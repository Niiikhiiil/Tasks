

import { useState, useMemo } from "react";

function Task_3() {
    const initialValues = { firstname: "", lastname: "", email: "", zipcode: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
            errors.firstname = "Firstname is required !";
        }
        if (!values.lastname) {
            errors.lastname = "Lastname is required !";
        }
        if (!values.email) {
            errors.email = "Email is required !";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format !";
        }
        if (!values.zipcode) {
            errors.zipcode = "Zipcode is required !";
        } else if (values.zipcode.length > 6) {
            errors.zipcode = "Zipcode must be upto 6 digit !";
        } else if (isNaN(values.zipcode)) {
            errors.zipcode = "please enter numbers,not characters";
        }
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        successf();
    };

    const successf = useMemo(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            alert("successfully submitted...")

        }
        return setFormValues({ firstname: "", lastname: "", email: "", zipcode: "" })
    }, [formErrors,isSubmit])



    const styles = { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexDirection: "column" }

    return (
        <div style={styles}>
            <h4>Form Validation</h4>
            <form onSubmit={handleSubmit}>
                <label>Firstname</label>
                <input
                    type="text"
                    name="firstname"
                    value={formValues.firstname}
                    onChange={handleChange}
                />

                <p >{formErrors.firstname}</p>

                <label>Lastname</label>
                <input
                    type="text"
                    name="lastname"
                    value={formValues.lastname}
                    onChange={handleChange}
                />

                <p >{formErrors.lastname}</p>

                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />

                <p >{formErrors.email}</p>

                <label>zipcode</label>
                <input
                    type="number"
                    name="zipcode"
                    value={formValues.zipcode}
                    onChange={handleChange}
                />

                <p >{formErrors.zipcode}</p>
                <button type="submit" style={{ color: "white", backgroundColor: "blue", border: "none", borderRadius: "25px", padding: "15px 20px" }}>Submit</button>

            </form>
        </div>
    );
}

export default Task_3;