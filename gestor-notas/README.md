# Gestión de Notas con React

Este proyecto es una aplicación web sencilla para la gestión de notas, desarrollada en **React** utilizando **React Router** y formularios controlados. La aplicación permite agregar, visualizar y listar notas, así como adjuntar imágenes a cada una de ellas.

## Características

- **Navegación**: La aplicación cuenta con una barra de navegación para moverse entre la página principal, la lista de notas y el formulario para agregar nuevas notas.
- **Gestión de Notas**: Los usuarios pueden agregar notas con un título, descripción y una imagen. Las notas se visualizan en formato de tarjeta.
- **Estilos Personalizados**: Los estilos se encuentran definidos en el archivo `App.css` para una interfaz limpia y fácil de usar.

## Estructura del Proyecto

src/ ├── components/ │ ├── Navbar.js # Barra de navegación │ ├── Notas.js # Componente para listar las notas │ ├── AgregarNota.js # Formulario para agregar notas │ └── Principal.js # Página principal de bienvenida ├── App.js # Componente principal de la aplicación ├── index.js # Punto de entrada de la aplicación └── App.css # Archivo de estilos


## Instalación

Sigue los siguientes pasos para ejecutar la aplicación localmente:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repo.git
   cd nombre-del-repo

Instala las dependencias usando Yarn:
yarn install

Inicia la aplicación:
yarn run start

## Uso
En la página principal, puedes hacer clic en el botón "Ver Notas" para acceder a la lista de notas.
En la sección de Agregar Nota, puedes rellenar el formulario para añadir una nueva nota con título, descripción e imagen.
Las notas se visualizan en una tarjeta con la opción de expandir la información.

## Herramientas Utilizadas
React: Biblioteca principal para la creación de la interfaz de usuario.
React Router: Manejo de rutas dentro de la aplicación.
Yarn: Administrador de paquetes utilizado para instalar y ejecutar el proyecto.
HTML5 & CSS3: Para la estructura y estilos de la aplicación.

## Aplicacion y Objetivo
El objetivo de este proyecto es desarrollar una arquitectura cliente mediante React, utilizando un flujo basado en componentes y manejo de estado. Permite demostrar cómo estructurar una aplicación sencilla pero funcional de gestión de datos (notas) con formularios y navegación eficiente