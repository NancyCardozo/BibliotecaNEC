// ============================================================
// DATOS DE LA BIBLIOTECA - ENLACES FIJOS
// ============================================================

// --- BUSCADORES Y WEBS (19 enlaces) ---
const datosBuscadores = [
    { categoria: '🔍 Buscadores', titulo: 'Scribd', enlace: 'https://es.scribd.com/home', descripcion: 'Plataforma de libros y documentos', etiquetas: ['libros'] },
    { categoria: '🔍 Buscadores', titulo: 'Descargar Scribd Gratis', enlace: 'https://scribd.vpdfs.com/', descripcion: 'Descarga documentos de Scribd gratis', etiquetas: ['scribd'] },
    { categoria: '🔍 Buscadores', titulo: '12ft.io', enlace: 'https://12ft.io/', descripcion: 'Desbloquea muros de pago', etiquetas: ['paywall'] },
    { categoria: '🔍 Buscadores', titulo: 'RefSeek', enlace: 'https://www.refseek.com', descripcion: 'Búsqueda académica. +1 billón de fuentes', etiquetas: ['académico'] },
    { categoria: '🔍 Buscadores', titulo: 'WorldCat', enlace: 'https://www.worldcat.org', descripcion: 'Busca en 20,000 bibliotecas mundiales', etiquetas: ['bibliotecas'] },
    { categoria: '🔍 Buscadores', titulo: 'Springer Link', enlace: 'https://link.springer.com', descripcion: '+10 millones de documentos científicos', etiquetas: ['ciencia'] },
    { categoria: '🔍 Buscadores', titulo: 'Bioline International', enlace: 'https://www.bioline.org.br', descripcion: 'Revistas científicas de biociencia', etiquetas: ['biociencia'] },
    { categoria: '🔍 Buscadores', titulo: 'RePEc', enlace: 'https://repec.org', descripcion: 'Publicaciones de economía y ciencia', etiquetas: ['economía'] },
    { categoria: '🔍 Buscadores', titulo: 'Science.gov', enlace: 'https://www.science.gov', descripcion: 'Buscador estatal de EE.UU. +200M artículos', etiquetas: ['ciencia'] },
    { categoria: '🔍 Buscadores', titulo: 'BASE', enlace: 'https://www.base-search.net', descripcion: 'Búsqueda académica. +100M documentos, 70% gratis', etiquetas: ['académico'] },
    { categoria: '🔍 Buscadores', titulo: 'InfoLibros', enlace: 'https://infolibros.org/libros-pdf-gratis/', descripcion: 'Libros PDF gratuitos por tema', etiquetas: ['pdf'] },
    { categoria: '🔍 Buscadores', titulo: 'El Solucionario', enlace: 'https://elsolucionario.net/economia-y-finanzas/gestion-de-operaciones/', descripcion: 'Descarga de libros de Gestión de Operaciones', etiquetas: ['solucionario'] },
    { categoria: '🔍 Buscadores', titulo: 'RUA - Universidad de Alicante', enlace: 'https://rua.ua.es/dspace/handle/10045/162', descripcion: 'Repositorio institucional de la UA', etiquetas: ['universidad'] },
    { categoria: '🔍 Buscadores', titulo: 'Project Gutenberg', enlace: 'https://www.gutenberg.org/', descripcion: 'Libros sin derechos de autor (dominio público)', etiquetas: ['clásicos'] },
    { categoria: '🔍 Buscadores', titulo: 'Inspired to Educate', enlace: 'https://inspiredtoeducate.net/inspiredtoeducate/michaels-free-book-index/', descripcion: 'Índice de libros y cursos gratuitos', etiquetas: ['libros'] },
    { categoria: '🔍 Buscadores', titulo: 'Romance Bookworms', enlace: 'https://www.romancebookworms.com/free-romance-ebooks', descripcion: 'Libros románticos gratuitos', etiquetas: ['romance'] },
    { categoria: '🔍 Buscadores', titulo: 'Readera', enlace: 'https://readera.org/', descripcion: 'Leer libros en línea', etiquetas: ['lectura'] },
    { categoria: '🔍 Buscadores', titulo: 'PDF Drive (App)', enlace: 'https://play.google.com/store/apps/details?id=com.milkyway.pdfdrive_ebooksdownload&hl=en', descripcion: 'App para descargar libros PDF', etiquetas: ['android'] },
    { categoria: '🔍 Buscadores', titulo: 'Estación de Literatura', enlace: 'https://estaciondeliteratura.blogspot.com/2019/11/coleccion-de-biliotecas-en-google-drive.html', descripcion: 'Colección de bibliotecas en Google Drive', etiquetas: ['bibliotecas'] }
];

// --- CURSOS GRATUITOS (37 enlaces) ---
const datosCursos = [
    { categoria: '🎓 Cursos', titulo: 'SkillShop', enlace: 'https://skillshop.withgoogle.com/', descripcion: 'Cursos oficiales de Google', etiquetas: ['google'] },
    { categoria: '🎓 Cursos', titulo: 'Microsoft Learn', enlace: 'https://learn.microsoft.com/es-es/training/', descripcion: 'Rutas de aprendizaje de Microsoft', etiquetas: ['microsoft'] },
    { categoria: '🎓 Cursos', titulo: 'Microsoft Cloud Skills', enlace: 'https://www.microsoft.com/es-es/cloudskillschallenge/build/registration/2022', descripcion: 'Cloud Skills Challenge', etiquetas: ['microsoft'] },
    { categoria: '🎓 Cursos', titulo: 'Oracle Learn', enlace: 'https://education.oracle.com/resources', descripcion: 'Recursos de aprendizaje de Oracle', etiquetas: ['oracle'] },
    { categoria: '🎓 Cursos', titulo: 'Meta Learn', enlace: 'https://www.facebookblueprint.com/student/catalog', descripcion: 'Cursos de marketing de Facebook e Instagram', etiquetas: ['meta'] },
    { categoria: '🎓 Cursos', titulo: 'Fundación Telefónica', enlace: 'https://www.fundaciontelefonica.co/cursos-gratis-certificados-ftm/', descripcion: 'Cursos gratuitos con certificación', etiquetas: ['telefónica'] },
    { categoria: '🎓 Cursos', titulo: 'Conecta Empleo', enlace: 'https://conectaempleo-formacion.fundaciontelefonica.com/web/ar-ciberseguridad-ftm-ed-17', descripcion: 'Curso de ciberseguridad', etiquetas: ['ciberseguridad'] },
    { categoria: '🎓 Cursos', titulo: 'Telecom Digitalers', enlace: 'https://digitalers.educacionit.com/', descripcion: 'Programa de formación en tecnología', etiquetas: ['telecom'] },
    { categoria: '🎓 Cursos', titulo: 'Capacitate para el Empleo', enlace: 'https://capacitateparaelempleo.org/', descripcion: 'Cursos de oficios y habilidades laborales', etiquetas: ['empleo'] },
    { categoria: '🎓 Cursos', titulo: 'Aprende.org', enlace: 'https://aprende.org/aprende', descripcion: 'Plataforma educativa de la Fundación Carlos Slim', etiquetas: ['educación'] },
    { categoria: '🎓 Cursos', titulo: 'IBM Training', enlace: 'https://www.ibm.com/training/free', descripcion: 'Cursos gratuitos de IBM', etiquetas: ['ibm'] },
    { categoria: '🎓 Cursos', titulo: 'Soy Henry', enlace: 'https://www.soyhenry.com/curso-python', descripcion: 'Curso gratuito de Python', etiquetas: ['python'] },
    { categoria: '🎓 Cursos', titulo: 'Santander Open Academy', enlace: 'https://app.santanderopenacademy.com/es/', descripcion: 'Cursos gratuitos de Santander', etiquetas: ['santander'] },
    { categoria: '🎓 Cursos', titulo: 'Santander Learn ChatGPT 2024', enlace: 'https://app.santanderopenacademy.com/es/program/learn-chatgpt-2024', descripcion: 'Curso de ChatGPT 2024', etiquetas: ['chatgpt'] },
    { categoria: '🎓 Cursos', titulo: 'Claseflix', enlace: 'https://claseflix.io/', descripcion: 'Plataforma de cursos en video', etiquetas: ['cursos'] },
    { categoria: '🎓 Cursos', titulo: 'FreeCodeCamp', enlace: 'https://www.freecodecamp.org/news/free-certificates/', descripcion: 'Certificaciones gratuitas de programación', etiquetas: ['programación'] },
    { categoria: '🎓 Cursos', titulo: 'Diagonal +45', enlace: 'https://diagonal.org.ar/Reinvencion-mas-45/', descripcion: 'Programa de inserción laboral para mayores de 45', etiquetas: ['empleo'] },
    { categoria: '🎓 Cursos', titulo: 'LinkedIn Learning', enlace: 'https://opportunity.linkedin.com/es-es/skills-for-in-demand-jobs', descripcion: 'Itinerarios de aprendizaje', etiquetas: ['linkedin'] },
    { categoria: '🎓 Cursos', titulo: 'Silver Tech', enlace: 'https://www.soysilvertech.org/', descripcion: 'Plataforma de cursos para mayores de 50', etiquetas: ['silvertech'] },
    { categoria: '🎓 Cursos', titulo: 'Globant University', enlace: 'https://more.globant.com/becas-code-your-future-globant-university', descripcion: 'Becas Globant University', etiquetas: ['globant'] },
    { categoria: '🎓 Cursos', titulo: 'Guayerd - IBM Data Analytics', enlace: 'https://www.guayerd.com/es/ibm-data-analytics/', descripcion: 'Curso de IBM Data Analytics', etiquetas: ['ibm'] },
    { categoria: '🎓 Cursos', titulo: 'Platzi', enlace: 'https://platzi.com/home/', descripcion: 'Cursos de tecnología, diseño y negocios', etiquetas: ['platzi'] },
    { categoria: '🎓 Cursos', titulo: 'Oracle Next Education', enlace: 'https://www.oracle.com/lad/education/oracle-next-education/', descripcion: 'Becas Oracle (2 veces al año)', etiquetas: ['oracle'] },
    { categoria: '🎓 Cursos', titulo: 'Buenos Aires Aprende', enlace: 'https://agenciadeaprendizaje.bue.edu.ar/curso/programador/', descripcion: 'Curso de programación', etiquetas: ['buenosaires'] },
    { categoria: '🎓 Cursos', titulo: 'Argentina Programa', enlace: 'https://www.argentina.gob.ar/economia/conocimiento/argentina-programa', descripcion: 'Programa nacional de formación en programación', etiquetas: ['argentina'] },
    { categoria: '🎓 Cursos', titulo: 'Cisco SkillsForAll', enlace: 'https://skillsforall.com/career-path/cybersecurity', descripcion: 'Ruta de ciberseguridad de Cisco', etiquetas: ['cisco'] },
    { categoria: '🎓 Cursos', titulo: 'Cisco Networking Academy', enlace: 'https://www.netacad.com/', descripcion: 'Cursos de redes, ciberseguridad y IoT', etiquetas: ['cisco'] },
    { categoria: '🎓 Cursos', titulo: 'ATL Academy', enlace: 'https://youtu.be/Np1jzbJkwbY', descripcion: 'Video de ATL Academy', etiquetas: ['youtube'] },
    { categoria: '🎓 Cursos', titulo: 'Capacita DEV', enlace: 'https://capacitadev.teachable.com/courses', descripcion: 'Fundamentos de programación', etiquetas: ['programación'] },
    { categoria: '🎓 Cursos', titulo: 'Udemy AutoCAD', enlace: 'https://www.udemy.com/course/introduccion-al-autocad-basico-2d/', descripcion: 'Curso de AutoCAD 2D', etiquetas: ['autocad'] },
    { categoria: '🎓 Cursos', titulo: 'Google HTML', enlace: 'https://learndigital.withgoogle.com/activate/course/web-development-I', descripcion: 'Curso de desarrollo web I', etiquetas: ['html'] },
    { categoria: '🎓 Cursos', titulo: 'OpenBootcamp', enlace: 'https://open-bootcamp.com/cursos', descripcion: 'Bootcamps gratuitos de programación', etiquetas: ['bootcamp'] },
    { categoria: '🎓 Cursos', titulo: 'Coursera', enlace: 'https://www.coursera.org/courses?query=free', descripcion: 'Cursos universitarios gratuitos', etiquetas: ['universidad'] },
    { categoria: '🎓 Cursos', titulo: 'Cursa', enlace: 'https://cursa.app/es', descripcion: 'Cursos con certificados', etiquetas: ['cursos'] },
    { categoria: '🎓 Cursos', titulo: 'ULP Virtual', enlace: 'https://virtual.ulp.edu.ar/Oferta.aspx?Tipo=2', descripcion: 'Cursos gratuitos de la ULP', etiquetas: ['ulp'] },
    { categoria: '🎓 Cursos', titulo: 'TodoCode Academy', enlace: 'https://todocodeacademy.com/', descripcion: 'Academia de programación', etiquetas: ['programación'] },
    { categoria: '🎓 Cursos', titulo: 'Web.dev (Google)', enlace: 'https://web.dev/learn/accessibility', descripcion: 'Curso de accesibilidad web de Google', etiquetas: ['accesibilidad'] }
];

