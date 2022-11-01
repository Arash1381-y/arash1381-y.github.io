import React from 'react';
import {Container, Divider, Grid, Typography} from "@mui/material";

import img from '../assests/images/img.png';

//create a component with title and image on the right side
export default function Introduction() {
    return (
        <Container maxWidth={'md'} sx={{marginTop: '2.5rem'}}>
            <Grid container spacing={7}>
                <Grid display={'grid'} sx={{placeContent: 'center'}} alignItems={'center'} alignContent={'center'} item
                      xs={12} sm={7}>
                    <Typography fontWeight={'bold'} align={'center'} variant={'h4'} sx={{marginBottom: '1rem'}}>
                        Hi, this is me, Im a happy donkey
                    </Typography>
                    <Typography   align={'center'} variant={'caption'} color={'textSecondary'}>
                        if you want to know about me read this
                    </Typography>
                </Grid>
                <Grid display={'flex'} sx={{flexFlow: 'column', alignItems: 'center'}} item xs={12} sm={5}>
                    <img src={img} alt={'sadme'} style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
                </Grid>
            </Grid>

            <Typography variant={'body2'} sx={{marginTop: '1rem'}}>
                The donkey is a member of the horse family. The words donkey and ass are used to identify the same
                animal. However, the term donkey is used for domesticated, or tamed, animals. The term ass is more often
                used when the animal is wild. Donkeys are descendants of the African wild ass. They were first
                domesticated by humans in Africa. They are now used around the world as working animals.
            </Typography>
            <Typography variant={'body2'} sx={{marginTop: '1rem'}}>
                The average donkey stands 40 inches (102 centimeters) at the shoulder, but different breeds vary greatly
                in size and shape. Donkeys range from white to gray or black in color. They usually have a dark stripe
                from the mane to the tail and a crosswise stripe on the shoulders. The mane is short and upright, and
                the tail has long hair only at the end. The ears are very long and are dark at the base and tip. A
                donkey can carry heavy loads over rough land. The donkey can handle the uneven ground of the mountains
                better than a horse can
            </Typography>.
            <Typography variant={'body2'} sx={{marginTop: '1rem'}}>
                On average female donkeys give birth 12 months after mating. Donkeys sometimes breed with horses to
                produce animals called mules. Donkeys can live up to 50 years.
            </Typography>

            <Divider sx={{marginTop:'0.5rem', marginBottom:'0.5rem'}}/>
        </Container>
    );
}