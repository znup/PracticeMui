import './App.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/material';

const useStyle = makeStyles({
  customBtn: {
    height: 50,
    color: '#f7f7f7',
    background: '#2a2b2c',
  },
});

const App = () => {
  const classes = useStyle();

  return (
    <div className="App">
      <Button variant="contained" color="secondary" disableElevation>
        Color
      </Button>
      <Button variant="outlined" color="primary" startIcon={<DeleteIcon />}>
        Borrar
      </Button>
      <Typography variant="h4" paragraph>
        texto
      </Typography>
      <Typography align="right" variant="body1" gutterBottom>
        body, body,, bodai!
      </Typography>
      <Button className={classes.customBtn}>Boton Personalizado</Button>
    </div>
  );
};

export default App;
