# GIF & stickers

Ta bibliothèque de GIF animés et d'images, prête à copier en un clic pour la coller dans Discord, WhatsApp, un mail ou un document. Avec les stickers de NeoDex, des favoris et des collections.

*English version: [README.en.md](README.en.md)*

## Ctrl+Alt+G partout (nouveau en 1.2.0)

Ctrl+Alt+G depuis n'importe quelle fenêtre ouvre la bibliothèque, recherche et choix au clavier ; texte façon mème sur les images.

## Ajouter des images

- **+ Ajouter** : choisis des GIF ou des images sur ton PC.
- **Lien…** : colle un lien direct (`.gif`, `.png`, `.jpg`…) ou une page Giphy ; l'image est téléchargée dans ta bibliothèque.
- **Glisse des fichiers** dans la fenêtre, ou **colle une image** avec Ctrl+V.

## Utiliser

- **Clic** sur une image : elle est copiée. Colle-la où tu veux avec Ctrl+V ; un GIF reste animé quand tu le colles dans Discord, WhatsApp et la plupart des messageries.
- **★** : ajouter aux favoris ; **✎** : changer le nom et les mots-clés ; **X** : supprimer (sur tous tes PC).
- **Rechercher un GIF ou un sticker** filtre par nom et mots-clés.

## Classer

La colonne de gauche propose :

- **Tout** : toute ta bibliothèque ;
- **★ Favoris** ;
- **Récents** : les 24 dernières images copiées ;
- **Stickers NeoDex** : les stickers fournis avec NeoDex, prêts à copier ;
- **Collections** : chaque mot-clé que tu donnes à une image (bouton ✎, mots séparés par des virgules) devient une collection.

## Partout dans Windows, au clavier, mèmes (1.2.0)

- **Ctrl+Alt+G**, depuis n’importe quelle fenêtre, ramène NeoDex avec la bibliothèque ouverte et la recherche prête : tape un mot, **Entrée** copie le premier résultat, ou **↓** puis les flèches pour choisir et **Entrée** pour copier. **Alt+Tab** te ramène dans ta fenêtre pour coller. Le raccourci demande l’autorisation « Raccourcis ».
- **Aa** sur une image ou un sticker : un texte du haut et un texte du bas, en blanc cerné de noir ; le mème arrive comme nouvelle image dans ta bibliothèque. Les GIF animés n’ont pas ce bouton.

## Données et synchronisation

Ta bibliothèque, tes favoris et tes mots-clés sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Le plugin demande le presse-papiers (pour copier), tes documents (pour ajouter des fichiers) et le réseau (pour télécharger depuis un lien).

## Installer

Dans NeoDex : **NeoStore → À découvrir → GIF & stickers → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## Taille de l’écran (1.1.3)

Les vignettes et la colonne des collections grandissent ou rétrécissent avec la fenêtre : 6 vignettes par ligne sur un petit portable, plus grandes sur un grand écran. Sous 760 px de large, les collections passent en haut. Corrigé : une bibliothèque vide disait « Rien ne correspond à ta recherche » à l’ouverture au lieu d’expliquer comment ajouter des GIF.
