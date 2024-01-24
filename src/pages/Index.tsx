import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Unstable_Grid2'
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Image from "mui-image"


import AddBoxIcon from '@mui/icons-material/AddBox';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SpaIcon from '@mui/icons-material/Spa';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import ChecklistIcon from '@mui/icons-material/Checklist';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';

import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PaidIcon from '@mui/icons-material/Paid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from "@mui/material"

import robot1 from '/images/robot1.png'
import robotInvestment from '/images/robotInvestment.png'
import investment from '/images/investment.jpg'
// import animated from '/images/animated.gif'

import RiskManagement from "../components/RiskManagement"
import Footer from "./layouts/Footer"

const Index = () => {

  return (
    <Box>
        <Box>
            <Container>
                <Grid container spacing={6}>
                    <Grid xs={12} md={6} my={8} alignItems="center">
                        {/* <Box alignItems="center"> */}
                            <Typography
                                variant="h3"
                            >
                                Revolutionizing Wealth in Africa
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                color="success.main"
                                sx={{fontWeight: "bold"}}
                            >
                            ATAfrica  Your Gateway to Smart Financial Growth.
                            </Typography>
                            <Typography
                                variant="body2"
                                gutterBottom
                                my={4}
                            >
                            Empowering Every African to Invest, Thrive, and Shape a Financially Resilient Future with Cutting-Edge Robo Advisory Technology
                            </Typography>

                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                startIcon={<AddBoxIcon />}
                            >
                                CREATE PORTFOLIO

                        </Button>
                        {/* </Box> */}
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Box>
                            <Image src={robot1} />
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
            
        {/** *Row for benefits* **/}
        <Box>
            <Container>
                <Grid container spacing={7}>
                    <Grid xs={12} md={4}>
                        <Box>
                            <Image src={robotInvestment} />
                        </Box>
                    </Grid>
                    
                    <Grid container xs={12} md={8} spacing={4}>
                        <Grid xs={12 } md={6}>
                            <Box
                                p={3} 
                                boxShadow={2} 
                                borderRadius={2}
                            >
                                <MonetizationOnIcon 
                                    fontSize="large"
                                    color="success"
                                />
                                <Typography
                                    variant="body1" 
                                    my={2}
                                >
                                    Financial Inclusion
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    Individuals with limited financial literacy can participate in wealth-building, 
                                    fostering financial inclusion across the continent.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Box
                                p={3} 
                                boxShadow={2} 
                                borderRadius={2}
                            >
                                <AutoFixHighIcon
                                    fontSize="large"
                                    color="secondary"
                                />
                                <Typography
                                    variant="body1"
                                    my={2}
                                >
                                    Smart Automation for Optimal Returns
                                </Typography>
                                <Typography
                                    variant="body2"   
                                    color="textSecondary" 
                                >
                                    Investment decisions are data-driven and timely, 
                                    maximizing returns while minimizing 
                                    the impact to market fluctuations.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Box
                                p={3} 
                                boxShadow={2} 
                                borderRadius={2}
                            >
                                <SpaIcon
                                    fontSize="large"
                                    color="primary"
                                />
                                <Typography
                                    variant="body1"
                                    my={2}
                                >
                                    Cost-Effective Solutions
                                </Typography>
                                <Typography
                                    variant="body2"  
                                    color="textSecondary" 
                                >
                                    We offer a cost-effective alternative, allowing users to invest with lower fees 
                                    and often without the need for a significant initial capital.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid xs={12} md={6}>
                            <Box
                                p={3} 
                                boxShadow={2} 
                                borderRadius={2}
                            >
                                <ManageHistoryIcon 
                                    fontSize="large"
                                    color="info"
                                />
                                <Typography
                                    variant="body1"
                                    my={2}
                                >
                                    Diversification and Risk Management
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    Excel at diversifying investment portfolios across various asset classes, 
                                    reducing the risk associated on a investment.
                                </Typography>
                            </Box>    
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
            

            {/** *How to set up an account* **/}
            <Box
                my={12}
                py={7}
                sx={{
                    background: "linear-gradient(120deg, rgba(197, 255, 192, 0.4), rgb(107, 255, 117))"
                }}
            >
                <Container>
                <Grid container spacing={4}  sx={{textAlign: "center"}}>
                    <Grid container pb={6}>
                        <Grid  xs={3}></Grid>
                        <Grid  xs={12} sm={6} md={6}>
                            <Typography
                                variant="h4"
                                gutterBottom
                            >
                                Steps To Start Onboarding
                            </Typography>

                            <Typography
                                variant="body1"
                                color="textSecondary"
                            >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Non similique optio quia illum sint doloremque laudantium 
                                alias sapiente accusamus corrupti expedita!
                            </Typography>
                        </Grid>
                        <Grid  xs={3}></Grid>
                    </Grid>

                    <Grid container>
                        <Grid xs={12} sm={6} md={4}>
                            <Box
                                p={4}
                                border={2}
                                borderColor="success.main"
                                borderRadius={4}
                                boxShadow={4}
                            >
                                <Filter1Icon
                                    fontSize="large"
                                />
                                <Typography
                                    variant="h5"
                                    display="block"
                                    pt={2}
                                >
                                    Step One
                                </Typography>
                                <Typography
                                    variant="body2"
                                    display="block"
                                    p={4}
                                >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Recusandae officiis excepturi ipsam.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <Box
                                p={4}
                                border={2}
                                borderColor="success.main"
                                borderRadius={4}
                                boxShadow={4}
                            >
                                <Filter2Icon
                                    fontSize="large"
                                />

                                <Typography
                                    variant="h5"
                                    display="block"
                                    pt={2}
                                >
                                    Step Two
                                </Typography>
                                <Typography
                                    variant="body2"
                                    display="block"
                                    p={4}
                                >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Recusandae officiis excepturi ipsam.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <Box
                                p={4}
                                border={2}
                                borderColor="success.main"
                                borderRadius={4}
                                boxShadow={4}
                            >
                                <Filter3Icon
                                    fontSize="large"
                                />
                                <Typography
                                    variant="h5"
                                    display="block"
                                    pt={2}
                                >
                                    Step Three
                                </Typography>
                                <Typography
                                    variant="body2"
                                    display="block"
                                    p={4}
                                >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                    Recusandae officiis excepturi ipsam.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                </Typography>
                            </Box>
                        </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box> 

            {/** *Risk Management* **/}
            <Box>
                <Container>
                    <Grid container spacing={12}>
                        <Grid xs={12} sm={6} md={6}>
                            <RiskManagement />
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                            <Box>
                                <Typography
                                    variant="h3"
                                    color="success"
                                    gutterBottom
                                >
                                    Smart investing, Calculate your gain by risk
                                </Typography>
                                <Typography
                                    pt={3}
                                >
                                    A Risk Tolerance Calculator offers invaluable benefits by assessing an investor's 
                                    comfort with risk, guiding them toward suitable investment strategies. Firstly, 
                                    it promotes personalized financial planning, 
                                    aligning investments with individual risk appetites.
                                </Typography>
                                <Box mb={4}>
                                    <List>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ChecklistIcon
                                                    color="success"
                                                    fontSize="large"
                                                />
                                            </ListItemIcon>
                                            <ListItemText>Personalized Planning</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DoneAllOutlinedIcon
                                                    color="success"
                                                    fontSize="large"
                                                />
                                            </ListItemIcon>
                                            <ListItemText>Informed Decision-Making</ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <DiscountOutlinedIcon
                                                    color="success"
                                                    fontSize="large"
                                                />
                                            </ListItemIcon>
                                            <ListItemText>Optimized Diversification</ListItemText>
                                        </ListItem>
                                    </List>
                                </Box>
                                <Button 
                                    variant="contained"
                                    color="success"
                                    endIcon={<ArrowForwardIosIcon />}
                                >GET STARTED</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        {/** *Benefits and Services* **/}
        <Box
            sx={{
                background: "#1d1e20",
            }}
            color="white"
            my={12}
            py={6}
        >   
            <Container>
                <Grid container spacing={7}>
                    <Grid xs={12} md={6}>
                        <Typography
                            variant="h3"
                        >
                            Nigeria Higest Interest saving account.
                        </Typography>
                        <Typography
                            variant="body1"
                            my={4}
                        >
                            At ATAfrica, we understand that navigating the complexities of personal finance 
                            and investment can be challenging. That's why we've introduced a revolutionary 
                            RoboAdvisor platform designed specifically for the African market. 
                            Our mission is to empower individuals across the continent to achieve their financial goals through intelligent, 
                            automated investment strategies.
                        </Typography>
                        <Box>

                        </Box>
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Paper elevation={3}>
                            <Image src={investment}  />
                        </Paper>
                    </Grid>
                </Grid>

                <Grid container spacing={4} mt={3}>
                    <Grid xs={12} md={3}>
                        <Box
                            p={3} 
                            boxShadow={4} 
                            borderRadius={2}
                            sx={{
                                background: "#2f3237"
                            }}
                        >
                            <PaidIcon fontSize="large" sx={{color: "#66BB6A"}} />
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{fontWeight: "bold"}}
                            >
                                Tailored Investment
                            </Typography>
                            <Typography
                                color="#dee3ed"
                            >
                                Benefit from personalized investment portfolios crafted to suit 
                                your unique financial goals, 
                                risk tolerance, and time horizon.
                            </Typography>
                        </Box>        
                    </Grid>
                    <Grid xs={6} md={3}>
                        <Box
                            p={3} 
                            boxShadow={4} 
                            borderRadius={2}
                            sx={{
                                background: "#2f3237"
                            }}
                        >
                            <PaidIcon fontSize="large" sx={{color: "#66BB6A"}} />
                            <Typography
                                variant="h6"
                                sx={{fontWeight: "bold"}}
                                gutterBottom
                            >
                                African Market Expertise
                            </Typography>
                            <Typography
                                color="#dee3ed"
                            >
                                Benefit from personalized investment portfolios crafted to suit 
                                your unique financial goals, 
                                risk tolerance, and time horizon.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} md={3}>
                        <Box
                            p={3} 
                            boxShadow={4} 
                            borderRadius={2}
                            sx={{
                                background: "#2f3237"
                            }}
                        >
                            <PaidIcon fontSize="large" sx={{color: "#66BB6A"}} />
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{fontWeight: "bold"}}
                            >
                                Goal-Oriented Investing
                            </Typography>
                            <Typography
                                color="#dee3ed"
                            >
                                Benefit from personalized investment portfolios crafted to suit 
                                your unique financial goals, 
                                risk tolerance, and time horizon.
                            </Typography>
                        </Box>
                        
                    </Grid>
                    <Grid xs={6} md={3}>
                        <Box
                            p={3} 
                            boxShadow={4} 
                            borderRadius={2}
                            sx={{
                                background: "#2f3237"
                            }}
                        >

                            <PaidIcon fontSize="large" sx={{color: "#66BB6A"}} />
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{fontWeight: "bold"}}
                            >
                                Ethical Investing
                            </Typography>
                            <Typography
                                color="#dee3ed"
                            >
                                Benefit from personalized investment portfolios crafted to suit 
                                your unique financial goals, 
                                risk tolerance, and time horizon.
                            </Typography>
                        </Box>    
                    </Grid>
                </Grid>
            </Container>
        </Box>
        
        {/** Success story section */}
        <Box my={12}>
            <Container>
                <Grid container>
                    <Grid xs={12} md={8} mx="auto" sx={{textAlign: "center"}}>
                        <Typography
                            variant="h3"
                            gutterBottom
                        >
                            Ready for to upgrade your earnings?
                        </Typography>
                        <Typography
                            color="textSecondary"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a, odit repellendus id reiciendis, corporis, nobis facilis debitis animi aut laudantium accusamus tenetur.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={6} sx={{textAlign: "center"}} py={7}>
                    <Grid xs={12} md={2}></Grid>
                    <Grid xs={6} md={2}>
                        <Box>
                            <Typography variant="h3" color="success.main">
                                700K + 
                            </Typography>
                            <Typography>
                                Clients trust us
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} md={2}>
                        <Box>
                            <Typography variant="h3" color="success.main">
                                $40B + 
                            </Typography>
                            <Typography>
                                profits made
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} md={2}>
                        <Box>
                            <Typography variant="h3" color="success.main">
                                4.7 * 
                            </Typography>
                            <Typography>
                                Apple App Store
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} md={2}>
                        <Box>
                            <Typography variant="h3" color="success.main">
                                4.8 * 
                            </Typography>
                            <Typography>
                                Google Play Store
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>

        <Box
            sx={{background: "#dee2e6"}}
            py={4}
        >
            <Footer />
        </Box>
    </Box>
  )
}

export default Index