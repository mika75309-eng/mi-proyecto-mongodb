# 🎯 Sistema de Gestión de Proyectos

Sistema profesional y empresarial para gestionar proyectos, tareas y equipos.

## 📋 Características

- ✅ Autenticación de usuarios
- ✅ Crear, editar y eliminar proyectos
- ✅ Asignar tareas a miembros del equipo
- ✅ Panel de control con gráficos
- ✅ Notificaciones en tiempo real
- ✅ Sistema de roles y permisos

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB

### Frontend (Próximamente)
- **React** - Librería UI
- **Redux** - Gestión de estado
- **Axios** - Cliente HTTP

## 📅 Plan de Desarrollo (4 Semanas)

### Semana 1: Backend
- [x] Inicializar Node.js y dependencias
- [ ] Crear modelos de datos (User, Project, Task)
- [ ] Implementar rutas API REST
- [ ] Configurar autenticación JWT

### Semana 2: Frontend Base
- [ ] Estructura React con componentes
- [ ] Páginas principales
- [ ] Conexión API

### Semana 3: Integración Full-Stack
- [ ] Integración completa
- [ ] Features avanzadas

### Semana 4: Deploy y Pulido
- [ ] Autenticación completa
- [ ] Deploy en producción

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/mika75309-eng/mi-proyecto-mongodb.git
cd mi-proyecto-mongodb

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores

# Ejecutar en desarrollo
npm run dev
```

## 🔧 Configuración de MongoDB

### Opción 1: MongoDB Local
```bash
# Instalar MongoDB Community Server
# https://www.mongodb.com/try/download/community

# Usar en .env:
MONGODB_URI=mongodb://localhost:27017/proyecto-gestion
```

### Opción 2: MongoDB Atlas (Nube)
```bash
# 1. Ir a https://www.mongodb.com/cloud/atlas
# 2. Crear cuenta gratuita
# 3. Crear cluster
# 4. Obtener connection string
# 5. Usar en .env:
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/proyecto-gestion
```

## 🚀 Uso

```bash
# Desarrollo (con auto-reload)
npm run dev

# Producción
npm start
```

## 📝 API Endpoints (En desarrollo)

```
GET  /api/health          - Estado del servidor
POST /api/auth/register   - Registrar usuario
POST /api/auth/login      - Login de usuario
GET  /api/projects        - Listar proyectos
POST /api/projects        - Crear proyecto
GET  /api/projects/:id    - Obtener proyecto
PUT  /api/projects/:id    - Actualizar proyecto
DELETE /api/projects/:id  - Eliminar proyecto
```

## 📚 Estructura de Carpetas

```
mi-proyecto-mongodb/
├── models/           # Esquemas de MongoDB
├── routes/           # Rutas API
├── controllers/       # Lógica de negocio
├── middleware/        # Middleware personalizado
├── config/           # Configuración
├── .env.example      # Variables de ejemplo
├── .gitignore
├── index.js          # Punto de entrada
├── package.json
└── README.md
```

## 👨‍💻 Autor

GasparRiveraAlejandro

## 📄 Licencia

ISC
