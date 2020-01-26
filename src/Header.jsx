import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Summary from './Summary.jsx';

const pages = [
  'human',
  'mouse',
  'eukaryotes',
  // 'orthologs',
  // 'homology-basic',
  // 'homology-advanced',
  // 'annotations-basic',
  // 'annotations-overlaid',
  // 'annotations-tracks',
  // 'annotations-external-data',
  // 'annotations-file-url',
  // 'annotations-histogram',
  // 'annotations-animated',
  // 'annotations-heatmap',
  // 'differential-expression',
  // 'geometry-collinear',
  // 'layout-small',
  // 'layout-tabs',
  // 'brush',
  // 'ploidy-basic',
  // 'ploidy-rearrangements',
  // 'ploidy-recombination',
  // 'multiple-trio',
  // 'multiple-primates'
];

const specialTitles = {
  'homology-basic': 'Compare PAR'
};

function getPrevNextIndex(pageIndex, prevOrNext) {
  const numPages = pages.length;
  if (pageIndex === 0 && prevOrNext === 'prev') {
    console.log(numPages)
    return numPages - 1;
  } else if (pageIndex === numPages - 1 && prevOrNext === 'next') {
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
  const pageIndex = pages.indexOf(page);
  const prevIndex = getPrevNextIndex(pageIndex, 'prev');
  const nextIndex = getPrevNextIndex(pageIndex, 'next');
  const prevPage = pages[prevIndex];
  const nextPage = pages[nextIndex];

  return [prevPage, nextPage];
}

/**
 * Return the title of the page
 * 
 * If page has a special title -- titles that aren't trivial transformations
 * of the page name -- then return that (e.g. homology-basic -> Compare PAR).
 * If not, return the trivially transformed name (e.g. mouse -> Mouse).
 *
 * @param {String} page Name of page in slug form, e.g. 'human', 'multiple-primates'
 */
function getTitle(page) {
  const remainder = page.slice(1).replace(/-/g, ' ')
  const transformedName = page[0].toUpperCase() + remainder;
  return page in specialTitles ? specialTitles[page] : transformedName;
}

export default class Header extends Component {

  render() {
    const page = this.props.page;
    const title = getTitle(page);
    const [prevPage, nextPage] = getPrevNextPages(page);
    const sourceLink = `https://github.com/eweitz/ideogram-react/blob/gh-pages/${page}.html`;
    return (
      <header>
      <h1>{title} | Ideogram</h1>
      <a href="/ideogram">Overview</a> | {' '}
      <Link to={prevPage}>Previous</Link> |  {' '}
      <Link to={nextPage}>Next</Link> |  {' '}
      <Link to={sourceLink}>Source</Link> {' '}
      <Summary page={page}/>
      </header>
    )
  }
};