// ==========================================
// DATOS INICIALES DEL MENÚ Y CONFIGURACIÓN
// ==========================================
const DEFAULT_MENU = [
  // Pollo Frito y Broaster
  { id: 1, category: "Pollo Frito y Broaster", name: "Pollo Frito entero con Papa Salada", desc: "Doradito y tostadito, acompañado de papa salada.", price: 36000 },
  { id: 2, category: "Pollo Frito y Broaster", name: "Medio Pollo Frito con Papa Salada", desc: "4 presas de pollo frito con papa salada.", price: 19000 },
  { id: 3, category: "Pollo Frito y Broaster", name: "Un Cuarto de Pollo Frito con Papa Salada", desc: "2 presas de pollo frito con papa salada.", price: 10500 },
  { id: 4, category: "Pollo Frito y Broaster", name: "Pollo Frito entero con Papa Francesa", desc: "Pollo entero crujiente con porción de papa francesa.", price: 38000 },
  { id: 5, category: "Pollo Frito y Broaster", name: "Medio Pollo Frito con Papa Francesa", desc: "4 presas de pollo frito con papa francesa.", price: 20000 },
  { id: 6, category: "Pollo Frito y Broaster", name: "Un Cuarto de Pollo Frito con Papa Francesa", desc: "2 presas de pollo frito con papa francesa.", price: 11500 },
  { id: 7, category: "Pollo Frito y Broaster", name: "Pollo Frito entero con Papa Criolla", desc: "Pollo entero doradito con papa criolla.", price: 38000 },
  { id: 8, category: "Pollo Frito y Broaster", name: "Medio Pollo Frito con Papa Criolla", desc: "4 presas de pollo frito con papa criolla.", price: 20000 },
  { id: 9, category: "Pollo Frito y Broaster", name: "Un Cuarto de Pollo Frito con Papa Criolla", desc: "2 presas de pollo frito con papa criolla.", price: 11500 },
  { id: 10, category: "Pollo Frito y Broaster", name: "Pollo Broaster entero", desc: "8 presas apanadas al estilo broaster.", price: 38000 },
  { id: 11, category: "Pollo Frito y Broaster", name: "Medio Pollo Broaster", desc: "4 presas apanadas al estilo broaster.", price: 20000 },
  { id: 12, category: "Pollo Frito y Broaster", name: "Cuarto de Pollo Broaster", desc: "2 presas apanadas al estilo broaster.", price: 11500 },

  // Combos Familiares
  { id: 13, category: "Combos de Pollo", name: "Combo 1", desc: "1 pollo, papa francesa, papa salada, plátano con queso y bocadillo + gaseosa familiar 1.5L.", price: 46000 },
  { id: 14, category: "Combos de Pollo", name: "Combo 2", desc: "Pollo y medio, papa salada, papa francesa, plátano con queso y bocadillo + gaseosa familiar 1.5L.", price: 62000 },
  { id: 15, category: "Combos de Pollo", name: "Combo 3", desc: "2 pollos, papa salada, papa francesa, plátano con queso y bocadillo + gaseosa familiar 1.5L.", price: 78000 },
  { id: 16, category: "Combos de Pollo", name: "Combo 4", desc: "Medio pollo, papa salada, papa francesa, plátano con queso y bocadillo + gaseosa familiar 1.5L.", price: 30000 },

  // Carnes, Pechugas y Costillas
  { id: 17, category: "Carnes y Pechugas", name: "Chuleta Valluna", desc: "Crujiente chuleta apanada con acompañamientos.", price: 24000 },
  { id: 18, category: "Carnes y Pechugas", name: "Pechuga Champiñón", desc: "Pechuga a la plancha bañada en salsa de champiñones.", price: 25000 },
  { id: 19, category: "Carnes y Pechugas", name: "Pechuga Chispita", desc: "Especialidad de la casa con gratinado y toque especial.", price: 26000 },
  { id: 20, category: "Carnes y Pechugas", name: "Pechuga Ranchera", desc: "Pechuga con salsa ranchera, tocineta y maíz.", price: 26000 },
  { id: 21, category: "Carnes y Pechugas", name: "Lomo de Cerdo", desc: "Jugoso corte de lomo de cerdo a la plancha.", price: 23000 },
  { id: 22, category: "Carnes y Pechugas", name: "Lomo Gratinado", desc: "Lomo de cerdo cubierto con queso fundido.", price: 25000 },
  { id: 23, category: "Carnes y Pechugas", name: "Churrasco", desc: "Corte de res a la parrilla al término deseado.", price: 28000 },
  { id: 24, category: "Carnes y Pechugas", name: "Churrasco Gratinado", desc: "Churrasco a la parrilla con capa de queso gratinado.", price: 30000 },
  { id: 25, category: "Carnes y Pechugas", name: "Costillitas BBQ", desc: "Costillas de cerdo bañadas en salsa BBQ artesanal.", price: 26000 },
  { id: 26, category: "Carnes y Pechugas", name: "Costillas de Ternera", desc: "Tiernas costillas de ternera asadas.", price: 27000 },
  { id: 27, category: "Carnes y Pechugas", name: "Carne Asada", desc: "Corte tradicional de carne de res asada.", price: 22000 },
  { id: 28, category: "Carnes y Pechugas", name: "Carne Encebollada", desc: "Carne a la plancha con cebolla caramelizada.", price: 23000 },
  { id: 29, category: "Carnes y Pechugas", name: "Sobrebarriga a la Plancha", desc: "Sobrebarriga dorada a la plancha.", price: 24000 },
  { id: 30, category: "Carnes y Pechugas", name: "Sobrebarriga en Salsa", desc: "Sobrebarriga tierna en salsa criolla de la casa.", price: 24000 },

  // Pescados
  { id: 31, category: "Pescados", name: "Mojarra", desc: "Mojarra frita entera con patacón y ensalada.", price: 26000 },
  { id: 32, category: "Pescados", name: "Bagre", desc: "Posta de bagre dorado a la plancha o frito.", price: 27000 },
  { id: 33, category: "Pescados", name: "Bagre en Salsa", desc: "Bagre en salsa criolla tradicional.", price: 28000 },
  { id: 34, category: "Pescados", name: "Trucha", desc: "Trucha fresca a la plancha o al ajillo.", price: 26000 },
  { id: 35, category: "Pescados", name: "Trucha Gratinada", desc: "Trucha cubierta con abundante queso gratinado.", price: 29000 },
  { id: 36, category: "Pescados", name: "Trucha en Champiñones", desc: "Trucha bañada en cremosa salsa de champiñones.", price: 29000 },

  // Sopas, Arroces y Comida Rápida
  { id: 37, category: "Sopas, Arroces y Rápidos", name: "Arroz con Pollo", desc: "Clásico arroz con pollo desmechado y verduras.", price: 18000 },
  { id: 38, category: "Sopas, Arroces y Rápidos", name: "Sopa de Menudencia", desc: "Sopa tradicional casera con menudencias.", price: 9000 },
  { id: 39, category: "Sopas, Arroces y Rápidos", name: "Ajiaco", desc: "Ajiaco santafereño con pollo, mazorca, crema y alcaparras.", price: 18000 },
  { id: 40, category: "Sopas, Arroces y Rápidos", name: "Mondongo", desc: "Sopa espesa de mondongo tradicional.", price: 18000 },
  { id: 41, category: "Sopas, Arroces y Rápidos", name: "Nuggets", desc: "Porción de nuggets crujientes de pollo con papas.", price: 14000 },
  { id: 42, category: "Sopas, Arroces y Rápidos", name: "Salchipapa", desc: "Papas a la francesa con salchicha y salsas.", price: 13000 },
  { id: 43, category: "Sopas, Arroces y Rápidos", name: "Alitas BBQ", desc: "Alitas de pollo bañadas en salsa BBQ.", price: 19000 },

  // Porciones Adicionales
  { id: 44, category: "Porciones", name: "Porción de Papa Francesa", desc: "Papas a la francesa crujientes.", price: 6000 },
  { id: 45, category: "Porciones", name: "Porción de Ensalada", desc: "Ensalada fresca del día.", price: 5000 },
  { id: 46, category: "Porciones", name: "Porción de Yuca", desc: "Yuca cocida o frita.", price: 5000 },
  { id: 47, category: "Porciones", name: "Porción de Arepa", desc: "Arepa asada tradicional.", price: 3500 },
  { id: 48, category: "Porciones", name: "Plátano con Queso y Bocadillo", desc: "Plátano maduro horneado con queso y bocadillo.", price: 7000 },
  { id: 49, category: "Porciones", name: "Porción de Papa Salada", desc: "Papas saladas tradicionales.", price: 5000 },
  { id: 50, category: "Porciones", name: "Porción de Patacón", desc: "Patacones crujientes.", price: 5500 },
  { id: 51, category: "Porciones", name: "Porción de Papa Criolla", desc: "Papas criollas doraditas.", price: 6000 },
  { id: 52, category: "Porciones", name: "Porción de Arroz", desc: "Arroz blanco suelto.", price: 4500 },

  // Bebidas y Cervezas
  { id: 53, category: "Bebidas y Cervezas", name: "Gaseosa Personal (Ginger / Coca-Cola / Manzana / Colombiana)", desc: "Botella personal fría.", price: 4000 },
  { id: 54, category: "Bebidas y Cervezas", name: "Gaseosa 1.5L (Ginger / Coca-Cola / Manzana / Colombiana / Cuatro)", desc: "Botella familiar 1.5 litros.", price: 8500 },
  { id: 55, category: "Bebidas y Cervezas", name: "Agua Natural", desc: "Botella de agua sin gas.", price: 3000 },
  { id: 56, category: "Bebidas y Cervezas", name: "Agua con Gas", desc: "Botella de agua gasificada.", price: 3500 },
  { id: 57, category: "Bebidas y Cervezas", name: "Cerveza Águila", desc: "Cerveza bien fría.", price: 5000 },
  { id: 58, category: "Bebidas y Cervezas", name: "Cerveza Poker", desc: "Cerveza bien fría.", price: 5000 },
  { id: 59, category: "Bebidas y Cervezas", name: "Cerveza Club Colombia", desc: "Cerveza premium bien fría.", price: 6000 },
  { id: 60, category: "Bebidas y Cervezas", name: "Cola y Pola", desc: "Refajo tradicional bien frío.", price: 4500 },
  { id: 61, category: "Bebidas y Cervezas", name: "Limonada Natural", desc: "Vaso grande recién preparado.", price: 6000 },
  { id: 62, category: "Bebidas y Cervezas", name: "Jugo Natural", desc: "En agua o en leche según disponibilidad.", price: 7000 }
];

