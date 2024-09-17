import React, { useRef } from "react";
import { Label } from "../ui/label";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  uploadedImageUrl,
  setUploadedImageUrl,
}) => {
  const inputRef = useRef(null);

  return (
    <div className="w-full max-w-md mx-auto">
      <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
      <div>
        <input
          type="file"
          id="image-upload"
          className="hidden"
          ref={inputRef}
        />
      </div>
    </div>
  );
};

export default ProductImageUpload;
