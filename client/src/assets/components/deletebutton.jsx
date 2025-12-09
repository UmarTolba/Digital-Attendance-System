import React, { useState } from 'react';
import axios from 'axios';

const DeleteButton = ({ userId, onDeleted, children }) => {
	const [loading, setLoading] = useState(false);

	const handleDelete = async () => {
		const ok = window.confirm('Are you sure you want to delete this user? This action cannot be undone.');
		if (!ok) return;
		if (!userId) {
			console.error('DeleteButton: missing userId');
			return;
		}

		setLoading(true);
		try {
			await axios.delete(`http://localhost:3000/api/user/${userId}`);
			if (typeof onDeleted === 'function') onDeleted(userId);
		} catch (err) {
			console.error('Failed to delete user', err);
			const msg = err?.response?.data?.message || 'Failed to delete user';
			window.alert(msg);
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			onClick={handleDelete}
			disabled={loading}
			className="bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white px-3 py-1 rounded:3px"
		>
			{loading ? 'Deleting...' : (children || 'Delete')}
		</button>
	);
};

export default DeleteButton;
