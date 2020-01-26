import React from 'react';

export default function Summary(props) {
  const summaries = {
    'human':
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
      </div>,
    'mouse':
      <div>
        <p>A mouse genome, with each chromosome rendered horizontally.</p>
      </div>,
    'eukaryotes':
      <div>
        Ideogram.js can display the genome of any hundreds of organisms, {' '}
        using data from <a href="https://www.ncbi.nlm.nih.gov/assembly">NCBI Assembly</a>.
      </div>,
    'orthologs':
      <div>
        <p>Compare gene locations across organisms.</p>
      </div>,
    'homology-basic':
      <div>
        <p>
          Pseudoautosomal regions (PAR) are the only parts of chromosomes X and Y
          that typically undergo genetic recombination.  PAR1 and PAR2 are depicted
          below.  See also <a href="homology-advanced">Compare, structure</a>.
        </p>
      </div>,
    'homology-advanced':
      <div>
        <p>
          Large-scale insertions, deletions, and inversions are represented below.
          Focus on a particular large variation by clicking or hovering over a colored region.
        </p>
      </div>,
    'annotations-basic':
      <div>
        <p>
          The location of <a href="https://www.ncbi.nlm.nih.gov/gene/672">BRCA1</a> is depicted here in red.
        </p>
      </div>,
    'annotations-overlaid':
      <div>
        <p>
          Large-scale structural variations (SVs) can be depicted using colored overlays, as seen below.
        </p>
      </div>,
    'annotations-tracks':
      <div>
        <p>
          1000 <a href="https://github.com/eweitz/ideogram/blob/ca64a3c51e1b5ecaae89d2422ffc408565743644/scripts/create_annots.py#L68">
          randomly generated</a> SNVs across the human genome. 
          See also <a href="annotations-track-filters">Annotations, track filters</a>.
        </p>
      </div>,
    'annotations-external-data':
      <div>
        <p>
          The <a href="https://www.acmg.net/">American College of Medical Genetics and
          Genomics</a> (ACMG) recommends that laboratories performing clinical
          sequencing seek and report certain mutations in
          <a href="https://www.ncbi.nlm.nih.gov/clinvar/docs/acmg/">the genes depicted
          here.</a>
        </p>
      </div>,
    'annotations-file-url':
      <div>
        <p>
          Load a BED file by specifying its URL, and see genome-wide data.
          <a href="?asm=GRCh37&annotsUrl=https://raw.githubusercontent.com/NCBI-Hackathons/Scan2CNV/master/files/201113910010_R08C02.PennCnvOut.bed">Example</a>.
        </p>
      </div>,
    'annotations-histogram':
      <div>
        <p>
          Distribution of all human genes throughout the genome.
          Filter all 20,000+ genes in &lt; 100 milliseconds below.
          For a richer example, see <a href="differential-expression">Differential expression</a>.
        </p>
      </div>,
    'annotations-animated':
      <div>
        <p>
          See genome-wide transitions in expression over time.
          Below, changes in gene expression in mouse lung tissue over two years, in three influenza dosage cohorts.
        </p>
      </div>,
    'annotations-heatmap':
      <div>
        <p>
          All human genes, annotated in heatmaps.  The proximal heatmap for each chromosome shows gene distribution
          by expression.  The distal heatmap shows gene distribution by type.
        </p>
      </div>,
    'differential-expression':
      <div>
        <p>

        </p>
      </div>,
    'geometry-collinear':
      <div>
        <p>
          Gene expression in four <a href="https://en.wikipedia.org/wiki/Oligodendroglioma">brain cancer</a>
          samples, showing 1p and 19q deletions.  
          Data from <a href="https://github.com/broadinstitute/inferCNV">inferCNV</a>.  
          Unlike the
          <a href="annotations-heatmap.html">parallel arrangement</a>, this ideogram is
          collinear -- the chromosomes form a line together.
        </p>
      </div>,
    'layout-small':
      <div>
        <p>
        The small ideogram inset at left is an example of chromosome graphics surrounded by other content.  Instead of meaningless "Lorem ipsum" placeholder text, here is some background on the human reference genome assembly this ideogram depicts.
        </p>
        <p>
        "In 2004, the Human Genome Project (HGP) published a finished version (Build35) of the human genome assembly (1). This was a major accomplishment that represented over a decade of effort by more than a dozen institutions and resulted in the highest quality vertebrate genome ever produced and a new tool for understanding human biology. Despite this achievement, a limited number of gaps, sequence and tiling path errors remained in the reference assembly. Thus, at the conclusion of the HGP and the release of their final assembly version (Build36 (UCSC name: hg18)), the GRC was conceived as a mechanism for continued stewardship and improvement of the human reference assembly."
        </p>
        <p>
        "In 2009, the GRC produced an updated human assembly (GRCh37 (UCSC name: hg19))."  And in 2013, it produced the current major version of the human reference genome assembly, GRCh38.
        </p>
      </div>,
    'layout-tabs':
      <div>
      </div>,
    'brush':
      <div>
        <p>

        </p>
      </div>,
    'ploidy-basic':
      <div>
        <p>
          This diploid genome shows maternal ("M") and paternal ("P") chromosomes of
          a karyotypically normal human female (46,XX).
        </p>
      </div>,
    'ploidy-rearrangements':
      <div>
        <p>
          This triploid banana genome is a hybrid of
          <i>Musa acuminata</i> ("A") and <i>Musa balbisiana</i> ("B").
          <br/>
          Chromosomal rearrangements shown below include:
          <ul>
            <li>Arm gained in a copy of chromosome 1</li>
            <li>Arm lost in a copy of chromosome 2</li>
          </ul>
        </p>
      </div>,
    'ploidy-recombination':
      <div>
        <p>
          This triploid banana genome is a hybrid of
          <i>Musa acuminata</i> ("A") and <i>Musa balbisiana</i> ("B").
          <br/>
          Recombination events shown below include:<br/>
          <ul>
            <li>Gene conversion in a copy of chromosome 1</li>
            <li>Double crossover in copies of chromosome 2</li>
          </ul>
        </p>
      </div>,
    'multiple-trio':
      <div>
        <p>
          Three diploid human genomes: a female, a male, and another male.
          See also <a href="multiple-trio-sv">Multiple, trio SV</a>.
        </p>
      </div>,
    'multiple-primates':
      <div>
        <p>
          Two genes are annotated on each genome below: APOB (red) and CTLA4 (blue).
          Their locations give evidence of ancient chromosome fusions and shared
          evolutionary origin.
        </p>
      </div>,
  };
  return summaries[props.page];
};