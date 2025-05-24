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
    path: '/indeold',
    component: ComponentCreator('/indeold', '99c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ef7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fb3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b25'),
            routes: [
              {
                path: '/docs/category/l1--quest-ce-que-la-nature-',
                component: ComponentCreator('/docs/category/l1--quest-ce-que-la-nature-', '6a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/l2--la-parole-est-elle-le-propre-de-lhomme-',
                component: ComponentCreator('/docs/category/l2--la-parole-est-elle-le-propre-de-lhomme-', '1f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L1/congratulations',
                component: ComponentCreator('/docs/L1/congratulations', 'de3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L1/create-a-blog-post',
                component: ComponentCreator('/docs/L1/create-a-blog-post', 'cd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L1/create-a-document',
                component: ComponentCreator('/docs/L1/create-a-document', 'da1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L1/create-a-page',
                component: ComponentCreator('/docs/L1/create-a-page', '132'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L1/deploy-your-site',
                component: ComponentCreator('/docs/L1/deploy-your-site', '323'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L1/markdown-features',
                component: ComponentCreator('/docs/L1/markdown-features', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L2/manage-docs-versions',
                component: ComponentCreator('/docs/L2/manage-docs-versions', 'b62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/L2/translate-your-site',
                component: ComponentCreator('/docs/L2/translate-your-site', 'e3e'),
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
    component: ComponentCreator('/manuel', '69e'),
    routes: [
      {
        path: '/manuel',
        component: ComponentCreator('/manuel', 'f9d'),
        routes: [
          {
            path: '/manuel',
            component: ComponentCreator('/manuel', 'e31'),
            routes: [
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
    component: ComponentCreator('/methode', '132'),
    routes: [
      {
        path: '/methode',
        component: ComponentCreator('/methode', 'e9e'),
        routes: [
          {
            path: '/methode',
            component: ComponentCreator('/methode', '00a'),
            routes: [
              {
                path: '/methode/intro',
                component: ComponentCreator('/methode/intro', 'd04'),
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
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
