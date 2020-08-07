import styled from 'styled-components';

export const NavBar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0px 2px 20px 1px rgba(0,0,0,0.2);

  a.navbar-item{
    color: #000;
    font-weight: 700;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 21px;

    &:hover{
      color: #CAA13F !important;
    }
  }

  .navbar-start.has-text-centered{
    margin-left: auto;
    margin-right: 0;
  }
`;
