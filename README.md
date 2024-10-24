# Desarrollo de Plataforma Web para Surtifruver El Mono

## Descripción

Surtifruver El Mono es una tienda de víveres que busca expandir su presencia en el entorno digital mediante el desarrollo de una plataforma web. Este proyecto tiene como objetivo permitir a los clientes consultar el inventario de productos en tiempo real, agregar productos a un carrito de compras y, finalmente, enviar el pedido al chat de WhatsApp para su procesamiento.

## Tecnologías Utilizadas

- **Frontend:**
  - [Astro](https://astro.build/): Framework moderno utilizado para construir sitios web rápidos y optimizados, minimizando el uso de JavaScript en el cliente.
  - **React**: Para la creación de componentes interactivos como el carrito de compras y el listado de productos.
  - **Tailwind CSS**: Framework de estilos que facilita la creación de interfaces modernas y responsivas.

- **Backend:**
  - [Strapi](https://strapi.io/): Headless CMS utilizado para gestionar el inventario de productos y exponer una API que se conecta con el frontend.

- **Diseño:**
  - [Figma](https://www.figma.com/): Herramienta utilizada para el diseño de la interfaz de usuario (UI) y la experiencia de usuario (UX), asegurando una navegación fluida y una experiencia optimizada en dispositivos móviles.

## Características

- **Visualización de inventario en tiempo real**: Los clientes pueden consultar la disponibilidad de productos en la tienda en línea de forma actualizada.
- **Carrito de compras**: Los usuarios pueden seleccionar productos y agregarlos a su carrito de compras.
- **Envío de pedidos a WhatsApp**: En lugar de procesar los pedidos en línea, los clientes envían su pedido al chat de WhatsApp, donde se gestionan los pedidos finales.

## Requisitos Previos

- **Node.js** v14.x o superior
- **Yarn** o **npm** como gestor de paquetes
- **Strapi** instalado y configurado

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tuusuario/surtifruver-el-mono.git
   cd surtifruver-el-mono
