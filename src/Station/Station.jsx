import React from 'react';
import s from './Station.module.scss';

const Station = () => {
  return (
    <>
      <section className={s.station}>
        <div className="container">
          {/* Фоновое видео */}
          <div className={s.videoWrapper}>
            <video
              className={s.videoBackground}
              autoPlay
              loop
              muted
              playsInline
              src="./oybek.mp4"
              type="video/mp4"
            />
          </div>

          <div className={s.oybek}>
            <div className={s.text}>
              <h3>История станции метро "Ойбек"</h3>
              <p>
                Станция метро "Ойбек" - одна из самых известных станций Ташкентского
                метрополитена. Она была открыта 8 декабря 1984 года в составе первого
                участка Узбекистанской линии, соединившей станции "Алишера Навои" и "Ташкент".
              </p>
              <h4>Особенности:</h4>
              <ul>
                <li>Колонный тип: Станция построена по колонному типу, что характерно для многих станций Ташкентского метро.</li>
                  <li>Подробное описание: Вы можете найти более подробную информацию о станции "Ойбек" на сайте Ташкентского метрополитена.</li>
                <li>История Ташкентского метрополитена</li>
              </ul>
              
            </div>
            <div className={s.image}>
              <img src="./metro-oybek.jpg" alt="Метро Ойбек" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Station;
