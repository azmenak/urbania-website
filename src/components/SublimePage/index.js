import React from 'react';
import { Link } from 'react-router-dom';

import paths from '../../paths';
import Page from '../../components/Page';

import './styles.css';
import theme from '../../components/Main/theme.css';

export default () => (
  <Page>
    <div className={theme.layout}>
      <div>
        <h2>Specs</h2>

        <h3>Dimentions</h3>
        <dl>
          <div>
            <dt>Length</dt>
            <dd>1860mm (6'1¼")</dd>
          </div>
          <div>
            <dt>Width</dt>
            <dd>189mm (7½")</dd>
          </div>
          <div>
            <dt>Tickness</dt>
            <dd>19mm (¾")</dd>
          </div>
        </dl>

        <h3>Contruction</h3>
        <dl>
          <div>
            <dt>Top-Layer</dt>
            <dd>4mm dry sawn hardwood</dd>
          </div>
          <div>
            <dt>Core Material</dt>
            <dd>15mm Siberian Larch Plywood</dd>
          </div>
        </dl>

        <h3>Installation</h3>
        <dl>
          <div>
            <dt>Applications</dt>
            <dd>Glue or Nail</dd>
          </div>
        </dl>

        <h3>Technical Details</h3>
        <dl>
          <div>
            <dt>Moisture Content</dt>
            <dd>6-9%</dd>
          </div>
          <div>
            <dt>Assembly</dt>
            <dd>Precision tongue & groove</dd>
          </div>
          <div>
            <dt>Packaging</dt>
            <dd>Shrink wrapped boxes, 2.109m² (22.704ft²) per box</dd>
          </div>
        </dl>

        <div>
          <p><Link to={paths.LARCH}>More information about Siberian Larch</Link></p>
        </div>
      </div>
      <div>
        <h1>URBANIA Sublime Product Collection</h1>

        <p>At Urbania Flooring, urban style is our identity we embrace it and are guided by the zeitgeist of all that it means to be “Urban” in today’s modern world.</p>
        <p>We strive to create a product that will resonate within the design community; professionals as well as those with the talent and creativity to create their own beautiful spaces. The Sublime Collection features 10 unique floors, from the rich brown tones of double smoked White Oak to the luxurious surface textures created by manually scrapping and distressing one plank at a time, we are confident that the Urbania Sublime collection can be that indispensable resource at the heart of your design inspirations.</p>
        <p>The Sublime Collection stands alone in the market as a ¾″ thick, 6 foot long and 7.5 inch wide engineered plank, we feature a ⅙″ dry sawn wear layer that will stand the test of time. You have all the benefits of a solid flooring element with the stability only possible with the “Engineered in Germany” dry sawn cross grain construction.</p>
      </div>
    </div>
  </Page>
);
