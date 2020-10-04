import React, { memo } from 'react'

import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'

//import RefreshIcon from '../../../assets/images/refresh.svg' 

import { CardPanelContentStyled, Item } from './style'

const navigatorHasShare = navigator.canShare

function Panel({ updateAt, onChange, data, country, getCovidData }) {
  //const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <Item>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </Item>
    </MenuItem>
  )

  const textCovid19 = `País: ${country}`

  const shareInfo = () => navigator.share({
    title: `Dados do Covid-19 - ${country}`,
    text: textCovid19,
    url: 'https://jb-covid-pwa.netlify.app'
  })

  const copyInfo = () => navigator.clipboard.writeText(textCovid19)

  const renderShareButton = (
    <div>
      <Button variant='contained' color='primary' onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant='contained' color='primary' onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">Dados do COVID-19</Typography> <br/>
          <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )

}

export default memo(Panel)