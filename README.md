#  API de Gestión de Incidentes - Requerimientos Técnicos

## 📋 Requisitos Previos

Para ejecutar esta API, asegúrate de tener instalado en tu sistema:

| Tecnología    | Versión Recomendada | Descripción                                                                 |
|---------------|---------------------|-----------------------------------------------------------------------------|
| Node.js       | v18.x o superior    | Entorno de ejecución JavaScript. [Descargar Node.js](https://nodejs.org/)   |
| npm           | v9.x o superior     | Gestor de paquetes (viene con Node.js).                                     |
| MongoDB       | v6.x o superior     | Base de datos NoSQL. [Instalar MongoDB](https://www.mongodb.com/try/download) |
| Git           | Opcional            | Para clonar el repositorio. [Instalar Git](https://git-scm.com/downloads)   |

###  Verifica las versiones instaladas:
```bash
node -v
npm -v
mongod --version
```

##  Configuración del Entorno
Variables de entorno:
Crea un archivo `.env` en la raíz del proyecto con:

```bash 
MONGODB_URI=mongodb://localhost:27017/incidentDB
PORT=3000
```

- Reemplaza `mongodb://localhost:27017` con tu URL de MongoDB (ej: Atlas Cloud).

- El `PORT` puede cambiarse según necesidad.

### Dependencias:
Instala los paquetes necesarios con:
``` bash
npm install
```
## Ejecucion de la API
### Modo Desarrollo (con reinicio automático)
``` bash
npm run dev
```
Usa `nodemon` para detectar cambios en tiempo real

### Modo Producción
``` bash
npm start
```

## Acceso
La api estará disponible en:
`http://localhost:300/api`

## Endpoints Clave
| Metodo | Endopoint    | Body (ejemplo)                             | Descripcion               |
|--------|--------------|--------------------------------------------|---------------------------|
| POST   | `/indicents` | {"reporter": "Juan", "descripcion": "..."} | Crea un incidente         |
| GET    | `/incidents` | -                                          | Lista todos los incidentes|

## Solución de Problemas
Si encuentras errores:

1. `Error: cannot find module:`
Ejecuta
```bash
npm install
```

2. Conexión fallida a MongoDB
verifica que el servicio de MongoDB esté activo
```bash
sudo systemctl start mongod  # Linux
net start MongoDB           # Windows (Admin)
```

3. Puerto en uso
Cambia el `PORT` en `.env` a otro valor (ej:4000).

## Estrcutura del proyecto
incident-management-api/
├── src/
│   ├── app.js          # Configuración Express
│   ├── routes.js       # Endpoints
│   └── models/         # Esquemas MongoDB
├── .env                # Variables de entorno
└── package.json        # Dependencias
