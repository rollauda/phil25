import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '595'),
    exact: true
  },
  {
    path: '/blog/archive/',
    component: ComponentCreator('/blog/archive/', '1d9'),
    exact: true
  },
  {
    path: '/blog/authors/',
    component: ComponentCreator('/blog/authors/', '347'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles/',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles/', '57c'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun/',
    component: ComponentCreator('/blog/authors/yangshun/', '58a'),
    exact: true
  },
  {
    path: '/blog/first-blog-post/',
    component: ComponentCreator('/blog/first-blog-post/', '08c'),
    exact: true
  },
  {
    path: '/blog/long-blog-post/',
    component: ComponentCreator('/blog/long-blog-post/', '447'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post/',
    component: ComponentCreator('/blog/mdx-blog-post/', 'bcc'),
    exact: true
  },
  {
    path: '/blog/tags/',
    component: ComponentCreator('/blog/tags/', 'e17'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus/',
    component: ComponentCreator('/blog/tags/docusaurus/', 'abd'),
    exact: true
  },
  {
    path: '/blog/tags/hello/',
    component: ComponentCreator('/blog/tags/hello/', 'a37'),
    exact: true
  },
  {
    path: '/blog/tags/hola/',
    component: ComponentCreator('/blog/tags/hola/', 'bf6'),
    exact: true
  },
  {
    path: '/helloReact/',
    component: ComponentCreator('/helloReact/', '76c'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '7e1'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'ed1'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '5b0'),
            routes: [
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', 'e44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/0/intro/',
                component: ComponentCreator('/docs/L0/0/intro/', 'fb6'),
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
                path: '/docs/L0/1/1-1/1-1/',
                component: ComponentCreator('/docs/L0/1/1-1/1-1/', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/1/1-2/1-2/',
                component: ComponentCreator('/docs/L0/1/1-2/1-2/', '80d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/1/1-3/1-3/',
                component: ComponentCreator('/docs/L0/1/1-3/1-3/', 'dba'),
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
                path: '/docs/L0/2/2-1/2-1/',
                component: ComponentCreator('/docs/L0/2/2-1/2-1/', 'db5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/2/2-2/2-2/',
                component: ComponentCreator('/docs/L0/2/2-2/2-2/', '06c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/2/2-3/2-3/',
                component: ComponentCreator('/docs/L0/2/2-3/2-3/', '405'),
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
                path: '/docs/L0/3/3-1/3-1/',
                component: ComponentCreator('/docs/L0/3/3-1/3-1/', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/3/3-2/3-2/',
                component: ComponentCreator('/docs/L0/3/3-2/3-2/', '1ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/3/3-3/3-3/',
                component: ComponentCreator('/docs/L0/3/3-3/3-3/', 'fb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/accueil/',
                component: ComponentCreator('/docs/L0/accueil/', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/C/conclusion/',
                component: ComponentCreator('/docs/L0/C/conclusion/', 'c9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/fiche/',
                component: ComponentCreator('/docs/L0/fiche/', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L0/howto/',
                component: ComponentCreator('/docs/L0/howto/', 'cef'),
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
    path: '/manuel/',
    component: ComponentCreator('/manuel/', '246'),
    routes: [
      {
        path: '/manuel/',
        component: ComponentCreator('/manuel/', '58e'),
        routes: [
          {
            path: '/manuel/',
            component: ComponentCreator('/manuel/', 'c35'),
            routes: [
              {
                path: '/manuel/art/',
                component: ComponentCreator('/manuel/art/', 'ede'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/bonheur/',
                component: ComponentCreator('/manuel/bonheur/', 'fd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/conscience/',
                component: ComponentCreator('/manuel/conscience/', 'e78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/devoir/',
                component: ComponentCreator('/manuel/devoir/', '399'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/etat/',
                component: ComponentCreator('/manuel/etat/', 'bab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/inconscient/',
                component: ComponentCreator('/manuel/inconscient/', 'cec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manuel/intro/',
                component: ComponentCreator('/manuel/intro/', 'f94'),
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
    path: '/methode/',
    component: ComponentCreator('/methode/', 'dd5'),
    routes: [
      {
        path: '/methode/',
        component: ComponentCreator('/methode/', 'b3c'),
        routes: [
          {
            path: '/methode/',
            component: ComponentCreator('/methode/', 'd21'),
            routes: [
              {
                path: '/methode/1/1-1/1-1/',
                component: ComponentCreator('/methode/1/1-1/1-1/', '608'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/1/1-2/1-2/',
                component: ComponentCreator('/methode/1/1-2/1-2/', '937'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/1/1-3/1-3/',
                component: ComponentCreator('/methode/1/1-3/1-3/', '42a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/2/2-1/2-1/',
                component: ComponentCreator('/methode/2/2-1/2-1/', '6ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/2/2-2/2-2/',
                component: ComponentCreator('/methode/2/2-2/2-2/', '65f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/2/2-3/2-3/',
                component: ComponentCreator('/methode/2/2-3/2-3/', '8c2'),
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
                path: '/methode/intro/',
                component: ComponentCreator('/methode/intro/', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/methode/1/',
                component: ComponentCreator('/methode/methode/1/', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/methode/methode/2/',
                component: ComponentCreator('/methode/methode/2/', 'fdd'),
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
