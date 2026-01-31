import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';



export default function MaterialUi(){
    return(
        <>
            <Button variant="contained">Click Me!</Button>
            <Button variant="contained" disabled>Click Me!</Button>
            <Button variant="contained" color="error">Click Me!</Button>
            <Button variant="contained" color="success" size="large">Click Me!</Button>  
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Alert severity="success">This is a success Alert.</Alert>
        </>
    );
}