// --- LIBROS POR CATEGORÍA (92 enlaces) ---
const datosLibros = [
    // Medicina (11)
    { categoria: '🩺 Medicina y Salud', titulo: 'Biblioteca de Medicina', enlace: 'https://drive.google.com/drive/folders/1hdHqaxQNi8tm-Fk86fpsHFZennA8roKH', descripcion: '+1200 libros de todas las especialidades médicas', etiquetas: ['medicina'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Medicina por Tema', enlace: 'https://drive.google.com/drive/u/0/folders/1C5RY3LDDtLxMokIC1UXEM1dg7SCbwZS9', descripcion: 'Libros de medicina clasificados por especialidad', etiquetas: ['medicina'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Anatomía', enlace: 'https://drive.google.com/drive/folders/1iMuSRUhjxABW01ZFvb5BvILbe3iN8RVz?usp=drive_link', descripcion: 'Libros de anatomía humana con ilustraciones', etiquetas: ['anatomía'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Nutrición', enlace: 'https://drive.google.com/drive/u/0/folders/1mhHYRokbWumykVm72z-CuN53d1Duvr80', descripcion: 'Libros de nutrición y dietética', etiquetas: ['nutrición'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Primeros Auxilios', enlace: 'https://drive.google.com/drive/folders/16EH179_kGxcR_rrEa03-Eq-epJCn5d3o?usp=drive_link', descripcion: 'Manuales y guías de primeros auxilios', etiquetas: ['primerosauxilios'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Bioquímica', enlace: 'https://drive.google.com/drive/mobile/folders/1R0BJQvmUM8dqymJ8si5QyNO0-YJS3b9X', descripcion: 'Libros de bioquímica', etiquetas: ['bioquímica'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Fisioterapia', enlace: 'https://drive.google.com/drive/mobile/folders/1j9RgQoF5PmLdI0Sip7jOPEetud0dt6EM', descripcion: 'Libros de fisioterapia y kinesiología', etiquetas: ['fisioterapia'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Odontología', enlace: 'https://drive.google.com/drive/folders/1VzxFGsJQqvEkt6JAAL61R6Wv8cOjIdRO', descripcion: 'Biblioteca virtual de odontología', etiquetas: ['odontología'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Podología', enlace: 'https://drive.google.com/drive/folders/1S5ETuoDjAyasdNOHdaPw5Tz2pOfwWMo8', descripcion: 'Libros de podología', etiquetas: ['podología'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'Terapia Ocupacional', enlace: 'https://drive.google.com/drive/folders/19fSwvzBJ6XakousJ9Q5htaugfve2ck-l', descripcion: 'Libros de terapia ocupacional', etiquetas: ['terapiaocupacional'] },
    { categoria: '🩺 Medicina y Salud', titulo: 'DSM-5', enlace: 'https://www.federaciocatalanatdah.org/wp-content/uploads/2018/12/dsm5-manualdiagnsticoyestadisticodelostrastornosmentales-161006005112.pdf', descripcion: 'Manual Diagnóstico DSM-5', etiquetas: ['psiquiatría'] },
    // Stephen King (2)
    { categoria: '📖 Stephen King', titulo: 'Stephen King (Completo)', enlace: 'https://drive.google.com/drive/u/0/folders/1bLNq9Tpflhdlwx2oxzwfSJXHdk-wUOrn', descripcion: 'Colección completa de novelas de Stephen King', etiquetas: ['stephenking'] },
    { categoria: '📖 Stephen King', titulo: 'Stephen King (Drive móvil)', enlace: 'https://drive.google.com/drive/mobile/folders/1gIhXLL-T4YwRaTeA96AedjiY07oy1ips/1bLNq9Tpflhdlwx2oxzwfSJXHdk-wUOrn', descripcion: 'Colección completa de Stephen King (vista móvil)', etiquetas: ['stephenking'] },
    // Terror (1)
    { categoria: '👻 Terror y Suspenso', titulo: 'Terror y Suspenso', enlace: 'https://drive.google.com/drive/mobile/folders/0Bym9ZcBnsh9wYVJ2WkZWTUprUTQ', descripcion: 'Colección de libros de terror y suspenso', etiquetas: ['terror'] },
    // Novelas Románticas (5)
    { categoria: '❤️ Novelas Románticas', titulo: 'Novelas Románticas (búsqueda)', enlace: 'https://novelas4fan.com/', descripcion: 'Sitio web de búsqueda de novelas románticas', etiquetas: ['romance'] },
    { categoria: '❤️ Novelas Románticas', titulo: 'Biblioteca Romántica', enlace: 'https://drive.google.com/drive/folders/0BxRqCUOkMtQyemNEeWRpbm84UE0', descripcion: 'Biblioteca de novelas románticas', etiquetas: ['romance'] },
    { categoria: '❤️ Novelas Románticas', titulo: 'Libros y Novelas 1', enlace: 'https://drive.google.com/drive/mobile/folders/16vqMz_3p5uYKLCZ7tKr1JLNac2LGJTe2', descripcion: 'Colección de libros y novelas', etiquetas: ['novelas'] },
    { categoria: '❤️ Novelas Románticas', titulo: 'Serie Juveniles y Románticos', enlace: 'https://drive.google.com/drive/mobile/folders/1ZHdfxklnGG_j6tk590bmSb2JZZLVeAqu', descripcion: 'Series juveniles y románticas', etiquetas: ['juvenil'] },
    { categoria: '❤️ Novelas Románticas', titulo: 'Best Seller y Thrillers', enlace: 'https://drive.google.com/drive/folders/0BxRqCUOkMtQyRU4yb1lVeUFiT0U', descripcion: 'Colección de best sellers y thrillers', etiquetas: ['thriller'] },
    // Autores Selectos (8)
    { categoria: '✍️ Autores Selectos', titulo: 'Autores Selectos', enlace: 'https://drive.google.com/drive/folders/1l6XcKYFklfvyP_HsSbstxmuGoyR-B-T5', descripcion: 'Obras de autores selectos', etiquetas: ['autores'] },
    { categoria: '✍️ Autores Selectos', titulo: 'Libros Radioactivos por autor', enlace: 'https://drive.google.com/drive/folders/1-2R_p3f8XbnDMcJG6f2NnaPvRJ5hLSZK', descripcion: 'Libros organizados por autor', etiquetas: ['autores'] },
    { categoria: '✍️ Autores Selectos', titulo: 'Biblioteca de Letras Clásicas', enlace: 'https://drive.google.com/drive/folders/1_FHZylxzBI5xbelEbs9NMjyO4gtGPLUt', descripcion: 'Literatura clásica universal', etiquetas: ['clásicos'] },
    { categoria: '✍️ Autores Selectos', titulo: 'Libros Radioactivos 2.0', enlace: 'https://drive.google.com/drive/folders/1-2R_p3f8XbnDMcJG6f2NnaPvRJ5hLSZK?usp=drive_link', descripcion: 'Libros radioactivos versión 2.0 por autor', etiquetas: ['autores'] },
    { categoria: '✍️ Autores Selectos', titulo: 'Colección Mega Pack Libros', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1bdTaQqWDhh0bDYqObw7DOa5ntgDtkYuh', descripcion: 'Mega colección de libros variados', etiquetas: ['megacolección'] },
    { categoria: '✍️ Autores Selectos', titulo: 'Mega Pack Libros por autor', enlace: 'https://mega.nz/folder/g6I0GRLL#mDr5-0LuY-4YIkWYdIjlog/folder/JyBklbbI', descripcion: 'Mega pack de libros por autor y temas', etiquetas: ['megapack'] },
    { categoria: '✍️ Autores Selectos', titulo: 'Otras Lecturas', enlace: 'https://drive.google.com/drive/folders/1msSklgBffl0xY3LfRC9p02sheEKGb5rW?usp=drive_link', descripcion: 'Colección de otras lecturas', etiquetas: ['variados'] },
    { categoria: '✍️ Autores Selectos', titulo: 'Librería Digital', enlace: 'https://drive.google.com/drive/folders/1X-Gr28k6Qeft2DR2NZOkSPZadb_Y-g2z?usp=drive_link', descripcion: 'Librería digital con diversos títulos', etiquetas: ['librería'] },
    // Clásicos (3)
    { categoria: '📜 Clásicos de la Literatura', titulo: 'Clásicos en Español', enlace: 'https://drive.google.com/drive/folders/0B5hOzUyZeJ3JU21iWW9BUU4zWGs', descripcion: 'Grandes obras de la literatura universal en español', etiquetas: ['clásicos'] },
    { categoria: '📜 Clásicos de la Literatura', titulo: 'Biblioteca de Letras Clásicas', enlace: 'https://drive.google.com/drive/folders/1_FHZylxzBI5xbelEbs9NMjyO4gtGPLUt', descripcion: 'Letras clásicas de la literatura universal', etiquetas: ['clásicos'] },
    { categoria: '📜 Clásicos de la Literatura', titulo: 'Diccionarios y Apuntes de Gramática', enlace: 'https://drive.google.com/drive/folders/1REvMirWVbxiMXvh4QpdgWd56Og8FNUZZ?usp=drive_link', descripcion: 'Diccionarios y apuntes de gramática', etiquetas: ['gramática'] },
    // Sagas (6)
    { categoria: '⚔️ Sagas y Ficción', titulo: 'Star Wars', enlace: 'https://drive.google.com/drive/u/0/folders/1o82ze7d9L1dnDkbVIhlUA44DER9V-BLv', descripcion: 'Novelas y enciclopedias de Star Wars', etiquetas: ['starwars'] },
    { categoria: '⚔️ Sagas y Ficción', titulo: 'La Historia de la Tierra Media', enlace: 'https://drive.google.com/drive/mobile/folders/1C9oNU-vgeqSAiZLr4lw_JVBadqqKuzl7', descripcion: 'La historia de la Tierra Media', etiquetas: ['tolkien'] },
    { categoria: '⚔️ Sagas y Ficción', titulo: 'La Historia del Señor de los Anillos', enlace: 'https://drive.google.com/drive/mobile/folders/1MyLoPUovWG3-wI5jau44YPd7tYMxUk9I', descripcion: 'La historia del Señor de los Anillos', etiquetas: ['tolkien'] },
    { categoria: '⚔️ Sagas y Ficción', titulo: 'Los Gatos Guerreros', enlace: 'https://drive.google.com/drive/folders/1YJtMIk-TXiILp4ePOjr1iR6IHK2C_oQX', descripcion: 'Saga completa de Los Gatos Guerreros', etiquetas: ['gatosguerreros'] },
    { categoria: '⚔️ Sagas y Ficción', titulo: 'La Biblia de los Caídos - Saga', enlace: 'https://drive.google.com/drive/folders/1R7F2aoahBLQTov5YKTaCeQqsumYUCnkx', descripcion: 'Toda la saga de La Biblia de los Caídos', etiquetas: ['saga'] },
    { categoria: '⚔️ Sagas y Ficción', titulo: 'Biblioteca Universitaria (MEGA)', enlace: 'https://mega.nz/folder/8Fs1lT6J#3leNMvWbFV8cbSCrPI2w0g', descripcion: 'Biblioteca universitaria con diversos temas', etiquetas: ['universidad'] },
    // Bibliotecas Varias (12)
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Biblioteca muchos temas', enlace: 'https://drive.google.com/drive/folders/1prYwyloc52i3JX6CPntGNqKh05qb4w7Y', descripcion: 'Biblioteca con libros de múltiples temas', etiquetas: ['biblioteca'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Pack de Libros Varios *', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1908wXS9fmo793D-TytqGNDXnuDDe9CSG', descripcion: 'Pack de libros varios', etiquetas: ['pack'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros 1', enlace: 'https://drive.google.com/drive/mobile/folders/1KtUZ5AEcLO5TMthMa5sV__J47KzgfjtJ', descripcion: 'Colección de libros', etiquetas: ['libros'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros 2', enlace: 'https://drive.google.com/drive/mobile/folders/1U5pO5F57tJo12WmYVjJgt0wuIqF7tK-h', descripcion: 'Colección de libros', etiquetas: ['libros'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros Dummies *', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1908wXS9fmo793D-TytqGNDXnuDDe9CSG/1Kre1iXIlXTSa-arI85t-_fOwzW-vorSg', descripcion: 'Libros Dummies', etiquetas: ['dummies'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros * 3', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1T4mVWiXthR7YyV8spNH4GJFv9gJdBIFt', descripcion: 'Colección de libros', etiquetas: ['libros'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Paquete de Libros', enlace: 'https://drive.google.com/drive/mobile/folders/1aDQPmGNfwDrNCMOl3hE6zLThoZGdLb4F', descripcion: 'Paquete de libros', etiquetas: ['paquete'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Pack de Libros por autor', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1908wXS9fmo793D-TytqGNDXnuDDe9CSG/1leL8AXYZa5BIRgekxU3pU1X3L8oL2T9V', descripcion: 'Pack de libros por autor', etiquetas: ['autores'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros por tema - Biblioteca', enlace: 'https://drive.google.com/drive/folders/1p3vysRaeUmYCbU1E3z3p-XSd_wsLXdOA', descripcion: 'Libros organizados por tema', etiquetas: ['temas'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros de todo tipo', enlace: 'https://drive.google.com/drive/folders/1PmfZzxG8CaHFLdZcmMwvkbem1TqB9DrF', descripcion: 'Libros de todo tipo', etiquetas: ['variados'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros Censurados', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1hHsXEd_SDRK5_K82toWwRdxGwfUB_WmE', descripcion: 'Colección de libros censurados', etiquetas: ['censurados'] },
    { categoria: '🏛️ Bibliotecas Varias', titulo: 'Libros Varios 2', enlace: 'https://drive.google.com/drive/folders/1C2VSpOVDOyNm05SHFYJGkcQo9Q4-ba5M?usp=drive_link', descripcion: 'Libros varios adicionales', etiquetas: ['variados'] },
    // Psicología (6)
    { categoria: '🧠 Psicología', titulo: 'Biblioteca Digital de Psicología', enlace: 'https://drive.google.com/drive/mobile/folders/0B1JxsNRn6dXYYWlsNmJpajlyUjA', descripcion: 'Amplia biblioteca de textos de psicología', etiquetas: ['psicología'] },
    { categoria: '🧠 Psicología', titulo: 'Psicología Criminalística y Forense', enlace: 'https://drive.google.com/drive/folders/1FhbxdJtylzTABclo8IMF5guMOWqfy9A2', descripcion: 'Libros de psicología criminalística y forense', etiquetas: ['psicologíaforense'] },
    { categoria: '🧠 Psicología', titulo: 'Psicoterapia', enlace: 'https://drive.google.com/drive/mobile/folders/1ykDxcf0l83oMTs8eaKMKwVaaehOlOvTl', descripcion: 'Libros de psicoterapia', etiquetas: ['psicoterapia'] },
    { categoria: '🧠 Psicología', titulo: 'Autoayuda', enlace: 'https://drive.google.com/drive/mobile/folders/1nP8OIbXaKzKtODkQRxsbsIfu7pIS2Epm', descripcion: 'Libros de autoayuda y superación personal', etiquetas: ['autoayuda'] },
    { categoria: '🧠 Psicología', titulo: 'Walter Riso', enlace: 'https://drive.google.com/drive/folders/1ObcUid6sU0NjWkaalyFQuZcxUfYM3H-N', descripcion: 'Colección de libros de Walter Riso', etiquetas: ['walterriso'] },
    { categoria: '🧠 Psicología', titulo: 'Osho', enlace: 'https://drive.google.com/drive/folders/1VpMQ29r1-_00EDhbbrfF2z3WPH0_hNaw', descripcion: 'Libros de Osho sobre espiritualidad', etiquetas: ['osho'] },
    // Ciencias (6)
    { categoria: '🔬 Ciencias Exactas', titulo: 'Cálculo I', enlace: 'https://drive.google.com/file/d/1TdEi5g7jhCi6MRl3huIAZRq2B2hBz4f9/view', descripcion: 'Curso completo de cálculo diferencial', etiquetas: ['cálculo'] },
    { categoria: '🔬 Ciencias Exactas', titulo: 'Cálculo II', enlace: 'https://drive.google.com/file/d/1TeTaQNHQaR7w_DLQIVanbqM5jZvz2Ho6/view', descripcion: 'Curso completo de cálculo integral', etiquetas: ['cálculo'] },
    { categoria: '🔬 Ciencias Exactas', titulo: 'Álgebra', enlace: 'https://drive.google.com/drive/folders/1Dd45fWzuN-pHRjklSH1fnRSuiOg0GZJl?usp=drive_link', descripcion: 'Libros de álgebra', etiquetas: ['álgebra'] },
    { categoria: '🔬 Ciencias Exactas', titulo: 'Química General', enlace: 'https://drive.google.com/drive/folders/0B4FyKIqw2S50N0l4LVdmQTlrZG8', descripcion: 'Libros de química general e inorgánica', etiquetas: ['química'] },
    { categoria: '🔬 Ciencias Exactas', titulo: 'Historia Universal XXI', enlace: 'https://drive.google.com/drive/mobile/folders/1GVedQcx2BmSHcNmJYopcb3PN0rSZnU51', descripcion: '36 volúmenes de historia universal', etiquetas: ['historia'] },
    { categoria: '🔬 Ciencias Exactas', titulo: 'Historia de América Latina', enlace: 'https://drive.google.com/drive/mobile/folders/1PbWXvbYjjSlXC6702Okd91CpL2sT1Um3', descripcion: 'Libros de historia de América Latina', etiquetas: ['américalatina'] },
    // Idiomas (4)
    { categoria: '🌐 Idiomas', titulo: 'Inglés (Curso Completo)', enlace: 'https://drive.google.com/drive/folders/1uX2NYpPOvvaLy0X5081K2vcb-GQZZGV-', descripcion: 'Cursos completos de inglés', etiquetas: ['inglés'] },
    { categoria: '🌐 Idiomas', titulo: 'Inglés Sin Barreras', enlace: 'https://drive.google.com/drive/folders/1zhSVf6_Lu7J3kuHzbmKkrLOGE3-BdqOr', descripcion: 'Método completo de inglés Sin Barreras', etiquetas: ['ingles'] },
    { categoria: '🌐 Idiomas', titulo: 'Idiomas (Varios)', enlace: 'https://drive.google.com/drive/folders/1zLbyCO3fPOpveSNcPN_roVoHUnwqzJPU', descripcion: 'Cursos de varios idiomas', etiquetas: ['idiomas'] },
    { categoria: '🌐 Idiomas', titulo: 'Oxford (Inglés)', enlace: 'https://drive.google.com/drive/folders/184rw5uX2g9l7ED9u_po5AOrC929wsBg9', descripcion: 'Material de Oxford para aprender inglés', etiquetas: ['oxford'] },
    // Gastronomía (5)
    { categoria: '🍳 Gastronomía', titulo: 'Cocina', enlace: 'https://drive.google.com/drive/mobile/folders/1_f0OFnY1WQd4MlBkhA1WLNsngsPstugL', descripcion: 'Libros de cocina y recetas', etiquetas: ['cocina'] },
    { categoria: '🍳 Gastronomía', titulo: 'Panadería', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/15N-r_hcoNr2eRRkv7uIAuYbZyj4vSRPZ', descripcion: 'Cursos de panadería', etiquetas: ['panadería'] },
    { categoria: '🍳 Gastronomía', titulo: 'Helados Cremosos', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1XX3nF9g9WYi696p0Tnv7K0RqEARViTiS', descripcion: 'Curso de helados cremosos', etiquetas: ['helados'] },
    { categoria: '🍳 Gastronomía', titulo: 'Cerveza Artesanal', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/12TWQIWnsNdQVl1ZrFPUQeGExcdOTzRgT', descripcion: 'Curso de cerveza artesanal', etiquetas: ['cerveza'] },
    { categoria: '🍳 Gastronomía', titulo: 'Parrilla', enlace: 'https://drive.google.com/drive/folders/1ChtyIdqWnS79fUysn16R_VnnQoLrg8H1', descripcion: 'Libros y guías de parrilla', etiquetas: ['parrilla'] },
    // Infantil (5)
    { categoria: '👶 Infantil', titulo: 'Libros Infantiles', enlace: 'https://drive.google.com/drive/folders/1aFXs4YhCPB9TwemhXaPJ0Hv0SiVrv41A', descripcion: 'Cuentos y libros para niños', etiquetas: ['infantil'] },
    { categoria: '👶 Infantil', titulo: 'Material Didáctico', enlace: 'https://drive.google.com/drive/folders/1qRuNpnoqXAEvKT44lt5EOsn6fooqZNXD', descripcion: 'Recursos educativos para niños', etiquetas: ['didáctico'] },
    { categoria: '👶 Infantil', titulo: 'Caligrafía', enlace: 'https://drive.google.com/drive/folders/1GJBDseNfKD3yxcEdmCH50fCx41w6OOtw', descripcion: 'Ejercicios de caligrafía', etiquetas: ['caligrafía'] },
    { categoria: '👶 Infantil', titulo: 'Para Colorear', enlace: 'https://drive.google.com/drive/folders/1jtJv2-vBllE3cMbzFz4DljDpd4YhncgO', descripcion: 'Libros para colorear y agendas', etiquetas: ['colorear'] },
    { categoria: '👶 Infantil', titulo: 'Kinder y Primaria', enlace: 'https://drive.google.com/drive/folders/1J5BHxiaKvd8CL8i123DYBbEEcXVmQ9wc', descripcion: 'Material para kinder y primaria', etiquetas: ['kinder'] },
    // Arquitectura (6)
    { categoria: '🏛️ Arquitectura y Diseño', titulo: 'AutoCAD', enlace: 'https://drive.google.com/drive/folders/1vqO2bmCUkqc_QX6Gdaslq5kpOeW_05Y2', descripcion: 'Curso completo de AutoCAD', etiquetas: ['autocad'] },
    { categoria: '🏛️ Arquitectura y Diseño', titulo: 'Archicad', enlace: 'https://drive.google.com/drive/folders/1JLdsy60k8Tv-fHAU7yUHUKfE11j2_OTL', descripcion: 'Curso de Archicad', etiquetas: ['archicad'] },
    { categoria: '🏛️ Arquitectura y Diseño', titulo: 'Diseño Gráfico', enlace: 'https://drive.google.com/drive/folders/1PxeoEZW1fi28Chu_L2lppfxenMbMpwF-', descripcion: 'Cursos de diseño gráfico', etiquetas: ['diseñográfico'] },
    { categoria: '🏛️ Arquitectura y Diseño', titulo: 'Fotografía', enlace: 'https://drive.google.com/drive/folders/181lvAW8TQQlwMJfRIprbP3zdHjdBHUyn', descripcion: 'Libros y cursos de fotografía', etiquetas: ['fotografía'] },
    { categoria: '🏛️ Arquitectura y Diseño', titulo: 'Dibujo Artístico', enlace: 'https://drive.google.com/drive/folders/1nbmZlBRL_jW0-PFRgP1gCDn_B6lNooTQ', descripcion: 'Técnicas de dibujo artístico', etiquetas: ['dibujo'] },
    { categoria: '🏛️ Arquitectura y Diseño', titulo: 'Adobe Illustrator', enlace: 'https://mega.nz/folder/d9EVCIyK#aOiqfgx30eMB2XVbhjGl6Q/folder/p1s0jQAa', descripcion: 'Cursos de Adobe Illustrator', etiquetas: ['illustrator'] },
    // Finanzas (6)
    { categoria: '💰 Finanzas y Negocios', titulo: 'Marketing Digital', enlace: 'https://drive.google.com/drive/folders/1jcuZOY0aK8AXmbz-6rcdtyFExfBItZWV', descripcion: 'Cursos y libros de marketing digital', etiquetas: ['marketing'] },
    { categoria: '💰 Finanzas y Negocios', titulo: 'Finanzas', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1a9Am3o99xzz-Ba_Y6P0Nn8GmOURaDCmT', descripcion: 'Libros de finanzas', etiquetas: ['finanzas'] },
    { categoria: '💰 Finanzas y Negocios', titulo: 'Negocios', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1-ekLsmXkeFBoTag8wXJv61rmopxMqkix', descripcion: 'Libros de negocios y emprendimiento', etiquetas: ['negocios'] },
    { categoria: '💰 Finanzas y Negocios', titulo: 'Robert Kiyosaki', enlace: 'https://drive.google.com/drive/folders/1kit2FedoSVuoLGUVfleZELSEbOH1z8Ln', descripcion: 'Colección de libros de Robert Kiyosaki', etiquetas: ['kiyosaki'] },
    { categoria: '💰 Finanzas y Negocios', titulo: 'John C. Maxwell - Liderazgo', enlace: 'https://mega.nz/folder/f4lFAJpD#1puWI9hF-8hyLt9ZD-MKgw', descripcion: 'Libros de liderazgo de John C. Maxwell', etiquetas: ['liderazgo'] },
    { categoria: '💰 Finanzas y Negocios', titulo: 'Brian Tracy', enlace: 'https://fliphtml5.com/xggkp/tifk/BRIAN_TRACY_-_PROGRAMA_FENIX_COMPLETO/', descripcion: 'Programa Fénix completo de Brian Tracy', etiquetas: ['briantracy'] },
    // Esoterismo (6)
    { categoria: '🔮 Esoterismo y Espiritualidad', titulo: 'Brujería', enlace: 'https://drive.google.com/drive/mobile/folders/1OG6yXEKg-InyYnF7L7kHEJgrDlhFSYgL', descripcion: 'Libros de brujería', etiquetas: ['brujería'] },
    { categoria: '🔮 Esoterismo y Espiritualidad', titulo: 'Alquimia', enlace: 'https://drive.google.com/drive/folders/1V9XcUUpcfC430gPV7Xjeo5i9atKY7fF6', descripcion: 'Libros de alquimia', etiquetas: ['alquimia'] },
    { categoria: '🔮 Esoterismo y Espiritualidad', titulo: 'Astrología', enlace: 'https://drive.google.com/drive/mobile/folders/1uYcbqk8eTDlobOX5auZ3YehZW46xHf-L', descripcion: 'Tratados de astrología', etiquetas: ['astrología'] },
    { categoria: '🔮 Esoterismo y Espiritualidad', titulo: 'Gnosis', enlace: 'https://drive.google.com/drive/folders/0BxRqCUOkMtQySkM3cDJsRmF1b2M', descripcion: 'Biblioteca de gnosis', etiquetas: ['gnosis'] },
    { categoria: '🔮 Esoterismo y Espiritualidad', titulo: 'Biblioteca de Ángeles', enlace: 'https://drive.google.com/drive/folders/0BxRqCUOkMtQyYzVvV1V1LS1sTzA', descripcion: 'Libros sobre ángeles y espiritualidad', etiquetas: ['ángeles'] },
    { categoria: '🔮 Esoterismo y Espiritualidad', titulo: 'Biblioteca Mágica', enlace: 'https://drive.google.com/drive/folders/12GBHWbR6eoMW-IcNrthSrgZ_VaLF6DmU', descripcion: 'Colección de libros de magia y ocultismo', etiquetas: ['magia'] },
    // Bibliotecas Generales (5)
    { categoria: '🏛️ Bibliotecas Generales', titulo: 'Biblioteca Universitaria', enlace: 'https://drive.google.com/drive/folders/13CaXUvnKyrcuN9DnQV5m_xmlhpvI4Mr5', descripcion: '+100 carpetas y 2600 recursos universitarios', etiquetas: ['universidad'] },
    { categoria: '🏛️ Bibliotecas Generales', titulo: '2000 Libros', enlace: 'https://drive.google.com/drive/folders/1QfnLUAFO8o_Dc4Fnv8NZhN_EG0kIPboQ', descripcion: 'Colección de 2000 libros de diversos temas', etiquetas: ['colección'] },
    { categoria: '🏛️ Bibliotecas Generales', titulo: '5000 Libros', enlace: 'https://drive.google.com/drive/folders/1m-PnFl2aVls-Pt_ZWKyALhMK3WB5Lrn4', descripcion: 'Colección de 5000 libros', etiquetas: ['colección'] },
    { categoria: '🏛️ Bibliotecas Generales', titulo: 'Mega Colección PDFs', enlace: 'https://drive.google.com/drive/folders/0B278xFAoqz8hbTd6bFRQTjlOdlE', descripcion: 'Mega colección de PDFs de diferentes temas', etiquetas: ['pdf'] },
    { categoria: '🏛️ Bibliotecas Generales', titulo: 'Biblioteca Varios Temas', enlace: 'https://drive.google.com/drive/folders/1prYwyloc52i3JX6CPntGNqKh05qb4w7Y', descripcion: 'Biblioteca con libros de múltiples temas', etiquetas: ['biblioteca'] }
];

// --- PROGRAMACIÓN Y DESARROLLO (17 enlaces) ---
const datosProgramacion = [
    { categoria: '📁 Repositorios y Drives', titulo: 'EBOOK - Todos los lenguajes', enlace: 'https://drive.google.com/drive/folders/1V-01GcNjg4MbaN8w5dyud_2TfjMU2etV?usp=drive_link', descripcion: 'Ebooks de todos los lenguajes', etiquetas: ['ebook'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Recursos de Programación', enlace: 'https://drive.google.com/drive/folders/1H6Mwp4GI04HuuKzbTGWmwjCXN3X1NP0y?usp=drive_link', descripcion: 'Recursos de programación', etiquetas: ['recursos'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Información y Cursos', enlace: 'https://elhacker.info/Cursos/', descripcion: 'Muchísimos cursos e información', etiquetas: ['cursos'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Programación Drive 1', enlace: 'https://drive.google.com/drive/folders/1R1euWYo3BTCQerkVUn_Gx1TFFfKfuUXt?usp=drive_link', descripcion: 'Libros de programación', etiquetas: ['libros'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Programación Drive 2', enlace: 'https://drive.google.com/drive/mobile/folders/10Ep2bpQNkDP4v9GdE4cnmEHmlg0PRKRW?usp=drive_link', descripcion: 'Material de programación', etiquetas: ['programación'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Programación Drive 3', enlace: 'https://drive.google.com/drive/folders/1hdSylyYGvshO7SLYz7y5ZbYEo67WKFB3?usp=drive_link', descripcion: 'Material de programación', etiquetas: ['programación'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Programación Drive 4', enlace: 'https://drive.google.com/drive/folders/1UGv49yYMc0yz3Vx1E3sSqniKJtRSt4Wy?usp=drive_link', descripcion: 'Material de programación', etiquetas: ['programación'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Programación Drive 5', enlace: 'https://drive.google.com/drive/folders/1n5VD9N7hbU_W12Jv-tizdOIjMqXYzCo1?usp=drive_link', descripcion: 'Material de programación', etiquetas: ['programación'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'MEGA Programación 1', enlace: 'https://mega.nz/folder/3RZRlQoS#6hqbnoTPwz9dzAOO27VjIw', descripcion: 'Material de programación en MEGA', etiquetas: ['mega'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'MEGA Programación 2', enlace: 'https://mega.nz/folder/d9EVCIyK#aOiqfgx30eMB2XVbhjGl6Q/folder/swsyySLa', descripcion: 'Material de programación en MEGA', etiquetas: ['mega'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Programación pura', enlace: 'https://drive.google.com/drive/mobile/folders/1if09a9QyNfBRlAKey7If5preZ3BswudZ', descripcion: 'Muchos archivos de programación', etiquetas: ['programación'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Libros y cursos programación', enlace: 'https://drive.google.com/drive/folders/1_BpeWZ4fRt1yZCRB16YijfX2HFC3XODw', descripcion: 'Libros y cursos de programación', etiquetas: ['libros'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Biblioteca Programación', enlace: 'https://drive.google.com/drive/folders/1p3vysRaeUmYCbU1E3z3p-XSd_wsLXdOA?usp=drive_link', descripcion: 'Biblioteca de programación', etiquetas: ['biblioteca'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Pack Libros Users', enlace: 'https://drive.google.com/drive/folders/1aNwJaDH3drV1l64eK39SuootpBgk1pcW', descripcion: 'Pack de libros USERS', etiquetas: ['users'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Pack completo cursos', enlace: 'https://drive.google.com/drive/folders/1_NcqO21jH3ZvibuRBabbsyKnk4G2gDo0?usp=drive_link', descripcion: 'Tecnología, Canva, Seguridad, Redes', etiquetas: ['cursos'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'IT Book', enlace: 'https://drive.google.com/drive/folders/146dHRdZdjCV6FjQE5E2A6bVOqlOhlItU?usp=drive_link', descripcion: 'Libros de IT', etiquetas: ['it'] },
    { categoria: '📁 Repositorios y Drives', titulo: 'Curso profesional de Git y GitHub', enlace: 'https://drive.google.com/drive/folders/1AYmFWu9NJtry7_F5t9R7o0zNbtBLp6YX?usp=drive_link', descripcion: 'Curso profesional de Git y GitHub', etiquetas: ['git'] },
    // Python (13)
    { categoria: '🐍 Python', titulo: 'Introducción a Python', enlace: 'https://www.udemy.com/course/introduccion-a-la-programacion-con-python-juan-de-la-torre/', descripcion: 'Curso de introducción a Python', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Manejo de excepciones Python', enlace: 'https://drive.google.com/drive/folders/1_47J4kitJPDggyybH9m4KxFAqkc7b-ih?usp=drive_link', descripcion: 'Curso para manejar excepciones en Python', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'CODELATIN Python desde cero', enlace: 'https://drive.google.com/drive/folders/1WNpalksZEI5Rj3w9fAF-VvJLZOSIs7fx?usp=drive_link', descripcion: 'Curso Python desde cero', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Estructuras de Python', enlace: 'https://drive.google.com/drive/folders/1Oa3kHCqeH4pr9qgvhJcz-OayDEzgWMP2?usp=drive_link', descripcion: 'Curso de estructuras de Python', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Anotaciones y type hints Python', enlace: 'https://drive.google.com/drive/folders/1PcbNd32tvMkEN_RQ9ZxEZ4BnwxeoFgmv?usp=drive_link', descripcion: 'Curso de type hints en Python', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'El Libro de Python', enlace: 'https://ellibrodepython.com/', descripcion: 'El libro de Python online', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Codo a Codo Python', enlace: 'https://drive.google.com/drive/folders/18PxsNEHDOqSjDuBO4rd9qf3k7-9RoeTC', descripcion: 'Curso Python Codo a Codo', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Libros Python', enlace: 'https://drive.google.com/drive/folders/1-w4TxPPJFCE3v8TuPalEqVdKBEa6Pqhv', descripcion: 'Libros de Python', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Tutorial Python', enlace: 'https://tutorial.recursospython.com/', descripcion: 'Curso teórico de Python', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'NASA y Microsoft Python', enlace: 'https://learn.microsoft.com/en-us/training/modules/introduction-python-nasa/', descripcion: 'Curso Python de NASA y Microsoft', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Python Machine Learning NASA', enlace: 'https://learn.microsoft.com/en-us/training/paths/machine-learning-predict-launch-delay-nasa/', descripcion: 'Machine Learning con Python - NASA', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'MEGA Python', enlace: 'https://mega.nz/folder/6rxjASaQ#FSIr7ojBQMDX0fu04xVrOQ/folder/bjJXFCyL', descripcion: 'Mega curso de Python', etiquetas: ['python'] },
    { categoria: '🐍 Python', titulo: 'Playlist programación con Python', enlace: 'https://www.youtube.com/playlist?list=PLOw7b-NX043aiYaKBMd3_k1IUZr8cXTzE', descripcion: 'Playlist de programación con Python', etiquetas: ['python'] }
];

// --- HERRAMIENTAS Y RECURSOS (20 enlaces) ---
const datosHerramientas = [
    { categoria: '📱 Streaming y Entretenimiento', titulo: 'Freeview', enlace: 'https://www.freeview.co.uk/', descripcion: 'Series y películas gratis', etiquetas: ['streaming'] },
    { categoria: '📱 Streaming y Entretenimiento', titulo: 'Nuclear.js', enlace: 'https://nuclear.js.org/', descripcion: 'Reproductor de música gratuito', etiquetas: ['música'] },
    { categoria: '📱 Streaming y Entretenimiento', titulo: 'ViMusic / Musify', enlace: 'https://play.google.com/store/apps/details?id=com.vimusic', descripcion: 'App de música gratuita', etiquetas: ['música'] },
    { categoria: '📱 Streaming y Entretenimiento', titulo: 'InnerTune', enlace: 'https://github.com/z-huang/InnerTune', descripcion: 'Cliente de música gratuito', etiquetas: ['música'] },
    { categoria: '📱 Streaming y Entretenimiento', titulo: 'IPTV Smart Player', enlace: 'https://play.google.com/store/apps/details?id=com.iptv.smart.player&hl=en_US', descripcion: 'App para ver TV en vivo (URL: iptv.llc)', etiquetas: ['iptv'] },
    { categoria: '📱 Streaming y Entretenimiento', titulo: 'Audius Music', enlace: 'https://audius.co/', descripcion: 'Plataforma de música descentralizada', etiquetas: ['música'] },
    // IA (14)
    { categoria: '🤖 Herramientas con IA', titulo: 'ChatGPT', enlace: 'https://www.openai.com/chatgpt', descripcion: 'Asistente conversacional con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Gemini', enlace: 'https://gemini.google.com/', descripcion: 'Asistente IA de Google', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'GitHub Copilot', enlace: 'https://github.com/features/copilot', descripcion: 'Asistente de programación con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Claude', enlace: 'https://www.anthropic.com/claude', descripcion: 'Asistente IA de Anthropic', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Perplexity AI', enlace: 'https://www.perplexity.ai/', descripcion: 'Búsqueda avanzada con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Midjourney', enlace: 'https://www.midjourney.com/', descripcion: 'Generador de imágenes con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'DALL-E 2', enlace: 'https://www.openai.com/dall-e-2', descripcion: 'Generador de imágenes con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Microsoft Designer', enlace: 'https://designer.microsoft.com/', descripcion: 'App de diseño gráfico con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Let\'s Enhance', enlace: 'https://letsenhance.io/', descripcion: 'Mejora de imágenes con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Invideo AI', enlace: 'https://invideo.io/', descripcion: 'Creación de videos con IA', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Designify', enlace: 'https://www.designify.com', descripcion: 'IA para diseñar', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Uizard', enlace: 'https://www.uizard.io', descripcion: 'IA para diseñar', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Galileo AI', enlace: 'https://galileo.ai', descripcion: 'IA para diseñar', etiquetas: ['ia'] },
    { categoria: '🤖 Herramientas con IA', titulo: 'Relume', enlace: 'https://www.relume.io', descripcion: 'IA para diseñar', etiquetas: ['ia'] }
];

// --- SOFTWARE Y PROGRAMAS (34 enlaces) ---
const datosSoftware = [
    { categoria: '💿 Software', titulo: 'Office 2021', enlace: 'https://teraboxapp.com/s/12I_pY6KUim4pJeolTT44sw', descripcion: 'Microsoft Office 2021', etiquetas: ['office'] },
    { categoria: '💿 Software', titulo: 'Office 2019', enlace: 'https://teraboxapp.com/s/10Aorif2uN0hckODWgpesQA', descripcion: 'Microsoft Office 2019', etiquetas: ['office'] },
    { categoria: '💿 Software', titulo: 'Office 2016', enlace: 'https://teraboxapp.com/s/14YjoC2sQBUytQ8ovRIznyw', descripcion: 'Microsoft Office 2016', etiquetas: ['office'] },
    { categoria: '💿 Software', titulo: 'Office 2013', enlace: 'https://teraboxapp.com/s/1Y_4n1482Bzl2Bn_vV9lY2g', descripcion: 'Microsoft Office 2013', etiquetas: ['office'] },
    { categoria: '💿 Software', titulo: 'Office 2010', enlace: 'https://teraboxapp.com/s/1xa_Sl1tRc_GPnjJ9TJtSDQ', descripcion: 'Microsoft Office 2010', etiquetas: ['office'] },
    { categoria: '💿 Software', titulo: 'Office 2007', enlace: 'https://teraboxapp.com/s/1zoAN4sWsHgV83xNKzA-qAQ', descripcion: 'Microsoft Office 2007', etiquetas: ['office'] },
    { categoria: '💿 Software', titulo: 'Office 365', enlace: 'https://teraboxapp.com/s/1DwScOXALgxLEUbmxzyfOaw', descripcion: 'Microsoft Office 365', etiquetas: ['office'] },
    { categoria: '💿 Software', titulo: 'Activador Office 2021', enlace: 'https://teraboxapp.com/s/1SGwgNtOP0UIzmXk3zpfeEA', descripcion: 'Activador para Office 2021', etiquetas: ['activador'] },
    { categoria: '💿 Software', titulo: 'Activador Office 2019', enlace: 'https://teraboxapp.com/s/1dmL6ohtALYUFul7_sXaPxg', descripcion: 'Activador para Office 2019', etiquetas: ['activador'] },
    { categoria: '💿 Software', titulo: 'Activador Office 2016', enlace: 'https://teraboxapp.com/s/1pt-3EIFXCn1Y_GMywSZkfg', descripcion: 'Activador para Office 2016', etiquetas: ['activador'] },
    { categoria: '💿 Software', titulo: 'Activador Office 2013', enlace: 'https://teraboxapp.com/s/1qzEbKY8kcizRQwt9fGoGhw', descripcion: 'Activador para Office 2013', etiquetas: ['activador'] },
    { categoria: '💿 Software', titulo: 'Activador Office 2010', enlace: 'https://teraboxapp.com/s/1K4t3oQzWQPLoBfRfzwnWmg', descripcion: 'Activador para Office 2010', etiquetas: ['activador'] },
    { categoria: '💿 Software', titulo: 'Activador Office 2007', enlace: 'https://teraboxapp.com/s/1cnEUwCbkrVIkRtdG3zx0EQ', descripcion: 'Activador para Office 2007', etiquetas: ['activador'] },
    { categoria: '💿 Software', titulo: 'Adobe Photoshop 2023', enlace: 'https://drive.google.com/file/d/10Ao9IHtCJ31mal24Twe4Uwp32cRed-Sy/view', descripcion: 'Adobe Photoshop 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe Lightroom 2023', enlace: 'https://drive.google.com/file/d/12cSyuQ1tfcQIJLsphBfio733tPmWmgrA/view', descripcion: 'Adobe Lightroom 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe Illustrator 2023', enlace: 'https://drive.google.com/file/d/1dGoEuFt1sxS4gEznLpaD2S5l1lYEEr4J/view', descripcion: 'Adobe Illustrator 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe Premiere 2023', enlace: 'https://drive.google.com/file/d/1N_EUOh0899GpTSSEZl2qZjo39xZz-EzN/view', descripcion: 'Adobe Premiere 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe Audition 2023', enlace: 'https://drive.google.com/file/d/18rv6zq0uj3n1aBXb96AV3mwz2A6KbacU/view', descripcion: 'Adobe Audition 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe After Effects 2023', enlace: 'https://drive.google.com/file/d/1Y0dxmeTiW1CBNWdNTZnAEQLCz1F1iCsX/view', descripcion: 'Adobe After Effects 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe Media Encoder 2023', enlace: 'https://drive.google.com/file/d/1lvhB2ZiwsCetGW45EMKzMomperJFVMPZ/view', descripcion: 'Adobe Media Encoder 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe InDesign 2023', enlace: 'https://drive.google.com/file/d/1KkZ3MsBX6hqaPbI-oKJSn9O7md0JiSrw/view', descripcion: 'Adobe InDesign 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe Acrobat Pro 2023 - Opción 1', enlace: 'https://drive.google.com/file/d/1K7lSpYhHCUtTCp1nYTf3lcHu5sTAf-9L/view', descripcion: 'Adobe Acrobat Pro 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'Adobe Acrobat Pro 2023 - Opción 2', enlace: 'https://drive.google.com/file/d/1z_EpBtiXP8kkwO0PDOh5b5Y89TBtO1Zj/view', descripcion: 'Adobe Acrobat Pro 2023', etiquetas: ['adobe'] },
    { categoria: '💿 Software', titulo: 'WinRAR 6.10', enlace: 'https://drive.google.com/drive/folders/11wMRmqwBtyU2sNYBPi1YYP3GDEbYoa9H?usp=sharing', descripcion: 'WinRAR 6.10', etiquetas: ['winrar'] },
    { categoria: '💿 Software', titulo: 'CorelDRAW Graphics Suite 2020', enlace: 'https://drive.google.com/file/d/17SoDL6se2GOTVvA3P0kNsSKdbAaDYOi3/view?usp=sharing', descripcion: 'CorelDRAW Graphics Suite 2020', etiquetas: ['coreldraw'] },
    { categoria: '💿 Software', titulo: 'CorelDRAW Graphics Suite 2022 - Opción 1', enlace: 'https://drive.google.com/file/d/18joY52_Eq6mI7kcAk4tm9yRkPSS6My2_/view?usp=share_link', descripcion: 'CorelDRAW Graphics Suite 2022', etiquetas: ['coreldraw'] },
    { categoria: '💿 Software', titulo: 'CorelDRAW Graphics Suite 2022 - Opción 2', enlace: 'https://drive.google.com/file/d/1OLXWe01T4WIcLYYgproFIALZ-Itwl2KD/view?usp=sharing', descripcion: 'CorelDRAW Graphics Suite 2022', etiquetas: ['coreldraw'] },
    { categoria: '💿 Software', titulo: 'CorelDRAW 2023', enlace: 'https://drive.google.com/file/d/1pg80EvUMVxlpAAmdWY76Apd_Vte9uATs/view?usp=sharing', descripcion: 'CorelDRAW 2023', etiquetas: ['coreldraw'] },
    { categoria: '💿 Software', titulo: 'CorelDRAW 2023 - Instalación', enlace: 'https://drive.google.com/file/d/11lPQViy7r6mpv-zC1OgCqBJ6r2ivBxCX/view?usp=sharing', descripcion: 'Instalación de CorelDRAW 2023', etiquetas: ['coreldraw'] },
    { categoria: '💿 Software', titulo: 'CorelDRAW otros instaladores', enlace: 'https://drive.google.com/drive/folders/1jAs61E7FurlJx-pMmFcBGV3hT3y0839A?usp=share_link', descripcion: 'Otros instaladores CorelDRAW', etiquetas: ['coreldraw'] },
    { categoria: '💿 Software', titulo: 'Ninite', enlace: 'https://ninite.com/', descripcion: 'Instalar varios programas juntos', etiquetas: ['instalador'] },
    { categoria: '💿 Software', titulo: 'Exportar correos PST', enlace: 'https://support.microsoft.com/es-es/office/exportar-correos-electr%C3%B3nicos-contactos-y-elementos-de-calendario-a-outlook-con-un-archivo-pst-14252b52-3075-4e9b-be4e-ff9ef1068f91', descripcion: 'Exportar correos electrónicos', etiquetas: ['outlook'] },
    { categoria: '💿 Software', titulo: 'Exportar facturas', enlace: 'https://worldcampus.saintleo.edu/mi-saintleo', descripcion: 'Exportar facturas (comprobantes de pago)', etiquetas: ['facturas'] },
    { categoria: '💿 Software', titulo: 'Exportar transcripto oficial', enlace: 'https://www.parchment.com/u/registration/33155/institution', descripcion: 'Exportar transcripto oficial', etiquetas: ['transcripto'] }
];

// --- OFICIOS Y TALLERES (22 enlaces) ---
const datosOficios = [
    { categoria: '🔧 Oficios', titulo: 'Paquete de Oficios', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1m5C0dJT4avirnS-wIIpE2gNV6FnhykJu', descripcion: 'Manuales de albañilería, pintura, plomería, etc.', etiquetas: ['oficios'] },
    { categoria: '🔧 Oficios', titulo: 'Reparación de Electrodomésticos', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1yvVoId5jazhYbk899kr9qFV6BCNAYJ1v', descripcion: 'Guías de reparación de electrodomésticos', etiquetas: ['reparación'] },
    { categoria: '🔧 Oficios', titulo: 'Electrónica', enlace: 'https://mega.nz/folder/seU0nJDC#kRHnV-IObbtQnjRKguTDvQ', descripcion: 'Libros de electrónica desde cero', etiquetas: ['electrónica'] },
    { categoria: '🔧 Oficios', titulo: 'Microelectrónica', enlace: 'https://mega.nz/folder/jVBB1IzC#eM1joLla3IG4AZUMP7Mc1w/folder/qVAy2BDT', descripcion: 'Libros de microelectrónica', etiquetas: ['microelectrónica'] },
    { categoria: '🔧 Oficios', titulo: 'Resina Epoxi', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1jdlOSoF9_GloyVUNqRZrO1wBYSiTsCWP', descripcion: 'Curso de resina epoxi', etiquetas: ['resina'] },
    { categoria: '🔧 Oficios', titulo: 'Reparación de Celulares', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1TGn7ZABgK8ugDN2RBstR5BE2MIONGHwx', descripcion: 'Guías de reparación de celulares', etiquetas: ['reparación'] },
    { categoria: '🔧 Oficios', titulo: 'Reparación de PS3, PS4 y Xbox', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1ywUxpK-AQ1mQOXDJvF3BjxaR9ZkBfNZM', descripcion: 'Guías de reparación de consolas', etiquetas: ['reparación'] },
    { categoria: '🔧 Oficios', titulo: 'Reparación de Impresoras', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1BCf4FzjqGuIGvr7vioETyXzVWH6_ejfO', descripcion: 'Guías de reparación de impresoras', etiquetas: ['reparación'] },
    { categoria: '🔧 Oficios', titulo: 'Reparación de PC', enlace: 'https://drive.google.com/drive/folders/1kR05cEpVLPS8ApojAIvL9SdX6v3erHK6', descripcion: 'Armado y reparación de computadoras', etiquetas: ['pc'] },
    { categoria: '🔧 Oficios', titulo: 'Soldadura', enlace: 'https://infolibros.org/libros-pdf-gratis/oficios/soldadura/', descripcion: 'Manuales de soldadura', etiquetas: ['soldadura'] },
    { categoria: '🔧 Oficios', titulo: 'Aire Acondicionado', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1jgFwYvVQfxfRdzCIgv59vZl4c4ybUzhV', descripcion: 'Manuales de instalación de aire acondicionado', etiquetas: ['aireacondicionado'] },
    { categoria: '🔧 Oficios', titulo: 'Carpintería', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1gGZU1L3Uf6penikfzBA-GaVt8fC_2nzO', descripcion: 'Cursos de carpintería', etiquetas: ['carpintería'] },
    { categoria: '🔧 Oficios', titulo: 'Electricidad', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1m5C0dJT4avirnS-wIIpE2gNV6FnhykJu', descripcion: 'Manuales de electricidad', etiquetas: ['electricidad'] },
    { categoria: '🔧 Oficios', titulo: 'Jardinería', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1m5C0dJT4avirnS-wIIpE2gNV6FnhykJu', descripcion: 'Manuales de jardinería y parques', etiquetas: ['jardinería'] },
    { categoria: '🔧 Oficios', titulo: 'Reparación de Motos', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1VsNo8pwDy4NTvbMLgYIF8zUl9kLK3UjJ', descripcion: 'Reparación de motos (fascículos 2015)', etiquetas: ['motos'] },
    { categoria: '🔧 Oficios', titulo: 'Ingeniería Industrial', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1AvInGLD96dnVdAzTzatTatoJ_EAhHM8q', descripcion: 'Libros de ingeniería industrial', etiquetas: ['ingeniería'] },
    { categoria: '🔧 Oficios', titulo: 'Ingeniería Mecánica', enlace: 'https://drive.google.com/drive/folders/1Fp-4M9zxj7Rq32f7LpBIuQbPR_7BhDkA?usp=drive_link', descripcion: 'Libros de ingeniería mecánica', etiquetas: ['ingeniería'] },
    { categoria: '🔧 Oficios', titulo: 'Electrónica Users', enlace: 'https://drive.google.com/drive/u/0/mobile/folders/1w32qAXmLuScwicW7yNP8v6wLMZolwEWb', descripcion: 'Electrónica Users', etiquetas: ['electrónica'] },
    { categoria: '🔧 Oficios', titulo: 'Reparación de Consolas en Móvil', enlace: 'https://drive.google.com/drive/folders/1BaIvK-8mcVvw_kwVL2RU8vJo3safYz4-?usp=sharing', descripcion: 'Reparación de consolas en móvil', etiquetas: ['reparación'] },
    { categoria: '🔧 Oficios', titulo: 'Plantillas Excel para Contadores', enlace: 'https://drive.google.com/drive/mobile/folders/1CGRxpPpZPOJ1uqjRg6eodb-o2fX2P1o2', descripcion: 'Plantillas de Excel para contadores', etiquetas: ['excel'] },
    { categoria: '🔧 Oficios', titulo: 'Microelectrónica (adicional)', enlace: 'https://mega.nz/folder/jVBB1IzC#eM1joLla3IG4AZUMP7Mc1w/folder/qVAy2BDT', descripcion: 'Microelectrónica', etiquetas: ['microelectrónica'] }
];

// --- MEGA PACKS (30 enlaces) ---
const datosMegapacks = [
    { categoria: '📦 Mega Packs', titulo: 'Pack 1 - Diseño Gráfico', enlace: 'https://drive.google.com/drive/folders/1PxeoEZW1fi28Chu_L2lppfxenMbMpwF-', descripcion: 'Cursos completos de diseño gráfico', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 2 - Office', enlace: 'https://drive.google.com/drive/folders/1xFvbG2UlTJJKKGmcoXzNeYGdpCt4Exr0', descripcion: 'Cursos de Excel, Word y PowerPoint', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 3 - Inglés', enlace: 'https://drive.google.com/drive/folders/1uX2NYpPOvvaLy0X5081K2vcb-GQZZGV-', descripcion: 'Cursos de inglés para todos los niveles', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 4 - Excel', enlace: 'https://drive.google.com/drive/folders/1xFvbG2UlTJJKKGmcoXzNeYGdpCt4Exr0?usp=sharing', descripcion: 'Cursos avanzados de Excel', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 5 - Hacking Ético', enlace: 'https://drive.google.com/drive/folders/1ji4dYfx-R5pkNYvuV_0DJlGE4hwEXUpE?usp=sharing', descripcion: 'Cursos de ciberseguridad y hacking', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 6 - Infografías', enlace: 'https://drive.google.com/drive/folders/1IwiZ1QyivRUhi88TIEMTN6ie2Ej5ldVi?usp=sharing', descripcion: 'Infografías de diversos temas', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 7 - Diseño Gráfico (adicional)', enlace: 'https://drive.google.com/drive/folders/1_vcuTz7EFvfMvC_CiaAjkdIZc2lRFgsp?usp=sharing', descripcion: 'Recursos adicionales de diseño gráfico', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 8 - Marketing Digital', enlace: 'https://drive.google.com/drive/folders/1jcuZOY0aK8AXmbz-6rcdtyFExfBItZWV?usp=sharing', descripcion: 'Cursos de marketing digital', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 9 - Instaladores', enlace: 'https://drive.google.com/drive/folders/1jP3L-ufQucTfXSEjWY0ePLRdn3so6HtP?usp=sharing', descripcion: 'Instaladores de software', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 10 - Kid Imprimible', enlace: 'https://drive.google.com/open?id=1STaL-GIaZkFmYxVKewOMCqp89tPyDEoG', descripcion: 'Material imprimible para niños', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 11 - Cuadros Editables', enlace: 'https://drive.google.com/drive/folders/1CPTCn1Vm-kv8xP7LXj8hRG26l-5xRQmf?usp=sharing', descripcion: 'Cuadros editables', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 12 - Portadas Editables', enlace: 'https://drive.google.com/drive/folders/148tDsZ0ZpO7U2ap9CCykCGmFgbRITj2B?usp=sharing', descripcion: 'Portadas editables', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 13 - Libros Marketing', enlace: 'https://drive.google.com/drive/folders/1dhxSu4tjyk__1KqfEiLmJl4ZgOaeUw48?usp=sharing', descripcion: 'Libros de marketing y ventas', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 14 - Gastronomía', enlace: 'https://drive.google.com/drive/folders/1jH3Ynvr2-eGgTCiEsH9LG0hkUfxm2l3e?usp=sharing', descripcion: 'Libros de gastronomía', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 15 - Super Memoria', enlace: 'https://drive.google.com/drive/folders/18TojWxEEczAPsFzYe16Cs3aZbkNpAdei?usp=sharing', descripcion: 'Curso de super memoria', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 16 - Sublimados', enlace: 'https://drive.google.com/drive/folders/1oeJXcKb9mEeouES01Toz0D8mAgUnU-_I?usp=sharing', descripcion: 'Diseños para sublimación', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 17 - FX Premiere', enlace: 'https://drive.google.com/drive/folders/1CUDk-xOkj92ZrMg9ScLzVFEhhwFVCKRr?usp=sharing', descripcion: 'Efectos para Adobe Premiere', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 18 - DJ Producción Musical', enlace: 'https://drive.google.com/drive/folders/16RVY12Kjae5pJl5sh6H8JhefuF9TJbmR?usp=sharing', descripcion: 'Cursos de DJ y producción musical', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 19 - Proyectos', enlace: 'https://drive.google.com/drive/folders/1tz58WzW2V1rVxISUgxZHGaebDszc5r4N?usp=sharing', descripcion: 'Proyectos varios', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 20 - Arquitectura', enlace: 'https://drive.google.com/drive/folders/1QshRbmCBdByilLPfcvoyTL4Os70Fx5tG?usp=sharing', descripcion: 'Cursos y libros de arquitectura', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 21 - Consola en Móvil', enlace: 'https://drive.google.com/drive/folders/1BaIvK-8mcVvw_kwVL2RU8vJo3safYz4-?usp=sharing', descripcion: 'Reparación de consolas en móvil', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 22 - Desarrollo Web', enlace: 'https://drive.google.com/drive/folders/1BO20YSfpSUWV84Iul5vcaE788CMS-qHf?usp=sharing', descripcion: 'Cursos y herramientas de desarrollo web', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 23 - Pack de Libros', enlace: 'https://drive.google.com/drive/folders/1z_i7xRl7Rpv1PEbnvlWvGsTX0Q49cjtx?usp=sharing', descripcion: 'Pack de libros variados', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 24 - Ingeniería', enlace: 'https://drive.google.com/drive/folders/1Z4dM7tma5kPIL_3FraS9ICJtAszQ0S8t?usp=sharing', descripcion: 'Libros de ingeniería', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 25 - Armado de Computadora', enlace: 'https://drive.google.com/drive/folders/1kR05cEpVLPS8ApojAIvL9SdX6v3erHK6?usp=sharing', descripcion: 'Guías de armado de computadoras', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 26 - Curso Guitarra Acústica', enlace: 'https://drive.google.com/drive/folders/1jmrD-e0QZUQ9RSNXnIcucBY32FnDNJzw?usp=sharing', descripcion: 'Curso de guitarra acústica', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 27 - Preuniversitario', enlace: 'https://drive.google.com/drive/folders/1-9MDzXk94DgoHO1InDbt-qTjz4hMdWnK?usp=sharing', descripcion: 'Material preuniversitario', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 28 - Fotografía Profesional', enlace: 'https://drive.google.com/drive/folders/1_ChgDHImghlV0T1RUd4HVCe54uvL7mY0?usp=sharing', descripcion: 'Cursos de fotografía profesional', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 29 - Aula Virtual', enlace: 'https://drive.google.com/drive/folders/1hQ3D9DaMsg-qLObqtR4bDIKEkCjIhKeF?usp=sharing', descripcion: 'Recursos para aula virtual', etiquetas: ['megapack'] },
    { categoria: '📦 Mega Packs', titulo: 'Pack 30 - Psicología Profesional', enlace: 'https://drive.google.com/drive/folders/1BkAMSc8BqOrN2l5cNyUf3p9n788pAlA_?usp=sharing', descripcion: 'Libros de psicología profesional', etiquetas: ['megapack'] }
];

// --- GRUPOS DE COMUNIDAD (8 grupos) ---
const datosComunidad = [
    { categoria: '👥 Comunidad', titulo: 'Descargas PDF', enlace: 'https://www.facebook.com/groups/1022497769993132/', descripcion: 'Grupo de Facebook para descargar PDFs', etiquetas: ['facebook'] },
    { categoria: '👥 Comunidad', titulo: 'Libros Digitales', enlace: 'https://www.facebook.com/groups/657899639811245/', descripcion: 'Tu librería digital', etiquetas: ['facebook'] },
    { categoria: '👥 Comunidad', titulo: 'PDF de cualquier categoría', enlace: 'https://www.facebook.com/groups/980847144141084/', descripcion: 'PDFs de cualquier categoría', etiquetas: ['facebook'] },
    { categoria: '👥 Comunidad', titulo: 'Cursos y Packs en Google Drive', enlace: 'https://www.facebook.com/groups/2232509877148927/', descripcion: 'Comparten cursos en Google Drive', etiquetas: ['facebook'] },
    { categoria: '👥 Comunidad', titulo: 'Biblioteca Digital PDF EPUB', enlace: 'https://www.facebook.com/groups/694360753430003/', descripcion: 'Biblioteca digital en PDF y EPUB', etiquetas: ['facebook'] },
    { categoria: '👥 Comunidad', titulo: 'Recursos Compartidos', enlace: 'https://www.facebook.com/groups/1463301334482936/', descripcion: 'Recursos de Platzi, EDteam y Udemy', etiquetas: ['facebook'] },
    { categoria: '👥 Comunidad', titulo: 'Jabones Artesanales', enlace: 'https://chat.whatsapp.com/CnvZQrnzwOV6VwQLrQvUPf', descripcion: 'Grupo de WhatsApp de jabones artesanales', etiquetas: ['whatsapp'] },
    { categoria: '👥 Comunidad', titulo: 'Ingeniería del Software', enlace: 'https://whatsapp.com/channel/0029Va643hlHrDZoHayLrT1Q', descripcion: 'Canal de WhatsApp de Ingeniería del Software', etiquetas: ['whatsapp'] }
];

// --- APORTES Y COLABORACIÓN (2 enlaces) ---
const datosAportes = [
    { categoria: '📝 Aportar', titulo: 'Formulario de Aportes', enlace: 'https://docs.google.com/forms/d/e/1FAIpQLSeNZJEYoNzlDpc-qU_4ZfTpjzxOtCcKrVEIEzRoCeAOxj6gLQ/viewform', descripcion: 'Formulario para colaborar con nuevos enlaces', etiquetas: ['formulario'] },
    { categoria: '📝 Aportar', titulo: 'Índice General', enlace: 'https://docs.google.com/spreadsheets/d/1Wt8ocg1nIdR1zG0P7JLhIrKCIa_ZxekAXzPZ04tIVxo/edit?gid=0#gid=0', descripcion: 'Planilla con el índice general de aportes', etiquetas: ['índice'] }
];
