import React, { Component } from 'react';
import Header from './Header';
import ReactIdeogram from './ReactIdeogram';

const organismGroups = [
  {
    name: 'Model organisms', 
    organisms: [
      ['Rat', 'Rattus norvegicus'],
      ['Fly', 'Drosophila melanogaster'],
      ['Worm', 'Caenorhabditis elegans'],
      ['Zebrafish', 'Danio rerio'],
      ['Thale cress', 'Arabidopsis thaliana'],
      ['Yeast', 'Saccharomyces cerevisiae'],
    ]
  },
  {
    name: 'Vertebrates', 
    organisms: [
      ['Chimpanzee', 'Pan troglodytes'],
      ['Macaque', 'Macaca mulatta'],
      ['Cat', 'Felis catus'],
      ['Pig', 'Sus scrofa'],
    ]
  },
  {
    name: 'Plants', 
    organisms: [
      ['Maize', 'Zea mays'],
      ['Rice', 'Oryza sativa'],
      ['Tomato', 'Solanum lycopersicum'],
      ['Banana', 'Musa acuminata'],
      ['Grape', 'Vitis vinifera'],
      ['Green algae', 'Micromonas commoda'],
    ]
  },
  {
    name: 'Insects', 
    organisms: [
      ['Mosquito', 'Anopheles gambiae'],
    ]
  },
  {
    name: 'Protozoa', 
    organisms: [
      ['Malaria parasite', 'Plasmodium falciparum'],
    ]
  },
];

function OrganismList() {
  return (
    <ul>
    {organismGroups.map((group) => {
      return (
        <ul> 
        {group.name}
        {group.organisms.map(([name, scientificName]) => {
          return (
            <li>
              <label for={scientificName}>
                <input type="radio" name="org" value={scientificName} id={scientificName} />
                {name} ({scientificName})
              </label>
            </li>
          );
        })}
        </ul>
      )
    })}
    </ul>
  )
};

export default class IdeogramEukaryotes extends Component {

  render() {
    const params = this.props.match.params;
    const organism = 'org' in params ? params.org : 'rattus-norvegicus';
    return (
      <div className="App">
        <Header page='eukaryotes'/>
        <OrganismList />
        <ReactIdeogram organism={organism}/>
      </div>
    );
  }
}