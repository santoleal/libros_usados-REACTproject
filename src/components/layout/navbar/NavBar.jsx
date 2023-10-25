import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./NavBar.css";

const NavBar = ( {pages, anchorElNav, handleOpenNavMenu, handleCloseNavMenu }) => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" className="icono">
              <AutoStoriesIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
            </Link>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/" className="link">
                VENTA DE LIBROS USADOS
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Link to="/" className="icono">
              <AutoStoriesIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
            </Link>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/" className="link">
                LIBROS USADOS
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link to="/carrito" className="icono">
                <CartWidget />
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container
        maxWidth="lm"
        style={{ textAlign: "center", padding: "20px 0px" }}
      >
        <>{<h1>Categorías: </h1>}</>
        <Link to="/">
          <Button color="secondary" variant="filled">
            Todos
          </Button>
        </Link>
        <Link to="/tematica/literatura">
          <Button color="secondary" variant="filled">
            Literatura
          </Button>
        </Link>
        <Link to="/tematica/programacion">
          <Button color="secondary" variant="filled">
            Programación
          </Button>
        </Link>
        <Link to="/tematica/idiomas">
          <Button color="tertiary" variant="filled">
            Idiomas
          </Button>
        </Link>
        <Link to="/tematica/infantil">
          <Button color="tertiary" variant="filled">
            Infantil
          </Button>
        </Link>
        <Link to="/tematica/autoayuda">
          <Button color="tertiary" variant="filled">
            Autoayuda
          </Button>
        </Link>
      </Container>

    </>
  );
};

export default NavBar;
