import Black_T_Shirt from "../assets/blackTShirt.svg";
import Black1 from "../assets/blackTShirt.png";
import Black2 from "../assets/black2.png";
import Black3 from "../assets/black3.png";

import BlueJeans from "../assets/blueJeans.svg";
import BlueJeans1 from "../assets/blueJeans1.png";
import BlueJeans2 from "../assets/blueJeans2.png";
import BlueJeans3 from "../assets/blueJeans3.jpg";

import Checkered_T_Shirt from "../assets/stripedShirt.svg";
import Checkered1 from "../assets/striped1.png";
import Checkered2 from "../assets/striped2.png";
import Checkered3 from "../assets/striped3.png";

import Orange_T_Shirt from "../assets/orangeTShirt.svg";
import Orange1 from "../assets/orange1.png";
import Orange2 from "../assets/orange2.png";
import Orange3 from "../assets/orange3.jpg";

import GreenShirt from "../assets/greenShirt.svg";
import Green1 from "../assets/green1.png";
import Green2 from "../assets/green2.png";
import Green3 from "../assets/green3.png";

import GraphicTShirt from "../assets/graphicTShirt.svg";
import Graphic1 from "../assets/graphic1.png";
import Graphic2 from "../assets/graphic2.png";
import Graphic3 from "../assets/graphic3.png";

import Short from "../assets/short.svg";
import Short1 from "../assets/short1.png";
import Short2 from "../assets/short2.png";
import Short3 from "../assets/short3.png";

import BlackJeans from "../assets/blackJeans.svg";
import BlackJeans1 from "../assets/blackJeans1.png";
import BlackJeans2 from "../assets/blackJeans2.png";
import BlackJeans3 from "../assets/blackJeans3.png";

import BlueShirt from "../assets/blueShirt.svg";
import BlueShirt1 from "../assets/blueShirt1.png";
import BlueShirt2 from "../assets/blueShirt2.png";
import BlueShirt3 from "../assets/blueShirt3.png";

import Gradient from "../assets/gradient.svg";
import Gradient1 from "../assets/gradient1.png";
import Gradient2 from "../assets/gradient2.png";
import Gradient3 from "../assets/gradient3.png";

import Polo from "../assets/polo.svg";
import Polo1 from "../assets/polo1.png";
import Polo2 from "../assets/polo2.png";
import Polo3 from "../assets/polo3.png";

import Black_Striped from "../assets/blackStriped.svg";
import Black_Striped1 from "../assets/blackStriped1.png";
import Black_Striped2 from "../assets/blackStriped2.png";
import Black_Striped3 from "../assets/blackStriped3.png";

