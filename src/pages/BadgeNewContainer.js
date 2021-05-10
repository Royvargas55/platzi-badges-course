import React from 'react';

// Components
import PageLoading from '../components/PageLoading';
import BadgeNew from './BadgeNew';

// API
import api from '../api';

class BadgeNewContainer extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;

        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null })
        try {
           await api.badges.create(this.state.form)
           this.setState({ loading: false });
           this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if(this.state.loading) {
           return <PageLoading />
        }
        return (
            <BadgeNew 
            form={this.state.form}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
            />
        )
    }
}

export default BadgeNewContainer;