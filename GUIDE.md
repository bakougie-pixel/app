# Bakougie — Page + notifications push

Ce dossier contient une **page vitrine installable** (nouveautés, journal, liens) et tout ce qu'il faut pour **envoyer des notifications** à vos client·e·s.

## En 30 secondes : comment ça marche
- La page s'héberge **gratuitement sur GitHub Pages** (adresse `https://…`).
- Vos client·e·s **ajoutent la page à leur écran d'accueil** (obligatoire sur iPhone) et **activent les notifications**.
- **Vous** envoyez une notif à tout le monde en un clic depuis **OneSignal** (site web ou app mobile) : nouveauté, promo, « live TikTok en cours »…

Deux choses à retenir dès maintenant :
1. **Un simple signet ne reçoit pas de notifications.** Sur iPhone, il faut « Ajouter à l'écran d'accueil » (c'est une règle d'Apple).
2. **GitHub tout seul ne peut pas envoyer de notifications** : c'est OneSignal qui s'en charge (gratuit jusqu'à 10 000 abonnés).

---

## Étape A — Mettre la page en ligne (GitHub Pages)

1. Créez un compte sur **github.com** (gratuit).
2. Créez un dépôt (bouton **New**), par exemple `bakougie-site`. Cochez « Public ».
3. Envoyez-y **tous les fichiers de ce dossier** (bouton **Add file → Upload files**, glissez tout, puis **Commit**).
4. Dans le dépôt : **Settings → Pages**. Sous « Build and deployment », source = **Deploy from a branch**, branche = **main**, dossier = **/ (root)**. Enregistrez.
5. Patientez ~1 minute : GitHub affiche votre adresse, du type
   `https://VOTRE-NOM.github.io/bakougie-site/`
6. Ouvrez cette adresse : la page Bakougie s'affiche. 🎉

> Notez cette adresse : c'est celle que vos client·e·s vont ouvrir et installer.

---

## Étape B — Activer les notifications (OneSignal)

1. Créez un compte gratuit sur **onesignal.com**.
2. **New App/Website** → nommez-le « Bakougie » → choisissez la plateforme **Web**.
3. Configuration **Typical Site** :
   - **Site Name** : Bakougie
   - **Site URL** : collez **exactement** votre adresse GitHub Pages (Étape A.5), avec le `https://` et le `/` final.
   - **Default icon** : vous pouvez téléverser `icon-512.png` de ce dossier.
4. OneSignal vous donne un **App ID** (une suite de type `xxxxxxxx-xxxx-…`). **Copiez-le.**
5. Ouvrez le fichier **`contenu.js`** et collez-le ici :
   ```js
   oneSignalAppId: "COLLEZ-VOTRE-APP-ID-ICI",
   siteUrl: "https://VOTRE-NOM.github.io/bakougie-site/",
   ```
6. Renvoyez `contenu.js` sur GitHub (Add file → Upload files → Commit) pour remplacer l'ancien.

> OneSignal propose aussi de « héberger un service worker » : **c'est déjà fait** — le fichier `OneSignalSDKWorker.js` est inclus dans ce dossier, à la racine. Vous n'avez rien à ajouter.

---

## Étape C — Vérifier

- **Sur ordinateur (Chrome) ou Android** : ouvrez votre adresse, cliquez **Activer les notifications**, acceptez. Vous apparaissez dans OneSignal (Audience → Subscriptions).
- **Sur iPhone** : voir la section « iPhone » plus bas (installation obligatoire d'abord).
- Envoyez-vous un test : dans OneSignal, **Messages → New Push → Send to Subscribed Users**.

---

## Envoyer une notification à tout le monde

Depuis **OneSignal** (site web ou **application mobile OneSignal**, pratique pour un live) :

1. **Messages → New Push**.
2. **Audience** : *Subscribed Users* (tout le monde).
3. **Titre** + **message**. Exemples :
   - « 🔴 Live TikTok en cours ! » — « On coule la collection été, venez ! »
   - « Nouveauté du jour ✨ » — « Monoï des îles est de retour. »
   - « -15% aujourd'hui » — « Coffrets découverte à prix doux. »
4. (Option) **Launch URL** : l'adresse à ouvrir au clic (votre page, ou un lien boutique).
5. **Send / Schedule** (vous pouvez aussi programmer).

C'est le moyen le plus simple et le plus souple. Aucun code.

---

## Espace admin (gérer la page visuellement)

Vous pouvez désormais **construire la page depuis le téléphone**, sans toucher au code.

**Ouvrir l'espace admin :** touchez le petit **cadenas** en bas de page (dans le pied de page), ou ajoutez **`#admin`** à la fin de l'adresse. Connectez-vous :
- Utilisateur : **ADMIN**
- Mot de passe : **bkg00!**

**Une fois connecté(e)**, une barre apparaît en bas :
- **+ Module** : ajoutez un bloc (Bandeau live, Titre de section, Nouveauté, Article, Bouton, Texte, Image, Réseaux & boutique).
- Sur chaque bloc : **↑ ↓** pour réordonner, **✎** pour modifier, **🗑** pour supprimer.
- **Réglages** : nom de la marque, accroche, introduction, liens (boutique, TikTok, Instagram).
- **Publier** : télécharge un nouveau **contenu.js** → déposez-le sur GitHub (Add file → Upload files) pour rendre vos changements visibles **par tout le monde**.

> Tant que vous n'avez pas **publié + déposé** le fichier, vos changements ne sont visibles que **sur votre appareil** (aperçu privé). C'est voulu : vous validez tranquillement avant de publier.

### 🔒 À propos de la sécurité (à lire une fois)
Le mot de passe n'est **jamais écrit en clair** dans le site : seule une empreinte chiffrée y figure, personne ne peut donc le « lire » dans le code. Mais soyons honnêtes : sur un site **statique** (sans serveur), aucun verrou côté navigateur n'est totalement inviolable. **Le vrai verrou de votre site, c'est votre compte GitHub** : même si quelqu'un ouvrait le panneau, il ne pourrait modifier que **sa propre copie locale** — jamais le site en ligne, car publier passe par vous (dépôt du fichier sur GitHub). Pour changer le mot de passe, dites-le moi : je régénère l'empreinte. Si un jour vous voulez une **vraie authentification**, on passera par un CMS git (Decap/Netlify Identity).

---



Tout se passe dans **`contenu.js`** — c'est le seul fichier à modifier :
- **Nouveautés** : ajoutez un bloc en haut de la liste `NOUVEAUTES` (date, titre, texte, image, lien).
- **Journal** : ajoutez un bloc dans `ARTICLES`.
- **Liens** : renseignez `boutique`, `tiktok`, `instagram` (laissez `""` pour masquer).

Puis renvoyez `contenu.js` sur GitHub. La page se met à jour toute seule en ~1 minute.

**Prévenir d'une mise à jour** : la page ne « détecte » pas automatiquement les changements — c'est **vous** qui envoyez la notif (via OneSignal, section précédente) au moment voulu. C'est mieux ainsi : vous notifiez seulement quand ça vaut le coup, sans spammer.

> Envie de tout piloter depuis GitHub ? Le fichier `.github/workflows/notifier.yml` ajoute un bouton **Actions → Envoyer une notification** (déclenchement manuel). Il faut y ajouter deux secrets : `ONESIGNAL_APP_ID` et `ONESIGNAL_API_KEY` (OneSignal → Settings → Keys & IDs). Optionnel.

---

## iPhone : l'étape obligatoire pour les notifications

Sur iPhone, Apple n'autorise le push **que** si la page est **installée sur l'écran d'accueil** (iOS 16.4 ou plus récent). Un onglet Safari ou un signet ne reçoivent **pas** de notifications. À expliquer à vos client·e·s :

1. Ouvrir votre adresse **dans Safari**.
2. Bouton **Partager** (carré avec une flèche vers le haut).
3. **Sur l'écran d'accueil** → **Ajouter**.
4. Ouvrir l'app **Bakougie** depuis l'écran d'accueil, puis **Activer les notifications**.

La page les guide déjà : sur iPhone, tant que ce n'est pas installé, elle affiche ces étapes automatiquement.

Sur **Android**, c'est plus direct : l'activation marche depuis Chrome, et « Installer l'application » est proposé dans le menu.

---

## Portée & limites (à connaître)

- **Android / ordinateur** : fonctionne très bien, activation en un clic.
- **iPhone** : fonctionne (iOS 16.4+, y compris en France depuis qu'Apple a rétabli les web apps dans l'UE en mars 2024), **mais** seulement après installation sur l'écran d'accueil. En pratique, seule une partie de vos visiteurs iPhone franchira cette étape — prévoyez de l'expliquer (story, vidéo courte).
- **Pas de détection automatique** des mises à jour : les notifications partent quand **vous** les envoyez.
- **Coût** : gratuit jusqu'à **10 000 abonnés web** chez OneSignal, envois illimités. Au-delà, forfaits payants.

---

## Dépannage rapide

- **Le bouton dit « à configurer »** → l'`oneSignalAppId` est vide dans `contenu.js`.
- **Rien ne se passe sur iPhone** → la page n'est pas *installée* (écran d'accueil) ou iOS < 16.4.
- **« Site URL » refusée par OneSignal** → elle doit correspondre exactement à l'adresse GitHub Pages (https + `/` final).
- **Pas de prompt sur Android** → vérifiez que vous êtes bien en `https://` (GitHub Pages l'est) et que les notifications ne sont pas déjà bloquées dans les réglages du navigateur.
- **Je veux un nom de domaine à moi** (ex. `app.bakougie.fr`) → possible : GitHub Pages accepte un domaine personnalisé. Dans ce cas, créez l'app OneSignal avec cette adresse-là.

### « Le téléphone dit *abonné*, mais rien dans le dashboard OneSignal »

**⚠️ Cause n°1 quand le site est dans un sous-dossier (ex. `…github.io/app/`).**
OneSignal cherche le service worker **à la racine du domaine** par défaut. Comme votre site est dans `/app/`, il faut le lui dire — **et surtout activer l'interrupteur**, sinon les valeurs saisies sont ignorées (le navigateur affiche quand même « autorisé », mais aucun abonnement n'est créé).

Dans OneSignal → **Settings → Push & In-App → Web** → **Advanced Push Settings** → section **Service Workers** :

1. **ACTIVEZ l'interrupteur « Customize service worker paths and filenames »** (c'est lui qui était éteint).
2. Remplissez **exactement** ainsi (attention, ce sont 4 champs distincts) :
   | Champ | Valeur |
   |---|---|
   | Path to service worker files | `/app/`  *(doit finir par `/`)* |
   | Main service worker filename | `OneSignalSDKWorker.js` |
   | Updater service worker filename | `OneSignalSDKUpdaterWorker.js` |
   | Service worker registration scope | `/app/` |
