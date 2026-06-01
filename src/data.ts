import { MenuItem, GalleryItem, TeaEvent, AmbientTrack } from "./types";

/** Medios locales en /public (todas las secciones excepto galería) */
export const ASSETS = {
  hero: {
    video: "/hero/videohero.mp4",
    videoAlt: "/hero/videohero2.mp4",
    poster: "/nuestra-esencia/nuestraesencia1.png",
  },
  about: {
    primary: "/nuestra-esencia/nuestraesencia1.png",
    secondary: "/nuestra-esencia/nuestraesencia2.png",
  },
  menu: {
    teNegro: "/menu/tes/te-negro.jpg",
    teVerde: "/menu/tes/te-verde.jpeg",
    matcha: "/menu/tes/matcha.webp",
    scone: "/menu/pasteleria/scone-lavanda.webp",
    tarta: "/menu/pasteleria/tarta-manzana.jpeg",
    toast: "/menu/brunch/toast-nordico.jpeg",
    queso: "/menu/brunch/queso-campo-frutos-secos.webp",
  },
  events: {
    e1: "/eventos/e1/ceremonia.avif",
    e2: "/eventos/e2/bambues.webp",
    e3: "/eventos/e3/desgutacion.jpg",
  },
  logo: "/logo-komorebi.png",
};

