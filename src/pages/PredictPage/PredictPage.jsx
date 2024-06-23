import "./PredictPage.css";
import axios from "axios";
import React, { useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { FaCloudUploadAlt } from "react-icons/fa";
import IMGDash from "../../components/IMGDash/IMGDash";
import Spinner from "../../components/Spinner/Spinner";
import background_video from "../../assets/video/HuPMap.mp4";

const PredictPage = () => {
  const models = [
    { name: "Unet", api: "unet" },
    { name: "Scratch Unet", api: "unet_scratch" },
    { name: "Linknet", api: "linknet" },
    { name: "FCN", api: "fcn" },
    { name: "Ensemble", api: "ensemble" },
  ];
  const [configs, setConfigs] = useState({
    HOST: "localhost",
    PORT: "6100",
    METHOD: models[0].api,
  });
  const [predictData, setPredictData] = useState({
    response: null,
    image: null,
    mask: null,
    loading: false,
    err: false,
  });

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length !== 2) return;

    setPredictData({
      ...predictData,
      image: files[0] || null,
      mask: files[1] || null,
    });
    console.log(`image:, ${files[0].name}, mask: ${files[1].name}`);
  };
  const onSubmit = async () => {
    try {
      if (!predictData.image || !predictData.mask) {
        alert("Hey, Two files are required.");
        return;
      }
      if (predictData.loading) {
        return;
      }

      const formData = new FormData();
      formData.append("image", predictData.image);
      formData.append("mask", predictData.mask);

      setPredictData({ ...predictData, loading: true });
      const response = await axios.post(
        `http://${configs.HOST}:${configs.PORT}/predict/${configs.METHOD}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPredictData({ ...predictData, loading: false, response: response });
    } catch (err) {
      setPredictData({ ...predictData, loading: false, err: err });
      alert(err.message);
    }
  };
  const reset_predictData = () => {
    setPredictData({ ...predictData, image: null, mask: null, response: null });
  };

  return (
    <div className="predict-page">
      <div className="video-container">
        <video autoPlay muted loop id="video-background">
          <source src={background_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {!predictData.response && (
        <section className="form">
          <div className="form-box">
            <h2 className="mb-3">
              <FaCloudUploadAlt /> Segmentation
            </h2>
            <div className="selectBox mb-2">
              <select
                value={configs.METHOD}
                onChange={(e) =>
                  setConfigs({ ...configs, METHOD: e.target.value })
                }
              >
                {models.map((model, index) => (
                  <option key={index} value={model.api}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputBox">
              <input
                type="file"
                name="file"
                title="Select files"
                onChange={handleFileChange}
                multiple
              />
              <i></i>
            </div>
            <button
              type="button"
              className="btn-create"
              onClick={onSubmit}
              disabled={predictData.loading}
            >
              Upload
            </button>
          </div>
          {predictData.loading && <Spinner />}
        </section>
      )}
      {predictData.response && (
        <IMGDash
          plot_data={predictData.response.data}
          model_name={
            models.filter((value) => value.api === configs.METHOD)[0].name
          }
        />
      )}
      {predictData.response && (
        <button
          type="button"
          className="btn btn-warning mt-2"
          onClick={() => {
            reset_predictData();
          }}
        >
          <GiReturnArrow /> Upload Image
        </button>
      )}
    </div>
  );
};

export default PredictPage;
