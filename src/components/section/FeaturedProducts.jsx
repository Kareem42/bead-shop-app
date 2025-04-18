import React from "react";

const features = [
    { name: "Origin", description: "Sourced from local artisans across Africa, ensuring authenticity and cultural significance." },
    { name: "Material", description: "Crafted from natural materials such as glass, clay, wood, and recycled metals." },
    { name: "Design", description: "Each bead is hand-carved and painted, showcasing unique patterns and vibrant colors." },
    { name: "Cultural Significance", description: "Every bead tells a story, representing traditions, heritage, and craftsmanship." },
    { name: "Selection Process", description: "Carefully curated to ensure the highest quality and aesthetic appeal for your bracelet." },
    { name: "Sustainability", description: "Ethically sourced and environmentally friendly, supporting sustainable practices." },
];

export default function FeaturedProducts() {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">African Bead Selection</h2>
                    <p className="mt-4 text-gray-500">
                        Our African beads are carefully selected to create unique and meaningful bracelets. Each bead is a work of art, 
                        handcrafted by skilled artisans and infused with cultural heritage. From vibrant colors to intricate patterns, 
                        these beads are a celebration of African traditions and craftsmanship.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        alt="A collection of vibrant African beads in various colors and patterns."
                        src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="Close-up of hand-carved African beads with intricate designs."
                        src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="A bracelet made with colorful African beads, showcasing cultural craftsmanship."
                        src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="African beads arranged in a pattern, highlighting their vibrant colors and unique designs."
                        src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    );
}
