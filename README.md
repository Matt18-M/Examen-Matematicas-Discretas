# 📚 Generador Inteligente de Horarios Académicos

Proyecto desarrollado para el **Examen de Matemáticas Discretas** de **KrakeDev - Movilis**.

El sistema permite registrar materias, configurar restricciones y generar automáticamente horarios académicos válidos mediante la aplicación de conceptos de Matemáticas Discretas.

---

## 🎯 Objetivo

Desarrollar una aplicación web que permita generar horarios académicos inteligentes aplicando:

- Teoría de Conjuntos
- Álgebra Proposicional
- Cálculo Combinatorio
- Algoritmos de búsqueda y validación

---

# 🛠 Tecnologías utilizadas

## Frontend

- React
- React Router DOM
- CSS
- Axios

## Backend

- Node.js
- Express
- TypeScript

## Base de Datos

- PostgreSQL
- Prisma ORM

---

# ⚙ Funcionalidades

## Gestión de materias

- Registrar materias
- Editar materias
- Eliminar materias
- Listar materias

Cada materia contiene información como:

- Nombre
- Día
- Hora de inicio
- Hora de fin
- Modalidad
- Créditos
- Nivel de dificultad
- Prerrequisitos

---

## Generación inteligente de horarios

El usuario puede configurar restricciones como:

- Número de materias
- Máximo de créditos
- Máximo de materias difíciles
- Modalidad requerida

El sistema genera todas las combinaciones posibles y muestra únicamente aquellas que cumplen todas las reglas establecidas.

---

## Validaciones implementadas

Durante la generación se validan automáticamente:

- Cruces de horario
- Máximo de créditos
- Modalidad requerida
- Materias difíciles
- Prerrequisitos
- Restricciones configuradas por el usuario

---

# 📐 Aplicación de Matemáticas Discretas

El proyecto implementa los principales conceptos estudiados durante el curso.

## Teoría de Conjuntos

Se representan:

- Conjunto Universal (U)
- Conjunto Solución (S)
- Cardinalidad
- Relación de subconjuntos (S ⊆ U)

---

## Álgebra Proposicional

Cada horario es evaluado mediante reglas lógicas.

Ejemplo:

```
P = El horario cumple las restricciones

Q = El horario puede generarse

P → Q
```

Si todas las condiciones son verdaderas, el horario es considerado válido.

---

## Cálculo Combinatorio

El algoritmo genera todas las combinaciones posibles de materias y posteriormente evalúa cuáles cumplen las restricciones.

El sistema muestra:

- Combinaciones evaluadas
- Horarios válidos
- Horarios descartados

---

# 📊 Resultados

La aplicación permite visualizar:

- Estadísticas de generación
- Conceptos matemáticos aplicados
- Horarios generados
- Historial de generaciones

---

# 📂 Estructura del proyecto

```
Frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── App.jsx
│
└── package.json

Backend/
│
├── prisma/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── utils/
│
└── package.json
```

---

# 🚀 Instalación

## Backend

```bash
npm install
```

Configurar el archivo `.env`

```
DATABASE_URL=...
```

Ejecutar migraciones

```bash
npx prisma migrate dev
```

Iniciar servidor

```bash
npm run dev
```

---

## Frontend

Instalar dependencias

```bash
npm install
```

Iniciar aplicación

```bash
npm run dev
```

---

# 👨‍💻 Autor

**Mateo Molina**

Proyecto desarrollado como parte del **Examen de Matemáticas Discretas** para **KrakeDev - Movilis**.

---
