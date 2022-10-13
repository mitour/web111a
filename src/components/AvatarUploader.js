import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import styled from "@emotion/styled";

const uploader = Uploader({
  apiKey: "free",
});

const options = {
  editor: {
    images: {
      crop: true,
      cropRatio: 4 / 3,
      cropShape: "circ",
    },
  },
  maxFileCount: 1,
  maxFileSizeBytes: 1024 * 1024,
  mimeTypes: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
  multi: false,
};

const ButtonWrapper = styled.button`
  position: relative;
  border-radius: 50%;
  border: 3px solid transparent;
  background-color: transparent;
  overflow: hidden;
  padding: 0;
  margin-bottom: 1rem;
  transition: border 0.15s ease-in-out;
  &::after {
    content: "Edit";
    position: absolute;
    bottom: -2rem;
    right: 0;
    left: 0;
    background-color: #ffcf56;
    transition: all 0.15s ease-in-out;
  }
  &:hover {
    border-color: #ffcf56;
    &::after {
      bottom: 0;
    }
  }
`;

export const AvatarUploader = ({ defaultSrc, setSrc }) => (
  <UploadButton
    uploader={uploader}
    options={options}
    onComplete={(files) => {
      if (files.length !== 0) setSrc(files[0].fileUrl);
    }}
  >
    {({ onClick }) => (
      <ButtonWrapper onClick={onClick}>
        <img
          className="avatar-xl"
          src={defaultSrc}
          alt="avatar"
          crossOrigin="anonymous"
        />
      </ButtonWrapper>
    )}
  </UploadButton>
);
