import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(6, 0)
        },
        container: {
            '& > *': {
            },
        },
        header: {
            textAlign: 'center',
        },
        content: {
            margin: theme.spacing(4, 0)
        },
        footer: {
        },
        icon: {

        },
        text: {

        }
    })
);

export default useStyles
