/* Il Gusto — lightweight in-site assistant (bilingual IT/EN).
   No backend, no API key: quick-reply buttons + simple keyword matching.
   Follows the site language (set by i18n.js); updates live on language change. */
(function () {
  "use strict";

  var PHONE_DISPLAY = "392 8080172";
  var PHONE_TEL = "+393928080172";
  var MENU = "menu.html";
  var MAPS = "https://maps.app.goo.gl/s2BJmBZZ4Pka1fGH6";
  function wa(lang) {
    var msg = lang === "en"
      ? "Hello! I'd like to book a table at Il Gusto. Date: ___ Time: ___ People: ___"
      : "Buongiorno! Vorrei prenotare un tavolo da Il Gusto. Data: ___ Ora: ___ Persone: ___";
    return "https://wa.me/393928080172?text=" + encodeURIComponent(msg);
  }

  function lang() { return document.documentElement.lang === "en" ? "en" : "it"; }

  function btns(lang, set) {
    var L = lang === "en"
      ? { call: "📞 Call " + PHONE_DISPLAY, wa: "💬 WhatsApp", maps: "📍 Open in Google Maps", menu: "📋 See the menu" }
      : { call: "📞 Chiama " + PHONE_DISPLAY, wa: "💬 WhatsApp", maps: "📍 Apri in Google Maps", menu: "📋 Vedi il menù" };
    var map = {
      call: '<a href="tel:' + PHONE_TEL + '">' + L.call + "</a>",
      wa: '<a href="' + wa(lang) + '" target="_blank" rel="noopener">' + L.wa + "</a>",
      maps: '<a href="' + MAPS + '" target="_blank" rel="noopener">' + L.maps + "</a>",
      menu: '<a href="' + MENU + '">' + L.menu + "</a>"
    };
    return '<div class="ai-actions">' + set.map(function (k) { return map[k]; }).join("") + "</div>";
  }

  function answers(lng) {
    if (lng === "en") return {
      reserva: "With pleasure! To book, just tell us the <b>date, time and number of guests</b> — we'll confirm availability right away." + btns("en", ["call", "wa"]),
      dove: "We're at <b>Via Rossello, 22 — 17027 Pietra Ligure (SV)</b>, Liguria." + btns("en", ["maps"]),
      menu: "Our kitchen offers fish and meat, hand-made pasta, <b>25+ pizzas</b> and homemade desserts. Almost everything is <b>gluten-free</b>, and all pizzas can be made gluten-free (+€2.50)." + btns("en", ["menu"]),
      glutine: "Yes! 🌾 Almost all our dishes are <b>gluten-free</b> and <b>all pizzas</b> can be too (+€2.50 supplement). Please always tell the staff you're ordering gluten-free." + btns("en", ["menu"]),
      orari: "Our opening hours:<br>• <b>Mon – Fri</b>: 18:00 – 00:00<br>• <b>Sat – Sun</b>: 12:00 – 00:00" + btns("en", ["call"]),
      contatti: "You can reach us:<br>📞 <b>" + PHONE_DISPLAY + "</b><br>✉️ <b>Ilgusto77@gmail.com</b><br>📷 Instagram: <b>@il.gusto1998</b>" + btns("en", ["call", "wa"]),
      saluto: "Hi! 👋 I'm the Il Gusto assistant. I can help with reservations, the menu, opening hours and directions. How can I help?",
      grazie: "Thank you! 🙏 See you soon at Il Gusto.",
      fallback: "I can help with <b>reservations</b>, <b>menu &amp; gluten-free</b>, <b>opening hours</b> and <b>how to reach us</b>. Try asking, or use the buttons below. To talk to us:" + btns("en", ["call", "wa"])
    };
    return {
      reserva: "Con piacere! Per prenotare dicci <b>data, ora e numero di persone</b> — ti confermiamo subito la disponibilità." + btns("it", ["call", "wa"]),
      dove: "Siamo in <b>Via Rossello, 22 — 17027 Pietra Ligure (SV)</b>, in Liguria." + btns("it", ["maps"]),
      menu: "La nostra cucina propone pesce e carne, primi fatti a mano, <b>oltre 25 pizze</b> e dolci fatti in casa. Quasi tutto il menù è <b>senza glutine</b> e tutte le pizze possono essere preparate senza glutine (+2,50&nbsp;€)." + btns("it", ["menu"]),
      glutine: "Sì! 🌾 Quasi tutti i piatti della cucina sono <b>senza glutine</b> e <b>tutte le pizze</b> possono esserlo (supplemento 2,50&nbsp;€). Ricorda di indicare sempre al personale che ordini senza glutine." + btns("it", ["menu"]),
      orari: "I nostri orari di apertura:<br>• <b>Lunedì – Venerdì</b>: 18.00 – 00.00<br>• <b>Sabato – Domenica</b>: 12.00 – 00.00" + btns("it", ["call"]),
      contatti: "Puoi contattarci così:<br>📞 <b>" + PHONE_DISPLAY + "</b><br>✉️ <b>Ilgusto77@gmail.com</b><br>📷 Instagram: <b>@il.gusto1998</b>" + btns("it", ["call", "wa"]),
      saluto: "Ciao! 👋 Sono l'assistente di <b>Il Gusto</b>. Posso aiutarti con prenotazioni, menù, orari e indicazioni. Come posso aiutarti?",
      grazie: "Grazie a te! 🙏 A presto da Il Gusto.",
      fallback: "Posso aiutarti con <b>prenotazioni</b>, <b>menù e senza glutine</b>, <b>orari</b> e <b>come raggiungerci</b>. Prova a chiedere oppure usa i pulsanti qui sotto. Per parlare con noi:" + btns("it", ["call", "wa"])
    };
  }

  var UI = {
    it: {
      title: "Assistente Il Gusto", sub: "Risponde subito · prenotazioni e info",
      placeholder: "Scrivi qui la tua domanda…",
      quick: [["dove", "📍 Dove siamo"], ["reserva", "🍽️ Prenota un tavolo"], ["menu", "📋 Menù & senza glutine"], ["orari", "🕐 Orari"]],
      openLabel: "Apri assistente", closeLabel: "Chiudi assistente"
    },
    en: {
      title: "Il Gusto Assistant", sub: "Replies instantly · bookings & info",
      placeholder: "Type your question…",
      quick: [["dove", "📍 Where we are"], ["reserva", "🍽️ Book a table"], ["menu", "📋 Menu & gluten-free"], ["orari", "🕐 Opening hours"]],
      openLabel: "Open assistant", closeLabel: "Close assistant"
    }
  };

  // keyword router — understands both languages
  function route(raw) {
    var t = raw.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    var A = answers(lang());
    var has = function () { for (var i = 0; i < arguments.length; i++) if (t.indexOf(arguments[i]) !== -1) return true; return false; };
    if (has("glutin", "celiac", "gluten")) return A.glutine;
    if (has("prenot", "tavol", "reserv", "book", "table", "posti")) return A.reserva;
    if (has("dove", "indirizz", "mappa", "maps", "arriv", "parcheg", "raggiung", "where", "address", "location", "direction", "find")) return A.dove;
    if (has("orari", "apert", "chius", "quando", "orario", "hour", "open", "close", "time")) return A.orari;
    if (has("telefon", "chiam", "numero", "contatt", "email", "mail", "whatsapp", "instagram", "phone", "call", "contact")) return A.contatti;
    if (has("menu", "menù", "mangiar", "piatt", "pizza", "pesce", "carne", "prim", "second", "antipast", "dolc", "dessert", "vino", "prezz", "costa", "quanto", "eat", "food", "fish", "meat", "price", "cost", "wine")) return A.menu;
    if (has("ciao", "salve", "buongiorno", "buonasera", "buon", "hi", "hello", "hey", "good morning", "good evening")) return A.saluto;
    if (has("grazie", "thank")) return A.grazie;
    return A.fallback;
  }

  var ICON_CHAT = '<svg class="ic-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20l1-5A8.5 8.5 0 1 1 21 11.5z"/></svg>';
  var ICON_CLOSE = '<svg class="ic-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICON_SEND = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';

  var widget = document.createElement("div");
  widget.className = "ai-widget";
  widget.innerHTML =
    '<div class="ai-panel" role="dialog" aria-label="Il Gusto" aria-modal="false">' +
      '<div class="ai-head"><span class="ai-dot"></span><span><b class="ai-title"></b><small class="ai-sub"></small></span>' +
        '<button class="ai-close" type="button">&times;</button></div>' +
      '<div class="ai-body" aria-live="polite"></div>' +
      '<div class="ai-quick"></div>' +
      '<form class="ai-input"><input type="text" autocomplete="off" /><button type="submit" aria-label="Send">' + ICON_SEND + "</button></form>" +
    "</div>" +
    '<button class="ai-fab" type="button">' + ICON_CHAT + ICON_CLOSE + "</button>";
  document.body.appendChild(widget);

  var panel = widget.querySelector(".ai-panel");
  var body = widget.querySelector(".ai-body");
  var fab = widget.querySelector(".ai-fab");
  var form = widget.querySelector(".ai-input");
  var input = form.querySelector("input");
  var quick = widget.querySelector(".ai-quick");
  var greeted = false;

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }
  function addMsg(html, who) {
    var m = document.createElement("div");
    m.className = "ai-msg " + who;
    m.innerHTML = html;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
  }
  function botReply(html) { setTimeout(function () { addMsg(html, "bot"); }, 260); }

  function renderChrome() {
    var u = UI[lang()];
    widget.querySelector(".ai-title").textContent = u.title;
    widget.querySelector(".ai-sub").textContent = u.sub;
    input.placeholder = u.placeholder;
    fab.setAttribute("aria-label", widget.classList.contains("ai-open") ? u.closeLabel : u.openLabel);
    widget.querySelector(".ai-close").setAttribute("aria-label", u.closeLabel);
    quick.innerHTML = u.quick.map(function (q) { return '<button class="ai-chip" type="button" data-key="' + q[0] + '">' + q[1] + "</button>"; }).join("");
  }

  function openChat() {
    widget.classList.add("ai-open");
    renderChrome();
    if (!greeted) { greeted = true; addMsg(answers(lang()).saluto, "bot"); }
    setTimeout(function () { input.focus(); }, 260);
  }
  function closeChat() { widget.classList.remove("ai-open"); renderChrome(); }

  fab.addEventListener("click", function () { widget.classList.contains("ai-open") ? closeChat() : openChat(); });
  widget.querySelector(".ai-close").addEventListener("click", closeChat);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && widget.classList.contains("ai-open")) closeChat(); });

  quick.addEventListener("click", function (e) {
    var chip = e.target.closest(".ai-chip");
    if (!chip) return;
    addMsg(escapeHtml(chip.textContent), "user");
    botReply(answers(lang())[chip.getAttribute("data-key")] || answers(lang()).fallback);
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text) return;
    addMsg(escapeHtml(text), "user");
    input.value = "";
    botReply(route(text));
  });

  // follow the site language
  document.addEventListener("ig:lang", renderChrome);
  renderChrome();
})();
