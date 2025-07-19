🧠 About the Project
This is a practice project built with React using create-react-app. It includes a home page and a reservation page. While some features are missing (like persistent data or complete business rules), it demonstrates frontend architecture, styling, and testing patterns typically used in real-world applications.

🛠️ Tech Stack & Tools Used
Category	Description
Framework	React with functional components and Hooks
Routing	React Router to handle multiple pages and navigation
Styling	SCSS modules using BEM methodology. Also includes Chakra UI for modern UI components
Layout	Flexbox and CSS Grid
File Extensions	.jsx was used for React components, .js for utility and non-React logic
Meta & SEO	Basic meta tags, favicon, and Open Graph protocol were added for improved metadata support
Architecture	Modular structure (components/, layouts/, pages/, utils/, routes/) for better scalability and maintainability
Form Handling	A reservation form with validation and conditional time loading using local mock API methods
Testing	Some unit tests were included using Jest and @testing-library/react. Note: Chakra UI components caused setup issues and required adjustments
Create React App	The project was bootstrapped with create-react-app

🚧 Limitations & Notes
🔁 No data persistence: Data is not stored or retrieved from a real backend.

📝 Requirements for some features were not provided, so only core functionality was implemented.

⚙️ Issues were encountered when testing Chakra UI components. Chakra-related tests needed special handling.

📁 The api mock had to be manually embedded in the repo to be usable in the form.

----------------------------------
🧠 Sobre el Proyecto
Este es un proyecto de práctica construido con React utilizando create-react-app. Incluye una página de inicio y una página de reservas. Aunque algunas funcionalidades están ausentes (como persistencia de datos o reglas de negocio completas), el proyecto demuestra una arquitectura frontend modular, estilos organizados y patrones de testing comúnmente usados en aplicaciones reales.

🛠️ Tecnologías y Herramientas Utilizadas
Categoría	Descripción
Framework	React con componentes funcionales y Hooks
Ruteo	React Router para manejar múltiples páginas y navegación
Estilos	SCSS con metodología BEM. También se utilizó Chakra UI para componentes modernos de interfaz
Layout	Se utilizaron Flexbox y CSS Grid para el diseño
Extensiones	.jsx para componentes React, .js para lógica no relacionada a React
Meta & SEO	Se agregaron meta etiquetas básicas, favicon y protocolo Open Graph
Arquitectura	Estructura modular (components/, layouts/, pages/, utils/, routes/) para facilitar la escalabilidad y mantenimiento
Formulario	Formulario de reserva con validación y carga condicional de horarios usando métodos de una API mock local
Testing	Se agregaron tests unitarios usando Jest y @testing-library/react. Chakra UI requirió configuraciones especiales para los tests
Create React App	El proyecto fue creado usando create-react-app

🚧 Limitaciones y Notas
🔁 Sin persistencia de datos: los datos no se almacenan ni se recuperan desde un backend real.

📝 Faltan requisitos funcionales detallados, por lo que solo se implementó la funcionalidad principal.

⚙️ Problemas con Chakra UI: ciertos componentes causaron errores al testear y se requirieron soluciones específicas.

📁 La API mock tuvo que ser incluida manualmente en el repositorio para poder utilizarse correctamente.


<img width="483" height="640" alt="Captura de pantalla 2025-07-19 a la(s) 4 24 20 a  m" src="https://github.com/user-attachments/assets/5a4c2b1f-e3b3-41d4-b12f-946322f57621" />

## 🚀 ¿Cómo probar la app localmente?

1. Cloná este repositorio:

```bash
git clone https://github.com/CamiloJ2121/LittleLemon.git
cd LittleLemon
git checkout main  # (opcional) asegurate de estar en la rama principal

npm install

npm start

La aplicación se abrirá en http://localhost:3000



## 🚀 How to run the app locally

1. Clone this repository:

```bash
git clone https://github.com/CamiloJ2121/LittleLemon.git
cd LittleLemon
git checkout main  # (optional) make sure you're on the main branch

npm install

npm start

The application will open at http://localhost:3000.



