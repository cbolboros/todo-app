export default function Container({ children }) {
  return <div className="w-screen h-screen absolute top-0 left-0">{{ ...children }}</div>;
}