const MAX_WEEKDAY_RESERVATIONS = 15;
const MAX_WEEKEND_RESERVATIONS = 20;
const MAX_GUESTS_PER_TABLE = 4;

// ==========================================
// ESTADO DE LA APLICACIÓN (LOCALSTORAGE)
// ==========================================
let state = {
  phones: JSON.parse(localStorage.getItem("sa22_phones")) || {
    phone1: "322 223 6127",
    phone2: "313 453 9206"
  },
  reservations: JSON.parse(localStorage.getItem("sa22_reservations")) || {
    weekdayCount: 0,
    weekendCount: 0,
    list: []
  },
  menu: JSON.parse(localStorage.getItem("sa22_menu")) || DEFAULT_MENU,
  cart: [],
  activeCategory: "Todos",
  searchQuery: ""
};

// Variables booleanas explícitas para control de reservas
let isWeekdayFull = false;
let isWeekendFull = false;
let hasAvailableTables = true;
let isTableReserved = false;

function saveState() {
  localStorage.setItem("sa22_phones", JSON.stringify(state.phones));
  localStorage.setItem("sa22_reservations", JSON.stringify(state.reservations));
  localStorage.setItem("sa22_menu", JSON.stringify(state.menu));
}

function formatCOP(value) {
  return "$" + Number(value).toLocaleString("es-CO");
}

