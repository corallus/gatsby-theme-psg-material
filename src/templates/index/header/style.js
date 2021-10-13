import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) =>
    createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                minHeight: '100vh',
            },
    }),
);

export default useStyles
