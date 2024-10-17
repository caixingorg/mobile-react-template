import React, { useState, useRef } from 'react';
import { Button, ImageUploader, Toast } from 'antd-mobile';
import { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';

const FileUpload: React.FC = () => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([]);
  const maxCount = 5;

  const mockUpload = async (file: File): Promise<ImageUploadItem> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          url: URL.createObjectURL(file),
        })
      }, 1000)
    })
  }

  return (
    <div>
      <h3>File Upload</h3>
      <ImageUploader
        value={fileList}
        onChange={setFileList}
        upload={mockUpload}
        multiple
        maxCount={maxCount}
        onCountExceed={(exceed) => {
          Toast.show(`最多选择 ${maxCount} 张图片，你多选了 ${exceed} 张`);
        }}
      />
      <p>Uploaded {fileList.length} of {maxCount} images</p>
    </div>
  );
};

export default FileUpload;