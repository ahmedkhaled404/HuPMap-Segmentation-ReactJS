import "./HomePage.css";
import React from "react";
import about_image from "../../assets/image/home_about.jpg";
import TeamDash from "../../components/TeamDash/TeamDash";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end m-auto"
                  src={about_image}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">Goal of the Competition</h1>
              <p>
                The goal of this competition is to segment instances of
                microvascular structures, including capillaries, arterioles, and
                venules. You'll create a model trained on 2D PAS-stained
                histology images from healthy human kidney tissue slides. Your
                help in automating the segmentation of microvasculature
                structures will improve researchers' understanding of how the
                blood vessels are arranged in human tissues.
              </p>

              <h1 className="mb-4">Overview of Blood Vasculature</h1>
              <p className="mb-4">
                Large arteries bringing oxygenated blood into organs or tissues
                branch into smaller and smaller structures, until they are
                considered arterioles. The arterioles continue to branch into
                capillary networks. Capillaries, ~8-10 μm in diameter, are tiny
                tube-shaped structures comprised of a thin wall of endothelial
                cells. This wall is thin enough that oxygen, from red blood
                cells, and nutrients are able to cross into the surrounding
                tissues. Capillaries convalesce into venules which carry oxygen
                and nutrient deficient blood out of a system. The venules
                continue to join into larger and larger structures called veins.
                This competition focuses on microvasculature in the kidney,
                including arterioles, capillaries and venules. Larger vessels
                structures, i.e. arteries and veins, were not segmented in this
                dataset.
              </p>
              <a
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                href="https://www.kaggle.com/competitions/hubmap-hacking-the-human-vasculature"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TeamDash />
      </div>
    </div>
  );
};

export default HomePage;
