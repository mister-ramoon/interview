require('./request-mock')
const { middleware } = require('./middleware')
const fetch = require('node-fetch')

async function findProperty (propertyId) {
  console.log(propertyId)
  const response = await fetch(`https://www.example.org/property/${propertyId}`)
  const body = response.json()
  if (response.status >= 300) {
    throw new Error(body.error)
  }
  return body
}

exports.findProperty = middleware(findProperty)