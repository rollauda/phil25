import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/helloReact',
    component: ComponentCreator('/helloReact', '77a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f6c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '467'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c65'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/0/intro',
                component: ComponentCreator('/docs/L0/0/intro', 'af2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/1/',
                component: ComponentCreator('/docs/L0/1/', '5c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/1/1-1/1-1',
                component: ComponentCreator('/docs/L0/1/1-1/1-1', '90c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/1/1-2/1-2',
                component: ComponentCreator('/docs/L0/1/1-2/1-2', '10b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/1/1-3/1-3',
                component: ComponentCreator('/docs/L0/1/1-3/1-3', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/2/',
                component: ComponentCreator('/docs/L0/2/', '158'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/2/2-1/2-1',
                component: ComponentCreator('/docs/L0/2/2-1/2-1', '085'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/2/2-2/2-2',
                component: ComponentCreator('/docs/L0/2/2-2/2-2', '066'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/2/2-3/2-3',
                component: ComponentCreator('/docs/L0/2/2-3/2-3', 'cd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/3/',
                component: ComponentCreator('/docs/L0/3/', 'bb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/3/3-1/3-1',
                component: ComponentCreator('/docs/L0/3/3-1/3-1', '073'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/3/3-2/3-2',
                component: ComponentCreator('/docs/L0/3/3-2/3-2', '5df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/3/3-3/3-3',
                component: ComponentCreator('/docs/L0/3/3-3/3-3', 'a31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/accueil',
                component: ComponentCreator('/docs/L0/accueil', '9d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/C/conclusion',
                component: ComponentCreator('/docs/L0/C/conclusion', 'e99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/fiche',
                component: ComponentCreator('/docs/L0/fiche', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/howto',
                component: ComponentCreator('/docs/L0/howto', '326'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/manuel',
    component: ComponentCreator('/manuel', '4e2'),
    routes: [
      {
        path: '/manuel',
        component: ComponentCreator('/manuel', '5e8'),
        routes: [
          {
            path: '/manuel',
            component: ComponentCreator('/manuel', '711'),
            routes: [
              {
                path: '/manuel/art',
                component: ComponentCreator('/manuel/art', '564'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/bonheur',
                component: ComponentCreator('/manuel/bonheur', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/conscience',
                component: ComponentCreator('/manuel/conscience', '998'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/devoir',
                component: ComponentCreator('/manuel/devoir', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/etat',
                component: ComponentCreator('/manuel/etat', '5ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/inconscient',
                component: ComponentCreator('/manuel/inconscient', 'bb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/intro',
                component: ComponentCreator('/manuel/intro', '3a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/methode',
    component: ComponentCreator('/methode', '23e'),
    routes: [
      {
        path: '/methode',
        component: ComponentCreator('/methode', '671'),
        routes: [
          {
            path: '/methode',
            component: ComponentCreator('/methode', 'ee1'),
            routes: [
              {
                path: '/methode/1/1-1/1-1',
                component: ComponentCreator('/methode/1/1-1/1-1', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/1/1-2/1-2',
                component: ComponentCreator('/methode/1/1-2/1-2', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/1/1-3/1-3',
                component: ComponentCreator('/methode/1/1-3/1-3', '1fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/2/2-1/2-1',
                component: ComponentCreator('/methode/2/2-1/2-1', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/2/2-2/2-2',
                component: ComponentCreator('/methode/2/2-2/2-2', '0ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/2/2-3/2-3',
                component: ComponentCreator('/methode/2/2-3/2-3', '553'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/3/',
                component: ComponentCreator('/methode/3/', '290'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/intro',
                component: ComponentCreator('/methode/intro', 'd04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/methode/1',
                component: ComponentCreator('/methode/methode/1', '4f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/methode/2',
                component: ComponentCreator('/methode/methode/2', '83a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'fd5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
