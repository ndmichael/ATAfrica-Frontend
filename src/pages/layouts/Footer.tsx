import { Container, Box, Grid, Typography } from "@mui/material";

const Footer = () => {
    return ( 
        <Box>
            <Container>
                <Grid container>
                    <Grid xs={12} md={8}>
                        <Typography>
                            © 2024 <br />
                            ATAfrica robot investment platform
                        </Typography>
                    </Grid>

                    <Grid xs={12} md={4}>
                        <Typography>
                            Designed by Michael Ukeje
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
     );
}
 
export default Footer;