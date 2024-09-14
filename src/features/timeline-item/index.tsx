import "./timeline-item.css";

type Props = {
  data: {
    text: string;
    date: string;
    category: { tag: string; color: string };
    link: { url: string; text: string };
    img?: { url: string; alt: string };
    video?: { url: string; type: string };
  };
};

const TimelineItem: React.FC<Props> = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item__content">
      <div className="timeline-item__header">
        <time>{data.date}</time>
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
      </div>

      {/* <p>{data.text}</p> */}
      {data.link && (
        <a className="timeline-item__title" href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.text}
        </a>
      )}

      {data.img && (
        <img
          className="timeline-item__img"
          src={data.img.url}
          alt={data.img.alt}
        />
      )}

      {data.video && (
        <video width="100%" controls={true}>
          <source src={data.video.url} type={data.video.type} />
        </video>
      )}

      {/* {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )} */}
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;
