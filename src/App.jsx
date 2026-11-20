import ImageCard from "./components/ImageCard";
import { galleryItems } from "./data/galleryData";
import "./App.css";

function App() {
  return (
    <>
      <header className="gallery-header">
        <h1>Image Gallery</h1>
        <p>Responsive card grid rendered dynamically from data array</p>
      </header>

      <main className="gallery-container">
        <section className="gallery-grid" aria-label="Image gallery">
          {galleryItems.map((item) => (
            <ImageCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;