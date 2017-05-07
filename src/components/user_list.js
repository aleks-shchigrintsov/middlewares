import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions'

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  _renderUser(user) {
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a href={user.website} className="btn btn-primary">Website</a>
      </div>
    );
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this._renderUser)}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({users});

export default connect(mapStateToProps, actions)(UserList);
