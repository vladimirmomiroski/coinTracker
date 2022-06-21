import React from "react";
import {
  Container,
  List,
  Icon,
  LinearProgress,
  Avatar,
  ListItem,
  ListItemText, 
  ListItemAvatar,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: "10px 0 !important"
  },
  alignItem: {
      textAlign: "end" 
  },
  boxBorder: {
    border: "1px solid black",
  },
  red: {
    color: "#FF0000"
  },
  avatarBackground: {
    backgroundColor: "#EBECF0 !important"
  },
}));

export default function OverviewItem({
  type,
  icon,
  name,
  entries,
  budget,
  returnBudget,
  calcEnt,
}) {
  const { mainContainer, boxBorder, alignItem, red, avatarBackground, item} = useStyles();

  const linearProgressValue = () => {
    const value =
      calcEnt(entries) > budget ? 100 : (calcEnt(entries) / budget) * 100;
      return value;
  };

  const colorProgressBar = () => {
    const value = linearProgressValue();
    return type === "income"
      ? "primary"
      : type === "expense" && value >= 100
      ? "error"
      : "success";
  };

  const checkColor = (type === "expense" && linearProgressValue() >= 100) ? red : ""
  
  return (
    
        <Container className={mainContainer}>

<List

    > 
      <ListItem className={item}>
        <ListItemAvatar>
          <Avatar className={avatarBackground}>
          <Icon className={checkColor}>{icon}</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={checkColor} primary={name}/>
            <ListItemText className={`${alignItem} ${checkColor}`} primary={returnBudget(entries, budget)}/>
      </ListItem>
      <ListItemText>
          {entries.length ? (
  <LinearProgress
    variant="determinate"
    value={linearProgressValue()}
    color={colorProgressBar()}
  />
) : (
  <Divider className={boxBorder}></Divider>
)}
          </ListItemText>
    </List>

          {/* jfowojfw */}
          {/* <ListItem>
            <ListItemAvatar className={checkColor}>
              <Icon>{icon}</Icon>
            </ListItemAvatar>
            <ListItemText className={checkColor} primary={name}/>
            <ListItemText className={`${alignItem} ${checkColor}`} primary={returnBudget(entries, budget)}/>
            
          </ListItem>
          <ListItem >
         
          </ListItem> */}
          </Container>
  );
}
