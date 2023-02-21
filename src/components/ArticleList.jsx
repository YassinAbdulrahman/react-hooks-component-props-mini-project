
import Article from "./Article"

function ArticleList({ posts }) {
    let aboutItems= posts.map((post, index) => {
        return <Article title={post.title} data={post.date} preview={post.preview} key={index} />
    })
    return (
         <main>
            {aboutItems}
         </main>
    )
}

export default ArticleList