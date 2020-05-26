let parallel = 0

const log = parallel => {
  console.log('Parallel: ', parallel)
}
const middleware = func => async (id) => {
  log(++parallel)
  try {
    const result = await func(id)
    log(--parallel)
    return result
  } catch (error) {
    log(--parallel)
    throw error
  }
}

module.exports = {
  middleware
}