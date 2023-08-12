import { Button, Stack } from "@mui/material";
import { useState } from "react";

export const UploadImage = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    setImageUrl(null);
  };

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      {imageUrl && <img src={imageUrl} alt="Загруженное изображение" height="200" />}
      <label htmlFor="upload-image">
        <Button variant="contained" component="span">
          Загрузить
        </Button>
        {imageUrl && (
          <Button variant="contained" color="error" onClick={handleDeleteImage}>
            Удалить
          </Button>
        )}
        <input
          id="upload-image"
          hidden
          accept="image/*"
          type="file"
          onChange={handleFileUpload}
        />
      </label>
    </Stack>
  );
};
