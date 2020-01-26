import React from 'react';
import Table from '../shared/Table';
import TableHeaderCell from '../styled/TableHeaderCell';
import TableCell from '../styled/TableCell';

const calculateFrequencies = emails => {
  let frequencyMap = {};
  let sortedFrequencyMap = {};

  emails.map(email => {
    [...email].forEach(c => {
      frequencyMap[c] = frequencyMap[c] + 1 || 1;
    });
  });

  Object.keys(frequencyMap)
    .sort((a, b) => frequencyMap[b] - frequencyMap[a])
    .map(item => (sortedFrequencyMap[item] = frequencyMap[item]));

  return sortedFrequencyMap;
};

const Header = () => (
  <tr>
    <TableHeaderCell>Letter</TableHeaderCell>
    <TableHeaderCell>Count</TableHeaderCell>
  </tr>
);

const Body = props => {
  const counts = props.counts;
  let counts_arr = [];

  for (let key in counts) {
    counts_arr.push(
      <tr key={key}>
        <TableCell>{key}</TableCell>
        <TableCell>{counts[key]}</TableCell>
      </tr>
    );
  }
  return counts_arr;
};

const FrequencyContent = props => {
  const frequencyMap = calculateFrequencies(props.emails);

  return <Table header={<Header />} body={<Body counts={frequencyMap} />} />;
};

export default FrequencyContent;
