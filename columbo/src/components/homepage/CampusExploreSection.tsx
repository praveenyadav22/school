const videos = [
  {
    src: 'https://www.youtube.com/embed/PInJ0Qwu80g',
    title: 'St Columbo Public School - Virtual Tour',
    caption: 'Explore St. Columbo Public School Through Our Virtual Tour',
  },
  {
    src: 'https://www.youtube.com/embed/5YSU6n8-ZWY',
    title: 'Annual Day 2k24-25 - Prakash - Swagatham Dance Performance',
    caption: 'Annual Day 2024-25 - Prakash - Musical Choir Performance #SCPS',
  },
];

export default function CampusExploreSection() {
  return (
    <div className="column_alignment section_wrapper">
      <div className="column_alignment main_content align_self_center">
        <span className="page_heading">
          Explore Our <b>Campus</b>
        </span>
        <div className="row_column_alignment two">
          {videos.map((video) => (
            <div key={video.src} className="column_alignment">
              <iframe
                style={{
                  borderRadius: 12,
                  margin: '12px 0',
                  width: '90%',
                  height: 300,
                  border: 'none',
                }}
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <span
                className="align_self_center"
                style={{ fontWeight: 500, textAlign: 'center', maxWidth: 400 }}
              >
                {video.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
