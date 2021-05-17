import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Receipt from "@material-ui/icons/Receipt";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/AssignmentLate";
import Code from "@material-ui/icons/LocalShipping";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default () => {
  const classes = useStyles();
  return (
    <div>
        <SnackbarContent
            message={
            'В данном разделе вы можете выбрать любую из доступных вам финансовых услуг'
            }
            close
            color="primary"
        />

        <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <Icon>money</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Кредиты для бизнеса</p>
                    <h3 className={classes.cardTitle}>
                        2 <small>активных</small>
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Подробнее
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <Icon>local_convenience_store</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Банковские гарантии</p>
                    <h3 className={classes.cardTitle}>
                        &nbsp;
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Подробнее
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader color="sucinfoess" stats icon>
                    <CardIcon color="info">
                        <Icon>account_tree</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Факторинг</p>
                    <h3 className={classes.cardTitle}>
                        &nbsp;
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Подробнее
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <Icon>airport_shuttle</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Лизинг</p>
                    <h3 className={classes.cardTitle}>
                    1 <small>заявка на рассмотрении</small>
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Подробнее
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <Icon>receipt</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Расчетно-кассовое обслуживание</p>
                    <h3 className={classes.cardTitle}>
                        &nbsp;
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Подробнее
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <Icon>verified_user</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Страхование</p>
                    <h3 className={classes.cardTitle}>
                    1 <small>активный полис</small>
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Подробнее
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    </div>
  );
}
