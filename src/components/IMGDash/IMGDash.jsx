import "./IMGDash.css";
import React, { useEffect, useState } from "react";

const IMGDash = ({plot_data, model_name}) => {
  const KEYS = [
    { key: "image", name: "Image" },
    { key: "overlaid_image_true", name: "Image by True Mask" },
    { key: "overlaid_image_pred", name: "Image by Pred Mask" },
    { key: "overlaid_mask", name: "Overlaid Masks" },
    { key: "true_mask", name: "True Mask" },
    { key: "predicted_mask", name: "Pred Mask" },
  ];
  const [dashData, setDashData] = useState(null);
  useEffect(() => {
    setDashData(plot_data);
  }, [plot_data]);
  
  const ceiledDecimal = (value) => {
    return Math.ceil(value * 100) / 100;
  };
  const openImage = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <section className="prediction-result">
      {dashData && (
        <div className="result-info">
          <h3 className="text-center">
            {model_name} segmented blood vessels at
            <span> {dashData["threshold"]}%</span> threshold <br />
            <span>{ceiledDecimal(dashData["iou_score"] * 100)}%</span> IOU
            score, and
            <span> {ceiledDecimal(dashData["dice_score"] * 100)}%</span> Dice
            score
          </h3>
        </div>
      )}

      <div className="image-gallery">
        {dashData &&
          KEYS.map((value, index) => (
            <div className="image-item" key={index}>
              <h4>{value.name}</h4>
              {dashData && (
                <img
                  src={dashData[value.key]}
                  alt="hupmap_image"
                  onClick={() => openImage(dashData[value.key])}
                />
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default IMGDash;