3. **Save.**

> Piège fréquent : ne mettez PAS `/app/OneSignalSDKWorker.js` dans « Path to service worker files ». Ce champ = **le dossier seul** (`/app/`) ; le nom du fichier va dans « Main service worker filename ».

4. **Ajoutez le fichier `OneSignalSDKUpdaterWorker.js`** (fourni) à la racine de votre dépôt, à côté de `OneSignalSDKWorker.js` — sinon le champ « Updater » pointe vers un fichier absent.

Le code de la page passe déjà les mêmes valeurs automatiquement ; c'est l'activation + les 4 champs qui manquaient.

> **Alternative « à toute épreuve » : héberger à la racine.** Si vous voulez éviter tout ce casse-tête de sous-dossier, hébergez le site à la **racine** d'un domaine — le worker est alors trouvé sans aucun réglage. Deux options : (a) créer un dépôt GitHub nommé **exactement** `bakougie-pixel.github.io` (le site est alors servi sur `https://bakougie-pixel.github.io/`, sans `/app/`) ; (b) brancher un domaine à vous (ex. `app.bakougie.fr`). Dans les deux cas, remettez cette adresse comme **Site URL** dans OneSignal et désactivez l'option « Customize service worker paths ».

**Réinstallation propre sur le téléphone (indispensable après tout changement) :**
supprimez l'app de l'écran d'accueil → rouvrez la page dans le navigateur → réinstallez-la (Partager → Sur l'écran d'accueil) → ouvrez-la → réactivez les notifications → ouvrez le **Diagnostic** : la ligne **ID abonnement** doit maintenant afficher un identifiant.

---

---

### Autres causes possibles

- **La « Site URL » ne correspond pas** à l'origine réelle. Dans OneSignal → Settings → Push & In-App → Web, elle doit correspondre à `https://bakougie-pixel.github.io/app/` (OneSignal retient l'origine `https://bakougie-pixel.github.io`). Une erreur console « Can only be used on… » signale ce cas.
- **iPhone** : le push ne marche **que** dans l'app installée sur l'écran d'accueil (iOS 16.4+), jamais depuis un onglet Safari.
- **Où regarder** : dashboard **Audience → Subscriptions** (pas « Users »), sans filtre, avec 1–2 min de délai.
- **Le Diagnostic est votre ami** : le lien « Diagnostic notifications » en bas de page affiche l'état exact (permission, **ID d'abonnement**, dossier détecté, erreur). Si l'ID est renseigné → l'abonnement existe (cherchez-le dans le dashboard). S'il est **VIDE** → le worker ne s'enregistre pas (revoyez la Cause n°1 ci-dessus).
