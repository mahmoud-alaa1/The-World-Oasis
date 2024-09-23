import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features//authentication/UserAvatar";
import { HiMenu } from "react-icons/hi";
import Row from "../ui/Row";
import OpenSideMenu from "./OpenSideMenu";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border: 1px solid var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  @media ${"(max-width: 420px)"} {
    flex-direction: column;
  }
`;

function Header({ sidebarRef }) {
  function openSideBar() {
    sidebarRef.current.style.transform = "translateX(0)";
  }

  return (
    <StyledHeader>
      <OpenSideMenu onClick={openSideBar}>
        <HiMenu />
      </OpenSideMenu>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
