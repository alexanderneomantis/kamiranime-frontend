import {styled} from '@mui/material/styles';
import Page from '../components/Page';

const APP_BAT_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const RootStyle = styled(Page)(({theme}) => ({
    minHeight: '100%',
    overflowX: 'hidden',
    width: '100%',
    paddingTop: APP_BAT_MOBILE,
    [theme.breakpoints.up('md')]: {
        paddingTop: APP_BAR_DESKTOP
    }
}))

export default function FinishCheckout() {
    return (
        <RootStyle>
            hello world
        </RootStyle> 
    )
}