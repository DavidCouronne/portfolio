---
author: David Couronné
date: 2019-10-04
post: true
title: Astuces Python rapides à apprendre
description: Python est l’un des langages les plus utilisés par de nombreuses personnes
  dans les domaines de la science des données, de l’apprentissage automatique, du
  développement Web, des scripts, de l’automatisation, etc. Une partie de la raison
  de cette popularité est sa simplicité et sa facilité à l’apprendre. Si vous lisez
  ceci, il est fort probable que vous utilisiez déjà Python ou du moins que vous y
  êtes intéressé. Dans cet article, nous allons voir brièvement 30 extraits de code
  abrégés que vous pouvez comprendre et apprendre en 30 secondes ou moins.
tags:
- python
image: ''

---
# Tous uniques

La méthode suivante vérifie si la liste donnée contient des éléments en double. Il utilise la propriété de `set()` qui supprime les éléments en double de la liste.

```python
def all_unique(lst):
    return len(lst) == len(set(lst))


x = [1,1,2,2,3,2,3,4,5,6]
y = [1,2,3,4,5]
all_unique(x) # False
all_unique(y) # True
```

# Anagrammes

Cette méthode peut être utilisée pour vérifier si deux chaînes sont des anagrammes. Une anagramme est un mot ou une phrase formé en réarrangeant les lettres d’un mot ou d’une phrase différent, généralement en utilisant toutes les lettres originales exactement une fois.

```python
from collections import Counter

def anagram(first, second):
    return Counter(first) == Counter(second)


anagram("abcd3", "3acdb") # True
```

# Mémoire

Cette astuce peut être utilisé pour vérifier l'utilisation de la mémoire d'un objet.

```python
import sys 

variable = 30 
print(sys.getsizeof(variable)) # 24
```

# Taille en octets

Cette méthode retourne la longueur d'une chaîne en octets.

```python
def byte_size(string):
    return(len(string.encode('utf-8')))
    
    
byte_size('😀') # 4
byte_size('Hello World') # 11    
```

# Imprimer une chaîne N fois

Cette astuce peut être utilisé pour imprimer une chaîne n fois sans avoir à utiliser de boucles pour le faire.

```python
n = 2; 
s ="Programming"; 

print(s * n); # ProgrammingProgramming
```

# Capitaliser les premières lettres

Cette astuce utilise simplement la méthode `title()` pour mettre en majuscule les premières lettres de chaque mot d'une chaîne.

```python
s = "programming is awesome"

print(s.title()) # Programming Is Awesome
```

# Morcèlement (Chunk)

Cette méthode divise une liste en listes plus petites d'une taille spécifiée.

```python
def chunk(list, size):
    return [list[i:i+size] for i in range(0,len(list), size)]
```

# Compact

Cette méthode supprime les "valeurs de fausseté" (falsy value) (False, None, 0 et “”) d’une liste à l’aide de `filter ()`.

```python
def compact(lst):
    return list(filter(None, lst))
  
  
compact([0, 1, False, 2, '', 3, 'a', 's', 34]) # [ 1, 2, 3, 'a', 's', 34 ]
```

# Transposition 2D

Cette astuce peut être utilisé pour transposer un tableau 2D.

```python
array = [['a', 'b'], ['c', 'd'], ['e', 'f']]
transposed = zip(*array)
print(transposed) # [('a', 'c', 'e'), ('b', 'd', 'f')]
```

# Comparaison chaînée

Vous pouvez effectuer plusieurs comparaisons avec tous les types d’opérateurs sur une même ligne.

```python
a = 3
print( 2 < a < 8) # True
print(1 == a < 2) # False
```

