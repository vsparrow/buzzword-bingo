import React from "react";
import Buzzword from "./Buzzword";
import "./App.css";
import { data } from "./data";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
console.log("**********************");
console.log(this.props);
console.log("**********************");
const styles = theme => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

function shuffle(array) {
  // https://stackoverflow.com/a/2450976/2954199
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Bingocard extends React.Component {
  state = {
    selected: []
  }

  handleClick = (tags) => {
    let arr = [...tags]
    this.setState({selected: arr}, ()=>console.log(this.state.selected))
  }

// console.log(this.props)
  render() {
    const buzzwords = shuffle(data);
    return (
      <div>
        <Typography variant="subheading" gutterBottom>
          Choose from our awesome "Buzzwords" (aka Neo4j integrations)
        </Typography>
        <Grid container spacing={24}>
          {buzzwords.map(o => {
            return (
              <Grid item xs={6} md={3}>
                <Buzzword
                  handleClick={this.handleClick}
                  {...o}
                />
              </Grid>
            )}
          )}
        </Grid>
      </div>
    );
  }

};

export default withStyles(styles)(Bingocard);
