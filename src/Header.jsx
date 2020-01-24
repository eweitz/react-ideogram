import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

const prevNextLinks = [
  'human',
  'mouse',
  'multiple-primates'
];

const Summary = (props) => {
  const summaries = {
    human:
      <div>
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
      </div>
  };
  return summaries[props.page];
}

function getPrevNextIndex(pageIndex, prevOrNext) {
  const numPages = pageIndex.length;
  if (pageIndex === 0 && prevOrNext === 'prev') {
    return numPages - 1;
  } else if (pageIndex === numPages && prevOrNext === 'next') {
    return 0;
  } else if (prevOrNext === 'next') {
    return pageIndex + 1;
  } else if (prevOrNext === 'prev') {
    return pageIndex - 1;
  }
}

/**
 * Gets names of previous and next pages, used in header navigation links
 * 
 * @param {String} page Name of page in slug form, e.g. 'human', 'multiple-primates'
 * @return {Array} Names of previous and next pages
 */
function getPrevNextPages(page) {
  const pageIndex = prevNextLinks.indexOf(page)
  const prevIndex = getPrevNextIndex(pageIndex, 'prev');
  const nextIndex = getPrevNextIndex(pageIndex, 'next');

  return [prevNextLinks[prevIndex], prevNextLinks[nextIndex]];
}

export default class Header extends Component {

  render() {
    const page = this.props.page;
    const {prevPage, nextPage} = getPrevNextPages(page);
    return (
      <header>
      <h1>Human | Ideogram</h1>
      <a href="/ideogram">Overview</a> | {' '}
      <Link to={prevPage} >Previous</Link> |  {' '}
      <Link to={nextPage} >Next</Link> |  {' '}
      <a href="https://github.com/eweitz/ideogram-react/blob/gh-pages/{page}.html" target="_blank">Source</a> {' '}
      <Summary page={page}/>
      </header>
    )
  }
};