import React from 'react';

import Page from '../../components/Page';

import classes from './styles.css';

export default () => (
  <Page>
    <h1>Standard Grades</h1>

    <p>URBANIA products are graded on a letter scale. As an example, ABC grade contains a mix of A, B and C product. Here is a general overview of what to expect with each grade:</p>
    <ul>
      <li>AB — All knots tight and filled, max of 10mm, with minimal colour variation.</li>
      <li>ABC — All knots tight and filled, colour variation is not a defect.</li>
      <li>ABCD — Knots and cracks will be filled, allows for large amount of colour variation.</li>
    </ul>

    <h2>Comprehensive Grade Description</h2>

    <table>
      <thead>
        <tr>
          <th>Defect Type</th>
          <th>A</th>
          <th>AB</th>
          <th>ABC</th>
          <th>ACBD</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Smooth tight knots</th>
          <td>10mm max</td>
          <td>20mm max</td>
          <td>40mm max</td>
          <td>Allowed tight cracked</td>
        </tr>
        <tr>
          <th>Dead knots</th>
          <td>5mm max</td>
          <td>10mm max</td>
          <td>30mm max, no drop-off</td>
          <td>No limits, must be filled</td>
        </tr>
        <tr>
          <th>Open Knots</th>
          <td>5mm max, filled</td>
          <td>10mm max, filled</td>
          <td>20mm max, filled</td>
          <td>30mm max, filled</td>
        </tr>
        <tr>
          <th>Pin knots</th>
          <td>None allowed</td>
          <td>Allowed 2/board</td>
          <td>Allowed 3/board</td>
          <td>No limits</td>
        </tr>
        <tr>
          <th>Ring shake</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>End cracks</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>Surface cracks</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>Smooth tight burls</th>
          <td>None allowed</td>
          <td>10% of length allowed</td>
          <td>Unlimited</td>
          <td>Unlimited</td>
        </tr>
        <tr>
          <th>Holes</th>
          <td>None allowed</td>
          <td>2mm max, 3 well filled/meter</td>
          <td>None allowed</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>Bark Pockets</th>
          <td>20mm by 1.5mm max</td>
          <td>30mm by 3mm max</td>
          <td>40mm by 5mm max</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>Sticks</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>Light</td>
          <td>Light</td>
        </tr>
        <tr>
          <th>Edge breakage</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
        </tr>
        <tr>
          <th>Corner breakage</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
        </tr>
        <tr>
          <th>Rot</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>None allowed</td>
        </tr>
        <tr>
          <th>Mineral streaks</th>
          <td>None allowed</td>
          <td>Allowed</td>
          <td>Allowed</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>Stain</th>
          <td>Must blend with finished color</td>
          <td>Must blend with finished color</td>
          <td>Must blend with finished color</td>
          <td>Must blend with finished color</td>
        </tr>
        <tr>
          <th>Heartwood pith</th>
          <td>None allowed</td>
          <td>Allowed</td>
          <td>Allowed</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>Sapwood</th>
          <td>None allowed</td>
          <td>15% of width allowed</td>
          <td>Allowed</td>
          <td>Allowed</td>
        </tr>
        <tr>
          <th>Natural grain patterns</th>
          <td>Regular grain</td>
          <td>Allowed for any non-defects in grain</td>
          <td>Allowed for any non-defects in grain</td>
          <td>Allowed for any non-defects in grain</td>
        </tr>
        <tr>
          <th>Water mark</th>
          <td>None allowed</td>
          <td>None allowed</td>
          <td>Non-obvious dark marks</td>
          <td>Non-obvious dark marks</td>
        </tr>
        <tr>
          <th>Color change</th>
          <td>None allowed</td>
          <td>Slight chemical change</td>
          <td>Non-heavy chemical change</td>
          <td>Non-heavy chemical change</td>
        </tr>
        <tr>
          <th>Heartwood pith</th>
          <td>Natural color variations</td>
          <td>Non-obvious color variations</td>
          <td>Non-extreme color variations</td>
          <td>All color variation</td>
        </tr>
      </tbody>
    </table>

    <h2 className={classes.topMargin}>Manufacturing Defects</h2>
    <p>URBANIA production standards also <strong>DO NOT</strong> allow for the following manufacturing defects across all grades:</p>

    <ul className={classes.columns}>
      <li>Rough or shelly grain</li>
      <li>Hull outs</li>
      <li>Indents</li>
      <li>Shake</li>
      <li>Edge splintering</li>
      <li>Crushed grooved</li>
      <li>Mismanufacture</li>
      <li>UV and sander lines</li>
      <li>UV and stain skips</li>
      <li>Filler and UV build-up on edges and ends</li>
      <li>Trash in finish and filer pop</li>
      <li>Orange peel</li>
      <li>Chatter</li>
      <li>Bleed back</li>
      <li>Sander burns</li>
      <li>Rough sanding</li>
      <li>Brush marks</li>
      <li>White grain</li>
      <li>Dark/light ends</li>
    </ul>
  </Page>
);
