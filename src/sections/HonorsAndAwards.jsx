import React from 'react';
import {
    Container,
    Divider,
    Grid, List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';


//create a container with two grid one for title another for content
const HonorsAndAwards = () => {
    return (
        <Container maxWidth={'md'}>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={4}>
                    <Typography fontWeight={'bolder'}
                                sx={{borderLeft: '1px solid rgba(53,86,129, 0.3);', marginTop: '10%'}}
                                paddingLeft={'1rem'} variant={'h6'}>
                        Honors and Awards
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={8}>

                    <Typography variant={'body1'} fontWeight={'bold'}>
                        Donk Self Defence
                    </Typography>

                    <Typography variant={'body2'}>
                        The Art of Donk Self Defence is a martial art that focuses on the use of the
                        donkey's natural abilities to defend itself against attacks by humans.
                    </Typography>

                    <Typography fontWeight={'bold'} fontvariant={'caption'} sx={{marginTop:'1rem'}}>
                        My Achievements:
                    </Typography>
                    <Typography variant={'body'}>
                        <ul>
                            <li>Donk Self Defence Champion 2021</li>
                            <li>Donk Self Defence Champion 2020</li>
                            <li>Donk Self Defence Champion 2019</li>
                            <li>Donk Self Defence Champion 2018</li>
                        </ul>
                    </Typography>
                </Grid>
            </Grid>
            <Divider sx={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
        </Container>
);
}

export default HonorsAndAwards;