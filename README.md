# 📚 BibliotecaNEC - Enlaces y Accesos Importantes

Una recopilación moderna, organizada y responsiva de bibliotecas digitales, cursos, herramientas de programación, software, oficios y recursos educativos. Este proyecto está diseñado con fines educativos y de difusión comunitaria **sin fines de lucro**.

---

## 🌟 Características Principales

*   **🔍 Buscador Global en Tiempo Real:** Filtra instantáneamente enlaces por título, descripción, etiquetas o URL desde una barra de búsqueda inteligente.
*   **📊 Estadísticas Dinámicas:** Indicadores visuales en la cabecera que muestran el volumen de recursos disponibles.
*   **🔒 Mi Panel (Panel de Administración):**
    *   Acceso restringido protegido por contraseña (clave por defecto para demostración/administración: `NECADM123`).
    *   Permite a los administradores agregar nuevos enlaces dinámicamente y crear nuevas secciones personalizadas sobre la marcha.
*   **📱 Diseño Premium y Responsivo (Mobile-First):** Interfaz limpia, con un estilo moderno y oscuro (glassmorphism/dark mode), tipografías cuidadas y microinteracciones fluidas adaptables a cualquier dispositivo.
*   **📂 Organización Temática Completa:**
    *   Buscadores académicos y científicos (Scribd, WorldCat, RefSeek, Springer, etc.).
    *   Plataformas de cursos gratuitos certificados (Google SkillShop, Microsoft Learn, Oracle, Cisco, freeCodeCamp, etc.).
    *   Bibliotecas en la nube de diversas disciplinas (Medicina, Literatura Clásica, Novelas, Terror, Autores Selectos).
    *   Herramientas de programación, software, oficios prácticos y megapacks de recursos.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5:** Estructura semántica completa.
*   **CSS3 (Vanilla):** Diseño adaptativo personalizado, transiciones suaves y efectos de desenfoque/gradientes modernos.
*   **JavaScript (ES6+):** Lógica del buscador en tiempo real, gestión de estado local de la sesión de administración y renderizado dinámico de enlaces.

---

## 🚀 Instalación y Uso Local

Al ser una aplicación web estática pura, no requiere procesos de compilación ni servidores complejos.

1.  Clona o descarga este repositorio:
    ```bash
    git clone https://github.com/NancyCardozo/BibliotecaNEC.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd BibliotecaNEC
    ```
3.  Abre el archivo `index.html` directamente en tu navegador web preferido (haciendo doble clic o arrastrándolo a la ventana del navegador).

---

## 🌐 Instrucciones para Despliegue en Producción

Este proyecto es ideal para desplegarse de manera gratuita en segundos:

### Opción A: Desplegar en GitHub Pages (Recomendado)
1. Sube este proyecto a tu repositorio de GitHub.
2. Ve a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En la sección **Build and deployment**, bajo **Source**, selecciona `Deploy from a branch`.
5. Selecciona la rama principal (`main` o `master`) y la carpeta `/root` (raíz). Haz clic en **Save**.
6. En un par de minutos, GitHub te proporcionará el enlace público del sitio (ej: `https://NancyCardozo.github.io/BibliotecaNEC/`).

### Opción B: Desplegar en Vercel
1. Inicia sesión en [Vercel](https://vercel.com).
2. Haz clic en **Add New** > **Project**.
3. Importa tu repositorio `BibliotecaNEC` desde GitHub.
4. Deja la configuración por defecto y haz clic en **Deploy**.
5. Vercel te asignará un subdominio público optimizado de forma inmediata.

---

## 🔒 Nota de Seguridad para el Panel
> [!NOTE]
> La validación de acceso para "Mi Panel" utiliza un método de comparación hash simple a nivel de cliente. Esto es óptimo y suficiente para entornos estáticos demostrativos, pero ten en cuenta que para entornos de producción comercial se recomienda el uso de un backend con autenticación segura (como Firebase Auth o Supabase).

---

## 🤝 Agradecimientos
Agradecemos a todos los autores y comunidades que comparten libremente estos recursos educativos. Si deseas sugerir o aportar un enlace permanente, puedes usar el formulario de aportes integrado en la aplicación.
