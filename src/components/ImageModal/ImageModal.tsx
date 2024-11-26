import Modal from "react-modal";
import { FaRegUserCircle } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import css from "./ImageModal.module.css";

interface ModalImageInfo {
  regular: string;
  alt: string | null;
  likes: number;
  description: string | null;
  user: string | null;
}

interface ImageModalProps {
  modalIsOpen: boolean;
  modalImageInfo: ModalImageInfo;
  closeModal: () => void;
}

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(11, 10, 10, 0.91)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  modalImageInfo,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <img src={modalImageInfo.regular} alt={modalImageInfo.alt || "Image"} />
      <ul className={css.info}>
        <li>
          <FaRegUserCircle />
          <p>{modalImageInfo.user || "Without username"}</p>
        </li>
        <li>
          <TbFileDescription />
          <p>{modalImageInfo.description || "Without description"}</p>
        </li>
        <li>
          <AiOutlineLike />
          <p>{modalImageInfo.likes}</p>
        </li>
      </ul>
    </Modal>
  );
};

export default ImageModal;
