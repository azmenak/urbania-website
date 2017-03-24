import React from 'react';

import Page from '../../components/Page';

import crossGrain from '../../assets/images/features/cross-grain.png';
import precisionMilling from '../../assets/images/features/precision-milling.png';
import verticalGrain from '../../assets/images/features/vertical-grain.png';
import zeroEmissions from '../../assets/images/features/zero-emissions.png';
import performanceCoating from '../../assets/images/features/performance-coatings.png';
import woodWelding from '../../assets/images/features/wood-welding.png';
import wearLayer from '../../assets/images/features/wear-layer.png';
import moistureControl from '../../assets/images/features/moisture-control.png';

import classes from './styles.css';

export default () => (
  <Page>
    <h1>Features</h1>

    <p>Urbania Sublime Engineered Hardwood Floors are designed for The Discerning Wood Flooring Consumer who demands both uncompromising Form and Functionality.</p>
    <p>Urbania is proud to present a product line that is truly unique, one that is produced with the highest quality raw materials and processed on a state-of-the-art German- engineered precision manufactoring process. As a full 3⁄4” product, with a 7.5” width and a 6’ length, the Urbania Sublime collection is designed to perform in the most demanding environments. We take great pride in our attention to detail, our teams of product finishing specialists work on a plank-by-plank basis to craft a product of superior quality and enduring beauty.</p>
    <p>The finishes of the Urbania Sublime collection were chosen to be a tool in the hands of the Interior Design Professional as well as those individuals with the talent and creativity to create their own beautiful spaces. We strive to offer a foundational element within your design scheme that enables the creation of unique, harmonious and aesthetically pleasing interior environments and spaces.</p>

    <div className={classes.featuresContainer}>
      <div className={classes.feature}>
        <img
          alt="Cross Grain Contstruction"
          src={crossGrain}
        />
        <p>Balanced Hardwood-Softwood- Hardwood Cross Grain Construction provides optimum stability for new construction + superior nail down performance.</p>
      </div>
      <div className={classes.feature}>
        <img
          alt="Precision Milling"
          src={precisionMilling}
        />
        <p>A perfect fit. URBANIA products are produced on a state-of-the art German production line, milling defects common on solid wood flooring are eliminated.</p>
      </div>
      <div className={classes.feature}>
        <img
          alt="Vertical Grain"
          src={verticalGrain}
        />
        <p>The core is engineered to have tight wood grain with vertical orientation. This German innovation yields maximum stability.</p>
      </div>
      <div className={classes.feature}>
        <img
          alt="Zero Emissions"
          src={zeroEmissions}
        />
        <p>URBANIA floors are produced with environmentally responsible adhesives and coatings. All URBANIA products conform to CARB Phase 2 emission standards, the strictest in the USA.</p>
      </div>
      <div className={classes.feature}>
        <img
          alt="Performance Coatings"
          src={performanceCoating}
        />
        <p>Made-in-Germany coatings are used to ensure superior scratch resistance and gloss retention.</p>
      </div>
      <div className={classes.feature}>
        <img
          alt="Wood Welding"
          src={woodWelding}
        />
        <p>URBANIA floors are laminated with structural adhesives. Bonds are waterproof and guaranteed to last for life.</p>
      </div>
      <div className={classes.feature}>
        <img
          alt="Wear Layer"
          src={wearLayer}
        />
        <p>6 mm of Dry Sawn hardwood offers 100% of the service life of solid hardwood flooring.</p>
      </div>
      <div className={classes.feature}>
        <img
          alt="Moisture Control"
          src={moistureControl}
        />
        <p>Stringent moisture control during the manufacturing process ensures URBANIA Engineered Hardwood is optimized for installation in Canadian Climates and is resistant to environmental construction moisture from poured concrete, drywall mud and wet decks</p>
      </div>
    </div>
  </Page>
);
