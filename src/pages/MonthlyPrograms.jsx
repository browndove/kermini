import React, { useState } from "react";

const MonthlyPrograms = () => {
  const [images, setImages] = useState([]);
  const [imageName, setImageName] = useState("");
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImageFiles = Array.from(files);
    setImageFiles([...imageFiles, ...newImageFiles]);

    const newImages = newImageFiles.map((file) => ({
      name: imageName,
      url: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
  };

  const handleImageNameChange = (e) => {
    setImageName(e.target.value);
  };

  const handleImageUpload = () => {
    setImageName("");
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedFiles = [...imageFiles];
    updatedFiles.splice(index, 1);
    setImageFiles(updatedFiles);
  };

  return (
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl mb-4">Mobile Web Ghana Events</h1>
      <form>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
          multiple
        />
        <input
          type="text"
          value={imageName}
          onChange={handleImageNameChange}
          placeholder="Image Name"
          className="border border-gray-300 px-4 py-2 rounded-md mb-4"
        />
        <button
          type="button"
          onClick={handleImageUpload}
          className="bg-black text-white font-bold py-2 px-4 rounded  hover:bg-blue-500 hover:text-white"
        >
          Upload Image
        </button>
      </form>
      {images.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Uploaded Images</h2>
          <ul className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <li key={index} className="border border-gray-300 p-4 rounded-md">
                <img src={image.url} alt={image.name} className="h-32 w-full object-cover" />
                <p className="mt-2">{image.name}</p>
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="mt-2 bg-black hover:bg-red-500 hover:text-white text-white transition duration-700 ease-in-out font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MonthlyPrograms;
