import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Cristian Ceballos",
    role: "Software Developer",
    stack: "Java / Bootstrap / WCP",
    image:
      "https://ceballos25.github.io/card-bootstrap-cristian-ceballos/img/cristian-ceballos.png",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Fabian Beltran",
    role: "Backend Developer",
    stack: "Node / API",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Camilo Castellanos",
    role: "Backend Developer",
    stack: "Java / Bootstrap / Spring Boot",
    image: "https://avatars.githubusercontent.com/u/113156319?v=4",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Hernan Vasquez",
    role: "Project Manager",
    stack: "Scrum",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Mario Buendía",
    role: "DevOps Engineer",
    stack: "AWS / Docker / CI/CD",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    github: "#",
    linkedin: "#",
  },
];

const SwiperAbout = () => {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
      className="team-swiper"
    >
      {teamMembers.map((member, i) => (
        <SwiperSlide key={i}>
          <div className="card h-100 border-0 shadow-sm">
            <div className="row g-0">
              <div className="col-4">
                <img
                  src={member.image}
                  className="img-fluid rounded-start w-100 h-100"
                  alt={member.name}
                  style={{ objectFit: "cover", minHeight: "180px" }}
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.name}</h5>
                  <p className="card-text text-success fw-semibold mb-1">
                    {member.role}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{member.stack}</small>
                  </p>
                  <div className="d-flex gap-2">
                    <a href={member.github} className="text-dark">
                      <i className="bi bi-github fs-5"></i>
                    </a>
                    <a href={member.linkedin} className="text-dark">
                      <i className="bi bi-linkedin fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-pagination mt-4"></div>
    </Swiper>
  );
};

export default SwiperAbout;
