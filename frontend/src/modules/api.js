const ENDPOINT_SPACEX = 'https://api.spacexdata.com/v2/launches'

export async function getLaunches() {
  const response = await fetch(ENDPOINT_SPACEX, {
    mode: "cors"
  })

  const json = await response.json()

  return json
}