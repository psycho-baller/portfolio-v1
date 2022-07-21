interface EmbedProps {
  embedId: string;
  width: string;
  height: string;
}

const YoutubeEmbed = (props: EmbedProps) => (
  <div className="video-responsive">
    <iframe
      width={props.width}
      height={props.height}
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
