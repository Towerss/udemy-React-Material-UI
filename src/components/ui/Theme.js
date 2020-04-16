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
            main: darkBlue
        },
        secondary: {
            main: lightBlue
        }
    }
}); 

export default theme;