import { render, screen, fireEvent } from '@testing-library/react'

import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


test('renders home page', () => {
    render(<Home />);
    const home = screen.getByText(/Food/);
    expect(home).toBeInTheDocument();
});

test('renders register ', () => {
    render(<Register />);
    const router = screen.getAllByText(/Register/);
    expect(router).toBeInTheDocument();
});

test('renders login page', () => {
    render(<Login />);
    const login = screen.getAllByText(/Login/);
    expect(login).toBeInTheDocument();
});
