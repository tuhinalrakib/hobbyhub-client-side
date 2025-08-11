import React, { use } from "react";
const promise = fetch("/featuredGroupsData.json").then(res=>res.json())

const FeaturedGroups = () => {
    const featuredGroups = use(promise)

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Groups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col"
            >
              <img
                src={group.imageUrl}
                alt={group.title}
                className="h-40 w-full object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{group.title}</h3>
              <p className="text-gray-600 mt-2">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGroups;
