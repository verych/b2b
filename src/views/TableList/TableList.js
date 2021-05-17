import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Очень важный отчет №1</h4>
            <p className={classes.cardCategoryWhite}>
              который очень нужен и его сложно составлять вручную, но сейчас он сгенерировался автоматически
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Наименование", "Поставщик", "Товар", "Стоимость"]}
              tableData={[
                ["Контракт на поставку от 03.08.2021", "ИП Микорасон", "Морепродукты", "₽63,542"],
                ["Контракт на поставку от 31.01.2021", "ООО РусВизардс", "Картофель", "₽78,615"],
                ["Контракт на поставку от 29.04.2021", "ООО Аннушка", "Фруктовый лёд", "₽56,142"],
                ["Контракт на поставку от 25.03.2021", "ИП Егор", "Мишки мармеладные", "₽38,735"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Ещё один большой и нужный отчет №2
            </h4>
            <p className={classes.cardCategoryWhite}>
              на него уходило пару дней, но теперь он доступен в любой момент
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["", "Наименование", "Стоимость", "Склад", "Поставщик"]}
              tableData={[
                ["1", "Рис", "₽36,738", "склад №1", "ООО КраснодарРисПром"],
                ["2", "Минеральная вода", "₽23,789", "склад №2", "ООО Минводы"],
                ["3", "Консервированная кукуруза", "₽56,142", "склад №3", "ООО ЛосЭрманос"],
                ["4", "Овсяная крупа", "₽36,738", "склад №1", "ООО КраснодарРисПром"],
                ["5", "Лимонад", "₽23,789", "склад №2", "ООО Минводы"],
                ["6", "Консервированный горошек", "₽56,142", "склад №3", "ООО ЛосЭрманос"],
                ["7", "Фунчоза", "₽36,738", "склад №1", "ООО КраснодарРисПром"],
                ["8", "Дюшес", "₽23,789", "склад №2", "ООО Минводы"],
                ["9", "Соус томатный", "₽56,142", "склад №3", "ООО ЛосЭрманос"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
