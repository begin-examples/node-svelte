exports.handler = async function http () {
  console.log('API Called')
  return {
    type: 'application/json',
    body: JSON.stringify({
      msg: 'Hello from your API'
    })
  }
}
