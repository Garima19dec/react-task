import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
// import { makeStyles } from "@material-ui/core/styles";
// import { Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Redirect, Link } from "react-router-dom";

const Header = (props) => {

   const { history } = props;

  //  const navigate = useNavigate();

  //  const navigateToProduct = () => {
  //    navigate("/product");
  //  };

  //  const navigateHome = () => {
  //    navigate("/");
  //  };

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>FakeShop</h2>
        <ButtonGroup
          sx={{ mx: 50, marginBottom: 2 }}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Link to={"/"}>
            <Button sx={{marginRight:3}}
            // onClick={
            //   () => <Redirect to={"/"} />
            // navigateToProduct
            // {
            // console.log('onclick1');
            // }
            // }
            >
              ProductListing
            </Button>
          </Link>
          <Link to={"/product"}>
            <Button
              // onClick={
              //   () => <Redirect to={"/product"} />
                // {
                //   // navigateHome
                //   console.log("onclick2");
                // }
              // }
            >
              ProductDetails
            </Button>
          </Link>
        </ButtonGroup>
        {/* </Box>
        </div> */}
      </div>
    </div>

    // <div className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link disabled">Disabled</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Header;
