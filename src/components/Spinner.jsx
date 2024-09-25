import { useEffect, useState } from "react";

function Spinner() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1000); // Thời gian 1 giây (1000ms)

    return () => clearTimeout(timer); // Dọn dẹp sau khi component unmount
  }, []);

  return (
    <>
      {showSpinner && (
        <div
          id="spinner"
          className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-grow text-primary" role="status"></div>
        </div>
      )}
    </>
  );
}

export default Spinner;
