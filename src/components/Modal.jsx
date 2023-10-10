export default function Modal({ src, handleClose }) {
  return (
    <div className="h-[100vh] w-[100vw] top-0 left-0 z-[9999] fixed flex items-center justify-center bg-black/50">
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-10 px-4 py-2 rounded border border-transparent bg-black/95 hover:opacity-95 hover:border-[color:var(--white-hover-color)]"
      >
        CLOSE
      </button>
      <iframe title="cvspanish" src={src} className="w-[60%] h-[95%]" />
    </div>
  );
}
