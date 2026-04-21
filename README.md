# 📦 Sistema de Ventas API

API REST desarrollada con Node.js y MongoDB para la gestión de productos y registro de ventas, incluyendo autenticación de usuarios mediante JWT.

---

## 🚀 Descripción

Este proyecto simula un sistema de ventas real donde es posible:

* Registrar y autenticar usuarios
* Gestionar productos (CRUD)
* Registrar ventas
* Validar inventario en tiempo real
* Actualizar automáticamente el stock

El objetivo es representar un backend funcional similar a los utilizados en entornos empresariales.

---

## 🛠️ Tecnologías utilizadas

* Node.js
* Express
* MongoDB (Atlas)
* Mongoose
* JSON Web Tokens (JWT)
* Bcrypt

---

## 📁 Estructura del proyecto

```
src/
  controllers/
  models/
  routes/
  middlewares/
  config/
  app.js
  server.js
```

---

## ⚙️ Instalación

Clonar repositorio:

```
git clone https://github.com/VictorE121/Sistema-Ventas-2.0.git
cd sistema-ventas
```

Instalar dependencias:

```
npm install
```

---

## ▶️ Ejecución

```
npm run dev
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 🔑 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```
PORT=3000
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_secreto
```

---

## 🔐 Autenticación

El sistema utiliza JWT para proteger rutas.

Para acceder a endpoints protegidos:

```
Authorization: Bearer TU_TOKEN
```

---

## 📡 Endpoints principales

### 🔐 Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

---

### 📦 Productos

* GET `/api/products`
* POST `/api/products`
* PUT `/api/products/:id`
* DELETE `/api/products/:id`

---

### 💰 Ventas

* POST `/api/sales`
* GET `/api/sales`

---

## 🧠 Lógica destacada

* Validación de stock antes de registrar una venta
* Cálculo automático del total de la venta
* Descuento automático de inventario
* Relación entre usuarios, productos y ventas

---

## 🧪 Pruebas

Las pruebas de la API pueden realizarse utilizando herramientas como Postman.

Se recomienda incluir una colección de pruebas para facilitar la evaluación del proyecto.

---

## 📌 Posibles mejoras

* Implementación de roles (admin / usuario)
* Reportes de ventas por fecha
* Filtros avanzados
* Dockerización del proyecto

---

## 👨‍💻 Autor

Desarrollado por **Victor Ramirez**

---
