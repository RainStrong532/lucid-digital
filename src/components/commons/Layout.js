import React from 'react';
import { Header } from './Header';

export const Layout = ({ children }) => {

    return (
        <div>
            <Header />
            <div className="content">
                {children}
            </div>
        </div>
    )
}