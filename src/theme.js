import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2c414b'
        },
        secondary: {
            main: '#f09b80',
            contrastText: 'black'
        }
    }

})

theme.overrides = {
    MuiButton: {
        containedPrimary: {
            fontWeight: 700,
        }
    }
}

export default theme;