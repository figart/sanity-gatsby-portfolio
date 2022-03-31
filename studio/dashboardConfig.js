export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624632c6fa11c83ea4830e75',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-s2uzbech',
                  apiId: 'c3a01420-8ec2-406a-a45e-ed9c0b0ed38d'
                },
                {
                  buildHookId: '624632c77874ed394c1c9ac1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cg7oz17d',
                  apiId: 'bf690755-9f82-4ee2-a233-677bc65b5922'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/figart/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cg7oz17d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
