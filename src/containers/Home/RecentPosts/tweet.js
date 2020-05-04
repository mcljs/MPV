import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 270,
  },
});

export default function Tweet() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
        <CardMedia
          className={classes.media}
          image="https://pbs.twimg.com/media/EXHrkZcX0AI3YsT?format=jpg&name=small"
          title="Tweets"
        />

        <CardContent>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="h2">
            Jornada de Flexibilizacion
          </Typography>
          <Typography gutterBottom variant="body1" color="textSecondary" component="p">
          3 may. 2020
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Durante la jornada de flexibilización 
@MPV_DistCapital junto a al equipo político del  @PSUV se hizo entrega de pequeños obsequios a las y los niños presente en la actividad
          </Typography>
          <Typography variant="body2" color="textSecondary" component="a">
          MPV Distrito Capital (@MPV_DistCapital)
          </Typography>
          </CardActionArea>
        </CardContent>


      <CardActions>
        <Button variant="outlined" color="primary" href="https://twitter.com/MPV_DistCapital/status/1257044783366918146" size="small" color="primary">
          Compartir
        </Button>
        <Button variant="contained" color="primary" href="https://twitter.com/mimouvargas?ref_src=twsrc%5Etfw" size="small" color="primary">
          Mimou Vargas
        </Button>
        <Button variant="contained" color="primary" href="https://twitter.com/mimouvargas?ref_src=twsrc%5Etfw" size="small" color="primary">
          Wendy Sabino
        </Button>
      </CardActions>
    </Card>
  );
}