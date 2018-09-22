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

class Buzzword extends React.Component {

  render() {
    // console.log(this.props)
    return (

    <Card className={this.props.classes.card} onClick={()=>this.props.handleClick(this.props.tags)}>
      <CardContent>
        <Typography className={this.props.classes.title} color="textSecondary" />
        <Typography variant="headline" component="h2">
          {this.props.title}
        </Typography>
        <Typography className={this.props.classes.pos} color="textSecondary">
          {this.props.description}
        </Typography>

        {this.props.links.map(o => (
          <Typography component="p" key={o.url}>
            <a href={o.url} target="_blank">
              {o.text}
            </a>
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        {this.props.tags.map(o => (
          <Button size="small" key={o}>
            {o}
          </Button>
        ))}
        {
          <button>
            Activate Lasers
          </button>
        }
      </CardActions>
    </Card>
  );
  }
};

export default withStyles(styles)(Buzzword);
