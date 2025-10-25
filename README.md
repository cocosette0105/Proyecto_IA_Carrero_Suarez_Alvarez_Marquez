#  Proyecto: Aplicación de Predicción de Riesgo de Cáncer

Este repositorio contiene el proyecto completo de Inteligencia Artificial: una **aplicación full-stack** para la **predicción de riesgo de cáncer**.

---

##  Integrantes del Equipo

- Carrero  
- Suarez  
- Alvarez  
- Marquez  

---

##  Estructura del Proyecto

El repositorio está organizado en tres componentes principales:

1. **`/notebooks`**  
   Contiene el Jupyter Notebook (Fase 1) con el análisis de datos, preprocesamiento y el entrenamiento del modelo de Deep Learning (MLP).

2. **`/backend`**  
   Contiene la API REST (Fase 2) desarrollada en **Flask (Python)**.  
   Carga el modelo entrenado (`.h5`) y el preprocesador (`.pkl`) para servir las predicciones.

3. **`/frontend`**  
   Contiene la Web App (Fase 3) desarrollada en **React (TypeScript)**.  
   Proporciona la interfaz de usuario para la entrada de datos y visualización de resultados.

---

##  Instrucciones de Instalación y Ejecución

Para ejecutar este proyecto, debes tener **dos terminales abiertas** al mismo tiempo:  
una para el **Back-end** y otra para el **Front-end**.

---

###  1. Back-end (API en Flask)

La API de Python se encarga de cargar el modelo y servir las predicciones.

####  Instalación (solo la primera vez)

```bash
# 1. Navega a la carpeta del backend
cd backend

# 2. Crea un entorno virtual
python -m venv venv

# 3. Activa el entorno virtual
# (En Windows PowerShell)
.env\Scriptsctivate.ps1

# 4. Instala las dependencias de Python
pip install -r requirements.txt
```

####  Ejecución (cada vez que quieras usar la app)

```bash
# 1. Asegúrate de estar en la carpeta /backend y con (venv) activado
python app.py
```

La API se ejecutará normalmente en **http://localhost:5000**

---

###  2. Front-end (App en React)

La Web App en React consume la API y muestra los resultados al usuario.

####  Instalación (solo la primera vez)

```bash
# 1. (En una NUEVA terminal) Navega a la carpeta del frontend
cd frontend

# 2. Instala las dependencias de Node.js
npm install
```

####  Ejecución (cada vez que quieras usar la app)

```bash
# 1. Asegúrate de estar en la carpeta /frontend
npm run dev
```

Esto abrirá automáticamente tu navegador en  
 **http://localhost:5173** (o el puerto que indique la terminal).

Ahora puedes usar la aplicación :D

---

##  Tecnologías Utilizadas

- **Python** / **Flask**
- **React** / **TypeScript**
- **TensorFlow / Keras**
- **Pandas**, **NumPy**, **Scikit-learn**
- **Vite** (para el entorno de desarrollo del frontend)

---

##  Notas

- Asegúrate de tener instaladas las versiones más recientes de **Python 3.10+** y **Node.js 18+**.  
- Si el navegador no se abre automáticamente, puedes acceder manualmente al enlace mostrado en la terminal.  


---

 **Proyecto desarrollado con fines académicos.**