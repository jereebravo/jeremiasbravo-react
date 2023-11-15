import * as images from "./assets/img/index";

let products = [
  {
    id: 1,
    name: "oso negro",
    image: images.osoNegro,
    category: "osos",
    price: 300,
    description: "Oso tamaño chico de color negro",
    stock: 7,
  },
  {
    id: 2,
    name: "oso azul",
    image: images.osoAzul,
    category: "osos",
    price: 100,
    description: "Oso tamaño chico de color azul",
    stock: 6,
  },
  {
    id: 3,
    name: "oso marron",
    image: images.osoMarron,
    category: "osos",
    price: 250,
    description: "Oso tamaño grande de color marron",
    stock: 7,
  },
  {
    id: 4,
    name: "oso rojo",
    image: images.osoRojo,
    category: "osos",
    price: 300,
    description: "Oso tamaño grande de color rojo",
    stock: 12,
  },
  {
    id: 5,
    name: "oso blanco",
    image: images.osoBlanco,
    category: "osos",
    price: 300,
    description: "Oso tamaño grande de color rojo",
    stock: 12,
  },
  {
    id: 6,
    name: "equipo de mate azul",
    image: images.mateAzul,
    category: "mates",
    price: 400,
    description: "Equipo de mate azul",
    stock: 2,
  },
  {
    id: 7,
    name: "equipo de mate rosa",
    image: images.mateRosa,
    category: "mates",
    price: 500,
    description: "Equipo de mate rosa",
    stock: 5,
  },
  {
    id: 8,
    name: "equipo de mate futbol",
    image: images.mateFutbol,
    category: "mates",
    price: 600,
    description: "Equipo de mate de equipo de futbol personalizado",
    stock: 8,
  },
  {
    id: 9,
    name: "mantel crochet azul",
    image: images.mantelAzul,
    category: "manteles",
    price: 400,
    description: "mantel crochet color azul",
    stock: 5,
  },
  {
    id: 10,
    name: "mantel crochet marron",
    image: images.mantelMarron,
    category: "manteles",
    price: 500,
    description: "mantel crochet color marron",
    stock: 14,
  },
  {
    id: 11,
    name: "mantel crochet verde",
    image: images.mantelVerde,
    category: "manteles",
    price: 450,
    description: "mantel crochet color verde",
    stock: 5,
  },
];


export const getProducts = () => {
  return new Promise((resolve, reject) => {
    
    if (products.length > 0) {
      resolve(products);
      
    } else {
      reject("No hay productos");
    }
  });
};

export const getProduct = ( id ) => {
  return new Promise((resolve, reject) => {
    
    const product = products.find( product => product.id === id); 
    setTimeout( () => { 
      if(!product) {
        reject("No se encontró el producto solicitado")
      } else {
        resolve(product);
      }
     }, 2000 )
    
  });
};
