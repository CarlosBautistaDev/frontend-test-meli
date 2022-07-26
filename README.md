## Prueba técnica Carlos Bautista  MELI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requisitos de la Prueba 
En base a los diseños dados, construir las siguientes tres vistas:

* Caja de búsqueda

* Resultados de la búsqueda

* Detalle del producto

Las llamadas a las apis se realizan a los endpoints que se realizo en el otro projecto, por eso mismo, para correr la aplicación es necesario iniciar tambien la otra prueba de los end points.

## Scripts Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Estructua de la Aplicción

Las vistas se manejan desde contenedores que importan, y actualizan dos contextos, el de ItemListContext y el de ItemDetailsContext.El ItemListContext se encarga de generar las llamadas a la api en dos useEffects. 
El segundo se realiza cada vez que la query(o busqueda) cambia desde la Searchbar.

Los resultados se parsean a travez de las utils de parsing en un objeto con la forma requerida en el test, incluyendo el autor, las categorias de los mismos(que se realizo el parseo desde los endpoints realizados en el otro proyecto) y la lista de items.

Cada componente cuenta con sus test unitarios 
