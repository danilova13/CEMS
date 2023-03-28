import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const drawerWidth = 240;
const navItems = ["Admin", "Manager", "Clubs"];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { auth, setAuth } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onLogout = () => {
    setAuth({});
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ justifyContent: "flex-start" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecorationLine: "none",
            fontWeight: "bold",
          }}
        >
          CEMS
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              {/* <ListItemText primary={item} /> */}
              <Link to={`/${item}`}>{item}</Link>
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            {auth.id ? (
              <Button onClick={onLogout}>Log Out</Button>
            ) : (
              <Link to={`/login`}>Login</Link>
            )}
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#FFAC1C" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textAlign: "left",
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecorationLine: "none",
                fontWeight: "bold",
              }}
            >
              CEMS
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "white" }}>
              <Link
                to={`/admin`}
                style={{
                  color: "white",
                  textDecorationLine: "none",
                  fontWeight: "bold",
                }}
              >
                Admin
              </Link>
            </Button>
            <Button sx={{ color: "white" }}>
              <Link
                to={`/manager`}
                style={{
                  color: "white",
                  textDecorationLine: "none",
                  fontWeight: "bold",
                }}
              >
                Manager
              </Link>
            </Button>
            <Button sx={{ color: "white" }}>
              <Link
                to={`/`}
                style={{
                  color: "white",
                  textDecorationLine: "none",
                  fontWeight: "bold",
                }}
              >
                Clubs
              </Link>
            </Button>
            {auth.id ? (
              <Button onClick={onLogout}>
                <Link
                  style={{
                    color: "white",
                    textDecorationLine: "none",
                    fontWeight: "bold",
                  }}
                >
                  LOGOUT
                </Link>
              </Button>
            ) : (
              <Button sx={{ color: "white" }}>
                <Link
                  to={`/login`}
                  style={{
                    color: "white",
                    textDecorationLine: "none",
                    fontWeight: "bold",
                  }}
                >
                  LOGIN
                </Link>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// // import IconButton from '@mui/material/IconButton';
// // import MenuIcon from '@mui/icons-material/Menu';

// export default function Appbar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" style={{background:'#FFAC1C'}}>
//         <Toolbar>
//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//           <Typography variant="h6" component="div" sx={{justifyContent: 'flex-start', fontWeight: 'bold'}}>
//             CEMS
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