// Imágenes externas — solo galería
export const IMAGES = {
  // Gallery set
  gallery1: "https://images.openai.com/static-rsc-4/XojWqMWNqH_WBFNMMctXEJUSc2fekzRpFke_YUuXfu0EZHtWJI2toa5DUIdxH_HfMp7D8hIHCKlP3A3i0GI-gLboGqUriOt-zBl6kHf6_eEYkdZC-iMFrl9M92-UtOWrX2VfO70Rq8M9jRkkRKw3IXYhbNdrLCC7UIdeFG605OuBRhSdP_yrTwGFMsddQyN3?purpose=fullsize",
  gallery2: "https://images.openai.com/static-rsc-4/mPA3_vm23GjvwSTiVbFfSCmS-9UMMHQMHwJ4GVQAkVTa7F1u0bHWdO9p8krDMrVEJynGDOTC6fizj2I7I7FweHcMzrmOU-KM7z6qaku1D6ilpESkubgjqMjm5Dka8nOl_TB49PzYsdechff37Cc8_zWIhGiaKNv4a3vCh7VvxTr0-dB58Dv1i4wo1hSCu8A8?purpose=fullsize",
  gallery3: "https://images.openai.com/static-rsc-4/EoSpTx0fPndPwcsgu5Wub-W8P0_a3J5gieccVp-_z1B3pMdsvvK6U5INw0m3_06wck-Ll3v8dimdiC550GVbfcmykep8bCG2DOc_EQNcR2rzg4vGooafS5IaFuSZ6Sdz8EhyBnHHMnPKbUYyE-WdCGKucGIoj4qg7zrDcSHMeoqzRS72dWbLD5-l1b7VNCpT?purpose=fullsize",
  gallery4: "https://images.openai.com/static-rsc-4/9oemninhEbdQo9SyMDldzOdOcjxvket5uJ3nNQ7EOiCcNFnPtN-V23WBZurg7MW4uHgHsieVMvLZ2znNWoGidJlWjgfGPnSCVG4LMxVbtXUEBvM3nEPayXX78rItNuitpTbdwuzg2sQSmwa04RoDTqAl0GJq0v8QVUEy3Rt8SLkILC6tYpXRzRji-mioBEX9?purpose=fullsize",
  gallery5: "https://images.openai.com/static-rsc-4/1VVreld_T90IrEOwuWN3jasHJ0c7If4G6ZbqwEBWFu0HZiO5MycaE_2Y4N3uLx3XHZaBFlFlKQvcVCI-7esqqVnZ2mJ2jNIYiDbLcJfRAmiXQPWR-C3YNDbyAi3jP2hSmw4Vc_HkJld-u5uMr0Q4YXMSomR0vb_jlbT3sPkUf20-eueUjk8uCDMD0yNqP-Bo?purpose=fullsize",
  gallery6: "https://images.openai.com/static-rsc-4/VpP8cD4kd02OlVPzNVc96EQCDLx4dg_hCr0UMr8D4Y0VSknSNQ7Ega9xScCK0wNaRR-8kJWm5GR23HKx8Veijx98-GTYyzgiVfDGliotTo7LNlBHJ5MzmjHcyJ8MxhHT74bKmIOvvo4wzdGvyXkUu2eL_H_qh9TPeYkUwvvzBIZWqOnRcF-S_xzIkoycG2ml?purpose=fullsize",
  gallery7: "https://images.openai.com/static-rsc-4/41-1OLOOXM8XWeWTsuzAwgGToSseHMRcotjTxK40UC6Gh5rHyFl9EUQEISFaaBljWQdfs2oqY-BLJOkFG1xZfNAjD67rBz7-lKrHzd3GSpZKH4kPzpiSnb8nQFhnfKZgHj4wviBiM2_j9gzzGz65XYGJV6v3O2cl1I86oJtI3FRCbVYrTBhvoBdUi9Hr8aFO?purpose=fullsize",
  gallery8: "https://images.openai.com/static-rsc-4/7Pgmtb07iUX360NkHdRTBk_aqJ-Joy5f488DBLOKaTlpFw1eaPxNjm3xNfMVcs1zZADjOh1dO9r1NaF17LiOdS244b85Zc-vByCuVoPQJjW_xBW_jpxVAQKvCZVqbvz8PArMLT7GQ6eEsMxR6bcz_IzxBjRZHE8lUyH1q6xkRlmclOK6PNHr_cfhfF6nsGYm?purpose=fullsize",
  
  // Esthetic inspirations
  pathway: "https://images.openai.com/static-rsc-4/Qq316eMi1KLZ1jkaqgRF9D0sxe6t-jsLFPxyA0lP2QkqQzNtmAaoCMjLmUpnPLkZ6xypM_pOJ0oGn90DCp-x_CANxjbbHAzsPqUYD-wujrPs04aarAlF9NcoagkKy4f6ERglA_WqnIrLkn_tfLMeGe2XcMw-0i_oqubNqVudl0Bso_i-LRUtx41XIaflw25n?purpose=fullsize",
  bambooSeat: "https://images.openai.com/static-rsc-4/jDXXrbyUEvX_e5yjrKRh5NpRRNq58GhCkPeQz_b8GbPApAG5oHibJWxDy4SspBiKTssvNoRsfVq7c-GPdBNNzSpKv0p9V7I6l5jOvGKWCloAanxNniBQwSc28XTp8dqcifvj6t2fjjjw2JgieYH-V_AGpMnwi-pyGzDmtbIOur7CSxJkbH30-wEIxkj-IbL-?purpose=fullsize",
  ceramicCup: "https://images.openai.com/static-rsc-4/uzFX95zyq64CYFKFIIEBxGdGbz1qb7E7LX7jHlk7KUJzQ774uATndGV9BdsfPQNE2pSPx93Y4OEeaN022TGDwVM9BOe8PzL33H6L9j0k82hhNWEtO2rz_Fi-xV88g2ifVJYFSN32o4JRU8fMjgCE1vFJy5GGJEVId4LKzirxdgvscq1lOiwq_s-wP4-84vlU?purpose=fullsize",
  traySetting: "https://images.openai.com/static-rsc-4/e8qMQAwwAAO4lbQmO9jWIMZT9mdW5xzBTqqgYI8pmdq7GkYdnMeqhVcGXbvVGPA_xrsJJyXunnD68EQy7FVs1nT0WxoPJb8GZradALh1Q78wt__IE7RBm3Jg7v-_pxEJCA4jXcuAXpylh0KI7dAVmVBbNU0RwotuqhDcZHQkrhudjaqyomAlDwsW1hoDVDad?purpose=fullsize",
  glassTeapot: "https://images.openai.com/static-rsc-4/89Ws_y5uA0j82BgTEYEgGTXUU4ewUzt1Sl2_8zNACajd7SgwPGybMlnWi70hjqWjRFCBuVLeJkWID-CJ0rHTlsZht1-orX-QRUAuygHbyOGyEgXnM9Pp_DGhKiGbBAbYD5VhOs2577DOvUsn5kbx7iITLbFxMzQKc8hn5EU_B6N6F3aeyb65fu3bGK5icVdY?purpose=fullsize",
  tatamiCorner: "https://images.openai.com/static-rsc-4/k-1JgtPu9cLbHrut-kg5vWf8sphg5QXnZRuEkMOMdosXdvCRQxo2chGEPmT5Uohiekr6R5bUwWrQNcFcdSe7bp3MoQQ5nwtNO4QuRqzKMWRO_dXnliM9pNXJKng-6e-0CqOyqkW9M5VdoFdT5dx-q-3skcuN-RwllMH2VZOTR63baE-GnEEuZXMxM7C8OWij?purpose=fullsize",
  matchaSet: "https://images.openai.com/static-rsc-4/QWXXtH2FkdenIILYChgytpJz2L3O0AVzmlgOdeWl7E6RhrLS0thjQvGiYQ_pVmL1TM5z-lpNksTybUuLkN-HAifP4jjWdrukPR8GYo0wuCbedVhUiQtLX5At_layDYFUm1qidJmnDLXJvpaJeSeotjxTysXcD_VrfmKWTYm5wDYDFc7VrEXFTXrSJ7TtX484?purpose=fullsize"
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "tn1",
    name: "Golden Assam Reserva",
    description: "Té negro artesanal de cultivo orgánico, notas de malta oscura, miel silvestre y cocoa. De cuerpo completo con sutiles toques a madera de cedro.",
    price: "$2.900",
    category: "tes",
    variety: "Té Negro",
    tags: ["Orgánico", "Cuerpo Entero"],
    image: ASSETS.menu.teNegro,
  },
  {
    id: "tn2",
    name: "Bergamota Silvestre Earl Grey",
    description: "Infundido con aceite esencial puro de bergamota de Calabria y pétalos de aciano azul sobre una base de té negro premium de altura.",
    price: "$2.800",
    category: "tes",
    variety: "Té Negro",
    tags: ["Cítrico", "Aromático"],
    image: ASSETS.menu.teNegro,
  },
  {
    id: "tv1",
    name: "Sencha Imperial Premium",
    description: "Hojas de té verde japonés recolectadas a mano al inicio de la primavera. Sabor fresco, herbáceo con un balance umami que evoca el rocío de la mañana.",
    price: "$3.100",
    category: "tes",
    variety: "Té Verde",
    tags: ["Umami", "Tradicional"],
    image: ASSETS.menu.teVerde,
  },
  {
    id: "tv2",
    name: "Jazmín de las Nubes",
    description: "Perlas aromáticas de té verde enrolladas a mano y aromatizadas repetidamente con flores nocturnas frescas de jazmín blanco.",
    price: "$2.900",
    category: "tes",
    variety: "Té Verde",
    tags: ["Floral", "Delicado"],
    image: ASSETS.menu.teVerde,
  },
  {
    id: "m1",
    name: "Ceremonial Matcha Uji",
    description: "Matcha grado ceremonial originario de la región histórica de Uji, Kyōto. Batido artesanalmente en cuenco de cerámica con Chasen de bambú.",
    price: "$3.600",
    category: "tes",
    variety: "Matcha",
    tags: ["Ceremonial", "Antioxidante"],
    image: ASSETS.menu.matcha,
  },
  {
    id: "m2",
    name: "Iced Matcha Latte de Vainilla",
    description: "Ceremonial matcha batido sobre leche orgánica espumada en frío, endulzado con néctar de vainilla Bourbon pura.",
    price: "$3.400",
    category: "tes",
    variety: "Matcha",
    tags: ["Fresco", "Leche de Almendras disp."],
    image: ASSETS.menu.matcha,
  },
  {
    id: "p1",
    name: "Scone Artesanal de Lavanda y Limón",
    description: "Elaborados diariamente con mantequilla de pastura, ralladura de limón fresco y delicadas flores de lavanda de nuestro propio jardín.",
    price: "$1.800",
    category: "pastelería",
    tags: ["Casa", "Recomendado"],
    image: ASSETS.menu.scone,
  },
  {
    id: "p2",
    name: "Tarta Tatín de Manzanas Asadas",
    description: "Hojaldre crujiente invertido con manzanas caramelizadas al horno de leña, perfumada con cardamomo y crema fresca.",
    price: "$2.600",
    category: "pastelería",
    tags: ["Horno de Leña"],
    image: ASSETS.menu.tarta,
  },
  {
    id: "b1",
    name: "Toast Nórdico de Centeno",
    description: "Pan de masa madre de centeno, untuoso de palta orgánica, salmón curado en la casa con eneldo, brotes y un toque de limón.",
    price: "$4.800",
    category: "brunch",
    tags: ["Masa Madre", "Salado"],
    image: ASSETS.menu.toast,
  },
  {
    id: "b2",
    name: "Tabla de Quesos de Campo y Frutos Secos",
    description: "Selección curada de quesos locales, higos frescos del jardín, nueces pecanas tostadas y miel orgánica de panal acompañados de pan rústico.",
    price: "$5.200",
    category: "brunch",
    tags: ["Orgánico", "Para Compartir"],
    image: ASSETS.menu.queso,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", url: IMAGES.gallery1, alt: "Servido de té negro artesanal bajo el sol", category: "taza", size: "large" },
  { id: "g2", url: IMAGES.gallery2, alt: "Plato de repostería fina con vajilla artesanal", category: "pastelería", size: "medium" },
  { id: "g3", url: IMAGES.gallery3, alt: "Mesas de madera en el jardín rodeadas de follaje", category: "ambiente", size: "large" },
  { id: "g4", url: IMAGES.gallery4, alt: "Iluminación cálida nocturna entre los árboles del patio", category: "ambiente", size: "medium" },
  { id: "g5", url: IMAGES.gallery5, alt: "Detalle del vertido de té caliente en tetera de vidrio", category: "taza", size: "small" },
  { id: "g6", url: IMAGES.gallery6, alt: "Invitados disfrutando de una tarde de sol en el césped", category: "gente", size: "medium" },
  { id: "g7", url: IMAGES.gallery7, alt: "Interior de la cabaña rústica de té con diseño Japandi", category: "ambiente", size: "large" },
  { id: "g8", url: IMAGES.gallery8, alt: "Hojas frescas de té infusionadas de manera natural", category: "taza", size: "small" },
  { id: "g9", url: IMAGES.pathway, alt: "Sendero de piedra que conduce al espacio secreto de té", category: "ambiente", size: "medium" },
  { id: "g10", url: IMAGES.bambooSeat, alt: "Banco de madera junto a cañas de bambú susurrantes", category: "ambiente", size: "large" },
  { id: "g11", url: IMAGES.ceramicCup, alt: "Cuenco de cerámica sobre mesa orgánica", category: "taza", size: "medium" },
  { id: "g12", url: IMAGES.tatamiCorner, alt: "Rincón de meditación con tatamis y cojines de lino", category: "ambiente", size: "large" },
  { id: "g13", url: IMAGES.matchaSet, alt: "Matcha espumoso ceremonial verde vibrante", category: "taza", size: "medium" }
];

