import React from "react";
import { API } from "../../backend";

const Imagehelper = ({ product }) => {
  const imgageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1350441335.jpg`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imgageurl}
        alt="error"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};
export default Imagehelper;
