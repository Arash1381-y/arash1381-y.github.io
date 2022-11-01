import {Divider, styled, Typography} from "@mui/material";
import color from "../constants/pallate";
import React from "react";

const StyledDivider = styled(Divider)({
    marginTop: '0.5rem',
    marginBottom: '1.0rem',
    //set a color for divider
    backgroundColor: color.secondary,
    //set width for divider
    borderBottomWidth: '2px',
});

const Paragraph = styled(Typography)({
    fontFamily: 'Rubik',
    fontSize: '1.2rem',
    marginTop: '0.5rem',
    marginBottom: '0.8rem',
});

const Highlight = styled(Typography)({
    color: color.secondary,
    fontWeight: 'bold',
    display: 'inline',
    fontStyle: 'italic',
    fontSize: '1.2rem',
});

const Title = styled(Typography)({
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        fontStyle: 'italic',
        borderBottom: `1px solid ${color.secondary}`,
        display: 'inline-block',
        borderWidth: '2px',
        bottomPadding: '0.5rem',
    }
)



const SubTitle = styled(Typography)(({theme}) => (
    {
        fontFamily: 'Rubik',
        fontWeight: 'bold',
        borderLeft: `1px solid ${color.secondary}`,
        leftMargin: '0.5rem',
        paddingLeft: '0.5rem',
        borderWidth: '2px',
        //for window bigger than medium size
        [theme.breakpoints.down('md')]: {
            border : 'none',
        }
    }));


export {StyledDivider, Paragraph, Highlight, Title, SubTitle};