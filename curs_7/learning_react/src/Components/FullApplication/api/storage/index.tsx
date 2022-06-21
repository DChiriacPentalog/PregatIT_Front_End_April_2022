import React, { createContext, useState } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "..";

export const StorageContext = createContext({
  uploading: false,
  uploadFile: (file: File) => {},
});

export default function withStorage(Component: React.FC): React.FC {
  const storage = getStorage(app);

  return function StorageStore() {
    const [uploading, setUploading] = useState(false);

    function uploadFile(file: File): void {
      setUploading(true);

      const storageRef = ref(storage, "forlder-x/file-" + Date.now());
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          setUploading(false);
        })
        .catch((error) => alert(error));
    }

    return (
      <StorageContext.Provider value={{ uploadFile, uploading }}>
        <Component />
      </StorageContext.Provider>
    );
  };
}
