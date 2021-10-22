import { styled } from '@mui/material/styles';
import MUIListItemButton from '@mui/material/ListItemButton'

const ListItemButton = styled(MUIListItemButton)(({theme}) => ({
    [theme.breakpoints.up('sm')]: {
        position: 'relative',
        '&::after': {
            position: 'absolute',
            right: 0,
            transform: 'translateX(50%)',
            content: '" \\2022"',
        },
        '&:last-child': {
            '&::after': {
                content: '""'
            }
        }
    },
}));

export default ListItemButton
