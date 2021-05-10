import React, { Component } from 'react'

// Components
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

// API
import api from '../api';
import BadgeDetails from './BadgeDetails';

export class BadgeDetailsContainer extends Component {
    state = {
        loading: true,
        error: null,
        data: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        },
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    handleDeleteBadge = async e => {
        this.setState({loading: true, error: null});
        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.setState({loading: false});
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
    }


    handleCloseModal = e => {
        this.setState({ modalIsOpen: false });
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        const badge = this.state.data;

        return (
            <BadgeDetails 
            modalIsOpen={this.state.modalIsOpen}
            onOpenModal={this.handleOpenModal} 
            onCloseModal={this.handleCloseModal}
            onDeleteBadge={this.handleDeleteBadge} 
            badge={badge} />
        )
    }
}

export default BadgeDetailsContainer
