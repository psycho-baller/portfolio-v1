import { CircularProgress, Text, IconButton, Button } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

import Logo from "../components/logo";
import projects from "../public/data/projects";

interface NavBarProps {
  currentPage: number;
  book: any;
}

export default function Navbar(props: NavBarProps) {
  const numOfPages = projects.length + 3;

  return (
    <div className="navbar">
      <Logo />
      <div>
        <Button onClick={() => props.book.current.pageFlip().flipPrev()}>
          Previous Page
        </Button>
        <CircularProgress
          className="mx-4"
          min={0}
          max={numOfPages}
          value={props.currentPage}
          color="lime"
          thickness="14px"
        />
        <Button onClick={() => props.book.current.pageFlip().flipNext()}>
          Next Page
        </Button>
      </div>

      <IconButton
        icon={<InfoIcon />}
        aria-label="Info"
        size="lg"
        fontSize={25}
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
