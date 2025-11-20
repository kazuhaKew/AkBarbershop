import type { Route } from "./+types/gallery";
import { getGalleryItems } from "../db/db.server";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gallery - AkBarbershop Hair Cut Serves" },
    { name: "description", content: "Browse our gallery of haircuts, styles, and transformations at AkBarbershop." },
  ];
}

export async function loader() {
  const galleryItems = getGalleryItems();
  return { galleryItems };
}

export default function Gallery({ loaderData }: Route.ComponentProps) {
  const { galleryItems } = loaderData;
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter((item: any) => item.type === filter);

  // Sample gallery items for demonstration
  const sampleGallery = [
    { id: '1', type: 'photo', title: 'Classic Fade', category: 'Haircut' },
    { id: '2', type: 'photo', title: 'Modern Pompadour', category: 'Styling' },
    { id: '3', type: 'photo', title: 'Beard Sculpting', category: 'Grooming' },
    { id: '4', type: 'photo', title: 'Textured Crop', category: 'Haircut' },
    { id: '5', type: 'photo', title: 'Clean Shave', category: 'Grooming' },
    { id: '6', type: 'photo', title: 'Slick Back', category: 'Styling' },
    { id: '7', type: 'photo', title: 'Low Fade', category: 'Haircut' },
    { id: '8', type: 'photo', title: 'Full Beard Trim', category: 'Grooming' },
  ];

  return (
    <div className="bg-[#F5F1ED] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F1ED] mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-[#C9A87C] max-w-3xl mx-auto">
            Explore our collection of stunning transformations and signature styles.
            Every cut tells a story of craftsmanship and precision.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-white shadow-md sticky top-20 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-4">
            <FilterButton
              active={filter === 'all'}
              onClick={() => setFilter('all')}
              label="All"
            />
            <FilterButton
              active={filter === 'photo'}
              onClick={() => setFilter('photo')}
              label="Photos"
            />
            <FilterButton
              active={filter === 'video'}
              onClick={() => setFilter('video')}
              label="Videos"
            />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleGallery.map((item, index) => (
              <GalleryCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-[#5E4B43]">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F1ED] mb-6">
            Follow Us on Instagram
          </h2>
          <p className="text-xl text-[#C9A87C] mb-8">
            Stay updated with our latest work and special offers.
          </p>
          <a
            href="https://instagram.com/akbarbershop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gradient-to-r from-[#C9A87C] to-[#8B7468] text-[#2E1F1B] text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all"
          >
            📷 @akbarbershop
          </a>
        </div>
      </section>
    </div>
  );
}

function FilterButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
        active
          ? 'bg-gradient-to-r from-[#2E1F1B] to-[#5E4B43] text-[#F5F1ED] shadow-lg'
          : 'bg-[#F5F1ED] text-[#5E4B43] hover:bg-[#C9A87C]/20'
      }`}
    >
      {label}
    </button>
  );
}

function GalleryCard({ item, index }: { item: any; index: number }) {
  const colors = [
    'from-[#C9A87C] to-[#8B7468]',
    'from-[#8B7468] to-[#5E4B43]',
    'from-[#5E4B43] to-[#2E1F1B]',
  ];
  const gradient = colors[index % colors.length];

  return (
    <div className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 transform cursor-pointer">
      {/* Placeholder gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`}></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-[#C9A87C]">{item.category}</p>
        </div>
      </div>

      {/* Icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
        {item.type === 'photo' ? '📸' : '🎥'}
      </div>

      {/* Type badge */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
        {item.type === 'photo' ? 'Photo' : 'Video'}
      </div>
    </div>
  );
}
