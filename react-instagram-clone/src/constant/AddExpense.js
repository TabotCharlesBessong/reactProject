import {  LocalHospital, MenuBook, More, School, ShoppingBasket } from "@material-ui/icons"

export const categories = [
  {
    id: 1,
    title: "Education",
    icon: `{<School/>}`,
    color: "#A95EC2",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: `{<LocalHospital/>}`,
    color: "#FFCB5E",
    
  },
  {
    id: 3,
    title: "Shopping",
    icon: `{<ShoppingBasket/>}`,  
    color: "#FF768A",
  },
  {
    id: 4,
    title: "Food",
    icon: `{<MenuBook/>}`,
    color: "#FF9E6D",
  },
  {
    id: 5,
    title: "Other",
    icon: `{<More/>}`,
    color: "#EC60AB",
  },
];