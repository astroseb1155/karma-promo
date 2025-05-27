# 🔮 Soraya - Landing Page Radio

Landing page optimisée pour l'offre radio avec code promo KARMA50 (-50%).

## 📁 Structure des fichiers

```
soraya-landing/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # JavaScript
└── README.md          # Ce fichier
```

## 🚀 Déploiement sur Vercel

### Méthode 1 : Upload Direct (RECOMMANDÉE)

1. **Créez votre compte Vercel** : https://vercel.com
2. **Cliquez sur "New Project"**
3. **Sélectionnez "Upload Files"**
4. **Glissez-déposez les 3 fichiers** (`index.html`, `styles.css`, `script.js`)
5. **Cliquez "Deploy"**
6. **Votre site sera en ligne** en quelques secondes !

### Méthode 2 : Via GitHub

1. **Créez un repo GitHub** avec ces fichiers
2. **Connectez GitHub à Vercel**
3. **Sélectionnez votre repo**
4. **Deploy automatique !**

## 🌐 Ajouter votre domaine personnalisé

### Sur Vercel :

1. **Allez dans votre projet** → Settings → Domains
2. **Ajoutez votre domaine** (ex: votre-domaine.com)
3. **Configurez les DNS** chez votre registrar :
   - **Type:** CNAME
   - **Nom:** @ (ou www)
   - **Valeur:** cname.vercel-dns.com
4. **SSL automatique** activé par Vercel

## 📊 Configuration Analytics

### Google Analytics :
1. **Remplacez `GA_MEASUREMENT_ID`** dans `index.html`
2. **Par votre vrai ID Google Analytics**

### Facebook Pixel :
1. **Ajoutez votre code Facebook Pixel** dans `index.html`
2. **Le tracking est déjà configuré** dans `script.js`

## 🎨 Personnalisation

### Modifier les couleurs :
```css
/* Dans styles.css, changez les gradients */
background: linear-gradient(135deg, #VOS-COULEURS);
```

### Modifier le code promo :
```html
<!-- Dans index.html -->
<div class="promo-code">Code : VOTRE-CODE</div>
```

### Modifier l'URL de destination :
```html
<!-- Dans index.html, section footer-cta -->
<a href="VOTRE-URL-INSCRIPTION" class="cta-primary">
```

## ✨ Fonctionnalités incluses

- ✅ **Design responsive** (mobile/desktop)
- ✅ **Countdown automatique** jusqu'à minuit
- ✅ **FAQ interactive**
- ✅ **Animations au scroll**
- ✅ **CTA flottant**
- ✅ **Copy code promo** au clic
- ✅ **Tracking analytics** prêt
- ✅ **SEO optimisé**

## 🔧 Optimisations techniques

- **Chargement rapide** : CSS et JS externes
- **SEO friendly** : Méta tags optimisés
- **Performance** : Images optimisées
- **Accessibilité** : Structure sémantique
- **Analytics** : Tracking événements configuré

## 📱 Test responsive

La page est optimisée pour :
- 📱 **Mobile** (320px+)
- 💻 **Tablette** (768px+)
- 🖥️ **Desktop** (1200px+)

## 🎯 Taux de conversion

Éléments optimisés pour la conversion :
- **Urgence** : Countdown + "Offre limitée"
- **Social proof** : Stats de confiance
- **Clarté** : 3 étapes simples
- **Visibilité** : Multiple CTA
- **Rassurant** : FAQ détaillée

## 📈 A/B Testing

Éléments facilement testables :
- Couleur des boutons CTA
- Texte des headlines
- Position du code promo
- Durée du countdown

## 🆘 Support

En cas de problème :
1. **Vérifiez les 3 fichiers** sont bien uploadés
2. **Checkez la console** navigateur (F12)
3. **Testez sur mobile** et desktop
4. **Vérifiez les liens** vers votre site inscription

## 🔄 Mises à jour futures

Pour modifier le contenu :
1. **Éditez les fichiers** localement
2. **Re-uploadez sur Vercel** (ou push sur GitHub)
3. **Deploy automatique** !

---

**🎉 Votre landing page est prête ! Bonne conversion !** 🔮