
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const output = await res.json()

    return {
        props : {
            apiDatas : output
        }
    }
}


function StaticPost({ apiDatas }) {
  return (
    <div>
        <h1>Static Page with SSG : Static site generation</h1>
        {apiDatas.map( (apiData) => (
            <div key={apiData.id}>
                <h2>Title: {apiData.title}</h2>
                <p>Body: {apiData.body}</p>
            </div>
        ))}
    </div>
  )
}

export default StaticPost