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

class OrganismList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOrganism: props.selectedOrganism
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      'selectedOrganism': event.target.id
    });
  }

  render() {
    const selectedOrganism = this.state.selectedOrganism;
    return (
      <ul id="organisms-list">
      {organismGroups.map((group) => {
        return (
          <li key={'group-' + group.name}><ul>
          {group.name}
          {group.organisms.map(([name, scientificName]) => {
            // e.g. Mus musculus -> mus-musculus
            const scientificNameSlug = scientificName.replace(/ /g, '-').toLowerCase();
            return (
              <li key={'organism-' + scientificName}>
                <label htmlFor={scientificName}>
                  <input
                    type='radio' name='org' value={scientificNameSlug} id={scientificNameSlug}
                    onChange={this.handleInputChange}
                    checked={selectedOrganism === scientificNameSlug}
                  />
                  {name} ({scientificName})
                </label>
              </li>
            );
          })}
          </ul></li>
        )
      })}
      </ul>
    )
  }
}

export default class IdeogramEukaryotes extends Component {

  render() {
    const params = this.props.match.params;
    const organism = 'org' in params ? params.org : 'rattus-norvegicus';
    return (
      <div id="eukaryotes-example" className="App">
        <Header page='eukaryotes'/>
        <OrganismList selectedOrganism={organism}/>
        <ReactIdeogram organism={organism}/>
      </div>
    );
  }
}