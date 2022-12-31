import React from "react";
import "./Photo.css";

export default function Photos(props) {
  console.log(props.photo);

  if (props.photo) {
    return (
      <section className="photos">
        <div className="row">
          {props.photo.map(function (photo, index) {
            console.log(photo);
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  {" "}
                  <img src={photo.src.landscape} className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
