##  Cómo Ejecutar el Sistema

### Requisitos Previos

Necesitas tener instalado en tu computadora:

1. **Node.js** (versión 18 o superior)
   - Descarga desde: https://nodejs.org/
   - Verifica la instalación: `node --version`

2. **npm** (viene incluido con Node.js)
   - Verifica la instalación: `npm --version`

### Pasos para Ejecutar

1. **Abrir terminal/consola** en la carpeta del proyecto

2. **Instalar dependencias** (solo la primera vez):
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   - El sistema mostrará una URL, típicamente: `http://localhost:5173`
   - Copia esa URL y ábrela en tu navegador

5. **Usar la aplicación**:
   - Completa el formulario con los datos del paciente
   - Haz clic en "Calcular Riesgo"
   - Revisa los resultados y recomendaciones

---

## Arquitectura MVC

### Model (`/src/models/`)
- **PatientModel.ts**: Define la estructura de datos del paciente, validaciones y resultados de predicción

### View (`/src/views/`)
- **Header.tsx**: Encabezado de la aplicación
- **WelcomeSection.tsx**: Pantalla de bienvenida e instrucciones
- **PatientForm.tsx**: Formulario de captura de datos clínicos
- **ResultsDisplay.tsx**: Visualización de resultados con porcentaje de riesgo
- **ErrorDisplay.tsx**: Manejo de errores
- **Footer.tsx**: Pie de página con información del equipo

### Controller (`/src/controllers/`)
- **PredictionController.ts**: Lógica de negocio, validación de datos y cálculo de predicciones

---

##  Funcionalidades

### Datos Capturados
- Edad, género, peso y altura
- Historial familiar de cáncer
- Estado de fumador
- Consumo de alcohol
- Nivel de actividad física
- Diagnóstico previo de cáncer

### Niveles de Riesgo
- **Bajo** (0-29%): Color verde
- **Moderado** (30-49%): Color ámbar
- **Alto** (50-69%): Color naranja
- **Muy Alto** (70-100%): Color rojo

### Resultados
- Porcentaje de riesgo con barra de progreso animada
- Mensaje clínico específico
- Recomendaciones personalizadas según el nivel de riesgo

---

##  Comandos Disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la versión de producción
npm run preview

# Verificar tipos TypeScript
npm run typecheck

# Verificar código con ESLint
npm run lint
```

---

##  Tecnologías Utilizadas

- **React 18**: Librería de UI
- **TypeScript**: Tipado estático
- **Vite**: Herramienta de desarrollo
- **Tailwind CSS**: Framework de estilos
- **Lucide React**: Iconos
- **Arquitectura MVC**: Separación de responsabilidades

---

##  Solución de Problemas

### Error: "command not found: npm"
- Instala Node.js desde https://nodejs.org/

### Error al ejecutar npm install
- Elimina la carpeta `node_modules` y el archivo `package-lock.json`
- Ejecuta nuevamente `npm install`

### El navegador no abre automáticamente
- Copia manualmente la URL que aparece en la terminal
- Típicamente es: `http://localhost:5173`

### Puerto ocupado
- Si ves un error de puerto ocupado, Vite automáticamente usará el siguiente puerto disponible (5174, 5175, etc.)

---



