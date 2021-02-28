import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import "../../commonStyles/styles/layout.css"

export const Layout = ({ children }) => {

    return (
        <div className="layout">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}