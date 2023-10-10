export default function Modal({ src, handleClose }) {
  return (
    <div className="h-[100vh] w-[100vw] top-0 left-0 z-[9999] fixed flex items-center justify-center bg-black/50">
      <input
        type="button"
        className="absolute w-full h-full"
        onKeyDown={(e) => {
          if (e.code === 'Escape') {
            handleClose();
          }
        }}
      />
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-10 px-4 py-2 rounded border border-transparent bg-black/95 hover:opacity-95 hover:border-[color:var(--white-hover-color)] z-[10100]"
      >
        CLOSE
      </button>
      <iframe title="cvspanish" src={src} className="w-[95%] md:w-[60%] md:min-w-[615px] h-[95%] z-[10000]" />
    </div>
  );
}
