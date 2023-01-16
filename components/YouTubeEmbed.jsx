
const YouTubeEmbed = ({embedId}) => {
  return (
    <div className="aspect-w-3 aspect-h-2" >
       <iframe 
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
       />
    </div>
  )
}

export default YouTubeEmbed