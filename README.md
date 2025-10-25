# Proyecto: Aplicación de Predicción de Riesgo de Cáncer

Este repositorio contiene el proyecto completo de IA, una aplicación full-stack para la predicción de riesgo de cáncer.

### Integrantes del Equipo

* Carrero
* Suarez
* Alvarez
* Marquez

---

##  Estructura del Proyecto

El repositorio está organizado en tres componentes principales:

1.  `/notebooks`: Contiene el Jupyter Notebook (Fase 1) con el análisis de datos, preprocesamiento y el entrenamiento del modelo de Deep Learning (MLP).
2.  `/backend`: Contiene la API REST (Fase 2) desarrollada en Flask (Python) que carga el modelo entrenado (`.h5`) y el preprocesador (`.pkl`) para servir las predicciones.
3.  `/frontend`: Contiene la Web App (Fase 3) desarrollada en React (TypeScript) que proporciona la interfaz de usuario para la entrada de datos y la visualización de resultados.

---

##  Instrucciones de Instalación y Ejecución

Para ejecutar este proyecto, necesitas tener **dos terminales abiertas** al mismo tiempo: una para el Back-end y otra para el Front-end.

### 1.  Back-end (API en Flask)

La API de Python es responsable de cargar el modelo y servir las predicciones.

**Instalación (solo la primera vez):**

```bash
# 1. Navega a la carpeta del backend
cd backend

# 2. Crea un entorno virtual
python -m venv venv

# 3. Activa el entorno virtual
# (En Windows PowerShell)
.\venv\Scripts\activate.ps1

# 4. Instala las dependencias de Python
pip install -r requirements.txt

Ejecución (cada vez que quieras usar la app):

Bash

# 1. Asegúrate de estar en la carpeta /backend y que (venv) esté activado
python app.py

### 2.  Front-end (App en React)
La Web App en React consume la API y muestra los resultados al usuario.

Instalación (solo la primera vez):

Bash

# 1. (En una NUEVA terminal) Navega a la carpeta del frontend
cd frontend

# 2. Instala las dependencias de Node.js
npm install

Ejecución (cada vez que quieras usar la app):

Bash

# 1. Asegúrate de estar en la carpeta /frontend
npm run dev
ℹ️ Esto abrirá automáticamente tu navegador en http://localhost:5173 (o el puerto que indique la terminal). Ahora puedes usar la aplicación.