function sanitizePhone(phone) {
  return phone.replace(/\D/g, "");
}

// ==========================================
// RENDERIZADO DE TELÉFONOS Y RESERVAS
// ==========================================
function renderPhones() {
  const { phone1, phone2 } = state.phones;
  document.getElementById("display-phone-1").textContent = phone1;
  document.getElementById("display-phone-2").textContent = phone2;

  const clean1 = sanitizePhone(phone1);
  const clean2 = sanitizePhone(phone2);

  document.getElementById("call-link-1").href = `tel:+57${clean1}`;
  document.getElementById("wa-link-1").href = `https://wa.me/57${clean1}`;
  document.getElementById("call-link-2").href = `tel:+57${clean2}`;
  document.getElementById("wa-link-2").href = `https://wa.me/57${clean2}`;

  const targetSelect = document.getElementById("order-phone-target");
  targetSelect.options[0].text = `Línea 1: ${phone1}`;
  targetSelect.options[1].text = `Línea 2: ${phone2}`;

  document.getElementById("input-phone-1").value = phone1;
  document.getElementById("input-phone-2").value = phone2;
}

function updateReservationBooleans() {
  isWeekdayFull = state.reservations.weekdayCount >= MAX_WEEKDAY_RESERVATIONS;
  isWeekendFull = state.reservations.weekendCount >= MAX_WEEKEND_RESERVATIONS;
  hasAvailableTables = !isWeekdayFull || !isWeekendFull;

  document.getElementById("weekday-counter").textContent = `${state.reservations.weekdayCount} / ${MAX_WEEKDAY_RESERVATIONS}`;
  document.getElementById("weekend-counter").textContent = `${state.reservations.weekendCount} / ${MAX_WEEKEND_RESERVATIONS}`;
  document.getElementById("admin-weekday-count").textContent = state.reservations.weekdayCount;
  document.getElementById("admin-weekend-count").textContent = state.reservations.weekendCount;
}

