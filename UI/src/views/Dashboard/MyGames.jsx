import React from "react";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";
import { QueryAPI } from "data/API.js"

class MyGames extends React.Component {
    state = {
        value: 0
    };

    componentWillMount() {
        QueryAPI('*[_type == "game"]').then(games => this.setState({value: games.length}))
    }

    render() {
        const { classes } = this.props;
        return (
            <GridItem xs={12} sm={6} md={3}>
                <Card>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                            <Icon>content_copy</Icon>
                        </CardIcon>
                        <p className={classes.cardCategory}>My Games</p>
                        <h3 className={classes.cardTitle}>{this.state.value}</h3>
                    </CardHeader>
                    <CardFooter stats>
                        <div className={classes.stats}>
                            <a href="#pablo" onClick={e => e.preventDefault()}>View Games</a>
                        </div>
                    </CardFooter>
                </Card>
            </GridItem>
        );
    }
}

export default withStyles(dashboardStyle)(MyGames);
