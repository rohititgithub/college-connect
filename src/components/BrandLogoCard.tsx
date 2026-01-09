type BrandLogoCardProps = {
  image: string;
  position: number;
};

export default function BrandLogoCard({ image, position }: BrandLogoCardProps) {
  return (
    // Individual brand logo item positioned via CSS custom property
    <div
      style={{ "--position": position } as React.CSSProperties}
      className="item absolute left-full flex h-20 w-40 items-center justify-center rounded-3xl border border-black/25 bg-white p-4 transition-all lg:h-24 lg:w-48"
    >
      <img src={image} alt="Brand Logo" className="max-h-full max-w-full" />
    </div>
  );
}
