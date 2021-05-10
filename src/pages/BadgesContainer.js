import React, { Component } from 'react'

// Componentes
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badges from './Badges';

// API
import api from '../api';

export class BadgesContainer extends Component {
    constructor(props) {
        super(props);
        console.log('1. constructor()');
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }

    componentDidMount() {
        console.log('3. componentDidMount()');
        // this.timeoutId = setTimeout(() => {
        //     this.setState({
        //         data: [con datos]
        //     })
        // },3000)
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 5000);
    }

    fetchData = async () => {
        this.setState({loading: true, error: null});
        try {
            const data = await api.badges.list();
            this.setState({loading: false, data: data});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate()');
        console.log({
            prevProps: prevProps,
            prevState: prevState
        });

        console.log({
            props: this.props,
            state: this.state
        })
    }

    componentWillUnmount() {
        console.log('6. componentWillUnmount()');
        clearInterval(this.intervalId);
    }

    render() {
        if(this.state.loading === true && !this.state.data) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error}/>
        }
        return (
            <Badges data={this.state.data} loading={this.state.loading}/>
        )
    }
}

export default BadgesContainer
