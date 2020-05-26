const nock = require('nock')

const properties = [
  {
    id: 1,
    name: '1425 Hudson Street #9G/907',
    city: 'Hoboken',
    state: 'NJ',
    price: '$3,059,995'
  },
  {
    id: 2,
    error: 'Not found'
  },
  {
    id: 3,
    name: '15 East 30th Street #17A',
    city: 'New York',
    state: 'NY',
    price: '$1,480,000'
  },
  {
    id: 4,
    name: '11 Hoyt Street #22H',
    city: 'New York',
    state: 'NY',
    price: '$2,485,000'
  },
  {
    id: 5,
    error: 'Not found'
  }
]

properties.forEach(({ id, ...property }) => 
  nock('https://www.example.org')
    .persist()
    .get(`/property/${id}`)
    .delayBody(Math.round(Math.random() * 2000))
    .reply(property.error ? 404 : 200, property)
)