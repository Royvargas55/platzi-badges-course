import React from 'react';

// Components
import PageLoading from '../components/PageLoading';

// API
import api from '../api';
import BadgeEdit from './BadgeEdit';

class BadgeEditContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({loading:true, error: null});
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({loading:false, form: data});
        } catch (error) {
            this.setState({loading:false, error: error});
        }
    }

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
           await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
           <BadgeEdit form={this.state.form} 
           handleChange={this.handleChange}
           handleSubmit={this.handleSubmit}
           error={this.setState.error}/> 
        )
    }
}

export default BadgeEditContainer;