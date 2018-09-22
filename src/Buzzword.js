import "./App.css";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 100
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const Buzzword = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" />
        <Typography variant="headline" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.description}
        </Typography>

        {props.links.map(o => (
          <Typography component="p" key={o.url}>
            <a href={o.url} target="_blank">
              {o.text}
            </a>
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        {props.tags.map(o => (
          <Button size="small" key={o}>
            {o}
          </Button>
        ))}
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Buzzword);