import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { signup } from '../actions/auth'


class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.submitSignup = this.submitSignup.bind(this)
    }

    submitSignup = (values) => {
        this.props.signup(values.username, values.name, values.email, values.password)
    }

    render() {
        return (
            <div className="signup-form">
                <div className="logo text-center">Sign up</div>
                <form onSubmit={this.props.handleSubmit(this.submitSignup)}>
                    <div className="form-group">
                        <Field name="username" component="input" type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <Field name="name" component="input" type="text" className="form-control" placeholder="Fulltname" />
                    </div>
                    <div className="form-group">
                        <Field name="email" component="input" type="email" className="form-control" placeholder="youremail@email.com" />
                    </div>
                    <div className="form-group">
                        <Field name="password" component="input" type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-default">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }

}

SignupForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
}

const SignupReduxForm = reduxForm({
    form: 'signup',
})(SignupForm)

export default connect(null, { signup })(SignupReduxForm)

