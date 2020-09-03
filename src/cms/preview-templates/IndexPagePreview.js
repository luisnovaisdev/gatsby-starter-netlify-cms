import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  console.log(entry.toJS())
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        banners={data.banners}
        weare={data.weare}
        image={getAsset(data.image)}
        title={data.title}
        whychooseus={data.whychooseus}
        ourvision={data.ourvision}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
