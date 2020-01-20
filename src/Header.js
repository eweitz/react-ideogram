import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
      <h1>Human | Ideogram</h1>
      <a href="/ideogram">Overview</a> | {' '}
      <a href="multiple-primates">Previous</a> |  {' '}
      <a href="mouse">Next</a> |  {' '}
      <a href="https://github.com/eweitz/ideogram-react/blob/gh-pages/human.html" target="_blank">Source</a> {' '}
      <p>
        A human genome is depicted below.  The grey and black bands in each chromosome 
        represent  {' '}
        <a href="https://en.wikipedia.org/wiki/Heterochromatin">heterochromatin</a>.
        The pink region is the area around the {' '}
        <a href="https://en.wikipedia.org/wiki/Centromere">centromere</a>, and the blue represents variable regions.
      </p>
      <p>
        This ideogram shows most chromosomes in a {' '}
        <a href="https://en.wikipedia.org/wiki/Ploidy">haploid</a> state for {' '}
        simplicity.  For more accurate, diploid representation of human genomes, {' '}
        see <a href="ploidy-basic">Ploidy, basic</a> and {' '}
        <a href="multiple-trio">Multiple, trio</a>.
      </p>
      </header>
    )
  }
};