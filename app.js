// ============================================================
// CONTROL DE ACCESO - MI PANEL
// ============================================================

// Hash simple de la contraseña (no guardar la contraseña en texto plano)
// La clave se verifica comparando el hash, no el texto original
const _PANEL_HASH = (function() {
    // Contraseña: NECADM123
    // Se usa una comparación simple de suma de caracteres para ofuscarla levemente
    const c = [78,69,67,65,68,77,49,50,51]; // char codes de "NECADM123"
    return c.reduce((a, b) => a + b, 0); // = 574
})();

function _hashClave(str) {
    return str.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
}

function abrirPanel(e) {
    if (e) e.preventDefault();

    // Si ya está autenticado en esta sesión, mostrar directamente
    if (sessionStorage.getItem('panel_auth') === 'ok') {
        mostrarPanel();
        return;
    }

    // Mostrar el overlay de login
    const overlay = document.getElementById('overlay-login');
    if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => {
            const input = document.getElementById('input-contrasena');
            if (input) { input.value = ''; input.focus(); }
            const error = document.getElementById('login-error');
            if (error) error.textContent = '';
        }, 50);
    }
}

function verificarContrasena() {
    const input = document.getElementById('input-contrasena');
    const errorEl = document.getElementById('login-error');
    if (!input) return;

    const valor = input.value;

    if (_hashClave(valor) === _PANEL_HASH) {
        // Contraseña correcta
        sessionStorage.setItem('panel_auth', 'ok');
        cerrarLogin();
        mostrarPanel();
    } else {
        // Contraseña incorrecta
        if (errorEl) errorEl.textContent = '❌ Contraseña incorrecta. Intentá de nuevo.';
        input.value = '';
        input.focus();
        // Animación de sacudida en el input
        input.style.border = '2px solid #ef5350';
        setTimeout(() => { input.style.border = '2px solid rgba(255,255,255,0.15)'; }, 1200);
    }
}

function cerrarLogin() {
    const overlay = document.getElementById('overlay-login');
    if (overlay) overlay.style.display = 'none';
}

function actualizarElementosAdmin() {
    const auth = sessionStorage.getItem('panel_auth') === 'ok';
    const elementos = document.querySelectorAll('.admin-only');
    elementos.forEach(el => {
        if (auth) {
            if (el.tagName === 'A') {
                el.style.display = 'inline-block';
            } else {
                el.style.display = 'block';
            }
        } else {
            el.style.display = 'none';
        }
    });
}

