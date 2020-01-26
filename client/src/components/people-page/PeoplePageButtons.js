import React from 'react'
import PrimaryButton from '../styled/PrimaryButton';

const PageButtons = (props) => {
  const { data, updatePage } = props
  const pages = data.paging
  const itemStyling = {
    fontSize: 16,
    margin: "0 5px",
    display: "inline"
  }

  return (
    <div style={{ marginTop: 10, textAlign: 'center' }}>
      <PrimaryButton onClick={() => updatePage(1)} disabled={pages.current_page === 1}>{"<< First Page"}</PrimaryButton>
      <PrimaryButton onClick={() => updatePage(pages.prev_page)} disabled={!pages.prev_page}>{"< Previous Page"}</PrimaryButton>
      <p style={itemStyling}>{`Page ${pages.current_page}`}</p>
      <PrimaryButton onClick={() => updatePage(pages.next_page)} disabled={!pages.next_page}>{"Next Page >"}</PrimaryButton>
      <PrimaryButton onClick={() => updatePage(pages.total_pages)} disabled={pages.current_page === pages.total_pages}>{"Last Page >>"}</PrimaryButton>
    </div>
  )
}

export default PageButtons;