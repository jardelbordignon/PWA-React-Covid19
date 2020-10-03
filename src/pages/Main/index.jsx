import React, { memo, useState, useCallback, useEffect } from 'react'

import Board from './mainComponents/Board'
import Panel from './mainComponents/Panel'
import Api from '../../services/apiCovid'
import { Container } from './style'

function Main() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback(country => {
    Api.getCountry(country).then(data => setData(data))
  }, [])

  useEffect(() => getCovidData(country), [getCovidData, country])
  
  const onChangeHandler = ({target}) => setCountry(target.value)

  return (
    <Container>
      <div className='mb-2'>
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={onChangeHandler}
          country={country}
          getCovidData={getCovidData} />
      </div>

      <Board data={data} />
    </Container>
  )
  
}

export default memo(Main)