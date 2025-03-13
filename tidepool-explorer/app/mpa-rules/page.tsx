'use client';
import React from 'react';

function MPARules() {
  return (
    <section className="pt-20 text-base leading-relaxed font-['Nunito_Sans'] text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          src="/mpa rules/Colorful Starfish.JPG"
          alt="Colorful tidepool background"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        <h1
  className="text-[32px] text-center font-bold px-4 text-white"
  style={{ fontFamily: "'Open Sans Condensed', sans-serif" }}
>

            Marine Protected <br /> Areas (MPAs)
          </h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 py-8 space-y-4">
        {[
          {
            question: 'What are marine protected areas (MPAs)?',
            answer:
              'MPAs are named, discrete geographic marine or estuarine areas designed to protect or conserve marine life and habitat.',
          },
          {
            question: 'What can I do in an MPA?',
            answer: 'Swimming, wading, boating, diving and surfing are allowed in MPAs.',
          },
          {
            question: 'How do I know where an MPA is?',
            answer: (
              <>
                Most MPA boundaries are designed to use major onshore landmarks and simple due north/south or east/west lines for easy recognition.
                You can go to this map to get a better view of these areas:{' '}
                <a
                  href="https://wildlife.ca.gov/Conservation/Marine/MPAs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-700"
                >
                  https://wildlife.ca.gov/Conservation/Marine/MPAs
                </a>
              </>
            ),
          },
          {
            question: 'How do MPAs affect existing fisheries regulations and closures?',
            answer:
              'MPAs are not intended to replace existing regulations. They are intended to allow for interactions between both fished and unfished species to occur in a more natural setting.',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-md shadow-sm"
            style={{
              backgroundColor: '#B6E8DF',
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            <h2 className="font-bold mb-2 border-b-2 border-black pb-1">
              {item.question}
            </h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div
        className="py-10 px-6 text-center"
        style={{ backgroundColor: '#75B1DC' }}
      >
        <h2
          className="text-xl font-bold mb-4"
          style={{
            color: '#1A516A',
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          Want to find out more?
        </h2>
        <a
          href="https://lagunaoceanfoundation.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-blue-100 text-[#1A516A] font-semibold px-4 py-2 rounded shadow-md transition"
        >
          Check out our Main Site!
        </a>
      </div>
    </section>
  );
}

export default MPARules;
