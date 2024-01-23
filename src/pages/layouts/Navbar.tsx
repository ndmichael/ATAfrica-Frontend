import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Button } from "@mui/material";



const Navbar = () => {
    return (  
        <AppBar position="static" sx={{background: "#dee2e6"}}>
            <Toolbar>
                <IconButton size="large" edge="start" color="success" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1}}
                        color="textPrimary"
                >
                    ATAfrica
                </Typography>

                <Stack direction="row" spacing={3}>
                    <Button color="success" sx={{fontWeight: "bold"}}>Features</Button>
                    <Button color="success" sx={{fontWeight: "bold"}}>Bond</Button>
                    <Button color="success" sx={{fontWeight: "bold"}}>Stock</Button>

                    <Button color="success" variant="outlined">Login</Button>
                    <Button color="success" variant="contained">Sign up</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;