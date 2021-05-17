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

import imgLogo from "assets/img/prod-4.png";


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
    margin: "-70px 0 20px",
    border: "3px solid red",
    borderRadius: "15px",
    width: "100%",
    backgroundImage: "url("+imgLogo+")",
    backgroundPosition: "center",
    backgroundColor: "white",
    color: "red",
    padding: "0px 0px 20px 20px",
    boxSizing: "border-box",
    fontWeight: "bold",
    textShadow: "2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff"
  }
}));

export default () => {
  const classes = useStyles();
  const classesLanding = useStylesLanding();
  return (
    <Container component="main">
      <div className={classesLanding.logo}>
        <h2>Маркетплейс &#171;Оптовые продажи&#187;</h2>
        <h3>Агрегатор онлайн сервисов и услуг для бизнеса</h3>
      </div>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>shopping_cart</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Торговая площадка</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Сервис оптовых продаж продуктов, лекарств, промышленных товаров.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>attach_money</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Финансовая платформа</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Агрегатор финансовых услуг<br />
                &nbsp;
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>gavel</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Комиссионная площадка</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Сервис продаж спец. оборудования.<br />
                Витрина бизнес-услуг.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
              <Icon>local_shipping</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Логистическая площадка</p>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Сервис транспортных трейдеров. <br />
                Витрина логистических услуг.
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
        <Card>
        <CardHeader color="warning" icon>
              <CardIcon color="warning">
                Зарегистрироваться
              </CardIcon>
            </CardHeader>
          <CardBody>
            <ul>
                <li>
                <a href="/login">Магазин, супермаркет, аптека</a>
                </li>
                <li>
                <a href="/admin">Гостиница, ресторан, бар, кафе</a>
                </li>
                <li>
                <a href="/admin">Оптовый покупатель</a>
                </li>
                <li>
                <a href="/admin">Поставщик (производитель) товара</a>
                </li>
                <li>
                <a href="/admin">Перевозчик, складской оператор</a>
                </li>
                <li>
                <a href="/admin">Бизнес-партнер</a>
                </li>
            </ul>
          </CardBody>
        </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <h4 className={classesLanding.coolTitle}>Выбери свою категорию и начни зарабатывать с Маркетплейсом!</h4>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
        <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                Вход в маркетплейс
              </CardIcon>
            </CardHeader>
            <CardFooter stats>
            <ul>
                <li>
                <a href="/login">Логин / пароль</a>
                </li>
                <li>
                <a href="/admin">ЭЦП</a>
                </li>
                <li>
                <a href="/admin">Госуслуги (ЕСИА)</a>
                </li>
                <li>
                <a href="/admin">ВТБ бизнес онлайн</a>
                </li>
              </ul>
            </CardFooter>
            </Card>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
