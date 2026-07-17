/* ============================================================
   BAKOUGIE — Contenu de la page
   C'est le SEUL fichier à modifier pour mettre à jour la page.
   (Pas besoin de toucher au design.)
   ============================================================ */

const BAKOUGIE_CONFIG = {

  /* 1) NOTIFICATIONS — collez ici votre "App ID" OneSignal.
     Voir GUIDE.md, étape « Créer votre compte OneSignal ».
     Tant que c'est vide, le bouton notifications reste inactif. */
  oneSignalAppId: "e0a36d33-bb92-4ea2-8da1-7c55b4263260",

  /* 2) Adresse finale du site (après mise en ligne GitHub Pages).
     Ex : "https://bakougie.github.io/bakougie-site/" */
  siteUrl: "https://bakougie-pixel.github.io/app/",

  /* 3) Textes de présentation */
  marque: "Bakougie",
  tagline: "Bougies & fondants parfumés, faits main en France",
  intro: "Retrouvez ici nos nouveautés, nos coulisses et nos rendez-vous. Activez les notifications pour être prévenu·e des sorties, des promos et des lives TikTok.",

  /* 4) Vos liens (laissez vide pour masquer le bouton) */
  liens: {
    boutique:  "https://bakougie.fr",
    tiktok:    "",
    instagram: "",
  },
};

/* ============================================================
   NOUVEAUTÉS  (les plus récentes en premier)
   Champs : date "AAAA-MM-JJ", titre, texte, image (URL ou ""), lien (URL ou "")
   ============================================================ */
const NOUVEAUTES = [
  {
    date: "2026-07-15",
    titre: "Collection Été — Monoï des îles",
    texte: "Notre parfum solaire signature revient en bougie, fondant et diffuseur voiture. Édition limitée de la saison.",
    image: "",
    lien: "",
  },
  {
    date: "2026-07-10",
    titre: "Live TikTok chaque vendredi 20h",
    texte: "Coulisses de fabrication, coulage en direct et codes promo réservés au live. Activez les notifications pour ne pas le manquer.",
    image: "",
    lien: "",
  },
  {
    date: "2026-07-02",
    titre: "-15% sur les coffrets découverte",
    texte: "Le coffret 5 fondants passe à prix doux tout le mois. Idéal pour tester plusieurs parfums.",
    image: "",
    lien: "",
  },
];

/* ============================================================
   LE JOURNAL  (articles / blog)
   Champs : date, titre, extrait, lien (URL de l'article ou "")
   ============================================================ */
const ARTICLES = [
  {
    date: "2026-07-01",
    titre: "Comment bien brûler sa bougie la première fois",
    extrait: "Le secret d'une bougie qui dure : la première combustion. On vous explique la règle de la « mémoire de cire ».",
    lien: "",
  },
  {
    date: "2026-06-20",
    titre: "Cire végétale : pourquoi on a fait ce choix",
    extrait: "Colza, coco, abeille… tour d'horizon des cires et des raisons de notre sélection pour un parfum plus fidèle.",
    lien: "",
  },
];
