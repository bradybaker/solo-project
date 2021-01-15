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
        }
    }
}

export default theme;