const database = [
  {
    id: 1,
    productname: "T-Shirt With Tape Details",
    stink: "4.5/5",
    price: {
      current: 120,
      old: null,
    },
    percent: null,
    description: `This T-Shirt With Tape Details is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: Black_T_Shirt,
    mainImage: Black1,
    thumbnails: [Black1, Black2, Black3],
    filterColor: ["#FFFFFF", "#000000"],
    color: [
      { id: 1, color: "#000000" },
    ],
    colorName: "Black",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 2,
    productname: "Skinny Fit Jeans",
    stink: "3.5/5",
    price: {
      current: 240,
      old: "$260",
    },
    percent: "-20%",
    description: `This Skinny Fit Jeans is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: BlueJeans,
    mainImage: BlueJeans1,
    thumbnails: [BlueJeans1, BlueJeans2, BlueJeans3],
    filterColor: ["#06CAF5", "#063AF5"],
    color: [
      { id: 1, color: "#06CAF5" },
      { id: 2, color: "#063AF5" },
    ],
    colorName: "Blue",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 3,
    productname: "Checkered Shirt",
    stink: "4.5/5",
    price: {
      current: 180,
      old: null,
    },
    percent: null,
    description: `This Checker Shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: Checkered_T_Shirt,
    mainImage: Checkered1,
    thumbnails: [Checkered1, Checkered2, Checkered3],
    filterColor: ["#06CAF5", "#F50606"],
    color: [
      { id: 1, color: "#063AF5" },
      { id: 2, color: "#F50606" },
    ],
    colorName: "Red and Navy Plaid",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 4,
    productname: "Sleeve Striped T-Shirt",
    stink: "4.5/5",
    price: {
      current: 130,
      old: "$160",
    },
    description: `This Sleeve Striped T-Shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    percent: "-30%",
    productImage: Orange_T_Shirt,
    mainImage: Orange1,
    thumbnails: [Orange1, Orange2, Orange3],
    filterColor: ["#000000", "#F57906"],
    color: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#F57906" },
    ],
    colorName: "Orange and Black Striped",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 5,
    productname: "Vertical Striped Shirt",
    stink: "5.0/5",
    price: {
      current: 212,
      old: "$232",
    },
    percent: "-20%",
    description: `This Vertical Striped Shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: GreenShirt,
    mainImage: Green1,
    thumbnails: [Green1, Green2, Green3],
    filterColor: ["#00C12B"],
    color: [
      { id: 1, color: "#00C12B" },
    ],
    colorName: "Green and Black Striped",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 6,
    productname: "Courage Graphic T-Shirt",
    stink: "4.0/5",
    price: {
      current: 145,
      old: null,
    },
    percent: null,
    description: `This Courage Graphic T-Shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: GraphicTShirt,
    mainImage: Graphic1,
    thumbnails: [Graphic1, Graphic2, Graphic3],
    filterColor: ["#F57906"],
    color: [
      { id: 1, color: "#F57906" },
    ],
    colorName: "Orange with Graphic Print",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 7,
    productname: "Loose Fit Bermuda Shorts",
    stink: "3.0/5",
    price: {
      current: 60,
      old: null,
    },
    percent: null,
    description: `This Loose Fit Bermuda Shorts is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: Short,
    mainImage: Short1,
    thumbnails: [Short1, Short2, Short3],
    filterColor: ["#06CAF5", "#063AF5"],
    color: [
      { id: 1, color: "#06CAF5" },
      { id: 2, color: "#063AF5" },
    ],
    colorName: "Light Blue",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 8,
    productname: "Faded Skinny Jeans",
    stink: "4.5/5",
    price: {
      current: 210,
      old: null,
    },
    percent: null,
    description: `This Faded Skinny Jeans is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: BlackJeans,
    mainImage: BlackJeans1,
    thumbnails: [BlackJeans1, BlackJeans2, BlackJeans3],
    filterColor: ["#000000"],
    color: [
      { id: 1, color: "#000000" },
    ],
    colorName: "Black",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 9,
    productname: "Polo with Contrast Trims",
    stink: "4.0/5",
    price: {
      current: 212,
      old: 242,
    },
    percent: "-20%",
    description: `This Polo with Contrast Trims is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: BlueShirt,
    mainImage: BlueShirt1,
    thumbnails: [BlueShirt1, BlueShirt2, BlueShirt3],
    filterColor: ["#06CAF5", "#063AF5"],
    color: [
      { id: 1, color: "#06CAF5" },
      { id: 2, color: "#063AF5" },
    ],
    colorName: "Teal and White",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 10,
    productname: "Gradient Graphic T-shirt",
    stink: "3.5/5",
    price: {
      current: 145,
      old: null,
    },
    percent: null,
    description: `This Gradient Graphic T-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: Gradient,
    mainImage: Gradient1,
    thumbnails: [Gradient1, Gradient2, Gradient3],
    filterColor: ["#FFFFFF"],
    color: [
      { id: 1, color: "#fff" },
    ],
    colorName: "White with Multicolor Graphic",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 11,
    productname: "Polo with Tipping Details",
    stink: "4.5/5",
    price: {
      current: 180,
      old: null,
    },
    percent: null,
    description: `This Faded Skinny Jeans is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: Polo,
    mainImage: Polo1,
    thumbnails: [Polo1, Polo2, Polo3],
    filterColor: ["#F506A4"],
    color: [
      { id: 1, color: "#F506A4" },
    ],
    colorName: "Mauve",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
  {
    id: 12,
    productname: "Black Striped T-shirt",
    stink: "5.0/5",
    price: {
      current: 120,
      old: 150,
    },
    percent: "-30%",
    description: `This Faded Skinny Jeans is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.`,
    productImage: Black_Striped,
    mainImage: Black_Striped1,
    thumbnails: [Black_Striped1, Black_Striped2, Black_Striped3],
    filterColor: ["#FFFFFF", "#000000"],
    color: [
      { id: 1, color: "#FFFFFF" },
      { id: 2, color: "#000000" },
    ],
    colorName: "White and Black Striped",
    sizes: ["Small", "Medium", "Large", "X-Large"],
  },
];

export default database;
