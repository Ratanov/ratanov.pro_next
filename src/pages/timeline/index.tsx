import TimelineItem from "../../features/timeline-item";
import timelineItems from "../../assets/json/timeline-items.json";
import MainLayout from "@/app/main-layout";
import "./timeline.css";

const Timeline = () =>
  timelineItems.length > 0 && (
    <MainLayout>
      <h2 className="text-center">Мой путь!</h2>
      <p className="text-center">
        Здесь расположена хронология моих профессиональных и творческих
        достижений.
      </p>
      <p className="text-center">
        Надеюсь, это побудит вас следовать за своей мечтой и сохранять победы,
        которых вы уже достигли на своем пути!
      </p>
      <div className="timeline-container">
        {timelineItems.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    </MainLayout>
  );

export default Timeline;
