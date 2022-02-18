import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
} from './Header.styles';

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <header>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            NAKAMA
          </NavLogo>
          <MenuIcon onClick={handleClick}>
            {click ? <FiX /> : <FiMenu />}
          </MenuIcon>
          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/">
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/products">
                Products
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/">
                <FiSearch />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/">
                <FiUser />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/">
                <FiShoppingCart />
              </MenuLink>
            </MenuItem>
          </Menu>
        </NavbarContainer>
      </Nav>
    </header>
  );
};

export default Header;
