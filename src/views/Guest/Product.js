import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
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
import CustomInput from "components/CustomInput/CustomInput.js";

import imgLogo from "assets/img/p-moloko.jpeg";


import Avatar from '@material-ui/core/Avatar';
import Button from "components/CustomButtons/Button.js";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);
const useStylesLanding = makeStyles((theme) => ({
  coolTitle: {
    backgroundColor: "#4FA952",
    borderRadius: "3px",
    margin: "30px 10px",
    padding: "30px 10px",
    color: "white",
    textAlign: "center"
  },
  logo: {
      width: "250px",
      height: "250px",
      backgroundImage: "url("+imgLogo+")",
      backgroundPosition: "center",
      backgroundSize: "contain",
      margin: "0 auto"
  },
  count: {
      width: "30px",
      borderRadius: "5px",
      lineHeight: "35px",
      margin: "5px"
  }
}));

export default () => {
  const classes = useStyles();
  const classesLanding = useStylesLanding();
  return (
    <Container component="main">
        <Card>
            <CardHeader color="primary" stats icon>
              <CardIcon color="primary">
                <Icon>shopping_cart</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Торговая площадка</p>
            </CardHeader>
            <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <div className={classesLanding.logo}></div>
                        </CardHeader>
                        <CardFooter stats>
                        <h4>
                            Молоко "Простоквашино" 20%
                        </h4>
                        </CardFooter>
                    </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                    <Card>
                        <CardHeader color="success" stats icon>
                        <CardIcon color="success">
                        <h4>₽55.00</h4>
                        </CardIcon>
                        
                        </CardHeader>
                        <CardBody>
                            <p>Описание товара:</p>
                            <p>Молоко Простоквашино, 0.93л, жирность 20%</p>
                            <p>В наличии:</p>
                            <p>3000шт. (Склад: Краснодар)</p>
                        </CardBody>
                        <CardFooter stats>
 
                            <GridContainer>
                                <GridItem xs={12} sm={8} md={8}>
                                    <Button color="primary">
                                        Добавить в корзину
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={4} md={4}>
                                    <input placeholder="1 шт." className={classesLanding.count} />
                                </GridItem>
                            </GridContainer>


                        

                        </CardFooter>
                    </Card>
                    </GridItem>
                </GridContainer>
            </CardBody>
            <CardFooter stats>
              <div className={classes.stats}>
                Сервис оптовых продаж продуктов, лекарств, промышленных товаров.
              </div>
            </CardFooter>
          </Card>

      
    </Container>
  );
}
