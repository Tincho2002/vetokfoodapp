# The project is based on an e-commerce of dry and wet food for cats and dogs. VET-OK! FOOD also has a secondary business that includes accessories for pets. There are branches throughout the country, so shipping costs are handled locally or picked up at the branch. It can be paid by bank transfer and credit cards. Returns due to damage, breakage or poor conditions in the products received, can be processed within 15 calendar days of receiving the merchandise through the Contact form in the corresponding section.

# Proyecto ficticio de sitio e-commerce creado para el curso de ReactJS de CoderHouse, basado en el proyecto VET-OK! para el curso de Desarrollo Web.

# En este proyecto, VET-OK! FOOD, para el curso de ReactJS creamos varios componentes con el objetivo de construir un sitio e-commerce funcional. 

# Los componentes centrales para el desarrollo de la funcionalidad son: ItemListContainer, ItemList, Item, ItemDetailContainer, ItemDetail, CartView, CartWidget, CartContext, NavBar, ItemCount.

# Comenzamos instalando el software necesario, NodeJS, npm, etc. Luego con el comando npx create-react-app para generar la estructura básica de un proyecto ReactJS.

# Para crear la funcionalidad necesaria para un proyecto ecommerce con carrito tuvimos que crear varios componentes. NavBar, Footer, CartContext, CartWidget, Item, ItemList, ItemListContainer, ItemDetailContainer, ItemDetail, ItemCount, LoadingSpinner y Cart, Checkout.

* Navbar = Componente que contiene los links para la navegación dentro de la app, el logo y el ícono del carrito.

* CartWidget = Componente del ícono del carrito de compras.

* Footer= Componente con el diseño del footer. Incluye íconos de redes sociales, un formulario sin controles donde el usuario puede contactarse para suscribirse a la Newsletter de VET-OK! FOOD y los datos físicos de la empresa (dirección del local, ciudad, provincia, país y wsp de contacto). Finalmente cierra el Copyright correspondiente.

* CartContext = Componente con toda la programación para mostrar el estado del contenido del carrito de compras.

* ItemCount = Componente que se encarga de sumar las unidades compradas al carrito, con límite de stock desponible.

* Item = Componente que se encarga de generar el diseño de los ítems que se muestran en la lista del catálogo.

* ItemList = Componente que se encarga de pasarle los parámetros a Item para generar cada unidad en la lista del catálogo

* ItemListContainer = Componente con toda la lógica y programación para leer la base de datos y obtener los items.

* ItemDetailContainer = Componente con la funcionalidad necesaria para crear el ItemDetail, los detalles del producto.

* ItemDetail = Componente con los estilos necesarios para tomar la información que envía ItemDetailContainer.

* ItemCount = Componente para agregar o quitar n productos al carrito desde la sección de detalles del producto.

* LoadingSpinner = Componente con estilos que muestra el clásico spinner cuando está cargando el contenido.

* Cart = Componente para generar el carrito de compras recibiendo la información que genera CartContext.

* Checkout = Componente para generar el paso final del proceso de compras, donde el cliente ingresa sus datos y realiza el pago.

Además se incorporó una página, Contact, que contiene un Formulario de Contacto con validaciones. También está previsto adjuntar un documento, para que el cliente pueda remitir, por ejemplo, la orden generada en el Checkout en casos de devoluciones o reclamos.

## Agradezco al profersor Hernan Condori (gran DJ) y tutores, Belén Romero y Federico Blautzik, de CoderHouse por la guia, la buena onda, la generosidad y el profesionalismo, durante el proceso de aprendizaje y también a todos los compañeros que me ayudaron y a los cuales ayudé.

### Relizado con

* [HTML]
* [CSS]
* [Bootstrap](https://getbootstrap.com)
* [JavaScript]
* [ReactJS]
* [React-icons]
* [React-router-dom]
* [React-Bootstrap]
* [mdb-react-ui-kit]
* [web-vitals]
* [Sweetalert2]
* [Firebase]

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
