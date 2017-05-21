/* global Blob */
'use strict';

import { PDFRenderer, createElement } from './renderer';
import StyleSheet from './stylesheet';

const View = 'VIEW';
const Text = 'TEXT';
const Page = 'PAGE';
const Document = 'DOCUMENT';

const pdf = input => {
  async function parse(input) {
    return input.render();
  }

  async function toBlob() {
    const render = await parse(input);

    return new Blob([render], {
      type: 'application/pdf',
    });
  }

  async function toBuffer() {
    const render = await parse(input);
    return new Buffer(render);
  }

  async function toString() {
    const render = await parse(input);

    return render;
  }

  return {
    toBuffer,
    toBlob,
    toString,
  };
};

export {
  PDFRenderer,
  View,
  Text,
  Page,
  Document,
  StyleSheet,
  createElement,
  pdf,
};
