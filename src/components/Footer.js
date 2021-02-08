import React from 'react';
import { Menu } from 'semantic-ui-react';

const Footer = () => {
    return (
        <Menu fixed="bottom" color="teal" widths={1} inverted>
            <Menu.Item>
                Created by Rhodlib © 2021
            </Menu.Item>
        </Menu>
    )
}

export default Footer;