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


var catalog = {
    goods: [
        {
            category: 'Молочные продукты',
            items: [
                'Молоко',
                'Сливки',
                'Сгущенное молоко',
                'Кисломолочные напитки',
                'Йогурты',
                'Альтернативное молоко'
            ]
        },
        {
            category: 'Чай, кофе, какао',
            items: [
                'Растворимый кофе',
                'Молотый кофе',
                'Пакетированный чай',
                'Зерновой кофе',
                'Листовой чай',
                'Какао',
                'Горячий шоколад',
                'Цикорий'
            ]
        },
        {
            category: 'Для выпечки',
            items: [
                'Декор',
                'Красители',
                'Десерты',
                'Ингредиенты'
            ]
        }
    ],
    producers: [
        {
            category: 'Краснодарский край',
            items: [
                'Аквамакс',
                'Артемида',
                'Дым Дымыч',
                'Гермес',
                'МегаПак',
                'Росшоколад',
                'Фуднатур',
                'Янтарь',
                'КрасГаз',
            ]
        },
        {
            category: 'Ростовская область',
            items: [
                'Тавр',
                'Красный котельщик',
                'Гидропресс',
                'Бериево',
                'Рост-нано',
                'Ростшоколад',
                'Алмаз',
                'Янтарь',
                'Ягоды Карелии',
            ]
        },
        {
            category: 'Москва',
            items: [
                'Аквамакс Инк',
                'Емельяновская биофабрика',
                'Вязанка',
                'Richeza',
                'Alp',
                'Кофе брейк',
                'Релликт',
                'Кубанские сладости',
                'ГазМяс',
            ]
        }
    ],
    transport: [
        {
            category: 'Краснодарский край',
            items: [
                'ИП Иванов',
                'ИП Петров',
                'ИП Водкин',
                'ИП Максим',
                'ООО ТрансГудсВеземс',
                'ООО Доставка'
            ]
        },
        {
            category: 'Ростовская область',
            items: [
                'ООО Ростов Карго',
                'ИП Сидоров',
                'ООО РосБыстДост'
            ]
        },
        {
            category: 'Москва',
            items: [
                'ООО МосГазель',
                'ООО СДЭК',
                'ИП Сергеев',
                'ИП Арсеньев',
                'ООО Молния',
                'ПАО ТрансСибЛонг',
                'ИП Хуранов',
                'ООО Дистиллери',
                'ООО МегаКаргоДрон',
            ]
        }
    ]
};


const useStyles = makeStyles(styles);

export default () => {
  const classes = useStyles();
  return (
    <div>
        <h4>Услуги</h4>
        <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
                <Card>
                    <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <Icon>local_shipping</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Заявка на логистические услуги</p>
                    <h3 className={classes.cardTitle}>
                        3 <small>активных</small>
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Оформить заявку
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
                <Card>
                    <CardHeader color="info" stats icon>
                    <CardIcon color="info">
                        <Icon>local_convenience_store</Icon>
                    </CardIcon>
                    <p className={classes.cardCategory}>Проведение транспортного тендера</p>
                    <h3 className={classes.cardTitle}>
                        &nbsp;
                    </h3>
                    </CardHeader>
                    <CardFooter stats>
                    <div className={classes.stats}>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                            Запустить тендер
                        </a>
                    </div>
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>

        <h4>Список доступных транспортных компаний</h4>
        <GridContainer>
            {
                  catalog.transport.map(
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
    </div>
  );
}
