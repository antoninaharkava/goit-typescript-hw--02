import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { requestPhotoByKey } from "./Fetch-api/api";
import css from "./App.module.css";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

interface ImageInfo {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    username: string;
  };
  likes: number;
}

interface ModalImageInfo {
  regular: string;
  alt: string | null;
  likes: number;
  description: string | null;
  user: string | null;
}

const App = () => {
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [keyWord, setKeyword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalImageInfo, setModalImageInfo] = useState<ModalImageInfo | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const onOpenModal = (imgInfo: ModalImageInfo) => {
    setModalImageInfo(imgInfo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSearch = (userWord: string) => {
    setKeyword(userWord);
    setError(false);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!keyWord) return;

    const request = async () => {
      try {
        setLoading(true);
        const response = await requestPhotoByKey(keyWord, page);

        setTotalPages(response.data.total_pages);

        setImages((prevImages) => {
          if (page === 1) {
            return response.data.results;
          }

          return [...prevImages, ...response.data.results];
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    request();
  }, [keyWord, page]);

  return (
    <div className={css.appWrapper}>
      <SearchBar onSearch={onSearch} />
      {(images.length > 0 && (
        <ImageGallery onOpenModal={onOpenModal} images={images} />
      )) ||
        (error && <ErrorMessage />)}
      {loading && <Loader />}
      {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <Toaster />
      {modalImageInfo && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          modalImageInfo={modalImageInfo}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;


