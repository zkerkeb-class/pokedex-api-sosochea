## Concepts à Comprendre
1. REST API
   - Méthodes HTTP (GET, POST, PUT, DELETE)
   - Codes de statut HTTP
   - Structure des URL
   - CORS (Cross-Origin Resource Sharing)

2. Express.js
   - Routing
   - Middleware
   - Gestion des requêtes et réponses
   - Configuration CORS

3. Sécurité de Base
   - Validation des entrées
   - Authentification
   - Gestion des erreurs
   - Politiques CORS

## Configuration CORS
CORS (Cross-Origin Resource Sharing) est un mécanisme qui permet à de nombreuses ressources (polices, JavaScript, etc.) d'une page web d'être demandées à partir d'un autre domaine que celui du domaine d'origine.

Pour utiliser l'API depuis un autre domaine :
1. L'API est configurée avec CORS activé
2. Toutes les origines sont autorisées dans cette version de développement
3. En production, vous devriez restreindre les origines autorisées

Pour une configuration plus restrictive, vous pouvez modifier les options CORS :

```javascript
app.use(cors({
  origin: 'https://votre-domaine.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## Ressources Additionnelles
- [Documentation Express.js](https://expressjs.com/fr/)
- [Guide des Status HTTP](https://developer.mozilla.org/fr/docs/Web/HTTP/Status)
- [REST API Best Practices](https://restfulapi.net/)

## Support
Pour toute question ou problème :
1. Vérifiez la documentation
2. Consultez les messages d'erreur dans la console
3. Demandez de l'aide à votre formateur

## Prochaines Étapes
- Ajout d'une base de données (MongoDB)
- Implémentation de tests automatisés
- Déploiement de l'API
- Documentation avec Swagger

## Gestion des Fichiers Statiques
Le serveur expose le dossier `assets` pour servir les images des Pokémon. Les images sont accessibles via l'URL :
```
http://localhost:3000/assets/pokemons/{id}.png
```

Par exemple, pour accéder à l'image de Pikachu (ID: 25) :
```
http://localhost:3000/assets/pokemons/25.png
```

### Configuration
Le middleware `express.static` est utilisé pour servir les fichiers statiques :
```javascript
app.use('/assets', express.static(path.join(__dirname, '../assets')));
```

### Sécurité
- Seuls les fichiers du dossier `assets` sont exposés
- Les autres dossiers du projet restent inaccessibles
- En production, considérez l'utilisation d'un CDN pour les fichiers statiques

# Pokédex Sosochea

Bienvenue dans le projet **Pokédex Sosochea** ! 🌟

Ce projet est une application web full-stack permettant de :
- Créer, modifier et consulter des Pokémons
- Poster des messages amusants avec des Pokémons
- S'enregistrer et se connecter en toute sécurité
- Utiliser un mini réseau social interne appelé "Pokétalk"

---

## 📚 Structure du projet

Le projet est divisé en deux dossiers principaux :

- `pokedex-api-sosochea/` : le **backend** (API REST avec Node.js + Express + MongoDB)
- `pokedex-starter-sosochea/` : le **frontend** (React.js)

---

## 🛠️ Instructions d'installation

### 1. Cloner le projet
```bash
 git clone https://github.com/zkerkeb-class/pokedex-starter-sosochea.git
 cd pokedex-starter-sosochea
```

### 2. Installer les dépendances
- Pour l'API :
```bash
cd pokedex-api-sosochea
npm install
```
- Pour le frontend :
```bash
cd ../pokedex-starter-sosochea
npm install
```

### 3. Lancer la base de données
Assurez-vous d'avoir MongoDB démarré en local :
```bash
mongod
```

### 4. Démarrer les serveurs
- Backend :
```bash
cd pokedex-api-sosochea
npm run dev
```
- Frontend :
```bash
cd ../pokedex-starter-sosochea
npm run dev
```

Accédez à l'application sur : [http://localhost:5173](http://localhost:5173)

---

## 📚 Documentation de l'API

### Authentification
| Méthode | URL | Description |
|:--------|:----|:------------|
| POST | `/api/users/register` | Inscription d'un nouvel utilisateur |
| POST | `/api/users/login` | Connexion d'un utilisateur |

### Pokémons
| Méthode | URL | Description |
|:--------|:----|:------------|
| GET | `/api/pokemons` | Liste de tous les Pokémons |
| POST | `/api/pokemons` | Création d'un Pokémon (authentification requise) |
| PUT | `/api/pokemons/:id` | Modification d'un Pokémon (authentification requise) |
| DELETE | `/api/pokemons/:id` | Suppression d'un Pokémon (authentification requise) |

### Pokétalk (Posts)
| Méthode | URL | Description |
|:--------|:----|:------------|
| GET | `/api/posts` | Liste de tous les posts Pokétalk |
| POST | `/api/posts` | Création d'un post |
| DELETE | `/api/posts/:id` | Suppression d'un post |
| PATCH | `/api/posts/:id/like` | Liker un post |
| PATCH | `/api/posts/:id/dislike` | Disliker un post |


---

## 🌐 Frontend - Fonctionnalités principales

- **Login/Register** : connexion sécurisée avec JWT
- **Page d'accueil** : rechercher, filtrer et voir la liste de Pokémons
- **Création de Pokémons** : ajout de nouveaux Pokémons
- **🎙️ Pokétalk** :
  - Poster des messages courts avec un Pokémon aléatoire
  - Liker / Disliker les posts
  - Supprimer ses posts
  - Trier par date, popularité, nom du Pokémon ou auteur
  - Rechercher parmi les posts
  - Pagination


---

## 🎥 Vidéo de démonstration

▶️ [Lien YouTube vers la démo du projet](https://youtu.be/X6ihdk6skxo?si=HT5LCrj1Mr4Twrl1) 

---

## 💚 Merci pour votre attention et bon Poké-catching 🌟 !

---


