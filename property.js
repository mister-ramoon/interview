require('./request-mock')
const { middleware } = require('./middleware')
const fetch = require('node-fetch')

async function findProperty (propertyId) {
  const response = await fetch(`https://www.example.org/property/${propertyId}`)
  const body = response.json()
  if (response.status >= 300) {
    throw new Error(`Property ${propertyId} not found`)
  }
  return body
}

exports.findProperty = middleware(findProperty)