// ==========================================
// LÓGICA DEL FORMULARIO DE RESERVAS
// ==========================================
document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("res-name").value.trim();
  const phone = document.getElementById("res-phone").value.trim();
  const dayType = document.getElementById("res-day-type").value;
  const date = document.getElementById("res-date").value;
  const time = document.getElementById("res-time").value;
  const guests = parseInt(document.getElementById("res-guests").value, 10);

  if (guests < 1 || guests > MAX_GUESTS_PER_TABLE) {
    alert("El límite máximo por mesa es de 4 personas.");
    return;
  }

  updateReservationBooleans();

  // Evaluar disponibilidad con booleano según tipo de día
  const canReserve = dayType === "weekday" ? !isWeekdayFull : !isWeekendFull;
  const feedbackBox = document.getElementById("reservation-feedback");
  feedbackBox.classList.remove("hidden", "success", "full");

  if (!canReserve) {
    isTableReserved = false;
    feedbackBox.classList.add("full");
    feedbackBox.innerHTML = `
      <p>Se nos acabaron las reservas, ¿deseas pedir a domicilio o estar en la sala de espera?</p>
      <div class="feedback-actions">
        <a href="#seccion-menu" class="btn btn-sm btn-red">Pedir a Domicilio</a>
        <button type="button" id="btn-waitlist" class="btn btn-sm btn-gold">Anotarme en Sala de Espera</button>
      </div>
    `;
    document.getElementById("btn-waitlist").addEventListener("click", () => {
      feedbackBox.innerHTML = `<p>¡Listo, ${name}! Te hemos anotado en nuestra sala de espera prioritaria para las ${time}. Te contactaremos al ${phone}.</p>`;
    });
    return;
  }

  // Registrar reserva exitosa
  isTableReserved = true;
  if (dayType === "weekday") {
    state.reservations.weekdayCount += 1;
  } else {
    state.reservations.weekendCount += 1;
  }

  state.reservations.list.push({ name, phone, dayType, date, time, guests });
  saveState();
  updateReservationBooleans();

  feedbackBox.classList.add("success");
  feedbackBox.innerHTML = `
    <p>Con mucho gusto guardaremos tu mesa. Te esperamos a esa hora en el mejor restaurante del sur.</p>
    <small>Detalle: Mesa para ${guests} persona(s) a nombre de ${name} el ${date} a las ${time}.</small>
  `;
  e.target.reset();
});

