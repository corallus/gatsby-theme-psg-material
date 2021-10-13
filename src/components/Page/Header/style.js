import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(8, 0),
            textAlign: 'center'
        },
        header: {
            padding: theme.spacing(3, 0)
        },
        body: {

        },
        title: {

        }
    }),
);

export default useStyles