import { createMuiTheme } from '@material-ui/core/styles';

const darkBlue = '#000046';
const lightBlue = '#1CB5E0';

const theme = createMuiTheme({
    palette:{
        common:{
            blue: '#0277bd',
            purple: lightBlue
        },
        primary: {
            main: '#0277bd',
            light: '#58a5f0',
            dark: '#004c8c',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#ad1457',
            light: '#e35183',
            dark: '#78002e',
            contrastText: '#ffffff'
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