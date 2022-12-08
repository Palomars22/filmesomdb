import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing(4),
    },
    
  }));
  
const Erro = () =>{
    const classes = useStyles();
    return(
        <Container >
            <Typography variant="h2" component="h1" color="primary" align='center' className={classes.root}>
            Página não encontrada
              </Typography>
            
            </Container> 
    )
}

export default Erro