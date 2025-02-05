import React from 'react';

const testimonials = [
  {
    content: "SNSV's expertise in tax planning has been invaluable for our business growth. Their team's dedication and professionalism are outstanding.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "Working with SNSV has transformed our financial operations. Their insights and strategic guidance have been game-changing.",
    author: "Michael Chen",
    position: "CFO",
    company: "Global Solutions Ltd.",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    content: "The level of personal attention and expertise we receive from SNSV is exceptional. They're not just advisors, they're partners in our success.",
    author: "Emma Thompson",
    position: "Director",
    company: "Innovation Corp",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-navy-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See what our clients say about working with SNSV
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="relative h-10">
                  <svg className="absolute h-8 w-8 text-navy-200 transform -translate-y-6 -translate-x-2" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
                <p className="mt-4 text-lg text-gray-600">{testimonial.content}</p>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;