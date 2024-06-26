import { makeStyles, createStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
        marginBottom: "16px",
        border: 'none',
        padding: "8px",
        boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
    },

    primary_color: {
        color: "#3AAFA9"
    },

    primary_bgcolor: {
        backgroundColor: "#3AAFA9"
    },

    secondary_color: {
        color: "#DEF2F1"
    },

    secondary_bgcolor: {
        backgroundColor: "#DEF2F1"
    },

    tags_box: {
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        marginY: 1
    },

    flex: {
        display: "flex",
        alignItems: "center"
    },

    card_actions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
    },

    thumbUpButton: {
        color: "#90ccc9"
    },

    thumbDownButton: {
        color: "#6e6c6c"
    },
}));

export default useStyles;
