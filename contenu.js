/* ============================================================
   BAKOUGIE — Contenu de la page
   Ce fichier peut être MODIFIÉ À LA MAIN, ou régénéré automatiquement
   depuis l'espace admin (bouton « Publier » → il télécharge un nouveau
   contenu.js que vous déposez sur GitHub).
   ============================================================ */

const BAKOUGIE_CONFIG = {
  /* Notifications (ne pas toucher si tout fonctionne) */
  oneSignalAppId: "e0a36d33-bb92-4ea2-8da1-7c55b4263260",
  siteUrl: "https://bakougie-pixel.github.io/app/",

  /* Identité / en-tête */
  marque: "Bakougie",
  tagline: "Bougies & fondants parfumés, faits main en France",
  intro: "Retrouvez ici nos nouveautés, nos coulisses et nos rendez-vous. Activez les notifications pour être prévenu·e des sorties, des promos et des lives TikTok.",

  /* Liens (vide = bouton masqué) */
  liens: {
    boutique:  "https://bakougie.fr",
    tiktok:    "",
    instagram: "",
  },
};

/* ============================================================
   MODULES DE LA PAGE  (dans l'ordre d'affichage)
   Types : "live", "section", "nouveaute", "article", "bouton",
           "texte", "image", "liens"
   Géré depuis l'espace admin — inutile d'éditer à la main.
   ============================================================ */
const PAGE_BLOCKS = [
  { id:"b_live",  type:"live",    data:{ actif:false, texte:"🔴 Live TikTok en cours — venez !", lien:"" } },

  { id:"b_s1",    type:"section", data:{ eyebrow:"Frais du jour", titre:"Nouveautés" } },
  { id:"b_n1",    type:"nouveaute", data:{ date:"2026-07-15", titre:"Collection Été — Monoï des îles", texte:"Notre parfum solaire signature revient en bougie, fondant et diffuseur voiture. Édition limitée de la saison.", image:"", lien:"" } },
  { id:"b_n2",    type:"nouveaute", data:{ date:"2026-07-10", titre:"Live TikTok chaque vendredi 20h", texte:"Coulisses de fabrication, coulage en direct et codes promo réservés au live.", image:"", lien:"" } },
  { id:"b_n3",    type:"nouveaute", data:{ date:"2026-07-02", titre:"-15% sur les coffrets découverte", texte:"Le coffret 5 fondants passe à prix doux tout le mois.", image:"", lien:"" } },

  { id:"b_s2",    type:"section", data:{ eyebrow:"Coulisses & conseils", titre:"Le journal" } },
  { id:"b_a1",    type:"article", data:{ date:"2026-07-01", titre:"Comment bien brûler sa bougie la première fois", extrait:"Le secret d'une bougie qui dure : la première combustion. On vous explique la regle de la « mémoire de cire ».", lien:"" } },
  { id:"b_a2",    type:"article", data:{ date:"2026-06-20", titre:"Cire végétale : pourquoi on a fait ce choix", extrait:"Colza, coco, abeille… tour d'horizon des cires et des raisons de notre sélection.", lien:"" } },

  { id:"b_s3",    type:"section", data:{ eyebrow:"", titre:"Nous suivre" } },
  { id:"b_liens", type:"liens",   data:{} },
];