function mostrarPanel() {
    const panel = document.getElementById('seccion-mipanel');
    if (panel) {
        panel.style.display = 'block';
        // Actualizar ícono del botón en nav
        const btnNav = document.getElementById('btn-nav-mipanel');
        if (btnNav) btnNav.textContent = '🔓 Mi Panel';
        // Mostrar elementos de administrador
        actualizarElementosAdmin();
        // Hacer scroll suave al panel
        setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
}

function cerrarPanel() {
    const panel = document.getElementById('seccion-mipanel');
    if (panel) panel.style.display = 'none';
    sessionStorage.removeItem('panel_auth');
    const btnNav = document.getElementById('btn-nav-mipanel');
    if (btnNav) btnNav.textContent = '🔒 Mi Panel';
    // Ocultar elementos de administrador
    actualizarElementosAdmin();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Variables globales recuperadas de localStorage
let enlacesEliminados = JSON.parse(localStorage.getItem('enlacesEliminados') || '[]');
let seccionesCreadas = JSON.parse(localStorage.getItem('seccionesCreadas') || '[]');
let idEnlaceEditando = null;

const nombresSeccion = {
    buscadores: '🔍 Buscadores',
    cursos: '🎓 Cursos',
    libros: '📚 Libros',
    programacion: '💻 Programación',
    herramientas: '🛠️ Herramientas',
    software: '💿 Software',
    oficios: '🔧 Oficios',
    megapacks: '📦 Mega Packs',
    comunidad: '👥 Comunidad',
    formulario: '📝 Aportar'
};

// ============================================================
// RECOPILACIÓN Y CONSOLIDACIÓN DE ENLACES
// ============================================================

function recopilarTodosLosEnlaces() {
    const todos = [];
    
    // Consolidar enlaces fijos
    if (typeof datosBuscadores !== 'undefined') datosBuscadores.forEach(item => { todos.push({ ...item, seccion: 'buscadores', esMio: false }); });
    if (typeof datosCursos !== 'undefined') datosCursos.forEach(item => { todos.push({ ...item, seccion: 'cursos', esMio: false }); });
    if (typeof datosLibros !== 'undefined') datosLibros.forEach(item => { todos.push({ ...item, seccion: 'libros', esMio: false }); });
    if (typeof datosProgramacion !== 'undefined') datosProgramacion.forEach(item => { todos.push({ ...item, seccion: 'programacion', esMio: false }); });
    if (typeof datosHerramientas !== 'undefined') datosHerramientas.forEach(item => { todos.push({ ...item, seccion: 'herramientas', esMio: false }); });
    if (typeof datosSoftware !== 'undefined') datosSoftware.forEach(item => { todos.push({ ...item, seccion: 'software', esMio: false }); });
    if (typeof datosOficios !== 'undefined') datosOficios.forEach(item => { todos.push({ ...item, seccion: 'oficios', esMio: false }); });
    if (typeof datosMegapacks !== 'undefined') datosMegapacks.forEach(item => { todos.push({ ...item, seccion: 'megapacks', esMio: false }); });
    if (typeof datosComunidad !== 'undefined') datosComunidad.forEach(item => { todos.push({ ...item, seccion: 'comunidad', esMio: false }); });
    if (typeof datosAportes !== 'undefined') datosAportes.forEach(item => { todos.push({ ...item, seccion: 'formulario', esMio: false }); });

    // Consolidar enlaces agregados por el usuario
    const misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    misEnlaces.forEach(e => {
        todos.push({
            categoria: e.categoria || 'General',
            titulo: e.titulo,
            enlace: e.enlace,
            descripcion: e.descripcion || 'Sin descripción',
            etiquetas: e.etiquetas || [],
            seccion: e.seccion || 'libros',
            esMio: true,
            id: e.id
        });
    });
    
    // Filtrar enlaces eliminados por el usuario
    return todos.filter(item => {
        const clave = `${item.seccion}|${item.titulo}`;
        return !enlacesEliminados.includes(clave);
    });
}

// ============================================================
// RENDERIZADO DINÁMICO DE SECCIONES
// ============================================================

function renderizarSeccion(seccionId, datosFijos) {
    const contenedor = document.getElementById(`contenedor-${seccionId}`);
    if (!contenedor) return;
    
    const eliminados = JSON.parse(localStorage.getItem('enlacesEliminados') || '[]');
    
    // Filtrar enlaces fijos eliminados
    const fijosFiltrados = datosFijos.filter(item => {
        const clave = `${seccionId}|${item.titulo}`;
        return !eliminados.includes(clave);
    });
    
    // Filtrar enlaces del usuario para esta sección
    const agregados = JSON.parse(localStorage.getItem('misEnlaces') || '[]')
        .filter(e => e.seccion === seccionId);
    
    // Combinar fijos y agregados
    const todos = [...fijosFiltrados, ...agregados];
    
    // Actualizar el contador del título de la sección
    const seccionHeaderCount = document.querySelector(`#seccion-${seccionId} h2 .count`);
    if (seccionHeaderCount) {
        seccionHeaderCount.textContent = `${todos.length} enlaces`;
    }
    
    if (todos.length === 0) {
        contenedor.innerHTML = '<p style="color:#666;text-align:center;padding:20px;">No hay enlaces en esta sección.</p>';
        return;
    }
    
    // Agrupar por categoría
    const grupos = {};
    todos.forEach(item => {
        const key = item.categoria;
        if (!grupos[key]) grupos[key] = [];
        grupos[key].push(item);
    });
    
    let html = '';
    for (const [categoria, items] of Object.entries(grupos)) {
        const tieneMio = items.some(item => item.esMio === true);
        html += `<h3>${categoria} <span class="count-categoria">${items.length} enlaces</span>`;
        if (tieneMio) {
            html += ` <span style="background:#2e7d32;color:white;padding:2px 10px;border-radius:12px;font-size:0.7rem;margin-left:8px;font-weight:600;">✦ TÚ AGREGASte</span>`;
        }
        html += `</h3><div class="table-wrap"><table><thead><tr><th>Título</th><th>Enlace</th><th>Descripción</th><th>Etiquetas</th></tr></thead><tbody>`;
        
        items.forEach(item => {
            const esMio = item.esMio === true;
            const etiquetasHtml = (item.etiquetas || []).map(e =>
                `<span class="tag ${esMio ? 'tag-mio' : ''}">#${e}</span>`
            ).join('');
            const filaClass = esMio ? 'enlace-mio' : '';
            
            html += `<tr class="${filaClass}">
                <td><strong>${item.titulo}</strong></td>
                <td><a href="${item.enlace}" target="_blank">${item.enlace.length > 40 ? item.enlace.substring(0,40)+'...' : item.enlace}</a></td>
                <td>${item.descripcion || 'Sin descripción'}</td>
                <td>${etiquetasHtml}</td>
            </tr>`;
        });
        
        html += `</tbody></table></div>`;
    }
    
    contenedor.innerHTML = html;
}

function renderizarTodo() {
    renderizarSeccion('buscadores', typeof datosBuscadores !== 'undefined' ? datosBuscadores : []);
    renderizarSeccion('cursos', typeof datosCursos !== 'undefined' ? datosCursos : []);
    renderizarSeccion('libros', typeof datosLibros !== 'undefined' ? datosLibros : []);
    renderizarSeccion('programacion', typeof datosProgramacion !== 'undefined' ? datosProgramacion : []);
    renderizarSeccion('herramientas', typeof datosHerramientas !== 'undefined' ? datosHerramientas : []);
    renderizarSeccion('software', typeof datosSoftware !== 'undefined' ? datosSoftware : []);
    renderizarSeccion('oficios', typeof datosOficios !== 'undefined' ? datosOficios : []);
    renderizarSeccion('megapacks', typeof datosMegapacks !== 'undefined' ? datosMegapacks : []);
    renderizarSeccion('comunidad', typeof datosComunidad !== 'undefined' ? datosComunidad : []);
    renderizarSeccion('formulario', typeof datosAportes !== 'undefined' ? datosAportes : []);
    
    // Renderizar las secciones dinámicas creadas por el usuario
    seccionesCreadas.forEach(id => {
        renderizarSeccion(id, []);
    });
    
    const total = recopilarTodosLosEnlaces().length;
    const totalEl = document.getElementById('total-enlaces');
    if (totalEl) totalEl.textContent = total;
}

// ============================================================
// CREACIÓN DE SECCIONES PERSONALIZADAS
// ============================================================

function crearBotonNavegacionSeccion(id, nombreSeccion) {
    const nav = document.getElementById('nav-principal');
    if (!nav) return;
    
    // Evitar duplicados
    if (document.querySelector(`.nav a[href="#seccion-${id}"]`)) return;

    const btn = document.createElement('a');
    btn.href = `#seccion-${id}`;
    btn.textContent = `📂 ${nombreSeccion}`;
    btn.style.background = '#2e7d32';
    btn.style.color = 'white';
    btn.onclick = function(e) {
        e.preventDefault();
        const target = document.getElementById(`seccion-${id}`);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };
    
    const ref = document.getElementById('nav-secciones-creadas');
    if (ref) {
        nav.insertBefore(btn, ref);
    } else {
        nav.appendChild(btn);
    }
}

function crearContenedorHTMLSeccion(id, nombreSeccion) {
    if (document.getElementById(`seccion-${id}`)) return;

    const container = document.querySelector('.container');
    const footer = document.querySelector('.footer');
    
    const seccionHTML = `
        <section id="seccion-${id}" class="section">
            <h2>📂 ${nombreSeccion} <span class="count">0 enlaces</span> <a href="#nav-principal" class="btn-volver-inicio">🏠 Inicio</a></h2>
            <div id="contenedor-${id}">
                <p style="color:#666;text-align:center;padding:20px;">No hay enlaces en esta sección. Agrega uno desde el panel de administración.</p>
            </div>
        </section>
    `;
    
    if (footer) {
        footer.insertAdjacentHTML('beforebegin', seccionHTML);
    } else if (container) {
        container.insertAdjacentHTML('beforeend', seccionHTML);
    }
}

function crearNuevaSeccion(nombreSeccion) {
    const id = nombreSeccion.toLowerCase().replace(/\s+/g, '-');
    
    if (!seccionesCreadas.includes(id)) {
        seccionesCreadas.push(id);
        localStorage.setItem('seccionesCreadas', JSON.stringify(seccionesCreadas));
    }
    
    crearBotonNavegacionSeccion(id, nombreSeccion);
    crearContenedorHTMLSeccion(id, nombreSeccion);
    
    actualizarSelectSecciones();
    
    alert(`✅ Sección "${nombreSeccion}" creada correctamente.`);
}

function actualizarSelectSecciones() {
    const select = document.getElementById('seccion-destino');
    if (!select) return;
    
    const valorActual = select.value;
    
    // Limpiar excepto la opción "+nueva"
    const opciones = select.querySelectorAll('option');
    opciones.forEach(opt => {
        if (opt.value !== '+nueva') opt.remove();
    });
    
    // Reconstruir opciones fijas
    const secciones = ['buscadores', 'cursos', 'libros', 'programacion', 'herramientas', 'software', 'oficios', 'megapacks', 'comunidad', 'formulario'];
    
    secciones.forEach(sec => {
        const opt = document.createElement('option');
        opt.value = sec;
        opt.textContent = nombresSeccion[sec] || sec;
        select.appendChild(opt);
    });
    
    // Agregar secciones dinámicas
    seccionesCreadas.forEach(sec => {
        const opt = document.createElement('option');
        opt.value = sec;
        // Obtener formato legible
        let label = sec.charAt(0).toUpperCase() + sec.slice(1).replace(/-/g, ' ');
        opt.textContent = '📂 ' + label;
        select.appendChild(opt);
    });
    
    // Mover la opción de "+nueva" al final de todo
    const optNueva = select.querySelector('option[value="+nueva"]');
    if (optNueva) {
        select.appendChild(optNueva);
    }
    
    select.value = valorActual;
}

// ============================================================
// PANEL DE ADMINISTRACIÓN - CATEGORÍAS
// ============================================================

function obtenerCategoriasDeSeccion(seccionId) {
    const todos = recopilarTodosLosEnlaces();
    const categorias = new Set();
    todos.filter(item => item.seccion === seccionId).forEach(item => categorias.add(item.categoria));
    
    if (categorias.size === 0) {
        categorias.add(nombresSeccion[seccionId] || seccionId);
    }
    
    return Array.from(categorias).sort();
}

function actualizarCategorias() {
    const seccionSelect = document.getElementById('seccion-destino');
    const categoriaSelect = document.getElementById('categoria-destino');
    const categoriaInput = document.getElementById('nueva-categoria-input');
    
    if (!seccionSelect || !categoriaSelect) return;
    
    let seccion = seccionSelect.value;
    
    if (seccion === '+nueva') {
        const nuevaSeccion = prompt('📂 Escribe el nombre de la NUEVA SECCIÓN:');
        if (nuevaSeccion && nuevaSeccion.trim()) {
            const id = nuevaSeccion.trim().toLowerCase().replace(/\s+/g, '-');
            if (!seccionesCreadas.includes(id)) {
                crearNuevaSeccion(nuevaSeccion.trim());
            }
            seccionSelect.value = id;
            actualizarCategorias();
        } else {
            seccionSelect.value = 'libros';
            actualizarCategorias();
        }
        return;
    }
    
    categoriaSelect.innerHTML = '';
    const categorias = obtenerCategoriasDeSeccion(seccion);
    categorias.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        categoriaSelect.appendChild(opt);
    });
    
    const optNueva = document.createElement('option');
    optNueva.value = '+nueva';
    optNueva.textContent = '➕ Crear nueva categoría';
    categoriaSelect.appendChild(optNueva);
    
    if (categoriaInput) {
        categoriaInput.classList.add('oculto');
        categoriaInput.value = '';
    }
}

