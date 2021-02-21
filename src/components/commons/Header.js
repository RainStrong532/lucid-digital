import React from 'react';
import '../../commonStyles/styles/header.css'
import logo from '../../commonStyles/images/logo.png'
import { header } from '../../constants';
export const Header = () => {
    const renderMenu = () => {
        return (
            header.map((item, index) => {
                return (
                    <li className="item" key={index}>
                        <a href={item.path}>
                            {item.name}
                        </a>
                    </li>
                )
            })
        )
    }
    return (
        <div className="header">
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="Lucid Digital" />
                </a>
            </div>
            <div className="navbar">
                <ul>
                    {renderMenu()}
                </ul>
            </div>
        </div>
    )
}