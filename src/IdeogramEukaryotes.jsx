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

function getChrHeightAndRows(org) {
  let chrHeight = 400;
  let rows = 1;

  if (
    org === 'canis-lupus-familiaris' ||
    org === 'bos-taurus' ||
    org === 'gallus-gallus' ||
    org === 'leishmania-donovani'
  ) {
    chrHeight = 200;
    rows = 2;
  }

  return [chrHeight, rows];
}

export default class IdeogramEukaryotes extends Component {

  constructor(props) {
    super(props);
    const params = this.props.location.search;

    const org = params !== '' ? params.split('=')[1] : 'rattus-norvegicus';

    this.props.history.push({
      search: '?org=' + org
    });

    const [chrHeight, rows] = getChrHeightAndRows(org);

    this.state = {
      'organism': org,
      'chrHeight': chrHeight,
      'rows': rows,
    };
  }

  handleInputChange = (event) => {
    this.setState({
      'organism': event.target.id
    });
    this.props.history.push({
      search: '?org=' + event.target.id
    });
  }

  render() {
    return (
      <div id="eukaryotes-example" className="App">
        <Header page='eukaryotes'/>
        <ul id="organism-list">
        {organismGroups.map((group) => {
          return (
            <li key={'group-' + group.name}>{group.name}<ul>
            {group.organisms.map(([name, scientificName]) => {
              // e.g. Mus musculus -> mus-musculus
              const scientificNameSlug = scientificName.replace(/ /g, '-').toLowerCase();
              return (
                <li key={'organism-' + scientificName}>
                  <label htmlFor={scientificNameSlug}>
                    <input
                      type='radio' name='org' value={scientificNameSlug} id={scientificNameSlug}
                      onChange={this.handleInputChange}
                      checked={this.state.organism === scientificNameSlug}
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
        <div id='container'></div>
        <ReactIdeogram
          container='#container'
          organism={this.state.organism}
          chrWidth={10}
          chrHeight={this.state.chrHeight}
          rows={this.state.rows}
          showNonNuclearChromosomes={true}
        />
      </div>
    );
  }
}