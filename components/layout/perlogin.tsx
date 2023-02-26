import * as React from "react";
import { Box, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
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
import DomainIcon from "@mui/icons-material/Domain";


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: any;
}

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About Us",
    link: "#",
  },
  {
    id: 3,
    title: "Floor Plan",
    link: "#",
  },
  {
    id: 4,
    title: "Amenities",
    link: "#",
  },
  {
    id: 5,
    title: "Gallery",
    link: "#",
  },
  {
    id: 6,
    title: "Location",
    link: "#",
  },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <DomainIcon sx={{ color: "#000" }} />
        <Typography color="#000" pl={3} variant="h6" sx={{ my: 2 }}>
          Brand Logo
        </Typography>
      </Stack>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar elevation={2} sx={{ background: "#FFF" }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>

          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Stack direction="row" alignItems="center">
              <DomainIcon sx={{ color: "#000" }} />
              <Typography pl={3} variant="h6" color="#000">
                Brand Logo
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: "#000" }}>
                {item.title}
              </Button>
            ))}
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
      <Box component="main">{props.children}</Box>
    </Box>
  );
}
