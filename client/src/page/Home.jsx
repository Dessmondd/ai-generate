import { useEffect, useState } from 'react';


const RenderCards = ({data, title}) => {
    if (data){
        return(
            data.map((post) => <Card key={post.id} {...post}/>) 
        )
    }
}
const Home = () => {

        const [loading, setLoading] = useState(false);
        const [allPosts, setAllPosts] = useState();
    
  return (
        <section className="max-w-7xl mx-auto">
            <div>
            <h1 className="font-extrabold text-[#222328] text-[32px]">
                AI Examples
            </h1>
            <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
                Browse around a collection of images created by an AI.
            </p>
            </div>
        </section>
  )
}




