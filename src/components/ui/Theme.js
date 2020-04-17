import { createMuiTheme } from '@material-ui/core/styles';

const darkBlue = '#000046';
const lightBlue = '#1CB5E0';

const theme = createMuiTheme({
    palette:{
        common:{
            blue: darkBlue,
            purple: lightBlue
        },
        primary: {
            main: darkBlue,
            contrastText: 'white'
        },
        secondary: {
            main: lightBlue
        }
    },
    typography:{
        tab:{
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem'
        },
        estimate:{
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        }
    }
}); 



export default theme;