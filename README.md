# PEXP_1.1
European Patents Citations Network Explorer Web Application

# Introduction

## Résumé
Ce projet réalisé dans le cadre du cours de [Géovisualisation dynamique et traitement de données](https://github.com/christiankaiser/geovis2) s’articule autour de la cartographie des brevets en Europe. Il est également en lien avec le mémoire que je suis en train de préparer en rapport avec ces thématiques et géographies de l’innovation, des spécialisations industrielles et des flux de connaissance en Europe.

## Objectifs
Le but de cette application web est théoriquement assez simple: 
+ des points sont placés sur une carte: ces points correspondent aux villes européennes, ou plus exactement aux aires urbaines fonctionnelles (FUA);
+ entre ces villes sont présents des liens, des relations technologiques qui correspondent aux citations que les brevets localisés dans une ville font vers des brevets localisés dans d'autres villes, mais également dans la ville-source;
+ à partir de cela, des statistiques peuvent être inférées de ces brevets sur les spécialisations technologiques des villes ou sur des partenaires plus ou moins importants dans les différentes villes;
+ toutes les informations sont préalablement traitées, simplifiées et représentées afin de les rendre accessibles à un public \textit{a minima} un petit peu plus large que les seuls experts et institutions intéressés par ces questions.

## Public cible

Les questions des flux de connaissances ont été particulièrement réappropriées par la géographie économique depuis le milieu des années 1990, en relation avec la montée d'une nouvelle « géographie économique relationnelle » intégrant le paradigme du réseau, de la position relationnelle dans l'analyse des acteurs plutôt que l'observation de leurs caractéristiques intrinsèques. Inspirées par le développement d'outils informatiques permettant l'analyse mathématique des réseaux sociaux, ces questions sont aujourd'hui communes aux géographes, aux sociologues, aux économistes, aux physiciens, aux spécialistes de la science des organisations ou des activités scientométriques et de management de la technologie.


Ces spécialistes sont parvenus à montrer aux acteurs concernés directement ou indirectement l'importance de ces questions. Ainsi, les branches institutionnelles du développement territorial et économique (agences de développement, chambres de commerce), les cabinets de conseil à l'implantation industrielle et tous les acteurs économiques dont les activités industrielles de propriété intellectuelle sont importantes sont désormais sensibilisés à ces questions.


L'application doit pouvoir s'utiliser et se comprendre facilement pour ces différents acteurs qui maîtrisent donc bien ces notions et le cadre dans lequel elles s'inscrivent.


# Données

## Sources des données
Les brevets sont des documents intéressants pour l'analyse, car ils contiennent un nombre important d'informations, notamment pour ce qui nous intéresse ici :
+ les adresses respectives des différents _applicants_ et des différents inventeurs du brevet ;
+ les citations renvoyant vers d'autres brevets (ajoutées par le déposant ou par l'examinateur dans certains cas) ;
+ la classification du brevet (selon une nomenclature officielle établie par l'Organisation Mondiale de la Propriété Industrielle).  


Puisque l'intérêt se porte ici sur les brevets en Europe, seront considérés les brevets déposés à l'Office Européen des Brevets. Cette agence dispose d'une base de données nommée _PATSTAT_, elle nous est accessible par un FTP de l'OCDE ([ftp://ftp.oecd.org]) qui a effectué un prétraitement dessus.


Un fichier (REGPAT) comporte les localisations de ces brevets : à partir des adresses des _applicants_ et des inventeurs indiquées, un script de reconnaissance de texte y a fait correspondre une ville et d'ici, a été rattaché à un NUTS 3 (Nomenclature des Unités Territoriales Statistiques de niveau 3, par exemple un département français ou un canton suisse). 


Un fichier indique ensuite les citations qu'effectue chaque brevet, et un troisième dispose d'informations sur la classification.

## Localisations

Avec ces fichiers des localisations à notre disposition, nous pouvons dès lors obtenir une information géographique. La représentation des inventeurs paraît plus pertinente que celle des _applicants_ (entreprises auxquelles ils appartiennent), puisque ces derniers sont très souvent des entreprises qui indiquent l'adresse de leur siège social plutôt que le lieu où a été effectuée la recherche. Ainsi, la localisation des inventeurs rend mieux compte de l'information géographique sous-jacente aux brevets, c'est donc celle qui est ici retenue.


Le problème est que nous avons donc maintenant une liste de régions et que celles-ci ne sont pas pertinentes lors d'une analyse de type _social network_. Le découpage en régions a le mérite d'être le plus exact, mais ne correspond pas forcément à la réalité selon les découpages administratifs nationaux. La région Ile-de-France (France) est un exemple édifiant de ce problème : elle est découpée en 8 entités différentes (départements) mais toutes peuvent être raccrochées plus ou moins directement à Paris. De telle sorte qu'une correspondance entre ces NUTS-3 et des aires urbaines s'impose. En fait, une transformation de données aréales vers des données ponctuelles est nécessaire. Pour approcher au mieux une couverture de ces surfaces, c'est l'aire urbaine fonctionnelle (_functional urban area_, FUA) prise de façon large qui est utilisée. La dénomination de ces entités peut alors être effectuée à partir de la ville-centre. Par exemple, tous les brevets affectés aux NUTS-3 de l'Ile-de-France sont affectés à la FUA Paris(Cette correspondance est effectuée à l'échelle européenne selon un fichier réalisé et fourni par Antoine Bellwald que je remercie). 


On obtient donc pour toute l'Europe (Russie, Biélorussie, Ukraine, Turquie, Islande et territoires ultramarins exclus) les brevets par FUA, soient les noeuds de notre futur graphe ou réseau (367 noeuds origines, 370 noeuds destination).


## Citations

Vient ensuite la question des liens entre ces noeuds. Pour cela, nous utilisons les citations entre les brevets pour y faire correspondre les liens entre les villes.

La difficulté technique de ce point est la prise en compte de plusieurs cas particuliers : 
+ un brevet peut avoir plusieurs inventeurs différents donc plusieurs adresses différentes
+ un brevet peut donc avoir pour origine plusieurs points
+ un brevet peut donc aussi avoir pour destination plusieurs points pour une citation
+ un brevet peut effectuer de nombreuses citations
+ un brevet peut avoir son point d'origine et son point de destination identiques (citation au sein d'une même ville)

Pour surmonter ce problème, il a fallu dupliquer les brevets pour pouvoir considérer chaque lien comme unique. Par exemple, si le brevet numéro 123456 a ses inventeurs localisés à Genève et Zürich et qu'il cite deux autres brevets, l'un localisé à Paris et l'autre à Munich et Zürich, on aura: un lien de Genève à Paris, un lien de Genève à Munich, un lien de Genève à Zürich, un lien de Zürich à Paris, un lien de Zürich à Munich et un lien de Zürich à Zürich. Ainsi, pour chaque citation, on aura _a x b liens_ avec _a_ le nombre de points de départ et _b_ le nombre de points d'arrivée. Cela augmente considérablement le nombre de liens. Au départ nous partions de 10'618'573 citations entre 3'123'893 brevets (soit environ 3,4 citations par brevet) correspondants à 7'384'453 inventeurs (soit environ 2,4 inventeurs par brevet) on arrive après agrégation par FUA à 27'756 liens entre 370 noeuds -- en sachant que quelques brevets ont été exclus de l'analyse faute de correspondance entre les fichiers, qui par exemple n'avaient pas de localisation ou n'apparaissant pas dans le fichier suivant de classification des brevets. 

## Classification

Ensuite, l'ajout d'une information qualitative de ces brevets est intéressant pour analyser les spécialisations de chaque noeud-FUA. 

Le fichier regroupant diverses informations sur ces brevets n'utilise pas la classification officielle (IPC), très détaillée, mais une classification alternative regroupant les classes de brevets en 35 grands secteurs technologiques n'étant disponibles qu'à l'échelle des brevets, il a fallu créer un graphe spécifique pour chaque secteur technologique. 

À partir de ces dernières données, on a donc 35 fichiers de liens selon les secteurs technologiques plus 1 fichier pour le réseau total. On a également pu créer pour chaque secteur technologique une information de la distribution des brevets entre les FUA, et pour chaque FUA la distribution des fréquences des secteurs technologiques dans le brevetage. En rapportant ces dernières valeurs aux fréquences dans l'ensemble de l'Europe, on arrive ainsi à obtenir des quotients de localisation par secteur technologique. 

# Maquette
Pour l'application web, je m'étais fixé sur la maquette suivante :
+ Une visualisation de chaque point/nœud/FUA sur une carte avec correspondance entre le point de la carte et le nœud du réseau. Sur cette carte, une visualisation des flux : selon leur intensité, en évitant l'_effet spaghetti_ et en pouvant distinguer les flux internes à une même ville
+ Une visualisation non géographique du réseau comme on peut en trouver dans l'analyse des réseaux sociaux
+ Une visualisation des statistiques relatives aux spécialisations des villes et à la concentration du brevetage

Cela nous aurait donc fait 3 blocs de visualisation de données, liés dynamiquement entre eux, que l'on agrémenterait d'éléments de présentation et informatifs.

# Technologies utilisée

La création des données et leurs manipulations ont été effectuées via R.

Le site est réalisé avec les technologies HTML, JavaScript et CSS. La priorité ayant été donnée au travail sur la visualisation des flux, les fichiers de données sont en local, mais pourraient être propulsés depuis une base de données.

Pour la partie visualisation de données, les librairies JavaScript suivantes ont été utilisées :
+ d3.js : notamment pour l'histogramme interactif, le _chord diagram_ et plus généralement pour la modification du DOM.
+ spatialsankey.js : notamment pour la cartographie des flux
+ vis.js : notamment pour le réseau non géographique
+ leaflet.js : notamment pour la carte
+ mapbox.js : notamment pour le fond de carte

Pour l'architecture générale du site, les librairies JavaScript suivantes ont été utilisées:
+ bootstrap.js : pour différents kits CSS
+ AdminLTE.js : pour l'architecture en blocs
