import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({


})

theme.overrides = {
    MuiCard: {
        root: {
            width: 250,
            margin: 20,
            flexGrow: 1,
            height: 300,
            "&:hover": {
                backgroundColor: 'rgb(7, 177, 77, 0.42)'
            }
        }
    }
}

export default theme;