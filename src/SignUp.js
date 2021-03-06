import React from 'react';
import {Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from "firebase";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.signUpRequest = this.signUpRequest.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    saveUserName() {
        const currentUser = firebase.auth().currentUser;

        if (currentUser) {
            currentUser.updateProfile({
                displayName: this.state.name,
            });
            this.setState({success: true})
        }
    }

    signUpRequest(e) {
        e.preventDefault();

        firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.saveUserName();
            }, (error) => {
                this.setState({error: error.message})
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        if (this.state.success) {
            return (<Redirect to='/login'/>)
        }

        return (
            <Container component="main" maxWidth="xs">
                <p>{this.state.error}</p>
                <CssBaseline/>
                <div>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <br/>
                    <form noValidate onSubmit={this.signUpRequest}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="text"
                                    label="Your name"
                                    name="name"
                                    onChange={this.handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}