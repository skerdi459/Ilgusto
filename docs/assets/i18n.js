/* Il Gusto — bilingual IT/EN toggle for the whole site.
   Italian is the source text in the HTML (default, best for local SEO).
   This swaps text to English on demand via a dictionary keyed by the exact
   Italian string. Dish names stay in Italian (not in the dictionary).
   Complex elements (mixed text + <strong>, hero <h1>) carry a data-en attribute. */
(function () {
  "use strict";

  // Italian source string  ->  English
  var DICT = {
    // ---- Nav ----
    "Chi siamo": "About", "Specialità": "Specialities", "Menù": "Menu",
    "Galleria": "Gallery", "Contatti": "Contact", "Prenota un Tavolo": "Book a Table",

    // ---- Home hero ----
    "Dal 1998": "Since 1998",
    "Ristorante di pesce e pizzeria nel cuore di Pietra Ligure (SV): pescato fresco di giornata, pasta fatta a mano, pizza e una cantina di vini pregiati — serviti con il calore di una vera tavola italiana.":
      "Seafood restaurant and pizzeria in the heart of Pietra Ligure (SV): daily fresh catch, hand-made pasta, pizza and a cellar of fine wines — served with the warmth of a true Italian table.",
    "Scopri il Menù": "View the Menu", "Scorri": "Scroll",

    // ---- About ----
    "La nostra storia": "Our Story",
    "Benvenuti a Il Gusto": "Welcome to Il Gusto",
    "Il nostro ristorante nasce dalla passione per la cucina e dall'attenzione ai dettagli. Offriamo un menu alla carta che unisce piatti di carne e di pesce, preparati con ingredienti freschi e selezionati.":
      "Our restaurant was born from a passion for cooking and an eye for detail. We offer an à la carte menu that brings together meat and fish dishes, prepared with fresh, carefully selected ingredients.",
    "La nostra proposta valorizza la tradizione con un tocco di creatività, per regalare sapori autentici e sempre equilibrati. Proponiamo inoltre opzioni senza glutine, curate con la stessa attenzione e qualità, per garantire un'esperienza inclusiva e gustosa per tutti.":
      "Our cuisine celebrates tradition with a touch of creativity, for authentic, always-balanced flavours. We also offer gluten-free options, prepared with the same care and quality, for an inclusive and delicious experience for everyone.",
    "L'ambiente è accogliente e familiare, perfetto per ogni occasione: da una cena rilassante a momenti speciali da condividere. Completa l'esperienza una selezione di vini scelti con cura, ideali per accompagnare ogni portata.":
      "The atmosphere is warm and welcoming, perfect for any occasion — from a relaxed dinner to special moments to share. A carefully chosen wine selection completes the experience, ideal to pair with every course.",
    "Vi aspettiamo per farvi sentire a casa, con semplicità e passione.":
      "We look forward to making you feel at home, with simplicity and passion.",
    "Scopri le nostre specialità": "Discover our specialities",
    "Anni di gusto": "Years of flavour",

    // ---- Highlights ----
    "Dalla nostra cucina": "From our kitchen",
    "Le Specialità della Casa": "House Specialities",
    "Alcuni dei piatti per cui i nostri clienti attraversano la città.":
      "A few of the dishes our regulars cross town for.",
    "Primi · Pasta": "Primi · Pasta", "Secondi · Mare": "Secondi · Sea",
    "Antipasti · Crudo": "Antipasti · Raw", "Primi · Fatto a mano": "Primi · Handmade",
    "Dalla griglia · Carne": "From the grill · Meat", "Cantina · Vini": "Cellar · Wines",
    "Linguine con scampi e calamari freschi, in un sugo delicato di mare.":
      "Linguine with fresh langoustines and squid in a delicate seafood sauce.",
    "Grigliata Mista di Pesce": "Mixed Grilled Fish",
    "Una scelta del pescato del giorno alla griglia — pesce, calamari e crostacei.":
      "A selection of the day's catch from the grill — fish, squid and shellfish.",
    "Tartare & Crudi di Mare": "Tartare & Raw Seafood",
    "Tartare di tonno, ostriche e cocktail di gamberoni, freschezza del banco del pesce.":
      "Tuna tartare, oysters and prawn cocktail — the freshness of our seafood counter.",
    "Ravioli di Borragine": "Borage Ravioli",
    "Ravioli conditi con burro e salvia — perché certe cose non vanno mai di fretta.":
      "Ravioli dressed with butter and sage — because some things should never be rushed.",
    "Tagliata di Angus": "Sliced Angus Beef",
    "Tagliata di Angus argentino con patate al forno, profumata al rosmarino e finita sulla fiamma.":
      "Sliced Argentine Angus beef with roast potatoes, scented with rosemary and finished over the flame.",
    "La Cantina": "The Wine Cellar",
    "Dal vino della casa alle bollicine — una selezione su cui vale la pena indugiare.":
      "From the house wine to sparkling — a list worth lingering over.",

    // ---- CTA (home) ----
    "Prenotazioni": "Reservations",
    "Ti aspetta una serata di mare": "A seaside evening awaits",
    "Nei fine settimana i tavoli si riempiono in fretta. Prenota in anticipo e pensiamo a tutto noi.":
      "Tables fill up fast on weekends. Book ahead and we'll take care of the rest.",

    // ---- Gallery ----
    "Un assaggio in immagini": "A taste in pictures", "Galleria": "Gallery",
    "Ingredienti freschi, buon vino e una tavola apparecchiata con cura.":
      "Fresh ingredients, fine wine and a table set with care.",

    // ---- Contact ----
    "Vieni a trovarci": "Visit us", "Dove Siamo & Prenota": "Find Us & Book",
    "Saremo lieti di accoglierti. Chiamaci per prenotazioni, eventi privati e grandi tavolate.":
      "We'd love to welcome you. Call us for reservations, private events and large parties.",
    "Indirizzo": "Address", "Telefono": "Phone", "Email": "Email",
    "Prenota un tavolo": "Book a table",
    "Chiamaci o scrivici su WhatsApp: ti confermiamo subito disponibilità, orario e numero di persone.":
      "Call us or message us on WhatsApp: we'll confirm availability, time and party size right away.",
    "Chiama 392 8080172": "Call 392 8080172", "Prenota su WhatsApp": "Book on WhatsApp",
    "Orari di Apertura": "Opening Hours",
    "Lunedì": "Monday", "Martedì": "Tuesday", "Mercoledì": "Wednesday", "Giovedì": "Thursday",
    "Venerdì": "Friday", "Sabato": "Saturday", "Domenica": "Sunday",

    // ---- Footer ----
    "Ristorante di pesce & pizzeria a Pietra Ligure (SV) che celebra il pescato fresco, la pasta fatta a mano e il buon vino dal 1998.":
      "Seafood restaurant & pizzeria in Pietra Ligure (SV) celebrating fresh catch, hand-made pasta and fine wine since 1998.",
    "Esplora": "Explore",
    "Tutti i diritti riservati.": "All rights reserved.",
    "Dal 1998 · Fatto con cura": "Since 1998 · Made with care",

    // ---- Menu page: hero + section eyebrows + headings ----
    "Il Gusto · Dal 1998": "Il Gusto · Since 1998",
    "Il Nostro Menù": "Our Menu",
    "Dal 1998 portiamo in tavola tradizione, qualità e passione. Pizza, cucina e proposte senza glutine si incontrano in un'esperienza di gusto autentica, dove ogni dettaglio è pensato per farvi sentire a casa.":
      "Since 1998 we've brought tradition, quality and passion to the table. Pizza, kitchen and gluten-free options meet in an authentic taste experience, where every detail is designed to make you feel at home.",
    "Per iniziare": "To start", "Pasta & Risotti": "Pasta & Risotto",
    "Dal mare": "From the sea", "Dalla griglia": "From the grill",
    "Da accompagnare": "On the side", "Dal forno": "From the oven",
    "Birre, vini & bibite": "Beers, wines & drinks", "Per finire in dolcezza": "A sweet finish",
    "Antipasti": "Starters", "Primi": "First Courses",
    "Secondi di Pesce": "Fish Mains", "Secondi di Carne": "Meat Mains",
    "Contorni": "Sides", "Pizze": "Pizzas", "Bevande": "Drinks", "Dessert": "Desserts",

    // ---- Menu descriptions ----
    "S.Q. · prezzo all'etto": "M.P. · price per 100g",
    "con verdure di stagione": "with seasonal vegetables",
    "carne, cheddar, pomodori, insalata, cipolle caramellate, salsa a scelta":
      "beef, cheddar, tomato, lettuce, caramelised onions, sauce of choice",
    "con patate fritte": "with fries", "con patate al forno": "with roast potatoes",
    "0,75 cl": "0.75 L",
    "Coca Cola, Fanta, Sprite, the, ecc.": "Coca-Cola, Fanta, Sprite, tea, etc.",
    "1/4 · 1/2 · 1 L": "1/4 · 1/2 · 1 L", "limone o cocco": "lemon or coconut",
    // pizza toppings
    "pomodoro, mozzarella, basilico": "tomato, mozzarella, basil",
    "pomodoro, mozzarella, olive, acciughe": "tomato, mozzarella, olives, anchovies",
    "pomodoro, mozzarella, cotto": "tomato, mozzarella, cooked ham",
    "pomodoro, mozzarella, salsiccia, friarielli": "tomato, mozzarella, sausage, friarielli",
    "pomodoro, mozzarella, cipolla, tonno, olive taggiasche, peperoncino": "tomato, mozzarella, onion, tuna, Taggiasca olives, chilli",
    "pomodoro, mozzarella, fontina, crudo, basilico, scaglie di Parmigiano": "tomato, mozzarella, fontina, cured ham, basil, Parmesan flakes",
    "pomodoro, mozzarella, salame piccante, peperoni, gorgonzola, cipolla": "tomato, mozzarella, spicy salami, peppers, gorgonzola, onion",
    "pomodoro, cozze, vongole, calamari, gamberi": "tomato, mussels, clams, squid, prawns",
    "pomodoro, mozzarella": "tomato, mozzarella",
    "con stracchino": "with stracchino",
    "bianca, pomodoro fresco, mozzarella, rucola, crudo, Parmigiano": "white base, fresh tomato, mozzarella, rocket, cured ham, Parmesan",
    "pomodoro, mozzarella, gorgonzola, stracchino, fontina": "tomato, mozzarella, gorgonzola, stracchino, fontina",
    "pomodoro, mozzarella, cotto, funghi, zucchine, olive": "tomato, mozzarella, cooked ham, mushrooms, courgettes, olives",
    "bianca, mozzarella, pomodoro fresco, peperoni, zucchine, melanzane": "white base, mozzarella, fresh tomato, peppers, courgettes, aubergines",
    "bianca, mozzarella, cotto, würstel, pancetta, salsiccia": "white base, mozzarella, cooked ham, frankfurters, bacon, sausage",
    "pomodoro, mozzarella, cotto, salsiccia, gorgonzola": "tomato, mozzarella, cooked ham, sausage, gorgonzola",
    "pomodoro, mozzarella, salame piccante": "tomato, mozzarella, spicy salami",
    "bianca, bufala, pomodoro fresco, basilico, Parmigiano": "white base, buffalo mozzarella, fresh tomato, basil, Parmesan",
    "pomodoro, bufala, pesto, basilico": "tomato, buffalo mozzarella, pesto, basil",
    "bianca, mozzarella, stracchino, cotto": "white base, mozzarella, stracchino, cooked ham",
    "bianca, mozzarella, pomodoro fresco, funghi prataioli, pistacchio": "white base, mozzarella, fresh tomato, button mushrooms, pistachio",
    "pomodoro, bufala, basilico": "tomato, buffalo mozzarella, basil",
    "pomodoro, mozzarella, patate fritte": "tomato, mozzarella, fries",
    "pomodoro, mozzarella, würstel, patate fritte": "tomato, mozzarella, frankfurters, fries",
    "bianca, bufala, salmone fresco, zucchine": "white base, buffalo mozzarella, fresh salmon, courgettes",
    "pomodoro, mozzarella, speck, brie": "tomato, mozzarella, speck, brie",
    "pomodoro, mozzarella, stracchino, cotto, funghi, salsiccia": "tomato, mozzarella, stracchino, cooked ham, mushrooms, sausage",
    "pizza a forma di Topolino": "Mickey-Mouse-shaped pizza",

    // ---- Menu CTA ----
    "Ti aspettiamo a tavola": "We look forward to having you",
    "Prenota il tuo tavolo e lasciaci preparare il pescato più fresco per la tua serata.":
      "Book your table and let us prepare the freshest catch for your evening."
  };

  // Per-page <title> and meta description
  var META = {
    home: {
      it: { t: document.title, d: null },
      en: {
        t: "Il Gusto · Seafood Restaurant & Pizzeria in Pietra Ligure (SV) | Since 1998",
        d: "Il Gusto, seafood restaurant and pizzeria in Pietra Ligure (Savona) since 1998. Daily fresh catch, seafood, hand-made pasta, pizza and gluten-free cuisine. Book: 392 8080172."
      }
    },
    menu: {
      it: { t: document.title, d: null },
      en: {
        t: "Menu & Prices · Il Gusto Restaurant & Pizzeria in Pietra Ligure (SV)",
        d: "Il Gusto menu and prices in Pietra Ligure (Savona): seafood antipasti, pasta, fish and meat mains, 25+ pizzas, homemade desserts and wines. Almost all dishes are gluten-free."
      }
    }
  };
  var PAGE = /menu/i.test(location.pathname) ? "menu" : "home";
  var descEl = document.querySelector('meta[name="description"]');
  if (descEl) { META[PAGE].it.d = descEl.getAttribute("content"); }

  function applyLang(lang) {
    lang = lang === "en" ? "en" : "it";
    document.documentElement.lang = lang;

    // 1) explicit data-en elements (innerHTML, for mixed content)
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (el.getAttribute("data-it") === null) el.setAttribute("data-it", el.innerHTML);
      el.innerHTML = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-it");
    });

    // 2) dictionary translation of leaf elements
    var els = document.body.querySelectorAll("h1,h2,h3,h4,p,span,a,li,small,button");
    els.forEach(function (el) {
      if (el.children.length !== 0) return;                 // leaf only
      if (el.hasAttribute("data-en")) return;               // handled above
      if (el.closest(".ai-widget") || el.closest(".lang-switch")) return;
      var hasIt = el.getAttribute("data-it") !== null;
      var source = hasIt ? el.getAttribute("data-it") : el.textContent;
      var key = source.trim();
      if (lang === "en") {
        var en = DICT[key];
        if (en !== undefined) {
          if (!hasIt) el.setAttribute("data-it", el.textContent);
          el.textContent = en;
        }
      } else if (hasIt) {
        el.textContent = el.getAttribute("data-it");
      }
    });

    // 3) title + meta description
    var m = META[PAGE][lang];
    if (m) { if (m.t) document.title = m.t; if (descEl && m.d) descEl.setAttribute("content", m.d); }

    // 4) persist + notify (chatbot listens)
    try { localStorage.setItem("ig_lang", lang); } catch (e) {}
    updateSwitch(lang);
    document.dispatchEvent(new CustomEvent("ig:lang", { detail: lang }));
  }

  // ---- language switch UI (injected into the header bar) ----
  var sw;
  function updateSwitch(lang) {
    if (!sw) return;
    sw.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }
  function buildSwitch() {
    var nav = document.querySelector(".site-header .nav");
    var toggle = document.querySelector(".site-header .nav-toggle");
    if (!nav) return;
    sw = document.createElement("div");
    sw.className = "lang-switch";
    sw.setAttribute("role", "group");
    sw.setAttribute("aria-label", "Lingua / Language");
    sw.innerHTML =
      '<button type="button" data-lang="it" aria-label="Italiano">IT</button>' +
      '<button type="button" data-lang="en" aria-label="English">EN</button>';
    sw.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-lang]");
      if (b) applyLang(b.getAttribute("data-lang"));
    });
    if (toggle) nav.insertBefore(sw, toggle); else nav.appendChild(sw);
  }

  // initial language: saved choice, else English browsers get EN, else Italian
  var saved = null;
  try { saved = localStorage.getItem("ig_lang"); } catch (e) {}
  var initial = saved || ((navigator.language || "it").toLowerCase().indexOf("en") === 0 ? "en" : "it");

  buildSwitch();
  applyLang(initial);
})();
