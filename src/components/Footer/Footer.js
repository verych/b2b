/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#about" className={classes.block}>
                О компании
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#callback" className={classes.block}>
                Обратная связь
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#press" className={classes.block}>
              Пресс-центр
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#post" className={classes.block}>
              Поставщикам
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#post" className={classes.block}>
              Инвесторам
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#post" className={classes.block}>
              Оптовым покупателям
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="mailto:magnit@verych.ru"
              target="_blank"
              className={classes.a}
            >
              B2B маркетплейс
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