function mostrarInputCategoria() {
    const categoriaSelect = document.getElementById('categoria-destino');
    const categoriaInput = document.getElementById('nueva-categoria-input');
    
    if (!categoriaSelect || !categoriaInput) return;
    
    if (categoriaSelect.value === '+nueva') {
        categoriaInput.classList.remove('oculto');
        categoriaInput.focus();
        categoriaInput.placeholder = 'Escribe el nombre de la nueva categoría...';
    } else {
        categoriaInput.classList.add('oculto');
        categoriaInput.value = '';
    }
}

// ============================================================
// PANEL DE ADMINISTRACIÓN - OPERACIONES DE ENLACES
// ============================================================

function verificarEnlaceExistente(titulo, enlace, seccion) {
    const todos = recopilarTodosLosEnlaces();
    return todos.find(item =>
        (item.titulo.toLowerCase() === titulo.toLowerCase() ||
        item.enlace.toLowerCase() === enlace.toLowerCase()) &&
        item.seccion === seccion
    );
}

function agregarEnlace() {
    console.log('🔄 Iniciando agregarEnlace()...');
    
    const seccionSelect = document.getElementById('seccion-destino');
    const categoriaSelect = document.getElementById('categoria-destino');
    const categoriaInput = document.getElementById('nueva-categoria-input');
    const tituloVal = document.getElementById('nuevo-titulo').value.trim();
    const enlaceVal = document.getElementById('nuevo-enlace').value.trim();
    const descVal = document.getElementById('nueva-descripcion').value.trim();
    const etiquetasRaw = document.getElementById('nuevas-etiquetas').value.trim();
    
    if (!seccionSelect || !categoriaSelect) return;
    
    let seccion = seccionSelect.value;
    if (seccion === '+nueva') {
        const nuevaSeccion = prompt('📂 Escribe el nombre de la NUEVA SECCIÓN:');
        if (!nuevaSeccion || !nuevaSeccion.trim()) {
            alert('❌ No se creó la nueva sección.');
            return;
        }
        const id = nuevaSeccion.trim().toLowerCase().replace(/\s+/g, '-');
        if (!seccionesCreadas.includes(id)) {
            crearNuevaSeccion(nuevaSeccion.trim());
        }
        seccion = id;
        seccionSelect.value = seccion;
        setTimeout(() => actualizarCategorias(), 100);
        return;
    }
    
    let categoria = categoriaSelect.value;
    if (categoria === '+nueva') {
        categoria = categoriaInput.value.trim();
        if (!categoria) {
            alert('❌ Escribe el nombre de la nueva categoría.');
            categoriaInput.focus();
            return;
        }
        const opt = document.createElement('option');
        opt.value = categoria;
        opt.textContent = categoria;
        categoriaSelect.insertBefore(opt, categoriaSelect.lastElementChild);
        categoriaSelect.value = categoria;
        categoriaInput.classList.add('oculto');
        categoriaInput.value = '';
    }
    
    if (!categoria) {
        alert('❌ Selecciona o crea una categoría.');
        return;
    }
    
    if (!tituloVal || !enlaceVal) {
        alert('❌ Por favor, completa: Título y Enlace.');
        return;
    }
    
    try { new URL(enlaceVal); } catch(_) {
        alert('❌ El enlace no es válido. Incluye https://');
        return;
    }
    
    const existente = verificarEnlaceExistente(tituloVal, enlaceVal, seccion);
    if (existente) {
        if (!confirm(
            `⚠️ Este enlace ya existe en la sección "${seccion}" con el título "${existente.titulo}".\n\n` +
            `¿Quieres agregarlo de todas formas?`
        )) {
            console.log('⏹️ Usuario canceló el agregado por duplicado.');
            return;
        }
    }
    
    const etiquetas = etiquetasRaw ? etiquetasRaw.split(',').map(e => e.trim()).filter(e => e) : [];
    const nuevoEnlace = {
        id: Date.now(),
        seccion: seccion,
        categoria: categoria,
        titulo: tituloVal,
        enlace: enlaceVal,
        descripcion: descVal || 'Sin descripción',
        etiquetas: etiquetas,
        fecha: new Date().toLocaleDateString('es-ES'),
        hora: new Date().toLocaleTimeString('es-ES')
    };
    
    let misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    misEnlaces.push(nuevoEnlace);
    localStorage.setItem('misEnlaces', JSON.stringify(misEnlaces));
    
    console.log('✅ Enlace agregado:', nuevoEnlace);
    
    renderizarTodo();
    cargarEnlaces();
    actualizarContadores();
    limpiarFormulario();
    cargarCategoriasBuscador();
    
    const btn = document.querySelector('button[onclick="agregarEnlace()"]');
    if (btn) {
        const original = btn.textContent;
        btn.textContent = '✅ ¡Agregado!';
        btn.style.background = '#2e7d32';
        setTimeout(() => {
            btn.textContent = original;
            btn.style.background = '';
        }, 2000);
    }
    
    alert('✅ Enlace "' + tituloVal + '" agregado correctamente a la sección "' + seccion + '".');
}

