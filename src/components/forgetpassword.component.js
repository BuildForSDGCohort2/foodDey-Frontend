import React, { Component } from "react";

export default class ForgetPassword extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Send Email</button>
            </form>
        );
    }
}