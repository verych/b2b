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
            category: 'Молочные продукты',
            items: [
                'Буренка',
                'Артемида',
                'Молпродукт',
                'Гермес',
                'МегаПак',
                'Росшоколад',
                'Фуднатур',
                'Янтарь'
            ]
        },
        {
            category: 'Мясо / Колбасы',
            items: [
                'Тавр',
                'Ростнано',
                'Росмяс',
                'Алмаз',
                'Янтарь',
                'Колбасы Карелии',
            ]
        },
        {
            category: 'Чай, кофе, какао',
            items: [
                'Аквамакс Инк',
                'Емельяновская биофабрика',
                'Richeza',
                'Alp',
                'Кофе брейк',
                'Релликт',
                'Кубанские сладости'
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

export default function Catalog() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
                <h4 style={{color: "white"}} className={classes.cardTitle}>Корзина</h4>
            </CardHeader>
            <CardBody>
              <p>Выбрано <span style={{color: "red", fontSize: "20px"}}>15</span> товаров на общую сумму <span style={{color: "red", fontSize: "20px"}}>7590р</span></p>  
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="">Перейти в корзину</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info">
                <h4 style={{color: "white"}} className={classes.cardTitle}>Заказы</h4>
            </CardHeader>
            <CardBody>
              <p>У вас <span style={{color: "red", fontSize: "20px"}}>3</span> активных заказа</p>  
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="">Посмотреть все заказы</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>
      <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
                <h4 className={classes.cardTitle}>Каталог товаров</h4>
            </CardHeader>
            <CardBody>
              {
                  catalog.goods.map(
                      (item, i) => {
                        return <div><h6>{item.category}</h6> {item.items.map(
                            (sub, j) => {
                                return <p><a href="#">{sub}</a></p>;
                            })}
                            </div>
                      }
                  )
              }
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="">Смотреть полный каталог товаров</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success">
                <h4 className={classes.cardTitle}>Каталог производителей</h4>
            </CardHeader>
            <CardBody>
            {
                  catalog.producers.map(
                      (item, i) => {
                        return <div><h6>{item.category}</h6> {item.items.map(
                            (sub, j) => {
                                return <p><a href="#">{sub}</a></p>;
                            })}
                            </div>
                      }
                  )
              }
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <a href="">Смотреть полный каталог производителей</a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
