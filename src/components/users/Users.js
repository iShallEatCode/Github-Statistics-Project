import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading }) => {
	return loading ? (
		<Spinner />
	) : (
		<div className='user-grid'>
			{users.map((user) => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	);
};

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Users;
