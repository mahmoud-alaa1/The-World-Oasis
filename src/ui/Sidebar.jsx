import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { device, size } from "../utils/constants";
import CloseSideBar from "./CloseSideBar";
import { useEffect } from "react";
import SidebarHeaderAndAvatar from "./SidebarHeaderAndAvatar";
const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 4rem;
  border-right: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: 0.3s ease-in-out;
  @media ${device.laptop} {
    position: absolute;
    transform: translateX(-100%);
  }
  height: 100%;
  overflow: auto;
  z-index: 5000;
`;

function Sidebar({ sidebarRef }) {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > Number(size.laptop)) {
        sidebarRef.current.style.transform = "translateX(0)";
      }
    }
    window.addEventListener("resize", handleResize);
  }, [sidebarRef]);

  return (
    <StyledSidebar ref={sidebarRef}>
      <CloseSideBar sidebarRef={sidebarRef} />
      <SidebarHeaderAndAvatar />
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
