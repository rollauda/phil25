---
date: 2024-01-15
tags:
- test
title: Test des images
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Test des images

Voici une image normale :
<div style={{textAlign: 'center'}}>
  <a href={useBaseUrl('/img/philo/test.jpg')} target="_blank" rel="noopener noreferrer">
    <img
      src={useBaseUrl('/img/philo/test.jpg')}
      alt="Test image"
      style={{width: '65%'}}
    />
  </a>
</div>

Et voici un tableau avec des images :

  | Nom | Image | Description |  
  |-----|-------|-------------|  
  | Test 1 | <div style={{textAlign: "center"}}><a href={useBaseUrl("/img/philo/image1.jpg")} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl("/img/philo/image1.jpg")} width="350" alt="Image 1" /></a></div> | Description 1 |  
  | Test 2 | <div style={{textAlign: "center"}}><a href={useBaseUrl("/img/philo/image2.jpg")} target="_blank" rel="noopener noreferrer"><img src={useBaseUrl("/img/philo/image2.jpg")} width="350" alt="Image 2" /></a></div> | Description 2 |  
Et une image avec dimension :
<div style={{textAlign: 'center'}}>
  <a href={useBaseUrl('/img/philo/large.jpg')} target="_blank" rel="noopener noreferrer">
    <img
      src={useBaseUrl('/img/philo/large.jpg')}
      alt="Large image"
      style={{width: '65%'}}
    />
  </a>
</div>