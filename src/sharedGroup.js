import uniqueId from 'lodash/uniqueId';
import React from 'react';
import Sortable from 'react-sortablejs';

// Functional Component
const SharedGroup = ({ items }) => {
  items = items.map(val => (
    <li key={uniqueId()} data-id={val}>{val}</li>
  ));

  return (
    <Sortable options={{ group: 'shared' }} tag="ul">
      {items}
    </Sortable>
  );
};

export default SharedGroup;
