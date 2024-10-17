import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../UserList';
import { fetchUsers } from '../../services/api';

jest.mock('../../services/api');

const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

describe('UserList', () => {
  it('renders loading state initially', () => {
    render(<UserList />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders user list after loading', async () => {
    (fetchUsers as jest.Mock).mockResolvedValue(mockUsers);

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/User List/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/jane@example.com/i)).toBeInTheDocument();
  });

  it('handles error when fetching users fails', async () => {
    (fetchUsers as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/User List/i)).toBeInTheDocument();
    });

    expect(screen.queryByText(/John Doe/i)).not.toBeInTheDocument();
  });
});