import { useContext, useRef } from "react";
import { StorageContext } from "../../api/storage";

export default function UploadImage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { uploadFile } = useContext(StorageContext);

  function uploadFileFromInput(): void {
    const file = inputRef.current?.files?.[0];
    if (file) {
      uploadFile(file);
    }
  }

  return (
    <>
      <input ref={inputRef} type="file" accept="image/*" />
      <button onClick={uploadFileFromInput}>upload</button>
    </>
  );
}