function cargarEnlaces() {
    const lista = document.getElementById('lista-enlaces');
    if (!lista) return;
    
    const misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    if (misEnlaces.length === 0) {
        lista.innerHTML = '<p class="empty">📭 No has agregado ningún enlace aún.</p>';
        return;
    }
    
    const grupos = {};
    misEnlaces.forEach(e => {
        const key = e.seccion || 'sin-seccion';
        if (!grupos[key]) grupos[key] = [];
        grupos[key].push(e);
    });
    
    let html = '';
    for (const [seccion, enlaces] of Object.entries(grupos)) {
        const nombreSeccion = nombresSeccion[seccion] || '📂 ' + seccion;
        html += `<div class="categoria-group"><h4>${nombreSeccion} (${enlaces.length})</h4><div style="overflow-x:auto;"><table>
            <thead><tr><th>Categoría</th><th>Título</th><th>Enlace</th><th>Descripción</th><th>Etiquetas</th><th style="text-align:center;">Acción</th></tr></thead><tbody>`;
        
        enlaces.forEach(e => {
            const tags = e.etiquetas.map(t => `<span class="tag">#${t}</span>`).join('');
            html += `<tr><td>${e.categoria}</td><td style="font-weight:500;">${e.titulo}</td>
                <td><a href="${e.enlace}" target="_blank">${e.enlace.length > 30 ? e.enlace.substring(0,30)+'...' : e.enlace}</a></td>
                <td>${e.descripcion}</td><td>${tags}</td>
                <td style="text-align:center;white-space:nowrap;">
                    <button onclick="editarEnlace(${e.id})" class="btn-success" style="padding:4px 8px;font-size:0.75rem;border-radius:4px;margin-right:4px;">✏️</button>
                    <button onclick="eliminarEnlace(${e.id})" class="btn-delete">🗑️</button>
                </td></tr>`;
        });
        html += `</tbody></table></div></div>`;
    }
    lista.innerHTML = html;
}

function eliminarEnlace(id) {
    if (!confirm('¿Seguro que quieres eliminar este enlace?')) return;
    
    let misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    misEnlaces = misEnlaces.filter(e => e.id !== id);
    localStorage.setItem('misEnlaces', JSON.stringify(misEnlaces));
    
    renderizarTodo();
    cargarEnlaces();
    actualizarContadores();
    cargarCategoriasBuscador();
    buscarEnlaces(); // Refrescar resultados de búsqueda en el panel
}

function editarEnlace(id) {
    const misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    const item = misEnlaces.find(e => e.id === id);
    if (!item) return;

    // Hacer scroll suave al formulario de agregar
    const formEl = document.querySelector('.admin-form');
    if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Rellenar campos del formulario
    document.getElementById('nuevo-titulo').value = item.titulo || '';
    document.getElementById('nuevo-enlace').value = item.enlace || '';
    document.getElementById('nueva-descripcion').value = item.descripcion || '';
    document.getElementById('nuevas-etiquetas').value = (item.etiquetas || []).join(', ');
    
    // Seleccionar sección
    const seccionSelect = document.getElementById('seccion-destino');
    if (seccionSelect) {
        seccionSelect.value = item.seccion;
        actualizarCategorias(); // Recargar las categorías de esa sección
    }

    // Seleccionar categoría
    const categoriaSelect = document.getElementById('categoria-destino');
    const categoriaInput = document.getElementById('nueva-categoria-input');
    if (categoriaSelect) {
        const existeCat = Array.from(categoriaSelect.options).some(opt => opt.value === item.categoria);
        if (existeCat) {
            categoriaSelect.value = item.categoria;
            if (categoriaInput) {
                categoriaInput.classList.add('oculto');
                categoriaInput.value = '';
            }
        } else {
            categoriaSelect.value = '+nueva';
            if (categoriaInput) {
                categoriaInput.classList.remove('oculto');
                categoriaInput.value = item.categoria;
            }
        }
    }

    // Establecer estado de edición
    idEnlaceEditando = id;

    // Cambiar título del formulario
    const tituloForm = document.getElementById('titulo-formulario');
    if (tituloForm) {
        tituloForm.textContent = '✏️ Editar enlace';
        tituloForm.style.color = '#ff6f00';
    }

    // Cambiar botones del formulario
    const containerBotones = document.getElementById('botones-formulario-container');
    if (containerBotones) {
        containerBotones.innerHTML = `
            <button onclick="guardarCambiosEnlace()" class="btn-success" style="padding:12px 30px;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;background:#ff6f00;">💾 Guardar Cambios</button>
            <button onclick="cancelarEdicionEnlace()" class="btn-danger" style="padding:12px 30px;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;background:#c62828;">❌ Cancelar</button>
        `;
    }
}

function cancelarEdicionEnlace() {
    idEnlaceEditando = null;
    
    // Restaurar título del formulario
    const tituloForm = document.getElementById('titulo-formulario');
    if (tituloForm) {
        tituloForm.textContent = '✏️ Agregar nuevo enlace';
        tituloForm.style.color = '#2e7d32';
    }

    // Restaurar botones del formulario
    const containerBotones = document.getElementById('botones-formulario-container');
    if (containerBotones) {
        containerBotones.innerHTML = `
            <button id="btn-agregar-enlace" onclick="agregarEnlace()" class="btn-success" style="padding:12px 30px;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;">➕ Agregar Enlace</button>
            <button onclick="limpiarFormulario()" class="btn-gray" style="padding:12px 30px;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;">🧹 Limpiar</button>
        `;
    }

    limpiarFormulario();
}

