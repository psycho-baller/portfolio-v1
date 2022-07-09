import { CircularProgress } from "@chakra-ui/react";

import Logo from "../components/logo";
import projects from "../public/data/projects";

export default function Navbar() {
  const numOfPages = projects.length + 3;

  return (
    <div className="navbar">
      <Logo />
      <h1>NAVBAR</h1>
      <CircularProgress
        min={0}
        max={10}
        value={1}
        color="lime"
        thickness="12px"
      />
    </div>
    // <MDBNavbar expand='lg' light bgColor='white' >
    //   <MDBContainer fluid>
    //     <MDBNavbarToggler
    //       aria-controls='navbarExample01'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //     >
    //       <MDBIcon fas icon='bars' />
    //     </MDBNavbarToggler>
    //     <div className='collapse navbar-collapse' id='navbarExample01'>
    //       <MDBNavbarNav right className='mb-2 mb-lg-0'>
    //         <MDBNavbarItem active>
    //           <MDBNavbarLink aria-current='page' href='#'>
    //             Home
    //           </MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href='#'>Features</MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem>
    //           <MDBNavbarLink href='#'>About</MDBNavbarLink>
    //         </MDBNavbarItem>
    //       </MDBNavbarNav>
    //     </div>
    //   </MDBContainer>
    // </MDBNavbar>
  );
}