// ==========================================
// RENDERIZADO DEL MENÚ Y CARRITO
// ==========================================
function renderCategories() {
  const categories = ["Todos", ...new Set(state.menu.map(item => item.category))];
  const tabsContainer = document.getElementById("category-tabs");
  tabsContainer.innerHTML = categories
    .map(cat => `<button type="button" class="cat-tab ${state.activeCategory === cat ? "active" : ""}" data-cat="${cat}">${cat}</button>`)
    .join("");

  tabsContainer.querySelectorAll(".cat-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeCategory = btn.dataset.cat;
      renderCategories();
      renderMenu();
    });
  });
}

function renderMenu() {
  const grid = document.getElementById("menu-grid");
  const filtered = state.menu.filter(item => {
    const matchesCat = state.activeCategory === "Todos" || item.category === state.activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          item.desc.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p>No se encontraron platos con ese criterio de búsqueda.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card">
      <div>
        <span class="menu-cat-badge">${item.category}</span>
        <h3>${item.name}</h3>
        <p class="menu-desc">${item.desc}</p>
      </div>
      <div class="menu-card-footer">
        <span class="menu-price">${formatCOP(item.price)}</span>
        <button type="button" class="btn btn-sm btn-red" onclick="addToCart(${item.id})">+ Agregar</button>
      </div>
    </article>
  `).join("");
}

document.getElementById("menu-search").addEventListener("input", (e) => {
  state.searchQuery = e.target.value;
  renderMenu();
});

window.addToCart = function (id) {
  const product = state.menu.find(m => m.id === id);
  if (!product) return;
  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  renderCart();
};

window.updateCartQty = function (id, delta) {
  const idx = state.cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  renderCart();
};

function renderCart() {
  const container = document.getElementById("cart-items");
  const badge = document.getElementById("cart-badge");
  const totalEl = document.getElementById("cart-total");

  const totalItems = state.cart.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = state.cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  badge.textContent = totalItems;
  totalEl.textContent = formatCOP(totalPrice);

  if (state.cart.length === 0) {
    container.innerHTML = `<p class="empty-cart-msg">Aún no has agregado productos a tu pedido.</p>`;
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <span>${formatCOP(item.price)} c/u</span>
      </div>
      <div class="qty-controls">
        <button type="button" class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
        <strong>${item.qty}</strong>
        <button type="button" class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join("");
}

// Drawer Carrito
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

function toggleCart(open) {
  cartDrawer.classList.toggle("open", open);
  cartOverlay.classList.toggle("hidden", !open);
}

document.getElementById("btn-cart-float").addEventListener("click", () => toggleCart(true));
document.getElementById("btn-close-cart").addEventListener("click", () => toggleCart(false));
cartOverlay.addEventListener("click", () => toggleCart(false));

document.getElementById("order-type").addEventListener("change", (e) => {
  document.getElementById("address-group").classList.toggle("hidden", e.target.value !== "Domicilio");
});

document.getElementById("btn-send-order").addEventListener("click", () => {
  if (state.cart.length === 0) {
    alert("Agrega al menos un producto del menú antes de enviar el pedido.");
    return;
  }

  const customer = document.getElementById("order-customer").value.trim() || "Cliente";
  const orderType = document.getElementById("order-type").value;
  const address = document.getElementById("order-address").value.trim();
  const targetLine = document.getElementById("order-phone-target").value;

  if (orderType === "Domicilio" && !address) {
    alert("Por favor ingresa la dirección de entrega para el domicilio.");
    return;
  }

  const chosenPhone = targetLine === "1" ? state.phones.phone1 : state.phones.phone2;
  const cleanTarget = sanitizePhone(chosenPhone);

  let lines = [
    `*NUEVO PEDIDO - SURTIDORA DE AVES 22 DR*`,
    `*Cliente:* ${customer}`,
    `*Modalidad:* ${orderType}`
  ];
  if (orderType === "Domicilio") {
    lines.push(`*Dirección:* ${address}`);
  }
  lines.push(``, `*Detalle del pedido:*`);

  let total = 0;
  state.cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    lines.push(`• ${item.qty}x ${item.name} (${formatCOP(subtotal)})`);
  });

  lines.push(``, `*TOTAL:* ${formatCOP(total)}`);

  const waUrl = `https://wa.me/57${cleanTarget}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.open(waUrl, "_blank");
});

// ==========================================
// PANEL DE CONFIGURACIÓN / ADMINISTRACIÓN
// ==========================================
const adminModal = document.getElementById("admin-modal");
const loginView = document.getElementById("admin-login-view");
const dashboardView = document.getElementById("admin-dashboard-view");

document.getElementById("btn-config").addEventListener("click", () => {
  adminModal.classList.remove("hidden");
  loginView.classList.remove("hidden");
  dashboardView.classList.add("hidden");
  document.getElementById("admin-password").value = "";
  document.getElementById("login-error").classList.add("hidden");
});

document.getElementById("btn-close-modal").addEventListener("click", () => {
  adminModal.classList.add("hidden");
});

document.getElementById("admin-login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const pwd = document.getElementById("admin-password").value;
  if (pwd === "mayerjavi1984") {
    loginView.classList.add("hidden");
    dashboardView.classList.remove("hidden");
    renderAdminPrices();
    updateReservationBooleans();
  } else {
    document.getElementById("login-error").classList.remove("hidden");
  }
});