function guardarCambiosEnlace() {
    if (idEnlaceEditando === null) return;

    const seccionSelect = document.getElementById('seccion-destino');
    const categoriaSelect = document.getElementById('categoria-destino');
    const categoriaInput = document.getElementById('nueva-categoria-input');
    const tituloVal = document.getElementById('nuevo-titulo').value.trim();
    const enlaceVal = document.getElementById('nuevo-enlace').value.trim();
    const descVal = document.getElementById('nueva-descripcion').value.trim();
    const etiquetasRaw = document.getElementById('nuevas-etiquetas').value.trim();

    if (!seccionSelect || !categoriaSelect) return;

    let seccion = seccionSelect.value;
    let categoria = categoriaSelect.value;

    if (categoria === '+nueva') {
        categoria = categoriaInput.value.trim();
        if (!categoria) {
            alert('❌ Escribe el nombre de la nueva categoría.');
            categoriaInput.focus();
            return;
        }
    }

    if (!tituloVal || !enlaceVal) {
        alert('❌ Por favor, completa: Título y Enlace.');
        return;
    }

    try { new URL(enlaceVal); } catch(_) {
        alert('❌ El enlace no es válido. Incluye https://');
        return;
    }

    const etiquetas = etiquetasRaw ? etiquetasRaw.split(',').map(e => e.trim()).filter(e => e) : [];

    let misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    const idx = misEnlaces.findIndex(e => e.id === idEnlaceEditando);
    if (idx !== -1) {
        misEnlaces[idx] = {
            ...misEnlaces[idx],
            seccion: seccion,
            categoria: categoria,
            titulo: tituloVal,
            enlace: enlaceVal,
            descripcion: descVal || 'Sin descripción',
            etiquetas: etiquetas
        };
        localStorage.setItem('misEnlaces', JSON.stringify(misEnlaces));
    }

    alert('✅ Enlace modificado correctamente.');

    // Salir del modo edición y limpiar
    cancelarEdicionEnlace();

    // Refrescar vistas
    renderizarTodo();
    cargarEnlaces();
    actualizarContadores();
    cargarCategoriasBuscador();
    buscarEnlaces();
}

function eliminarEnlaceFijo(titulo, seccion) {
    if (!confirm(`⚠️ Este es un enlace FIJO de la biblioteca.\n\n"${titulo}"\n\n¿Seguro que quieres ELIMINARLO de tu vista?`)) return;
    
    let eliminados = JSON.parse(localStorage.getItem('enlacesEliminados') || '[]');
    const clave = `${seccion}|${titulo}`;
    
    if (!eliminados.includes(clave)) {
        eliminados.push(clave);
        localStorage.setItem('enlacesEliminados', JSON.stringify(eliminados));
    }
    enlacesEliminados = eliminados;
    
    renderizarTodo();
    actualizarContadores();
    buscarEnlaces(); // Refrescar resultados de búsqueda en el panel
    alert(`✅ Enlace "${titulo}" eliminado de tu vista.`);
}

function actualizarContadores() {
    const misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    const eliminados = JSON.parse(localStorage.getItem('enlacesEliminados') || '[]');
    
    const countEnlacesEl = document.getElementById('contador-enlaces');
    const countCategoriasEl = document.getElementById('contador-categorias');
    const lastUpdateEl = document.getElementById('ultima-actualizacion');
    const countEliminadosEl = document.getElementById('contador-eliminados');
    
    if (countEnlacesEl) countEnlacesEl.textContent = misEnlaces.length;
    if (countEliminadosEl) countEliminadosEl.textContent = eliminados.length;
    
    if (countCategoriasEl) {
        const categorias = new Set(misEnlaces.map(e => e.categoria));
        countCategoriasEl.textContent = categorias.size;
    }
    
    if (lastUpdateEl) {
        if (misEnlaces.length > 0) {
            const ultimo = misEnlaces[misEnlaces.length - 1];
            lastUpdateEl.textContent = `${ultimo.fecha} ${ultimo.hora}`;
        } else {
            lastUpdateEl.textContent = '-';
        }
    }
}

function limpiarFormulario() {
    const seccionDestino = document.getElementById('seccion-destino');
    const nuevoTitulo = document.getElementById('nuevo-titulo');
    const nuevoEnlace = document.getElementById('nuevo-enlace');
    const nuevaDesc = document.getElementById('nueva-descripcion');
    const nuevasEtiquetas = document.getElementById('nuevas-etiquetas');
    const categoriaInput = document.getElementById('nueva-categoria-input');
    
    if (seccionDestino) seccionDestino.value = 'libros';
    if (nuevoTitulo) nuevoTitulo.value = '';
    if (nuevoEnlace) nuevoEnlace.value = '';
    if (nuevaDesc) nuevaDesc.value = '';
    if (nuevasEtiquetas) nuevasEtiquetas.value = '';
    if (categoriaInput) {
        categoriaInput.value = '';
        categoriaInput.classList.add('oculto');
    }
    actualizarCategorias();
}

