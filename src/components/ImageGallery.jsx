import React from 'react';
import './ImageGallery.css';

const ImageItem = ({ className, src, alt }) => (
  <div className={`gallery-item ${className}`}>
    <div className="gallery-overlay" />
    <img src={src} alt={alt} className="gallery-img" />
    <div className="gallery-border" />
    
    {/* Four Corner Crosshairs */}
    <div className="plus-mark top-left">+</div>
    <div className="plus-mark top-right">+</div>
    <div className="plus-mark bottom-left">+</div>
    <div className="plus-mark bottom-right">+</div>
  </div>
);

const ImageGallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">
        Gallery & Highlights
      </h2>

      <div className="gallery-container">
        <div className="gallery-grid">
          
          <ImageItem 
            className="item-globe"
            src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1000&auto=format&fit=crop"
            alt="Glowing Globe"
          />

          <ImageItem 
            className="item-coding"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
            alt="Coding Workspace"
          />

          <ImageItem 
            className="item-vr"
            src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=1000&auto=format&fit=crop"
            alt="VR Experience"
          />

          <ImageItem 
            className="item-meeting"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
            alt="Team Meeting"
          />

          <ImageItem 
            className="item-audience"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
            alt="Audience"
          />

        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
