import { dataProvider as semanticDataProvider, httpClient } from '@semapps/semantic-data-provider';
import ontologies from './ontologies.json';
import * as resources from '../resources';


const dataProvider = semanticDataProvider({
  dataServers:{
    aurba: {
        name : 'aurba',
        baseUrl: process.env.REACT_APP_MIDDLEWARE_URL,
        sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
        authServer: true, // Serveur où l'utilisateur est authentifié
        default: true, // Serveur par défaut (utilisé pour la création de ressources)
        priority: 1, // si plusieurs serveurs ont les mêmes miroir, on choisi celui avec la plus haute priorité.
        // Si un endpoint VOID est disponible, les informations suivantes sont calculées
        name: 'aurba',
        containers: {
          aurba: {
            'pair:Organization': [
              '/organizations'
            ],
            'pair:Group': [
              '/groups'
            ],
            'aurba:RelationshipAssociation': [
              '/relationship-associations'
            ],
            'aurba:RelationshipAssociationProximity': [
              '/RelationshipAssociationProximities'
            ],
            'aurba:RelationshipAssociationKind': [
              '/RelationshipAssociationKinds'
            ],
            'pair:OperationalMode': [
              '/operationalModes'
            ],
            'pair:Branch': [
              '/branches'
            ],
            'pair:GroupType': [
              '/groupe-types'
            ],
            'aurba:DataSource': [
              '/data-sources'
            ],
            'semapps:Page': [
              '/pages'
            ]
          },
        },
        uploadsContainerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'files',

        // Dans une configuration de POD, cette information est obtenue automatiquement du profil de l'utilisateur
        // proxyUrl: 'https://data.virtual-assembly.org/proxy'
      }
  },
  //sparqlEndpoint: process.env.REACT_APP_MIDDLEWARE_URL + 'sparql',
  httpClient,
  resources: Object.fromEntries(Object.entries(resources).map(([k, v]) => [k, v.dataModel])),
  ontologies,
  jsonContext: process.env.REACT_APP_MIDDLEWARE_URL + 'context.json',
//  uploadsContainerUri: process.env.REACT_APP_MIDDLEWARE_URL + 'files'
});


export default dataProvider;
