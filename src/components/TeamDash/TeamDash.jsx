import "./TeamDash.css"
import React from "react";
import ahmed_khaled from "../../assets/image/ahmed_khaled.jpg";
import tamer_ashraf from "../../assets/image/tamer_ashraf.jpg";
import ahmed_maher from "../../assets/image/ahmed_maher.jpg";
import omar_khaled from "../../assets/image/omar_khaled.jpg";
import norhan_awad from "../../assets/image/norhan_awad.jpg";


const TeamDash = () => {
  const team_members = [
    { name: "Ahmed Khaled", path: ahmed_khaled },
    { name: "Ahmed Maher", path: ahmed_maher },
    { name: "Tamer Ashraf", path: tamer_ashraf },
    { name: "Omar Khaled", path: omar_khaled },
    { name: "Norhan Awad", path: norhan_awad },
  ];

  return (
    <div className="team-info">
      <h2 className="mb-4">
        Meet Our <span className="span-blue">Team</span>
      </h2>
      <div className="box">
        {team_members.map((value, index) => (
          <div className="card" key={index}>
            <div className="imgBx">
              <img src={value.path} alt="images" />
            </div>
            <div className="details">
              <h2>
                {value.name}
                <br />
                <span>Software Engineer</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDash;
