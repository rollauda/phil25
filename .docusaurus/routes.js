import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/phil25/__docusaurus/debug/',
    component: ComponentCreator('/phil25/__docusaurus/debug/', '1ac'),
    exact: true
  },
  {
    path: '/phil25/__docusaurus/debug/config/',
    component: ComponentCreator('/phil25/__docusaurus/debug/config/', 'f12'),
    exact: true
  },
  {
    path: '/phil25/__docusaurus/debug/content/',
    component: ComponentCreator('/phil25/__docusaurus/debug/content/', '1e6'),
    exact: true
  },
  {
    path: '/phil25/__docusaurus/debug/globalData/',
    component: ComponentCreator('/phil25/__docusaurus/debug/globalData/', 'ff3'),
    exact: true
  },
  {
    path: '/phil25/__docusaurus/debug/metadata/',
    component: ComponentCreator('/phil25/__docusaurus/debug/metadata/', '622'),
    exact: true
  },
  {
    path: '/phil25/__docusaurus/debug/registry/',
    component: ComponentCreator('/phil25/__docusaurus/debug/registry/', 'a94'),
    exact: true
  },
  {
    path: '/phil25/__docusaurus/debug/routes/',
    component: ComponentCreator('/phil25/__docusaurus/debug/routes/', '353'),
    exact: true
  },
  {
    path: '/phil25/blog/',
    component: ComponentCreator('/phil25/blog/', '18c'),
    exact: true
  },
  {
    path: '/phil25/blog/archive/',
    component: ComponentCreator('/phil25/blog/archive/', '0dc'),
    exact: true
  },
  {
    path: '/phil25/blog/authors/',
    component: ComponentCreator('/phil25/blog/authors/', '3fd'),
    exact: true
  },
  {
    path: '/phil25/blog/authors/all-sebastien-lorber-articles/',
    component: ComponentCreator('/phil25/blog/authors/all-sebastien-lorber-articles/', '98f'),
    exact: true
  },
  {
    path: '/phil25/blog/authors/yangshun/',
    component: ComponentCreator('/phil25/blog/authors/yangshun/', '076'),
    exact: true
  },
  {
    path: '/phil25/blog/first-blog-post/',
    component: ComponentCreator('/phil25/blog/first-blog-post/', '3b9'),
    exact: true
  },
  {
    path: '/phil25/blog/long-blog-post/',
    component: ComponentCreator('/phil25/blog/long-blog-post/', '23f'),
    exact: true
  },
  {
    path: '/phil25/blog/mdx-blog-post/',
    component: ComponentCreator('/phil25/blog/mdx-blog-post/', '75a'),
    exact: true
  },
  {
    path: '/phil25/blog/tags/',
    component: ComponentCreator('/phil25/blog/tags/', 'e17'),
    exact: true
  },
  {
    path: '/phil25/blog/tags/docusaurus/',
    component: ComponentCreator('/phil25/blog/tags/docusaurus/', '4af'),
    exact: true
  },
  {
    path: '/phil25/blog/tags/facebook/',
    component: ComponentCreator('/phil25/blog/tags/facebook/', 'b02'),
    exact: true
  },
  {
    path: '/phil25/blog/tags/hello/',
    component: ComponentCreator('/phil25/blog/tags/hello/', '05e'),
    exact: true
  },
  {
    path: '/phil25/blog/tags/hola/',
    component: ComponentCreator('/phil25/blog/tags/hola/', 'efc'),
    exact: true
  },
  {
    path: '/phil25/blog/welcome/',
    component: ComponentCreator('/phil25/blog/welcome/', '89e'),
    exact: true
  },
  {
    path: '/phil25/helloReact/',
    component: ComponentCreator('/phil25/helloReact/', 'e44'),
    exact: true
  },
  {
    path: '/phil25/docs/',
    component: ComponentCreator('/phil25/docs/', '539'),
    routes: [
      {
        path: '/phil25/docs/',
        component: ComponentCreator('/phil25/docs/', '846'),
        routes: [
          {
            path: '/phil25/docs/',
            component: ComponentCreator('/phil25/docs/', '61b'),
            routes: [
              {
                path: '/phil25/docs/intro/',
                component: ComponentCreator('/phil25/docs/intro/', 'd00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/0/intro/',
                component: ComponentCreator('/phil25/docs/L0/0/intro/', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/1/',
                component: ComponentCreator('/phil25/docs/L0/1/', '56d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/1/1-1/1-1/',
                component: ComponentCreator('/phil25/docs/L0/1/1-1/1-1/', '807'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/1/1-2/1-2/',
                component: ComponentCreator('/phil25/docs/L0/1/1-2/1-2/', '569'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/1/1-3/1-3/',
                component: ComponentCreator('/phil25/docs/L0/1/1-3/1-3/', '412'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/2/',
                component: ComponentCreator('/phil25/docs/L0/2/', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/2/2-1/2-1/',
                component: ComponentCreator('/phil25/docs/L0/2/2-1/2-1/', '759'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/2/2-2/2-2/',
                component: ComponentCreator('/phil25/docs/L0/2/2-2/2-2/', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/2/2-3/2-3/',
                component: ComponentCreator('/phil25/docs/L0/2/2-3/2-3/', '029'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/3/',
                component: ComponentCreator('/phil25/docs/L0/3/', 'b74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/3/3-1/3-1/',
                component: ComponentCreator('/phil25/docs/L0/3/3-1/3-1/', '0c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/3/3-2/3-2/',
                component: ComponentCreator('/phil25/docs/L0/3/3-2/3-2/', 'e7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/3/3-3/3-3/',
                component: ComponentCreator('/phil25/docs/L0/3/3-3/3-3/', 'df8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/accueil/',
                component: ComponentCreator('/phil25/docs/L0/accueil/', '3de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/C/conclusion/',
                component: ComponentCreator('/phil25/docs/L0/C/conclusion/', 'c11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/fiche/',
                component: ComponentCreator('/phil25/docs/L0/fiche/', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/docs/L0/howto/',
                component: ComponentCreator('/phil25/docs/L0/howto/', 'ec2'),
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
    path: '/phil25/manuel/',
    component: ComponentCreator('/phil25/manuel/', '8c2'),
    routes: [
      {
        path: '/phil25/manuel/',
        component: ComponentCreator('/phil25/manuel/', 'b8e'),
        routes: [
          {
            path: '/phil25/manuel/',
            component: ComponentCreator('/phil25/manuel/', 'c47'),
            routes: [
              {
                path: '/phil25/manuel/art/',
                component: ComponentCreator('/phil25/manuel/art/', '177'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/manuel/bonheur/',
                component: ComponentCreator('/phil25/manuel/bonheur/', 'b2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/manuel/conscience/',
                component: ComponentCreator('/phil25/manuel/conscience/', 'f16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/manuel/devoir/',
                component: ComponentCreator('/phil25/manuel/devoir/', 'a62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/manuel/etat/',
                component: ComponentCreator('/phil25/manuel/etat/', '751'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/manuel/inconscient/',
                component: ComponentCreator('/phil25/manuel/inconscient/', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/manuel/intro/',
                component: ComponentCreator('/phil25/manuel/intro/', '060'),
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
    path: '/phil25/methode/',
    component: ComponentCreator('/phil25/methode/', 'b6f'),
    routes: [
      {
        path: '/phil25/methode/',
        component: ComponentCreator('/phil25/methode/', 'a2e'),
        routes: [
          {
            path: '/phil25/methode/',
            component: ComponentCreator('/phil25/methode/', '4b0'),
            routes: [
              {
                path: '/phil25/methode/1/1-1/1-1/',
                component: ComponentCreator('/phil25/methode/1/1-1/1-1/', '9fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/1/1-2/1-2/',
                component: ComponentCreator('/phil25/methode/1/1-2/1-2/', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/1/1-3/1-3/',
                component: ComponentCreator('/phil25/methode/1/1-3/1-3/', '37c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/2/2-1/2-1/',
                component: ComponentCreator('/phil25/methode/2/2-1/2-1/', '71f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/2/2-2/2-2/',
                component: ComponentCreator('/phil25/methode/2/2-2/2-2/', 'c97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/2/2-3/2-3/',
                component: ComponentCreator('/phil25/methode/2/2-3/2-3/', '156'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/3/',
                component: ComponentCreator('/phil25/methode/3/', 'ddb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/intro/',
                component: ComponentCreator('/phil25/methode/intro/', '625'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/methode/1/',
                component: ComponentCreator('/phil25/methode/methode/1/', 'd87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/phil25/methode/methode/2/',
                component: ComponentCreator('/phil25/methode/methode/2/', '4e8'),
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
    path: '/phil25/',
    component: ComponentCreator('/phil25/', '859'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
