import React, { Component } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { getUsers } from '../store/actions'

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(getUsers())
    }

    render() {
        return (
            <div>
                <Link href="/user">
                    <a>Go to User Page</a>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Home)