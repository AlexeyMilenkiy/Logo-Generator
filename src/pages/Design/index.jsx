import React from "react";
import DesignMockup from "../../components/DesignMockup";
import jszip from "jszip";

import "./style.scss";

const createFiles = async (b64svgs, canvasRef, linkRef, fileName) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  const zip = new jszip();

  b64svgs.forEach((item, i) =>
    zip.file(`${fileName}${i}.svg`, item, { base64: true })
  );
  const pngImages = b64svgs.map((item, i) => {
    const image = new Image();
    image.src = "data:image/svg+xml;base64," + item;

    return new Promise(resolve => {
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
        resolve(
          canvas.toDataURL("image/png").replace("data:image/png;base64,", "")
        );
      };
    });
  });

  const pngs = await Promise.all(pngImages);
  pngs.forEach((item, i) =>
    zip.file(`${fileName}${i}.png`, item, { base64: true })
  );

  const content = await zip.generateAsync({ type: "blob" });
  if (linkRef.current) {
    const reader = new FileReader();
    reader.onload = () => {
      linkRef.current.href = 'data:application/zip;base64,' + btoa(reader.result.toString());
    };
    reader.readAsBinaryString(content);
  }
};

function Design({ companyName, companyColor }) {
  const name = companyName || window.localStorage.getItem("companyName") || 'No Text';
  const color = companyColor || window.localStorage.getItem("companyColor") || '#000000';
  const textArr = name.split(" ");
  const canvasRef = React.createRef();
  const linkRef = React.createRef();
  const listItems = [
    [
      {
        styles: { fontWeight: "bold", textTransform: "capitalize" },
        text: name
      }
    ],
    [
      {
        styles: { fontWeight: "bold", textTransform: "lovercase" },
        text: name
      }
    ],
    [
      {
        styles: { fontWeight: "bold", textTransform: "uppercase" },
        text: name
      }
    ],
    textArr.map((text, i) => ({
      styles: {
        fontWeight: i % 2 ? "normal" : "bold"
      },
      text:
        text
          .toLowerCase()
          .charAt(0)
          .toUpperCase() + text.toLowerCase().substring(1)
    })),
    textArr.map((text, i) => ({
      styles: {
        fontWeight: i % 2 ? "bold" : "normal"
      },
      text:
        text
          .toLowerCase()
          .charAt(0)
          .toUpperCase() + text.toLowerCase().substring(1)
    }))
  ];

  const arr = [];
  const setRef = input => {
    arr.push(input);
    if (arr.length === listItems.length) {
      const texts = arr.map(i =>
        btoa(unescape(encodeURIComponent('<?xml version="1.0" standalone="no"?>\r\n' + i.outerHTML)))
      );
      createFiles(texts, canvasRef, linkRef, name);
    }
  };

  const listCards = listItems.map((item, i) => {
    return (
      <DesignMockup
        ref={setRef}
        key={i}
        style={item}
        element={item}
        bgColor={color}
      />
    );
  });

  return (
    <div className="Design">
      <canvas
        style={{ display: "none" }}
        ref={canvasRef}
        height="210"
        width="336"
      >''</canvas>
      <a
        href="/"
        style={{ display: "none" }}
        ref={linkRef} download="logos.zip"
      >
        ''
      </a>
      <div className="default-container">
        <span className="default-headline">
          Let’s figure out your style next
        </span>
        <span className="default-tagline">
          Choose a style that suits your logo
        </span>
      </div>
      <div className="Design__list">{listCards}</div>
      <button
        onClick={() => {
          linkRef.current.click();
        }}
        className="default-btn"
      >
        GENERATE LOGO
      </button>
    </div>
  );
}

export default Design;
