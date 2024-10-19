import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import classes from './header.module.css'; // Import CSS module for styling

export default function Header() {
    const user = {
        name: 'John', // Simulated user data
    };

    const cart = {
        totalCount: 10, // Simulated cart data
    };

    const logout = () => {}

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    INOUTFOODS 
                </Link>
                <nav>
                    <ul>
                        {
                            user ? ( // Conditional rendering based on user existence
                                <li className={classes.menu_container}>
                                    <Link to="/profile">{user.name}</Link>
                                    <div className={classes.menu}>
                                        <Link to="/profile">Profile</Link>
                                        <Link to="/orders">Orders</Link>
                                        <a onClick={logout} role="button">Logout</a> {/* Added role for accessibility */}
                                    </div>
                                </li>
                            ) : (
                                <Link to="/login">Login</Link>
                            )
                        }

                        <li>
                            <Link to="/cart">
                            Cart
                            {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                            </Link>
                        </li>
                    </ul> 
                </nav>
            </div>
        </header>
    );
}
