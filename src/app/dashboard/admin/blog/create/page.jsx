"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function CreateBlog() {
  // states
  const [loading, setLoading] = useState(false);

  // return jsx / blog create form
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead">Create Blog</p>

          <label className="text-secondary">Blog title</label>
          <input type="text" value="" className="form-control p-2 my-2" />

          <label className="text-secondary">Blog content</label>
          <ReactQuill className="border rounded my-2" />

          <label className="text-secondary">Blog category</label>
          <input type="text" value="" className="form-control p-2 my-2" />

          {/* {image && (
            <img src={image} alt="preview image" style={{ width: "100px" }} />
          )} */}

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary">
              <label className="mt-2 pointer" htmlFor="upload-button">
                {loading ? "Uploading..." : "Upload image"}
              </label>
              <input id="upload-button" type="file" accept="image/*" hidden />
            </button>

            <button className="btn bg-primary text-light" disabled={loading}>
              Save
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
