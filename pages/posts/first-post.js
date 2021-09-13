export default function FirstPost({json}) {
  return <h1>{json.id} {json.joke}</h1>
}

export async function getServerSideProps() {
  const res = await fetch(
    'https://icanhazdadjoke.com/',
    {
      headers: {
        'Accept': 'application/json'
      }  
    }
  )
  const json = await res.json()
  console.log(json)
  return {
    props: {
      json
    }
  }
}