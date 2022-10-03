export const products = [
  {
    id: 1,
    title: 'EXCELLENT',
    category: 'dry',
    description: 'Adult Cat Smart 7,5kg',
    price: 7551,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/adult-cat-smart-75-kg-72940.jpg?auto=format',
    stock: 7,   
  },
  {
    id: 2, 
    title: 'SANICAT',
    category: 'sanitary',
    description: 'Sanitary Stones 2kg Bolson (10 Units)',
    price: 2448,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/piedras-sanitarias-2kg-bolson-x10-unidades-74188.jpg?auto=format',
    stock: 20,       
  },
  {
    id: 3,
    title: 'MISTER HUESO',
    category: 'accessories',
    description: 'Europa Pouf Mattress',
    price: 3848,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/colchoneta-europa-puf-71019.jpg?auto=format',
    stock: 17,    
  },
  {
    id: 4,
    title: 'PROPLAN',
    category: 'wet',
    description: 'Pouch Adult Dog Chicken 100grs',
    price: 300,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/pouch-adult-dog-chicken-100grs-77084.jpg?auto=format',
    stock: 12,    
  },
  {
    id: 5,
    title: 'DIMBO',
    category: 'sanitary',
    description: 'Bag Pellet X 2kg (6 Units)',
    price: 1085,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/bolson-pellet-x-2kg-6-unidades-70145.jpg?auto=format',
    stock: 9, 
  },
  {
    id: 6,
    title: 'ROYAL CANNIN',
    category: 'dry',
    description: 'Maxi Adult 15kg',
    price: 13698,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/maxi-adult-15kg-88324.png?auto=format',
    stock: 10,    
  },
  {
    id: 7,
    title: 'ROYAL CANIN',
    category: 'wet',
    description: 'Senior Consult - Stage 1 Pouch 100grs',
    price: 467,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/senior-consult-stage-1-pouch-100grs-70280.jpg?auto=format',
    stock: 15,    
  },
  {
    id: 8,
    title: 'ROYAL CANNIN',
    category: 'dry',
    description: 'Kitten Second Age 7,5kg',
    price: 13445,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/kitten-second-age-75kg-72967.jpg?auto=format',
    stock: 16,
  },
  {
    id: 9,
    title: 'PURINA CAT CHOW',
    category: 'wet',
    description: 'Pouch Gatitos Pollo 85grs Caja X 15 Unidades',
    price: 467,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/pouch-gatitos-pollo-85grs-caja-x-15-unidades-74213.jpg?auto=format',
    stock: 7,    
  },  
  {
    id: 10,
    title: 'DOG SELECTION',
    category: 'dry',
    description: 'Breeders Meat And Chicken 21kg + 3kg Gift',
    price: 8413,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/criadores-carne-y-pollo-21kg-3kg-regalo-73534.jpg?auto=format',
    stock: 25,    
  },
  {
    id: 11,
    title: 'PRE ROS',
    category: 'accessories',
    description: 'Moses Light Fabric Super Large Detachable',
    price: 12048,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/moises-tela-liviana-super-grande-desmontable-69370.jpg?auto=format&w=600&h=600&fit=fill&fill=solid',
    stock: 19,    
  },
  {
    id: 12,
    title: 'SOL MINERALES',
    category: 'sanitary',
    description: 'Absorsol High Range Lavender 3.6kg',
    price: 757,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/absorsol-alta-gama-lavanda-36kg-82573.jpg?auto=format',
    stock: 15,    
  },
  {
    id: 13,
    title: 'DR ZOO',
    category: 'wet',
    description: 'Grill Strips Of Roast 50g (x 1 Unit)',
    price: 103,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/grill-tiritas-de-asado-50g-x-1-unidad-81414.jpg?auto=format',
    stock: 16, 
  },
  {
    id: 14,
    title: 'SAN REMO',
    category: 'accessories',
    description: 'Lint Roller',
    price: 1308,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/rodillo-quita-pelusa-71244.jpg?auto=format',
    stock: 3,
  },
  {
    id: 15,
    title: 'MAPU',
    category: 'dry',
    description: 'Perro Adulto 15 Kg',
    price: 6069,
    pictureUrl:
      'https://ockam-cloud-mo.imgix.net/imagenes-s/productos/perro-adulto-15-kg-74823.jpg?auto=format',
    stock: 27,    
  }
];

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};