function exportarMisEnlaces() {
    const misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    if (misEnlaces.length === 0) {
        alert('No tienes enlaces para exportar.');
        return;
    }
    
    let csv = 'Sección,Categoría,Título,Enlace,Descripción,Etiquetas,Fecha,Hora\n';
    misEnlaces.forEach(e => {
        const secLabel = nombresSeccion[e.seccion] || e.seccion;
        csv += `"${secLabel}","${e.categoria}","${e.titulo}","${e.enlace}","${e.descripcion}","${e.etiquetas.join('; ')}","${e.fecha}","${e.hora}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `mis_enlaces_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('✅ Enlaces exportados correctamente.');
}

// ============================================================
// GUARDAR PERMANENTE - Genera data.js actualizado para descargar
// ============================================================

function guardarPermanente() {
    const misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
    
    if (misEnlaces.length === 0) {
        alert('⚠️ No tenés ningún enlace agregado para guardar.\n\nPrimero agregá enlaces usando el formulario de arriba.');
        return;
    }

    // Función para convertir un array JS a texto formateado
    function arrayATexto(nombre, items) {
        let texto = `// --- ${nombre.toUpperCase()} (${items.length} enlaces) ---\nconst ${nombre} = [\n`;
        items.forEach((item, idx) => {
            const etiquetas = (item.etiquetas || []).map(e => `'${e.replace(/'/g, "\\'")}'`).join(', ');
            const titulo = (item.titulo || '').replace(/'/g, "\\'");
            const enlace = (item.enlace || '').replace(/'/g, "\\'");
            const descripcion = (item.descripcion || '').replace(/'/g, "\\'");
            const categoria = (item.categoria || '').replace(/'/g, "\\'");
            texto += `    { categoria: '${categoria}', titulo: '${titulo}', enlace: '${enlace}', descripcion: '${descripcion}', etiquetas: [${etiquetas}] }`;
            texto += idx < items.length - 1 ? ',\n' : '\n';
        });
        texto += '];\n\n';
        return texto;
    }

    // Clonar arrays originales y agregar los nuevos enlaces del usuario a cada sección
    const mapaArrays = {
        buscadores:    typeof datosBuscadores !== 'undefined'   ? [...datosBuscadores]   : [],
        cursos:        typeof datosCursos !== 'undefined'       ? [...datosCursos]       : [],
        libros:        typeof datosLibros !== 'undefined'       ? [...datosLibros]       : [],
        programacion:  typeof datosProgramacion !== 'undefined' ? [...datosProgramacion] : [],
        herramientas:  typeof datosHerramientas !== 'undefined' ? [...datosHerramientas] : [],
        software:      typeof datosSoftware !== 'undefined'     ? [...datosSoftware]     : [],
        oficios:       typeof datosOficios !== 'undefined'      ? [...datosOficios]      : [],
        megapacks:     typeof datosMegapacks !== 'undefined'    ? [...datosMegapacks]    : [],
        comunidad:     typeof datosComunidad !== 'undefined'    ? [...datosComunidad]    : [],
        formulario:    typeof datosAportes !== 'undefined'      ? [...datosAportes]      : []
    };

    // Agrupar misEnlaces por sección y agregar a cada array
    const seccionesPersonalizadas = {};
    misEnlaces.forEach(e => {
        const sec = e.seccion || 'libros';
        const entrada = {
            categoria: e.categoria || 'General',
            titulo: e.titulo,
            enlace: e.enlace,
            descripcion: e.descripcion || 'Sin descripción',
            etiquetas: e.etiquetas || []
        };
        if (mapaArrays[sec]) {
            mapaArrays[sec].push(entrada);
        } else {
            // Sección personalizada creada por el usuario
            if (!seccionesPersonalizadas[sec]) seccionesPersonalizadas[sec] = [];
            seccionesPersonalizadas[sec].push(entrada);
        }
    });

    // Construir el contenido completo del nuevo data.js
    let contenido = `// ============================================================\n`;
    contenido += `// DATOS DE LA BIBLIOTECA - ENLACES FIJOS\n`;
    contenido += `// Generado el: ${new Date().toLocaleString('es-ES')}\n`;
    contenido += `// ============================================================\n\n`;

    const nombresArray = {
        buscadores: 'datosBuscadores',
        cursos: 'datosCursos',
        libros: 'datosLibros',
        programacion: 'datosProgramacion',
        herramientas: 'datosHerramientas',
        software: 'datosSoftware',
        oficios: 'datosOficios',
        megapacks: 'datosMegapacks',
        comunidad: 'datosComunidad',
        formulario: 'datosAportes'
    };

    // Generar cada sección fija
    for (const [sec, nombreVar] of Object.entries(nombresArray)) {
        contenido += arrayATexto(nombreVar, mapaArrays[sec]);
    }

    // Generar secciones personalizadas
    for (const [sec, items] of Object.entries(seccionesPersonalizadas)) {
        const nombreVar = 'datos_' + sec.replace(/-/g, '_');
        contenido += arrayATexto(nombreVar, items);
    }

    // Descargar el archivo generado
    const blob = new Blob([contenido], { type: 'text/javascript;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.js';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Mostrar instrucciones claras al usuario
    setTimeout(() => {
        alert(
            '✅ ¡data.js descargado!\n\n' +
            'PASO A PASO para hacerlo permanente:\n\n' +
            '1️⃣ Buscá el archivo "data.js" que se acaba de descargar\n' +
            '   (generalmente en tu carpeta Descargas)\n\n' +
            '2️⃣ Copiá ese archivo a la carpeta:\n' +
            '   📁 Escritorio > Biblioteca\n\n' +
            '3️⃣ Cuando te pregunte si querés reemplazar, confirmá que SÍ\n\n' +
            '4️⃣ Recargá el archivo index.html en el navegador\n\n' +
            '¡Listo! Tus enlaces quedarán permanentes en el archivo. 🎉'
        );
    }, 500);
}

// ============================================================
// GESTIÓN DE REPORTES DE ENLACES CAÍDOS
// ============================================================

function enviarReporte(e) {
    if (e) e.preventDefault();
    const enlace = document.getElementById('reporte-enlace').value.trim();
    const titulo = document.getElementById('reporte-titulo').value.trim();
    const motivo = document.getElementById('reporte-motivo').value;
    const detalles = document.getElementById('reporte-detalles').value.trim();
    
    if (!enlace) {
        alert('❌ Por favor ingresa el enlace roto.');
        return;
    }
    
    const nuevoReporte = {
        id: Date.now(),
        enlace: enlace,
        titulo: titulo || 'No especificado',
        motivo: motivo,
        detalles: detalles || 'Sin detalles adicionales',
        fecha: new Date().toLocaleDateString('es-ES'),
        hora: new Date().toLocaleTimeString('es-ES')
    };
    
    let reportes = JSON.parse(localStorage.getItem('reportesEnlaces') || '[]');
    reportes.push(nuevoReporte);
    localStorage.setItem('reportesEnlaces', JSON.stringify(reportes));
    
    alert('✅ Reporte enviado correctamente. Revisaremos el enlace. ¡Muchas gracias por tu colaboración!');
    
    // Limpiar formulario
    const form = document.getElementById('form-reportar');
    if (form) form.reset();
    
    // Actualizar panel si está logueado
    cargarReportes();
}

function cargarReportes() {
    const lista = document.getElementById('lista-reportes');
    if (!lista) return;
    
    const reportes = JSON.parse(localStorage.getItem('reportesEnlaces') || '[]');
    if (reportes.length === 0) {
        lista.innerHTML = '<p class="empty">📭 No hay reportes de enlaces caídos.</p>';
        return;
    }
    
    let html = '<div style="overflow-x:auto;"><table><thead><tr><th>Fecha/Hora</th><th>Título/Sección</th><th>Enlace Reportado</th><th>Motivo</th><th>Detalles</th><th style="text-align:center;">Acción</th></tr></thead><tbody>';
    
    const nombresMotivo = {
        caido: '❌ Caído / 404',
        incorrecto: '🔗 Incorrecto',
        calidad: '⚠️ Calidad',
        otro: '⚙️ Otro'
    };
    
    reportes.forEach(rep => {
        html += `<tr>
            <td>${rep.fecha} ${rep.hora}</td>
            <td style="font-weight:500;">${rep.titulo}</td>
            <td><a href="${rep.enlace}" target="_blank">${rep.enlace.length > 45 ? rep.enlace.substring(0,45)+'...' : rep.enlace}</a></td>
            <td><span class="tag" style="background:#ffcdd2;color:#c62828;border:none;padding:2px 8px;border-radius:12px;font-size:0.75rem;font-weight:600;">${nombresMotivo[rep.motivo] || rep.motivo}</span></td>
            <td>${rep.detalles}</td>
            <td style="text-align:center;"><button onclick="eliminarReporte(${rep.id})" class="btn-delete">🗑️</button></td>
        </tr>`;
    });
    
    html += '</tbody></table></div>';
    lista.innerHTML = html;
}

function eliminarReporte(id) {
    if (!confirm('¿Seguro que quieres eliminar este reporte?')) return;
    let reportes = JSON.parse(localStorage.getItem('reportesEnlaces') || '[]');
    reportes = reportes.filter(r => r.id !== id);
    localStorage.setItem('reportesEnlaces', JSON.stringify(reportes));
    cargarReportes();
}

function limpiarTodosLosReportes() {
    if (JSON.parse(localStorage.getItem('reportesEnlaces') || '[]').length === 0) {
        alert('No hay reportes para limpiar.');
        return;
    }
    if (!confirm('⚠️ ¿Seguro que quieres borrar todos los reportes recibidos?')) return;
    localStorage.removeItem('reportesEnlaces');
    cargarReportes();
    alert('🧹 Todos los reportes han sido eliminados.');
}

function limpiarPantallaMisEnlaces() {
    const lista = document.getElementById('lista-enlaces');
    if (!lista) return;
    lista.innerHTML = '<p class="empty">🧹 Pantalla limpia. Los enlaces agregados se mantienen guardados permanentemente. Haz clic en "🔄 Recargar" para volver a ver la lista.</p>';
}

function limpiarTodos() {
    limpiarPantallaMisEnlaces();
}

function recargarTodo() {
    renderizarTodo();
    cargarEnlaces();
    actualizarContadores();
    actualizarCategorias();
    cargarCategoriasBuscador();
    console.log('🔄 Recargado. Total de enlaces:', recopilarTodosLosEnlaces().length);
}

// ============================================================
// FUNCIONES AUXILIARES DE NORMALIZACIÓN Y BÚSQUEDA FLEXIBLE
// ============================================================

function normalizarTexto(str) {
    if (!str) return '';
    return str
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

function distanciaLevenshtein(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

function sonPalabrasSimilares(qToken, itemWord) {
    if (!qToken || !itemWord) return false;
    if (qToken === itemWord) return true;
    if (itemWord.includes(qToken) || qToken.includes(itemWord)) return true;

    if (qToken.length < 4 || itemWord.length < 4) return false;

    const dist = distanciaLevenshtein(qToken, itemWord);
    const maxDist = (qToken.length > 6 && itemWord.length > 6) ? 2 : 1;
    return dist <= maxDist;
}

function coincideBusquedaItem(item, queryRaw) {
    const qNorm = normalizarTexto(queryRaw);
    if (!qNorm) return true;

    const tituloNorm = normalizarTexto(item.titulo || '');
    const descNorm = normalizarTexto(item.descripcion || '');
    const enlaceNorm = normalizarTexto(item.enlace || '');
    const catNorm = normalizarTexto(item.categoria || '');
    const secNorm = normalizarTexto(nombresSeccion[item.seccion] || item.seccion || '');
    const tagsNorm = (item.etiquetas || []).map(normalizarTexto).join(' ');

    const todoElTexto = `${tituloNorm} ${descNorm} ${enlaceNorm} ${catNorm} ${secNorm} ${tagsNorm}`;

    if (todoElTexto.includes(qNorm)) return true;

    const qTokens = qNorm.split(/\s+/).filter(t => t.length > 0);
    const itemWords = todoElTexto.split(/[^\wáéíóúñ]+/).filter(w => w.length > 0);

    return qTokens.every(qToken => {
        if (todoElTexto.includes(qToken)) return true;
        return itemWords.some(itemWord => sonPalabrasSimilares(qToken, itemWord));
    });
}

function resaltarTextoCoincidente(textoOriginal, queryRaw) {
    if (!textoOriginal || !queryRaw.trim()) return textoOriginal;

    const qTokens = normalizarTexto(queryRaw).split(/\s+/).filter(t => t.length >= 2);
    if (qTokens.length === 0) return textoOriginal;

    let resultado = textoOriginal;

    qTokens.forEach(token => {
        let pattern = '';
        for (let char of token) {
            if ('aá'.includes(char)) pattern += '[aáAÁ]';
            else if ('eé'.includes(char)) pattern += '[eéEÉ]';
            else if ('ií'.includes(char)) pattern += '[iíIÍ]';
            else if ('oó'.includes(char)) pattern += '[oóOÓ]';
            else if ('uúü'.includes(char)) pattern += '[uúüUÚÜ]';
            else if ('nñ'.includes(char)) pattern += '[nñNÑ]';
            else pattern += char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
        try {
            const re = new RegExp(`(${pattern})`, 'gi');
            resultado = resultado.replace(re, '<span class="destacar">$1</span>');
        } catch (_) {}
    });

    return resultado;
}

// ============================================================
// BUSCADOR DEL PANEL DE ADMINISTRACIÓN
// ============================================================

function cargarCategoriasBuscador() {
    const select = document.getElementById('buscar-categoria');
    const seccionSelect = document.getElementById('buscar-seccion');
    if (!select || !seccionSelect) return;
    
    const seccion = seccionSelect.value;
    const todos = recopilarTodosLosEnlaces();
    let categorias = new Set();
    
    todos.filter(item => seccion === 'todas' || item.seccion === seccion).forEach(item => categorias.add(item.categoria));
    
    const actual = select.value;
    select.innerHTML = '<option value="todas">Todas las categorías</option>';
    Array.from(categorias).sort().forEach(cat => {
        select.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    select.value = actual;
}

function buscarEnlaces() {
    const textoEl = document.getElementById('buscar-enlace');
    const seccionSelect = document.getElementById('buscar-seccion');
    const categoriaSelect = document.getElementById('buscar-categoria');
    const resultados = document.getElementById('resultados-busqueda');
    
    if (!textoEl || !seccionSelect || !categoriaSelect || !resultados) return;
    
    const texto = textoEl.value.trim();
    const seccion = seccionSelect.value;
    const categoria = categoriaSelect.value;
    
    if (!texto && categoria === 'todas' && seccion === 'todas') {
        resultados.innerHTML = '<p style="color:#666;text-align:center;padding:20px;">Escribe algo en el buscador para encontrar enlaces.</p>';
        return;
    }
    
    const todos = recopilarTodosLosEnlaces();
    const filtrados = todos.filter(item => {
        const matchSeccion = seccion === 'todas' || item.seccion === seccion;
        const matchCategoria = categoria === 'todas' || item.categoria === categoria;
        const matchTexto = !texto || coincideBusquedaItem(item, texto);
        return matchSeccion && matchCategoria && matchTexto;
    });
    
    if (filtrados.length === 0) {
        resultados.innerHTML = '<p style="color:#666;text-align:center;padding:20px;">No se encontraron enlaces.</p>';
        return;
    }
    
    let html = `<p style="margin-bottom:10px;font-weight:600;">${filtrados.length} enlaces encontrados:</p>
        <table><thead><tr><th>Sección</th><th>Categoría</th><th>Título</th><th>Enlace</th><th>Acción</th></tr></thead><tbody>`;
    
    filtrados.forEach(item => {
        const seccionNombre = nombresSeccion[item.seccion] || item.seccion;
        const esMio = item.esMio === true;
        const btnAcciones = esMio ?
            `<button onclick="editarEnlace(${item.id})" class="btn-success" style="padding:4px 8px;font-size:0.75rem;border-radius:4px;margin-right:4px;">✏️</button><button onclick="eliminarEnlace(${item.id})" class="btn-delete">🗑️</button>` :
            `<button onclick="eliminarEnlaceFijo('${item.titulo}','${item.seccion}')" class="btn-delete" style="background:#e65100;">🗑️</button>`;
        
        const tituloResaltado = resaltarTextoCoincidente(item.titulo, texto);

        html += `<tr>
            <td>${seccionNombre}</td>
            <td>${item.categoria}</td>
            <td>${tituloResaltado}</td>
            <td><a href="${item.enlace}" target="_blank">${item.enlace.length > 30 ? item.enlace.substring(0,30)+'...' : item.enlace}</a></td>
            <td style="text-align:center;white-space:nowrap;">${btnAcciones}</td>
        </tr>`;
    });
    
    html += `</tbody></table>`;
    resultados.innerHTML = html;
}

// ============================================================
// BUSQUEDA GLOBAL DE LA BIBLIOTECA
// ============================================================

function buscarGlobal() {
    const textoEl = document.getElementById('busqueda-global');
    const contenedor = document.getElementById('resultados-busqueda-global');
    if (!textoEl || !contenedor) return;
    
    const texto = textoEl.value.trim();
    
    if (!texto) {
        contenedor.classList.remove('activo');
        contenedor.innerHTML = '';
        return;
    }
    
    const todos = recopilarTodosLosEnlaces();
    const filtrados = todos.filter(item => coincideBusquedaItem(item, texto));
    
    if (filtrados.length === 0) {
        contenedor.innerHTML = `<p style="padding:15px;color:#666;text-align:center;">No se encontraron enlaces para "<strong>${texto}</strong>"</p>`;
        contenedor.classList.add('activo');
        return;
    }
    
    let html = `<p style="padding:10px 0;font-weight:600;">${filtrados.length} enlaces encontrados para "<strong>${texto}</strong>"</p>
        <table><thead><tr><th>Sección</th><th>Categoría</th><th>Título</th><th>Descripción</th><th>Enlace</th></tr></thead><tbody>`;
    
    filtrados.slice(0, 50).forEach(item => {
        const seccionNombre = nombresSeccion[item.seccion] || item.seccion;
        const tituloResaltado = resaltarTextoCoincidente(item.titulo, texto);
        const descResaltada = resaltarTextoCoincidente(item.descripcion, texto);
        
        html += `<tr>
            <td>${seccionNombre}</td>
            <td>${item.categoria}</td>
            <td>${tituloResaltado}</td>
            <td>${descResaltada}</td>
            <td><a href="${item.enlace}" target="_blank">${item.enlace.length > 40 ? item.enlace.substring(0,40)+'...' : item.enlace}</a></td>
        </tr>`;
    });
    
    if (filtrados.length > 50) {
        html += `<tr><td colspan="5" style="text-align:center;color:#666;">... y ${filtrados.length - 50} enlaces más</td></tr>`;
    }
    
    html += `</tbody></table>`;
    contenedor.innerHTML = html;
    contenedor.classList.add('activo');
}

function limpiarBusquedaGlobal() {
    const textoEl = document.getElementById('busqueda-global');
    const resultados = document.getElementById('resultados-busqueda-global');
    if (textoEl) textoEl.value = '';
    if (resultados) {
        resultados.classList.remove('activo');
        resultados.innerHTML = '';
    }
}

// ============================================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Inicializando biblioteca dinámica...');
    
    // 1. Recrear secciones creadas previamente por el usuario
    seccionesCreadas.forEach(id => {
        let nombreSeccion = id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ');
        
        // Intentar encontrar el nombre original desde misEnlaces si es posible
        const misEnlaces = JSON.parse(localStorage.getItem('misEnlaces') || '[]');
        const e = misEnlaces.find(item => item.seccion === id);
        if (e && e.seccionNombre) {
            nombreSeccion = e.seccionNombre;
        }
        
        crearBotonNavegacionSeccion(id, nombreSeccion);
        crearContenedorHTMLSeccion(id, nombreSeccion);
    });
    
    // 2. Renderizar todas las tablas dinámicamente
    renderizarTodo();
    
    // 3. Cargar datos del panel de administración
    cargarEnlaces();
    actualizarContadores();
    actualizarCategorias();
    cargarCategoriasBuscador();
    actualizarSelectSecciones();
    
    // 4. Configurar Event Listeners adicionales
    const buscarSeccionSelect = document.getElementById('buscar-seccion');
    if (buscarSeccionSelect) {
        buscarSeccionSelect.addEventListener('change', function() {
            cargarCategoriasBuscador();
            buscarEnlaces();
        });
    }
    
    // Ocultar/mostrar elementos de admin y cargar los reportes
    actualizarElementosAdmin();
    cargarReportes();

    // Ocultar resultados al hacer clic fuera del buscador global
    document.addEventListener('click', function(e) {
        const searchBar = document.querySelector('.search-bar');
        const resultados = document.getElementById('resultados-busqueda-global');
        if (searchBar && resultados && !searchBar.contains(e.target)) {
            resultados.classList.remove('activo');
        }
    });
    
    console.log('✅ Biblioteca inicializada correctamente.');
});

// Tecla Enter para agregar enlace en el formulario
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.closest('input, textarea')) {
        const formulario = e.target.closest('.admin-form');
        if (formulario) {
            e.preventDefault();
            agregarEnlace();
        }
    }
});

// Tecla Enter para búsqueda global
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.id === 'busqueda-global') {
        e.preventDefault();
        buscarGlobal();
    }
});

function copiarAlias() {
    navigator.clipboard.writeText('nancyeliscardozo.mp').then(() => {
        alert('📋 ¡Alias "nancyeliscardozo.mp" copiado al portapapeles!');
    }).catch(() => {
        // Fallback para navegadores antiguos
        const tempInput = document.createElement('input');
        tempInput.value = 'nancyeliscardozo.mp';
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('📋 ¡Alias "nancyeliscardozo.mp" copiado al portapapeles!');
    });
}

console.log('📚 Controladores cargados correctamente.');
