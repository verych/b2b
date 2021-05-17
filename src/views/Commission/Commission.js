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

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);


var catalog = {
    services: [
        {
            category: 'Ремонт',
            items: [
                'Кассовые аппараты',
                'Холодильное оборудование',
                'Электрика',
                'Фасады',
                'Складное оборудование'
            ]
        },
        {
            category: 'Автомобили',
            items: [
                'Проведение ТО',
                'Мойка',
                'Мойка грузовых авто',
                'Шиномонтаж',
                'Система ПЛАТОН'
            ]
        },
        {
            category: 'Установка',
            items: [
                'Холодильное оборудование',
                'Кассовые аппараты',
                'Системы охраны'
            ]
        }
    ],
    goods: [
        {
            category: 'Холодильное оборудование',
            items: [
                'Столы морозильные',
                'Холодильные камеры',
                'Льдогенераторы',
                'Шкафы холодильные',
                'Шкафы витрины'
            ]
        },
        {
            category: 'Торговое оборудование',
            items: [
                'Тележки',
                'Стеллажи',
                'Кассовые боксы',
                'Маркировка',
                'Ограждения',
                'Прилавкм',
                'Овощные развалы'
            ]
        },
        {
            category: 'Грузовые автомобили',
            items: [
                'Газель',
                'Man',
                'Iveco',
                'Richeza',
                'Volvo',
                'Зил'
            ]
        }
    ]
};

export default () => {
  const classes = useStyles();
  return (
    <div>
        <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
                <Card>
                    <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <Icon>add_box</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Добавление товара или услуги</p>
                    <h4 className={classes.cardTitle}>
                         <a href="#">5 активных</a>
                    </h4>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Оформить заказ
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
    </GridContainer>
<p>Список товаров и услуг третьих лиц:</p>
    <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
                <Card>
                    <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <Icon>emoji_people</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}></p>
                    <h3 className={classes.cardTitle}>
                        Услуги
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                        <GridContainer>
                        {
                            catalog.services.map(
                                (item, i) => {
                                    return <GridItem xs={12} sm={6} md={4}><h6>{item.category}</h6> {item.items.map(
                                        (sub, j) => {
                                            return <p><a href="#">{sub}</a></p>;
                                        })}
                                        </GridItem>
                                }
                            )
                        }
                        </GridContainer>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
                <Card>
                    <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <Icon>add_shopping_cart</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}></p>
                    <h3 className={classes.cardTitle}>
                        Продажа
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <GridContainer>
                        {
                            catalog.goods.map(
                                (item, i) => {
                                    return <GridItem xs={12} sm={6} md={4}><h6>{item.category}</h6> {item.items.map(
                                        (sub, j) => {
                                            return <p><a href="#">{sub}</a></p>;
                                        })}
                                        </GridItem>
                                }
                            )
                        }
                        </GridContainer>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    </div>
  );
}
