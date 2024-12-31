"use client";
import { useState } from "react";

export default function ImageForm() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result as string);
          setSuccessMessage("Image uploaded successfully!");
          setWarningMessage("");
        };
        reader.readAsDataURL(file);
      } else {
        setImageSrc(null);
        setWarningMessage("Please upload a valid image file.");
        setSuccessMessage("");
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {successMessage && <p className="success">{successMessage}</p>}
      {warningMessage && <p className="error">{warningMessage}</p>}
      {imageSrc && (
        <img
          style={{ border: "1px solid white" }}
          src={imageSrc}
          alt="Uploaded"
        />
      )}
    </div>
  );
}