// Pestañas del panel admin
document.querySelectorAll(".admin-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".admin-tab-panel").forEach(p => p.classList.add("hidden"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.remove("hidden");
  });
});

function showAdminToast(msg) {
  const toast = document.getElementById("admin-toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3000);
}

document.getElementById("btn-save-phones").addEventListener("click", () => {
  const p1 = document.getElementById("input-phone-1").value.trim();
  const p2 = document.getElementById("input-phone-2").value.trim();
  if (p1 && p2) {
    state.phones.phone1 = p1;
    state.phones.phone2 = p2;
    saveState();
    renderPhones();
    showAdminToast("Números telefónicos actualizados correctamente.");
  }
});

document.getElementById("btn-reset-reservations").addEventListener("click", () => {
  state.reservations = { weekdayCount: 0, weekendCount: 0, list: [] };
  isWeekdayFull = false;
  isWeekendFull = false;
  hasAvailableTables = true;
  isTableReserved = false;
  saveState();
  updateReservationBooleans();
  showAdminToast("Cupos de reservas reiniciados a 0.");
});

function renderAdminPrices() {
  const list = document.getElementById("admin-prices-list");
  list.innerHTML = state.menu.map(item => `
    <div class="price-edit-row">
      <span>${item.name}</span>
      <input type="number" min="0" step="500" data-id="${item.id}" value="${item.price}" />
    </div>
  `).join("");
}

document.getElementById("btn-save-prices").addEventListener("click", () => {
  document.querySelectorAll("#admin-prices-list input").forEach(input => {
    const id = parseInt(input.dataset.id, 10);
    const newPrice = parseInt(input.value, 10);
    const item = state.menu.find(m => m.id === id);
    if (item && !isNaN(newPrice) && newPrice >= 0) {
      item.price = newPrice;
    }
  });
  saveState();
  renderMenu();
  renderCart();
  showAdminToast("Precios del menú actualizados.");
});

// ==========================================
// INICIALIZACIÓN
// ==========================================
renderPhones();
updateReservationBooleans();
renderCategories();
renderMenu();
renderCart();