export const EVENTS: TeaEvent[] = [
  {
    id: "e1",
    title: "Taller Ceremonial del Matcha",
    date: "Sábado, 6 de Junio",
    time: "16:00 - 18:00",
    description: "Aprenda la historia, la filosofía espiritual de la tranquilidad (Chado) y la técnica precisa para batir el matcha ceremonial utilizando el set Chasen tradicional.",
    price: "$8.500",
    slotsAvailable: 6,
    image: ASSETS.events.e1,
  },
  {
    id: "e2",
    title: "Atardecer Acústico entre Bambúes",
    date: "Viernes, 12 de Junio",
    time: "18:30 - 21:00",
    description: "Un concierto íntimo de flauta Shakuhachi y cuencos tibetanos al aire libre mientras degustamos tés verdes de primavera bajo la luz cálida nocturna.",
    price: "$7.500",
    slotsAvailable: 12,
    image: ASSETS.events.e2,
  },
  {
    id: "e3",
    title: "Degustación de Tés Oolong de Alta Montaña",
    date: "Domingo, 21 de Junio",
    time: "17:00 - 19:00",
    description: "Análisis sensorial de 4 tés Oolong excepcionales liderado por nuestro Tea Master. Aprenda sobre fermentación, aroma foliar y maridaje sugerido con repostería de lavanda.",
    price: "$9.000",
    slotsAvailable: 8,
    image: ASSETS.events.e3,
  },
];

// Relaxing background loops (completely client-side links of pure public CC audio files or nature archives)
export const AMBIENT_TRACKS: AmbientTrack[] = [
  {
    id: "track1",
    name: "Lluvia de Primavera",
    url: "https://assets.mixkit.co/active_storage/sfx/2513/2513-84.wav", // Rain loop cue or similar
    iconName: "CloudRain"
  },
  {
    id: "track2",
    name: "Brisa del Jardín",
    url: "https://assets.mixkit.co/active_storage/sfx/1126/1126-84.wav", // Wind/leaves rustle clip
    iconName: "Wind"
  },
  {
    id: "track3",
    name: "Música Zen Sutil",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", // Low tempo instrumental ambient
    iconName: "Music"
  }
];
