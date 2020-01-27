import React from 'react'
import Table from '../shared/Table';
import TableHeaderCell from '../styled/TableHeaderCell';
import TableCell from '../styled/TableCell';
import { levenshteinDistance } from '../../utils';

const findDuplicates = (emails) => {
  let emailFrequencyMap = {}

  for (let i = 0; i < emails.length; i++) {
    let toAdd = []
    for (let j = 0; j < i; j++) {
      const distance = levenshteinDistance(emails[i], emails[j])

      if (distance <= 2) {
        toAdd.push(emails[j])
      }

    }
    emailFrequencyMap[emails[i]] = toAdd
  }
  
  return emailFrequencyMap
}

const Header = () => (
  <tr>
    <TableHeaderCell>Email</TableHeaderCell>
    <TableHeaderCell>Possible Duplicates</TableHeaderCell>
  </tr>
)

const Body = (props) => {
  const duplicates = props.duplicates
  let duplicatesArr = []

  for (let key in duplicates) {
    if (duplicates[key].length) {
      duplicatesArr.push(
        <tr key={key}>
          <TableCell>{key}</TableCell>
          <TableCell>{duplicates[key].join('\n')}</TableCell>
        </tr>
      );
    }
  }

  return duplicatesArr;
}

const DuplicateModal = (props) => {
  const calculatedDuplicates = findDuplicates(props.emails)

  return <Table header={<Header />} body={<Body duplicates={calculatedDuplicates} />} />;
}

export default DuplicateModal