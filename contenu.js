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
  { id:"b_live",  type:"live",    data:{ actif:false, texte:"🔴 Live TikTok en cours — venez !", lien:"", auto:true, jour:"5", debut:"20:00", fin:"21:30" } },
  {"id": "b_cd", "type": "compte", "data": {"titre": "Prochain live TikTok", "sous_titre": "Coulisses, coulage en direct et codes promo", "date": "2026-07-24T20:00", "texte_fin": "🔴 C'est en direct maintenant !", "lien": "", "label_lien": "Rejoindre le live"}},

  { id:"b_s1",    type:"section", data:{ eyebrow:"Frais du jour", titre:"Nouveautés" } },
  { id:"b_n1",    type:"nouveaute", data:{ date:"2026-07-15", titre:"Collection Été — Monoï des îles", texte:"Notre parfum solaire signature revient en bougie, fondant et diffuseur voiture. Édition limitée de la saison.", image:"", lien:"" } },
  { id:"b_n2",    type:"nouveaute", data:{ date:"2026-07-10", titre:"Live TikTok chaque vendredi 20h", texte:"Coulisses de fabrication, coulage en direct et codes promo réservés au live.", image:"", lien:"" } },
  { id:"b_n3",    type:"nouveaute", data:{ date:"2026-07-02", titre:"-15% sur les coffrets découverte", texte:"Le coffret 5 fondants passe à prix doux tout le mois.", image:"", lien:"" } },

  { id:"b_s2",    type:"section", data:{ eyebrow:"Coulisses & conseils", titre:"Le journal" } },
  { id:"b_a1",    type:"article", data:{ date:"2026-07-01", titre:"Comment bien brûler sa bougie la première fois", extrait:"Le secret d'une bougie qui dure : la première combustion. On vous explique la règle de la « mémoire de cire ».", image:"", corps:"La toute première fois que vous allumez une bougie, vous décidez de toute sa vie.\n\nLa cire possède une mémoire. Lors de la première combustion, elle fond en formant un cercle qui restera sa limite pour toujours. Si vous éteignez trop tôt, la bougie creusera un tunnel au centre et laissera de la cire collée aux parois — définitivement perdue.\n\nLa règle est simple : laissez brûler jusqu'à ce que la surface soit entièrement liquide, d'un bord à l'autre. Comptez environ une heure par centimètre de diamètre. Pour nos bougies classiques, deux à trois heures suffisent.\n\nQuelques gestes qui changent tout :\n\n• Coupez la mèche à 5 mm avant chaque allumage. Une mèche trop longue fume et noircit le contenant.\n• Évitez les courants d'air, qui font vaciller la flamme et creusent la cire de façon irrégulière.\n• Ne dépassez pas quatre heures d'affilée : laissez la bougie refroidir avant de la rallumer.\n• Arrêtez-vous quand il reste un centimètre de cire au fond, pour protéger le contenant.\n\nBien traitée, une bougie Bakougie diffuse son parfum jusqu'à la dernière heure.", lien:"" } },
  { id:"b_a2",    type:"article", data:{ date:"2026-06-20", titre:"Cire végétale : pourquoi on a fait ce choix", extrait:"Colza, coco, abeille… tour d'horizon des cires et des raisons de notre sélection.", lien:"" } },

  {"id": "b_s_or", "type": "section", "data": {"eyebrow": "Chaque jour", "titre": "Votre carte du jour"}},

  {"id": "b_oracle", "type": "oracle", "data": {"titre": "Oracle parfumé", "sous_titre": "Votre carte du jour ✦", "cartes": [{"emoji": "☀️", "nom": "Sole d'azur", "texte": "Aujourd'hui, offrez-vous une parenthèse solaire. La lumière vous va bien.", "lien": ""}, {"emoji": "🍑", "nom": "Pêche", "texte": "Douceur et gourmandise : prenez soin de vous comme d'une amie.", "lien": ""}, {"emoji": "🌺", "nom": "Monoï des îles", "texte": "Fermez les yeux, respirez. L'évasion tient parfois dans une flamme.", "lien": ""}, {"emoji": "🍍", "nom": "Ananas", "texte": "Une journée pétillante s'annonce. Osez ce que vous remettez à demain.", "lien": ""}, {"emoji": "🍎", "nom": "Grenade", "texte": "Énergie et caractère. Vous avez plus de ressources que vous ne croyez.", "lien": ""}, {"emoji": "🕯️", "nom": "Cire de velours", "texte": "Ralentissez. Le confort est une décision, pas une récompense.", "lien": ""}, {"emoji": "🌙", "nom": "Bakougie Minuit", "texte": "Le soir vous appartient. Éteignez les écrans, allumez la mèche.", "lien": ""}]}},

  {"id": "b_s_qz", "type": "section", "data": {"eyebrow": "En 4 questions", "titre": "Trouvez votre parfum"}},

  {"id": "b_quiz", "type": "quiz", "data": {"titre": "Trouve ton parfum", "intro": "4 questions pour trouver votre bougie idéale.", "texte_resultat": "Ces parfums sont faits pour vous", "questions": [{"q": "Quelle ambiance vous ressemble ?", "options": [{"emoji": "☀️", "label": "Solaire et vitaminée", "tags": "solaire,fruite"}, {"emoji": "🍰", "label": "Gourmande et réconfortante", "tags": "gourmand,doux"}, {"emoji": "🌿", "label": "Fraîche et végétale", "tags": "frais,floral"}, {"emoji": "🌙", "label": "Chaude et enveloppante", "tags": "ambre,doux"}]}, {"q": "À quel moment allumez-vous une bougie ?", "options": [{"emoji": "🌅", "label": "Le matin, pour bien démarrer", "tags": "frais,solaire"}, {"emoji": "💻", "label": "En télétravail, pour me concentrer", "tags": "frais,floral"}, {"emoji": "🛁", "label": "Le soir, pour décompresser", "tags": "doux,ambre"}, {"emoji": "🎉", "label": "Quand je reçois du monde", "tags": "gourmand,fruite"}]}, {"q": "Votre dessert préféré ?", "options": [{"emoji": "🍫", "label": "Tout ce qui est chocolaté", "tags": "gourmand"}, {"emoji": "🥭", "label": "Une salade de fruits exotiques", "tags": "fruite,solaire"}, {"emoji": "🍋", "label": "Une tarte au citron", "tags": "frais"}, {"emoji": "🍯", "label": "Un miel, une vanille", "tags": "doux,ambre"}]}, {"q": "Vous choisissez un souvenir de vacances :", "options": [{"emoji": "🏝️", "label": "Le sable chaud et la crème solaire", "tags": "solaire,ambre"}, {"emoji": "🌸", "label": "Un jardin en fleurs", "tags": "floral,frais"}, {"emoji": "🔥", "label": "Un feu de cheminée", "tags": "ambre,doux"}, {"emoji": "🍓", "label": "Le marché et ses fruits mûrs", "tags": "fruite,gourmand"}]}], "resultats": [{"nom": "Monoï des îles", "sous_titre": "Solaire, ambré, évasion garantie", "tags": "solaire,ambre", "image": "", "lien": "https://bakougie.fr"}, {"nom": "Fleur de coton", "sous_titre": "Doux, propre, cocooning", "tags": "doux,floral,frais", "image": "", "lien": "https://bakougie.fr"}, {"nom": "Pêche", "sous_titre": "Fruité et gourmand", "tags": "fruite,gourmand", "image": "", "lien": "https://bakougie.fr"}, {"nom": "Mangue papaye", "sous_titre": "Exotique et pétillant", "tags": "fruite,solaire", "image": "", "lien": "https://bakougie.fr"}, {"nom": "Cire de velours", "sous_titre": "Chaud, vanillé, enveloppant", "tags": "doux,ambre,gourmand", "image": "", "lien": "https://bakougie.fr"}, {"nom": "Grenade", "sous_titre": "Frais et acidulé", "tags": "frais,fruite", "image": "", "lien": "https://bakougie.fr"}]}},

  {"id": "b_s_av", "type": "section", "data": {"eyebrow": "Vos retours", "titre": "Avis clients"}},

  {"id": "b_avis", "type": "avis", "data": {"note": "4,98", "nombre": "1 454", "titre": "Ce qu'en disent nos client·e·s", "sous_titre": "Merci pour votre confiance ✦", "avis": [{"texte": "Des parfums qui tiennent vraiment dans toute la pièce, et un service adorable. Je recommande les yeux fermés.", "auteur": "Morgane R.", "note": "5"}, {"texte": "La qualité de la cire se sent tout de suite : combustion nette, aucune odeur de brûlé. Ma troisième commande !", "auteur": "Delphine L.", "note": "5"}, {"texte": "Le coffret découverte est parfait pour offrir. L'emballage est soigné, on sent le fait main.", "auteur": "Jean-Yves M.", "note": "5"}]}},

  { id:"b_music", type:"bakmusic", data:{ titre:"BAK'MUSIC", sous_titre:"Les chansons Bakougie", tracks:[
    {
      "titre": "BAKOUGIE DANS L'AIR",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Bakougie_dans_l_air.mp3?v=1784500443"
    },
    {
      "titre": "DEMAIN PEUT-ÊTRE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/20206_-7.mp3?v=1784240524"
    },
    {
      "titre": "DANS MA TÊTE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/DANS_MA_TETE.mp3?v=1763291020"
    },
    {
      "titre": "BAKOUGIE MONOÏ",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/bakougie-monoi.mp3?v=1783684969"
    },
    {
      "titre": "CIRE DE VELOURS",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/CIRE_DE_VELOUR.mp3?v=1777075282"
    },
    {
      "titre": "BAKOUGIE MINUIT",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/bakouji-minuit.mp3?v=1782520529"
    },
    {
      "titre": "ECHO",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Printemps_2.mp3?v=1772357647"
    },
    {
      "titre": "BAKOUGIE RÉGALE LES NARINES",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Bakougie_r_gale_les_narines.mp3?v=1765502738"
    },
    {
      "titre": "ESTOMACS",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Estomacs.mp3?v=1778880749"
    },
    {
      "titre": "DANS LA PEAU",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Dans_la_peau.mp3?v=1765678594"
    },
    {
      "titre": "JE RESPIRE BAKOUGIE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Je_respire_Bakougie.mp3?v=1765677942"
    },
    {
      "titre": "ESP - 1",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Album_espagnol_-_6.mp3?v=1783717781"
    },
    {
      "titre": "ESP - 2",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Brise.mp3?v=1764769825"
    },
    {
      "titre": "ESP - 3",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Album_espagnol_-_8.mp3?v=1783717781"
    },
    {
      "titre": "ESP - 4",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Album_espagnol_-_4.mp3?v=1783717781"
    },
    {
      "titre": "CALIENTE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Printemps_2_-_2.mp3?v=1772556895"
    },
    {
      "titre": "RITMO",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Printemps_14.mp3?v=1772476506"
    },
    {
      "titre": "BAKOLOR",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/BAKOLOR.mp3?v=1765831864"
    },
    {
      "titre": "BAKOUGIE BOUGE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Bakougie_bouge.mp3?v=1765679531"
    },
    {
      "titre": "LA FLAMME RÊVE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/La_flamme_reve.mp3?v=1765679404"
    },
    {
      "titre": "BAKOUGIE POUR LA VIE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/BAKOUGIE_POUR_LA_VIE.mp3?v=1777075280"
    },
    {
      "titre": "PAIN AU CHOCOLAT",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/PAIN_AU_CHOCOLAT.mp3?v=1777075281"
    },
    {
      "titre": "LES AMIS À LA MAISON",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/LES_AMIS_A_LA_MAISON.mp3?v=1777075280"
    },
    {
      "titre": "RITUEL DU SOIR",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/RITUEL_DU_SOIR.mp3?v=1777075280"
    },
    {
      "titre": "CADEAU LOCO",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/CADEAU_LOCO.mp3?v=1777075280"
    },
    {
      "titre": "DIFFUSEUR DANS L'AUTO",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/Diffuseur_dans_l_auto.mp3?v=1776417223"
    },
    {
      "titre": "ROSE AMBRÉE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/ROSE_AMBREE.mp3?v=1777075281"
    },
    {
      "titre": "TÉLÉTRAVAIL BAKOUGIE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/TELETRAVAIL_BAKOUGIE.mp3?v=1777075281"
    },
    {
      "titre": "POUDRE PARFUMÉE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/POUDRE_PARFUMEE.mp3?v=1777075281"
    },
    {
      "titre": "UNBOXING",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/UNBOXING.mp3?v=1777075281"
    },
    {
      "titre": "MATIN QUI SENT BON",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/MATIN_QUI_SENT_BON.mp3?v=1777075281"
    },
    {
      "titre": "FLEUR DE PEAU",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/FLEUR_DE_PEAU.mp3?v=1777075281"
    },
    {
      "titre": "LA BAKOUBOX",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/LA_BAKOUBOX.mp3?v=1777075282"
    },
    {
      "titre": "CHAUD CHAUD CHAUD",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/CHAUD_CHAUD_CHAUD.mp3?v=1777075281"
    },
    {
      "titre": "ODEUR DE TOI",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/ODEUR_DE_TOI.mp3?v=1777075281"
    },
    {
      "titre": "LE PARFUM DANS LA PIÈCE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/LA_PARFUM_DANS_LA_PIECE.mp3?v=1777075281"
    },
    {
      "titre": "SOUVENIR EN CIRE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/SOUVENIR_EN_CIRE.mp3?v=1777075282"
    },
    {
      "titre": "FONDANT MON AMOUR",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/FONDANT_MON_AMOUR.mp3?v=1777075282"
    },
    {
      "titre": "DANS L'OBSCURITÉ",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/DANS_L_OBSCURITE.mp3?v=1777075282"
    },
    {
      "titre": "TABLE EN BOIS",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/TABLE_EN_BOIS.mp3?v=1777075282"
    },
    {
      "titre": "ROSE DE NOVEMBRE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/ROSE_DE_NOVEMBRE.mp3?v=1777075282"
    },
    {
      "titre": "CE PARFUM",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/CE_PARFUM.mp3?v=1777075284"
    },
    {
      "titre": "CLÉMENTINE MONOÏ",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/CLEMENTINE_MONOI.mp3?v=1777075282"
    },
    {
      "titre": "DEPUIS LE DÉBUT",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/DEPUIS_LE_DEBUT.mp3?v=1777075281"
    },
    {
      "titre": "BAKOUGIE GOLD",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/BAKOUGIE_GOLD.mp3?v=1777075282"
    },
    {
      "titre": "BAKOUGIE STOMP",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/BAKOUGIE_STOMP.mp3?v=1777075281"
    },
    {
      "titre": "MANGUE PAPAYE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/MANGUE_PAPAYE.mp3?v=1777075283"
    },
    {
      "titre": "FONDANT DE MINUIT",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/FONDANT_DE_MINUIT.mp3?v=1777075281"
    },
    {
      "titre": "FLAMMES JUMELLES",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/FLAMMES_JUMELLES.mp3?v=1777075281"
    },
    {
      "titre": "LA PREMIÈRE BOUGIE",
      "url": "https://cdn.shopify.com/s/files/1/0731/4931/7446/files/LA_PREMIERE_BOUGIE.mp3?v=1777075281"
    }
  ] } },

  {"id": "b_share", "type": "partage", "data": {"titre": "Partager Bakougie", "texte": "Envoyez la page à une amie 💌"}},

  { id:"b_s3",    type:"section", data:{ eyebrow:"", titre:"Nous suivre" } },
  { id:"b_liens", type:"liens",   data:{} },
];
