import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.parcel";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./Resume.scss";

import pdfFile from "../../assets/resume/Resume083121.pdf";

export default function Resume() {
  return (
    <object
      pdfview
      className="resumeContainer"
      data={pdfFile}
      width="800"
      height="800">
      Not supported
    </object>
  );
}
